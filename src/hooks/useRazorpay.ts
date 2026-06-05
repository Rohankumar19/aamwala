import { useRouter } from "next/navigation"

// ─── Razorpay Window Types ──────────────────────────────────────────
interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  image: string
  order_id: string
  prefill: { name: string; email: string; contact: string }
  theme: { color: string }
  handler: (response: RazorpaySuccessResponse) => void
  modal: { ondismiss: () => void }
}

interface RazorpaySuccessResponse {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
}

interface RazorpayPaymentFailedResponse {
  error: {
    code: string
    description: string
    source: string
    step: string
    reason: string
  }
}

interface RazorpayOrderData {
  address: {
    fullName: string
    phone: string
    addressLine: string
    city: string
    state: string
    pincode: string
  }
  items: Array<{
    productId: string
    variantId: string
    name: string
    price: number
    weight: number
    quantity: number
    imageUrl?: string
  }>
  subtotal: number
  shipping: number
}

interface RazorpayInstance {
  open: () => void
  on: (event: string, handler: (response: RazorpayPaymentFailedResponse) => void) => void
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance
  }
}

export function useRazorpay() {
  const router = useRouter()

  const initPayment = async (
    orderId: string,
    amount: number,
    user: { name: string, email: string, phone?: string },
    orderData?: RazorpayOrderData
  ) => {
    try {
      // 1. Create Razorpay order on backend
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, amount, ...orderData })
      })
      const order = await res.json()

      if (!res.ok) {
        alert(order.error || "Could not create Razorpay order")
        return
      }

      const { razorpayOrderId, amount: razorpayAmount, currency, keyId } = order

      // 2. Load Razorpay SDK dynamically
      const loadScript = (src: string) => {
        return new Promise((resolve) => {
          const script = document.createElement("script")
          script.src = src
          script.onload = () => resolve(true)
          script.onerror = () => resolve(false)
          document.body.appendChild(script)
        })
      }
      const loaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
      if (!loaded) {
        alert("Razorpay SDK failed to load")
        return
      }

      // 3. Open payment modal
      const options: RazorpayOptions = {
        key: keyId,
        amount: razorpayAmount,
        currency,
        name: "SNS Jaivik Farm",
        description: "Fresh Mango Order",
        image: "/brand/logo.jpeg",
        order_id: razorpayOrderId,
        prefill: { 
          name: user.name, 
          email: user.email, 
          contact: user.phone || "" 
        },
        theme: { color: "#1a5c2a" }, // Farm green
        handler: async (response: RazorpaySuccessResponse) => {
          // 4. Verify on backend
          const verify = await fetch("/api/payment/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              orderId
            })
          })
          if (verify.ok) {
            router.push(`/order/confirm?id=${orderId}`)
          } else {
            const verification = await verify.json()
            alert(verification.error || "Payment verification failed")
          }
        },
        modal: {
          ondismiss: () => { 
            alert("Payment was cancelled. Please try again.") 
          }
        }
      }
      const rzp = new window.Razorpay(options)
      
      rzp.on("payment.failed", (response: RazorpayPaymentFailedResponse) => {
        alert(`Payment failed: ${response.error.description}`)
      })

      rzp.open()
    } catch (err: unknown) {
      console.error("Payment initialization failed", err)
      alert(err instanceof Error ? err.message : "Payment initialization failed")
    }
  }

  return { initPayment }
}
