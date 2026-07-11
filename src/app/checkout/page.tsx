"use client"

import { useState, useCallback } from "react"
import { useCart } from "@/hooks/useCart"
import { useRazorpay } from "@/hooks/useRazorpay"
import {
  type ShippingAddress,
  type ShippingAddressErrors,
  EMPTY_ADDRESS,
  shippingAddressSchema,
  INDIAN_STATES,
} from "@/types/checkout"

export default function CheckoutPage() {
  const [step, setStep] = useState<1 | 2>(1)
  const [address, setAddress] = useState<ShippingAddress>(EMPTY_ADDRESS)
  const [errors, setErrors] = useState<ShippingAddressErrors>({})
  const { items, total } = useCart()
  const { initPayment } = useRazorpay()
  const deliveryFee = 700 // in rupees

  // ─── Address helpers ──────────────────────────────────────────────
  const updateField = useCallback(
    <K extends keyof ShippingAddress>(field: K, value: ShippingAddress[K]) => {
      setAddress((prev) => ({ ...prev, [field]: value }))
      // Clear the error for this field when user starts typing
      setErrors((prev) => {
        if (!prev[field]) return prev
        const next = { ...prev }
        delete next[field]
        return next
      })
    },
    []
  )

  const validateAddress = useCallback((): boolean => {
    const result = shippingAddressSchema.safeParse(address)
    if (result.success) {
      setErrors({})
      return true
    }
    const fieldErrors: ShippingAddressErrors = {}
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof ShippingAddress
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message
      }
    }
    setErrors(fieldErrors)
    return false
  }, [address])

  // ─── Step handlers ────────────────────────────────────────────────
  const handleProceed = () => {
    if (step === 1) {
      if (!validateAddress()) return
      setStep(2)
    }
  }

  const handlePlaceOrder = () => {
    if (items.length === 0) return alert("Your cart is empty")

    // amount in paise — total is already paise, deliveryFee is rupees
    const payableAmount = Math.round(total + deliveryFee * 100)

    // Pass real user details from the address form
    initPayment("order_" + Date.now(), payableAmount, {
      name: address.fullName,
      email: "", // No email field in address form yet
      phone: address.phone,
    }, {
      address,
      items,
      subtotal: total,
      shipping: deliveryFee * 100,
    })
  }

  // ─── Render helpers ───────────────────────────────────────────────
  const inputClass = (field: keyof ShippingAddress) =>
    `border rounded-lg px-3 py-2 text-sm outline-none transition-colors ${
      errors[field]
        ? "border-red-400 focus:border-red-500 bg-red-50/50"
        : "border-border focus:border-green"
    }`

  return (
    <div className="max-w-[800px] mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <h2 className="font-serif text-3xl mb-6 sm:mb-8">Checkout</h2>

      <div className="flex gap-0 mb-8 border-b border-border">
        <div className={`flex-1 text-center py-3 text-xs font-medium border-b-2 sm:text-sm ${step >= 1 ? "border-green text-green" : "border-transparent text-muted"}`}>1. Address</div>
        <div className={`flex-1 text-center py-3 text-xs font-medium border-b-2 sm:text-sm ${step >= 2 ? "border-green text-green" : "border-transparent text-muted"}`}>2. Payment</div>
        <div className="flex-1 text-center py-3 text-xs font-medium border-b-2 border-transparent text-muted sm:text-sm">3. Confirm</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8">
        <div>
          {step === 1 && (
            <div className="bg-white rounded-2xl border border-border p-4 mb-4 sm:p-6">
              <h3 className="font-serif text-lg mb-6">🏠 Delivery Address</h3>

              {/* Row 1: Full Name + Phone */}
              <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-dark uppercase tracking-wide">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={address.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className={inputClass("fullName")}
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red-500">{errors.fullName}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-dark uppercase tracking-wide">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="9999900001"
                    value={address.phone}
                    onChange={(e) => updateField("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                    className={inputClass("phone")}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-500">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Address Line */}
              <div className="flex flex-col gap-1 mb-4">
                <label className="text-xs font-semibold text-dark uppercase tracking-wide">
                  Address Line <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="House no, Street, Area"
                  value={address.addressLine}
                  onChange={(e) => updateField("addressLine", e.target.value)}
                  className={inputClass("addressLine")}
                />
                {errors.addressLine && (
                  <span className="text-xs text-red-500">{errors.addressLine}</span>
                )}
              </div>

              {/* Row 3: City + State + Pincode */}
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-dark uppercase tracking-wide">
                    City <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Mumbai"
                    value={address.city}
                    onChange={(e) => updateField("city", e.target.value)}
                    className={inputClass("city")}
                  />
                  {errors.city && (
                    <span className="text-xs text-red-500">{errors.city}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-dark uppercase tracking-wide">
                    State <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={address.state}
                    onChange={(e) => updateField("state", e.target.value)}
                    className={inputClass("state")}
                  >
                    <option value="">Select State</option>
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.state && (
                    <span className="text-xs text-red-500">{errors.state}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-dark uppercase tracking-wide">
                    Pincode <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="400001"
                    value={address.pincode}
                    onChange={(e) => updateField("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
                    className={inputClass("pincode")}
                  />
                  {errors.pincode && (
                    <span className="text-xs text-red-500">{errors.pincode}</span>
                  )}
                </div>
              </div>

              <button onClick={handleProceed} className="w-full bg-green text-white rounded-full py-3 font-semibold hover:bg-green-2 transition-colors">
                Continue to Payment →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-2xl border border-border p-4 mb-4 sm:p-6">
              <h3 className="font-serif text-lg mb-4">💳 Payment Method</h3>

              <div className="bg-green-3 border border-green/10 rounded-2xl p-4 mb-6 sm:p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-green text-white rounded-full p-1.5 text-xs">🔒</div>
                  <div>
                    <h4 className="text-sm font-semibold text-green">Secure Payment via Razorpay</h4>
                    <p className="text-xs text-green/80">PCI-DSS Compliant • Encrypted Connection</p>
                  </div>
                </div>
                <p className="text-xs text-green/90 leading-relaxed">
                  Pay securely using your preferred method. Razorpay supports all major credit/debit cards, Net Banking, UPI apps (GPay, PhonePe, Paytm), and popular wallets.
                </p>
              </div>

              <button onClick={handlePlaceOrder} className="w-full bg-green text-white rounded-full py-3.5 font-semibold hover:bg-green-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99]">
                🔒 Pay & Place Order
              </button>
            </div>
          )}
        </div>

        <div>
          <div className="bg-white rounded-2xl border border-border p-5 sm:p-6 md:sticky md:top-24">
            <h3 className="font-serif text-lg mb-4">Order Summary</h3>

            <div className="space-y-3 mb-4">
              {items.map(item => (
                <div key={item.variantId} className="flex justify-between text-sm">
                  <span className="text-muted min-w-0 pr-3">{item.quantity}x {item.name} ({item.label || item.weight + "kg"})</span>
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
