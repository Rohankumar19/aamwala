"use client"

import { useState } from "react"
import { useCart } from "@/hooks/useCart"
import { useRazorpay } from "@/hooks/useRazorpay"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'razorpay'>('upi')
  const [utr, setUtr] = useState('')
  const { items, total } = useCart()
  const { initPayment } = useRazorpay()
  const router = useRouter()
  const deliveryFee = 700
  
  const handleProceed = () => {
    if (step === 1) setStep(2)
  }

  const handlePlaceOrder = () => {
    if (items.length === 0) return alert("Your cart is empty")
    const payableAmount = total + deliveryFee * 100

    if (paymentMethod === 'upi') {
      if (!utr.trim()) {
        alert("⚠️ Please enter your UTR / Transaction ID after paying")
        return
      }
      alert("Thanks! We will verify and confirm your order shortly.")
      // In a real app, save the order with UTR to DB here
      // For now, redirect to home or a success page
      router.push("/")
    } else {
      // Use actual user details from form if available, hardcoded for mock
      initPayment("order_mock_" + Date.now(), payableAmount, { name: "SNS Jaivik Farm Customer", email: "hello@snsjaivik.in", phone: "9999900001" })
    }
  }

  return (
    <div className="max-w-[800px] mx-auto px-8 py-12">
      <h2 className="font-serif text-3xl mb-8">Checkout</h2>
      
      <div className="flex gap-0 mb-8 border-b border-border">
        <div className={`flex-1 text-center py-3 text-sm font-medium border-b-2 ${step >= 1 ? 'border-green text-green' : 'border-transparent text-muted'}`}>1. Address</div>
        <div className={`flex-1 text-center py-3 text-sm font-medium border-b-2 ${step >= 2 ? 'border-green text-green' : 'border-transparent text-muted'}`}>2. Payment</div>
        <div className={`flex-1 text-center py-3 text-sm font-medium border-b-2 ${step === 3 ? 'border-green text-green' : 'border-transparent text-muted'}`}>3. Confirm</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8">
        <div>
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-border p-6 mb-4">
              <h3 className="font-serif text-lg mb-6">🏠 Delivery Address</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-dark uppercase tracking-wide">Full Name</label>
                  <input type="text" placeholder="Enter your name" className="border border-border rounded-lg px-3 py-2 text-sm focus:border-green outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-dark uppercase tracking-wide">Phone</label>
                  <input type="text" placeholder="+91 99999 00001" className="border border-border rounded-lg px-3 py-2 text-sm focus:border-green outline-none" />
                </div>
              </div>
              
              <div className="flex flex-col gap-1 mb-4">
                <label className="text-xs font-semibold text-dark uppercase tracking-wide">Address Line</label>
                <input type="text" placeholder="House no, Street, Area" className="border border-border rounded-lg px-3 py-2 text-sm focus:border-green outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-dark uppercase tracking-wide">City</label>
                  <input type="text" placeholder="Mumbai" className="border border-border rounded-lg px-3 py-2 text-sm focus:border-green outline-none" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-dark uppercase tracking-wide">Pincode</label>
                  <input type="text" placeholder="400001" className="border border-border rounded-lg px-3 py-2 text-sm focus:border-green outline-none" />
                </div>
              </div>

              <button onClick={handleProceed} className="w-full bg-green text-white rounded-full py-3 font-semibold hover:bg-green-2 transition-colors">
                Continue to Payment →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl border border-border p-6 mb-4">
              <h3 className="font-serif text-lg mb-6">💳 Payment Method</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div 
                  onClick={() => setPaymentMethod('upi')}
                  className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-colors ${paymentMethod === 'upi' ? 'border-green bg-green-3 text-green' : 'border-border text-muted hover:border-green hover:text-green'}`}
                >
                  <strong className="block text-2xl mb-1">📱</strong>
                  UPI<br/>
                  <span className="text-xs opacity-80">GPay, PhonePe, Paytm</span>
                </div>
                <div 
                  onClick={() => setPaymentMethod('razorpay')}
                  className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-colors ${paymentMethod === 'razorpay' ? 'border-green bg-green-3 text-green' : 'border-border text-muted hover:border-green hover:text-green'}`}
                >
                  <strong className="block text-2xl mb-1">💳</strong>
                  Cards & Net Banking<br/>
                  <span className="text-xs opacity-80">Razorpay</span>
                </div>
              </div>
              
              <div className="bg-green-3 rounded-xl p-4 mb-6 text-sm text-green">
                🔒 Payments secured by <strong>Razorpay</strong> — PCI DSS compliant. Your card details are never stored on our servers.
              </div>

              {paymentMethod === 'upi' && (
                <div className="mb-6">
                  <div className="bg-gradient-to-br from-green-3 to-green-100 rounded-2xl p-6 border-2 border-dashed border-green/30 text-center mb-5">
                    <div className="text-4xl mb-2">📲</div>
                    <div className="font-serif text-lg font-bold text-green mb-1">Scan QR Code to Pay</div>
                    <div className="text-xs text-muted mb-4">Use any UPI app — GPay, PhonePe, Paytm, BHIM</div>
                    <img 
                      src="/upi_qr.jpeg" 
                      alt="SNS Jaivik Farm UPI QR Code" 
                      className="w-[160px] h-[160px] object-contain rounded-xl border-4 border-white shadow-md mx-auto mb-3"
                    />
                    <div className="bg-white border border-border rounded-lg px-4 py-2 text-sm font-bold text-green inline-block">
                      UPI: bihartimeswebsite@okicici
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1 mb-4">
                    <label className="text-xs font-semibold text-dark uppercase tracking-wide">Enter UTR / Transaction ID</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 123456789012 (from your UPI app)" 
                      value={utr}
                      onChange={(e) => setUtr(e.target.value)}
                      className="border-2 border-border rounded-xl px-4 py-3 text-sm focus:border-green outline-none transition-colors w-full font-sans" 
                    />
                    <div className="text-[0.73rem] text-muted mt-1">💡 Find the UTR number in your UPI app under transaction history</div>
                  </div>
                  
                  <div className="bg-green-3 rounded-xl px-4 py-3 text-[0.8rem] text-green mb-5">
                    ✅ After paying, enter your UTR number above and click Confirm Order. We will verify & confirm within 30 minutes.
                  </div>
                </div>
              )}

              <button onClick={handlePlaceOrder} className="w-full bg-green text-white rounded-full py-3 font-semibold hover:bg-green-2 transition-colors shadow-sm">
                {paymentMethod === 'upi' ? '✅ I Have Paid — Confirm Order' : '🔒 Pay & Place Order'}
              </button>
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
            <h3 className="font-serif text-lg mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-4">
              {items.map(item => (
                <div key={item.variantId} className="flex justify-between text-sm">
                  <span className="text-muted">{item.quantity}x {item.name} ({item.weight}kg)</span>
                  <span className="font-medium text-dark">₹{(item.price * item.quantity) / 100}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 mt-4">
              <div className="flex justify-between text-sm text-muted mb-2">
                <span>Subtotal</span>
                <span>₹{total / 100}</span>
              </div>
              <div className="flex justify-between text-sm text-muted mb-2">
                <span>Shipping</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-dark pt-2 mt-2 border-t border-border">
                <span>Total</span>
                <span>₹{(total / 100) + deliveryFee}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
