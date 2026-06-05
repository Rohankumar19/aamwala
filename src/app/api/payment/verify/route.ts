import crypto from "crypto"
import { NextResponse } from "next/server"
import { razorpay } from "@/lib/razorpay"
import { prisma } from "@/lib/prisma"

type RazorpayPaymentDetails = {
  id: string
  amount: number
  currency: string
  status: string
  method?: string
  email?: string
  contact?: string
  order_id?: string
  description?: string
  vpa?: string
  bank?: string
  wallet?: string
}

export async function POST(req: Request) {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature, orderId } = await req.json()

    if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    if (!process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json({ error: "Razorpay secret is missing. Add it to .env.local and restart the dev server." }, { status: 500 })
    }

    const body = razorpayOrderId + "|" + razorpayPaymentId
    const expectedSig = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "test")
      .update(body)
      .digest("hex")

    if (expectedSig !== razorpaySignature) {
      return NextResponse.json({ error: "Invalid Razorpay signature" }, { status: 400 })
    }

    const payment = await razorpay.payments.fetch(
      razorpayPaymentId
    ) as RazorpayPaymentDetails

    const payer = {
      paymentId: payment.id,
      razorpayOrderId: payment.order_id || razorpayOrderId,
      orderId,
      amount: payment.amount,
      currency: payment.currency,
      status: payment.status,
      method: payment.method,
      email: payment.email,
      contact: payment.contact,
      upiId: payment.vpa,
      bank: payment.bank,
      wallet: payment.wallet,
    }

    await prisma.guestOrder.update({
      where: { razorpayOrderId },
      data: {
        razorpayPaymentId,
        razorpaySignature,
        status: payment.status === "captured" ? "PAID" : "PAYMENT_RECEIVED",
        paymentStatus: payment.status,
        paymentMethod: payment.method,
        customerEmail: payment.email || undefined,
        paidAt: payment.status === "captured" ? new Date() : undefined,
      },
    })

    console.info("Verified Razorpay payment", payer)

    return NextResponse.json({ success: true, orderId, payer })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 })
  }
}
