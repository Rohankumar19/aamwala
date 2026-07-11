"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/hooks/useCart"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { products } from "@/lib/data"
import Image from "next/image"

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug) || products[0]
  const { addItem } = useCart()

  const [activeVariant, setActiveVariant] = useState(product.priceVariants[0])
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    if (product.status === "SOLD_OUT") return;

    addItem({
      productId: product.id,
      variantId: activeVariant.id,
      name: product.name,
      price: activeVariant.price,
      weight: activeVariant.weight,
      quantity: quantity
    })
    // Note: Max limit notification is handled in the store, we don't alert here if it fails
    // But we can show success if we wanted. Since store uses alert for error, 
    // it's tricky to know if it succeeded here without returning a boolean from addItem.
    // Assuming adding succeeds, the store will update. We'll leave the alert as is.
    alert("Added to cart!")
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="flex flex-wrap gap-2 items-center text-sm text-muted mb-6 sm:mb-8">
        <Link href="/" className="hover:text-green">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-green">Shop</Link>
        <span>/</span>
        <span className="text-green font-medium break-words">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 bg-white rounded-2xl sm:rounded-3xl border border-border p-4 sm:p-6 lg:p-8 mb-10 sm:mb-12">
        <div className="bg-yellow-3 rounded-2xl aspect-square flex items-center justify-center text-[7rem] sm:text-[12rem] relative overflow-hidden">
          {product.imageUrl ? (
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
          ) : (
            "🥭"
          )}
        </div>

        <div>
          <div className="text-sm text-muted flex items-center gap-2 mb-4">
            📍 {product.origin}
          </div>
          <h1 className="font-serif text-3xl leading-tight mb-2 text-dark sm:text-4xl">{product.name}</h1>
          <p className="text-muted leading-relaxed mb-6">{product.tasteNote}</p>

          <div className="text-2xl font-bold text-green mb-6 sm:text-3xl sm:mb-8">
            ₹{activeVariant.price / 100} 
            <span className="block text-sm font-normal text-muted sm:ml-2 sm:inline">{activeVariant.label ? "for " + activeVariant.label : "per " + activeVariant.weight + " kg box"}</span>
          </div>

          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-dark mb-2">Select Grade</label>
              <select 
                value={activeVariant.grade}
                onChange={(e) => {
                  const newGrade = e.target.value;
                  const newVariant = product.priceVariants.find(v => v.grade === newGrade && v.weight === activeVariant.weight) || product.priceVariants.find(v => v.grade === newGrade);
                  if (newVariant) setActiveVariant(newVariant);
                }}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm font-medium text-dark outline-none focus:border-green cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231A5C2A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7rem_0.7rem] bg-[right_1rem_center] bg-no-repeat pr-8"
              >
                {Array.from(new Set(product.priceVariants.map(v => v.grade))).map(grade => (
                  <option key={grade} value={grade}>{grade}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-dark mb-2">Select Weight</label>
              <select 
                value={activeVariant.weight}
                onChange={(e) => {
                  const newWeight = parseInt(e.target.value);
                  const newVariant = product.priceVariants.find(v => v.weight === newWeight && v.grade === activeVariant.grade) || product.priceVariants.find(v => v.weight === newWeight);
                  if (newVariant) setActiveVariant(newVariant);
                }}
                className="w-full px-4 py-3 rounded-xl border border-border bg-white text-sm font-medium text-dark outline-none focus:border-green cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231A5C2A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7rem_0.7rem] bg-[right_1rem_center] bg-no-repeat pr-8"
              >
                {Array.from(new Set(product.priceVariants.filter(v => v.grade === activeVariant.grade).map(v => v.weight))).map(weight => (
                  <option key={weight} value={weight}>{weight} kg Box</option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-cream rounded-xl p-4 mb-6 border border-border/50 sm:p-5 sm:mb-8">
            <h4 className="text-xs font-semibold text-dark uppercase tracking-wide mb-4">Taste Profile</h4>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <div className="text-xs text-muted mb-1 flex justify-between">Sweetness <span>{product.sweetness}%</span></div>
                <div className="h-1.5 bg-[#e0e0e0] rounded-full overflow-hidden">
                  <div className="h-full bg-yellow rounded-full" style={{ width: `${product.sweetness}%` }}></div>
                </div>
              </div>
              <div>
                <div className="text-xs text-muted mb-1 flex justify-between">Aroma <span>{product.aroma}%</span></div>
                <div className="h-1.5 bg-[#e0e0e0] rounded-full overflow-hidden">
                  <div className="h-full bg-yellow rounded-full" style={{ width: `${product.aroma}%` }}></div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="text-xs text-muted mb-1 flex justify-between">Fiber Level <span>{product.fiberLevel}% (Low)</span></div>
                <div className="h-1.5 bg-[#e0e0e0] rounded-full overflow-hidden">
                  <div className="h-full bg-yellow rounded-full" style={{ width: `${product.fiberLevel}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center">
            <div className="flex w-full items-center justify-center border border-border rounded-full overflow-hidden bg-white sm:w-auto">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 hover:bg-green-3 text-dark transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 hover:bg-green-3 text-dark transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            
            {product.status === "SOLD_OUT" ? (
              <button 
                disabled
                className="flex-1 bg-[#95a5a6] text-white rounded-full py-3.5 px-5 sm:px-8 font-semibold flex items-center justify-center gap-2 cursor-not-allowed shadow-[0_4px_12px_rgba(149,165,166,0.2)]"
              >
                🚫 Sold Out
              </button>
            ) : (
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-green text-white rounded-full py-3.5 px-5 sm:px-8 font-semibold flex items-center justify-center gap-2 hover:bg-green-2 hover:-translate-y-0.5 transition-all shadow-[0_4px_12px_rgba(26,92,42,0.2)]"
              >
                <ShoppingCart size={18} /> Add to Cart - ₹{(activeVariant.price * quantity) / 100}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-3 text-sm pt-6 border-t border-border sm:grid-cols-2">
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-muted">Season</span>
              <span className="font-medium text-dark">{product.season}</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-muted">Grades</span>
              <span className="font-medium text-dark">Grade A & Grade B</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-2">
              <span className="text-muted">Shelf Life</span>
              <span className="font-medium text-dark">{product.shelfLife}</span>
            </div>
            <div className="flex justify-between gap-4 border-b border-border/50 pb-2 sm:col-span-2">
              <span className="text-muted">Best For</span>
              <span className="font-medium text-dark">{product.bestFor}</span>
            </div>
          </div>
        </div>
      </div>

      {product.nutritionInfo && (
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-border p-4 sm:p-8 mb-12">
          <h2 className="font-serif text-2xl mb-6">🥭 Nutritional Information (Per 100 grams)</h2>
          <div className="prose prose-sm max-w-none text-muted">
            {product.nutritionInfo.split('\n').map((line, idx) => {
              if (line.startsWith('**')) {
                const parts = line.split('**:');
                if (parts.length === 2) {
                  return <p key={idx}><strong className="text-dark">{parts[0].replace(/\*\*/g, '')}:</strong>{parts[1]}</p>;
                }
              }
              if (line.startsWith('*Note')) {
                return <p key={idx} className="italic mt-4 text-xs">{line.replace(/\*/g, '')}</p>
              }
              if (line.trim() === '') return <br key={idx} />;
              return <p key={idx} className="mb-2 leading-relaxed">{line}</p>
            })}
          </div>
        </div>
      )}
    </div>
  )
}
