"use client"

import { useState } from "react"
import { useCart } from "@/hooks/useCart"
import { useRazorpay } from "@/hooks/useRazorpay"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const { items, total } = useCart()
  const { initPayment } = useRazorpay()
  const deliveryFee = 700
  
  const handleProceed = () => {
    if (step === 1) setStep(2)
  }

  const handlePlaceOrder = () => {
    if (items.length === 0) return alert("Your cart is empty")
    const payableAmount = total + deliveryFee * 100

    // Use actual user details from form if available, hardcoded for mock
    initPayment("order_mock_" + Date.now(), payableAmount, { name: "SNS Javik Farm Customer", email: "samarthafarm@gmail.com", phone: "9334742670" })
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
                  <input type="text" placeholder="+91 93347 42670" className="border border-border rounded-lg px-3 py-2 text-sm focus:border-green outline-none" />
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
                <div className="border-2 border-green bg-green-3 text-green rounded-xl p-4 text-center cursor-pointer transition-colors">
                  <strong className="block text-2xl mb-1">📱</strong>
                  UPI<br/>
                  <span className="text-xs text-green/80">GPay, PhonePe, Paytm</span>
                </div>
                <div className="border-2 border-border rounded-xl p-4 text-center cursor-pointer hover:border-green hover:text-green transition-colors text-muted">
                  <strong className="block text-2xl mb-1">💳</strong>
                  Cards<br/>
                  <span className="text-xs">Debit & Credit</span>
                </div>
              </div>
              
              <div className="bg-green-3 rounded-xl p-4 mb-6 text-sm text-green">
                🔒 Payments secured by <strong>Razorpay</strong> — PCI DSS compliant. Your card details are never stored on our servers.
              </div>

              <button onClick={handlePlaceOrder} className="w-full bg-green text-white rounded-full py-3 font-semibold hover:bg-green-2 transition-colors">
                🔒 Pay & Place Order
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
