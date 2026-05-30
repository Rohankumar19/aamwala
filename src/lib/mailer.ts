import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "test")

export async function sendOrderConfirmation(order: Record<string, unknown>) {
  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "orders@snsjavikfarm.in",
      to: (order.user as Record<string, string>).email,
      subject: `Order Confirmed — ${order.id} | SNS Javik Farm`,
      html: `<p>Hi ${(order.user as Record<string, string>).name}, your order ${order.id} is confirmed.</p>`
    })
    console.log("Email sent to", (order.user as Record<string, string>).email)
  } catch (error) {
    console.error("Failed to send email", error)
  }
}
