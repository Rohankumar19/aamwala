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
    addItem({
      productId: product.id,
      variantId: activeVariant.id,
      name: product.name,
      price: activeVariant.price,
      weight: activeVariant.weight,
      quantity: quantity
    })
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
            <span className="block text-sm font-normal text-muted sm:ml-2 sm:inline">per {activeVariant.weight} kg box</span>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-dark mb-3">Select Box Size</label>
            <div className="flex flex-wrap gap-3">
              {product.priceVariants.map(v => (
                <button 
                  key={v.id}
                  onClick={() => setActiveVariant(v)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all sm:px-5 ${
                    activeVariant.id === v.id 
                      ? "border-2 border-green bg-green-3 text-green shadow-[0_0_0_2px_rgba(26,92,42,0.1)]" 
                      : "border border-border bg-white text-muted hover:border-green"
                  }`}
                >
                  {v.grade} · {v.weight} kg Box
                </button>
              ))}
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
            
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-green text-white rounded-full py-3.5 px-5 sm:px-8 font-semibold flex items-center justify-center gap-2 hover:bg-green-2 hover:-translate-y-0.5 transition-all shadow-[0_4px_12px_rgba(26,92,42,0.2)]"
            >
              <ShoppingCart size={18} /> Add to Cart - ₹{(activeVariant.price * quantity) / 100}
            </button>
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
