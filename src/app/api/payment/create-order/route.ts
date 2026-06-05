import { razorpay } from "@/lib/razorpay"
import { createOrderRequestSchema } from "@/types/checkout"
import { prisma } from "@/lib/prisma"
// import { getServerSession } from "next-auth"
// import { authOptions } from "@/lib/auth"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    // const session = await getServerSession(authOptions)
    // Uncomment for actual auth restriction
    // if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { error: "Razorpay keys are missing. Add them to .env.local and restart the dev server." },
        { status: 500 }
      )
    }

    const body = await req.json()

    // Validate request body with Zod
    const parsed = createOrderRequestSchema.safeParse({
      ...body,
      // Ensure amount is an integer (safety net)
      amount: typeof body.amount === "number" ? Math.round(body.amount) : body.amount,
    })

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Invalid request body"
      return NextResponse.json({ error: firstError }, { status: 400 })
    }

    const { orderId, amount, address, items, subtotal, shipping } = parsed.data

    if (!address || !items?.length) {
      return NextResponse.json(
        { error: "Customer address and cart items are required to save the order." },
        { status: 400 }
      )
    }

    const rzpOrder = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: orderId,
      notes: {
        orderId,
        source: "snsjavikfarm-web",
        customer_name: address.fullName,
        phone: address.phone,
        city: address.city,
        state: address.state,
        pincode: address.pincode,
        address: address.addressLine.slice(0, 250),
      }
    })

    await prisma.guestOrder.create({
      data: {
        orderId,
        razorpayOrderId: rzpOrder.id,
        customerName: address.fullName,
        customerPhone: address.phone,
        customerEmail: null,
        addressLine: address.addressLine,
        city: address.city,
        state: address.state,
        pincode: address.pincode,
        items,
        subtotal: subtotal ?? amount,
        shipping: shipping ?? 0,
        total: amount,
        currency: "INR",
      }
    })

    return NextResponse.json({
      razorpayOrderId: rzpOrder.id,
      amount,
      currency: "INR",
      keyId: process.env.RAZORPAY_KEY_ID
    })
  } catch (err: unknown) {
    // Log the full error for server-side debugging
    console.error("❌ Razorpay create-order error:", err)

    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }

    // Razorpay SDK can throw non-Error objects (e.g. Axios error responses)
    const message =
      typeof err === "object" && err !== null && "error" in err
        ? JSON.stringify((err as Record<string, unknown>).error)
        : "An unknown error occurred while creating Razorpay order"

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
