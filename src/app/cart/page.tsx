"use client"

import Link from "next/link"
import { useCart } from "@/hooks/useCart"
import { Minus, Plus, Trash2 } from "lucide-react"

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart()
  const deliveryFee = 700

  if (items.length === 0) {
    return (
      <div className="max-w-[900px] mx-auto px-4 py-16 text-center sm:px-8 sm:py-20">
        <div className="text-6xl mb-4 opacity-30">🛒</div>
        <h3 className="font-serif text-2xl mb-2">Your Cart is Empty</h3>
        <p className="text-muted mb-6">Looks like you haven&apos;t added any mangoes yet.</p>
        <Link href="/shop" className="bg-green text-white rounded-full px-8 py-3 text-sm font-semibold transition-colors hover:bg-green-2">
          Browse Mangoes
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-[900px] mx-auto px-4 py-8 sm:px-8 sm:py-12">
      <Link href="/shop" className="text-muted hover:text-green text-sm font-medium inline-flex items-center gap-2 mb-6 transition-colors">
        ← Continue Shopping
      </Link>
      
      <h2 className="font-serif text-3xl mb-6">Your Cart</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
        <div>
          {items.map(item => (
            <div key={`${item.productId}-${item.variantId}`} className="flex flex-col gap-4 p-4 bg-white rounded-2xl border border-border mb-4 sm:flex-row sm:items-center sm:p-5">
              <div className="bg-yellow-3 rounded-xl w-full h-24 flex items-center justify-center text-3xl shrink-0 sm:h-20 sm:w-20">
                🥭
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif text-lg font-bold">{item.name}</h4>
                <p className="text-sm text-muted mb-1">{item.weight} kg Box</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center border border-border rounded-full overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.productId, item.variantId, Math.max(1, item.quantity - 1))}
                      className="px-3 py-1 hover:bg-green-3 text-dark transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-2 text-sm font-semibold w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-green-3 text-dark transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 sm:block sm:text-right">
                <div className="font-bold text-green text-lg mb-2">₹{(item.price * item.quantity) / 100}</div>
                <button 
                  onClick={() => removeItem(item.productId, item.variantId)}
                  className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 justify-end sm:ml-auto"
                >
                  <Trash2 size={14} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="bg-white rounded-2xl border border-border p-5 sm:p-6 lg:sticky lg:top-24">
            <h3 className="font-serif text-xl mb-6">Order Summary</h3>
            
            <div className="flex flex-col mb-4 gap-2 sm:flex-row">
              <input type="text" placeholder="Promo code" className="flex-1 border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-green" />
              <button className="bg-green-3 text-green rounded-lg px-4 py-2 text-sm font-semibold hover:bg-green-2 hover:text-white transition-colors">Apply</button>
            </div>

            <div className="flex justify-between text-sm text-muted mb-3">
              <span>Subtotal</span>
              <span>₹{total / 100}</span>
            </div>
            <div className="flex justify-between text-sm text-muted mb-3">
              <span>Shipping</span>
              <span>₹{deliveryFee}</span>
            </div>
            
            <div className="flex justify-between text-base font-bold text-dark border-t border-border pt-4 mt-2">
              <span>Total</span>
              <span>₹{(total / 100) + deliveryFee}</span>
            </div>

            <Link href="/checkout" className="w-full bg-green text-white rounded-full py-3 text-base font-semibold mt-6 flex justify-center hover:bg-green-2 transition-colors">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
