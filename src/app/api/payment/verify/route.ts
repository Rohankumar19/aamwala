import crypto from "crypto"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { razorpayOrderId, razorpayPaymentId, razorpaySignature, orderId } = await req.json()

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

    // Here we would normally update the DB: order status to PAID.

    return NextResponse.json({ success: true, orderId })
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 })
  }
}
