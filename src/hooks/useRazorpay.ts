import { useRouter } from "next/navigation"

export function useRazorpay() {
  const router = useRouter()

  const initPayment = async (orderId: string, amount: number, user: { name: string, email: string, phone?: string }) => {
    try {
      // 1. Create Razorpay order on backend
      const res = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, amount })
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
      const options = {
        key: keyId,
        amount: razorpayAmount,
        currency,
        name: "SNS Javik Farm",
        description: "Fresh Mango Order",
        image: "/brand/logo.jpeg",
        order_id: razorpayOrderId,
        prefill: { 
          name: user.name, 
          email: user.email, 
          contact: user.phone || "" 
        },
        theme: { color: "#1a5c2a" }, // Farm green
        handler: async (response: Record<string, string>) => {
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
            console.log("Payment cancelled") 
          }
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options)
      rzp.open()
    } catch (err: unknown) {
      console.error("Payment initialization failed", err)
      alert(err instanceof Error ? err.message : "Payment initialization failed")
    }
  }

  return { initPayment }
}
