import { razorpay } from "@/lib/razorpay"
// import { prisma } from "@/lib/prisma"
// import { getServerSession } from "next-auth"
// import { authOptions } from "@/lib/auth"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    // const session = await getServerSession(authOptions)
    // Uncomment for actual auth restriction
    // if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const { orderId, amount } = await req.json()

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: "Razorpay keys are missing. Add them to .env.local and restart the dev server." }, { status: 500 })
    }

    if (!orderId || !Number.isInteger(amount) || amount < 100) {
      return NextResponse.json({ error: "Invalid order amount" }, { status: 400 })
    }

    const rzpOrder = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: orderId,
      notes: { orderId, source: "snsjavikfarm-web" }
    })

    return NextResponse.json({
      razorpayOrderId: rzpOrder.id,
      amount,
      currency: "INR",
      keyId: process.env.RAZORPAY_KEY_ID || "test"
    })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 })
  }
}
