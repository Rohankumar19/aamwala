"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/hooks/useCart"

interface PriceVariant {
  id: string
  weight: number
  price: number
  grade?: "Grade A" | "Grade B"
  label?: string
}

interface Product {
  id: string
  name: string
  slug: string
  origin: string
  tasteNote: string
  status: "IN_SEASON" | "PREORDER" | "SOLD_OUT" | "COMING_SOON"
  priceVariants: PriceVariant[]
  sweetness: number
  imageUrl?: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [activeVariant, setActiveVariant] = useState(product.priceVariants[0])

  const badge = (() => {
    switch (product.status) {
      case "IN_SEASON":
        return <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[0.7rem] font-semibold bg-[#fff3e0] text-[#e07b2a]">In Season</div>
      case "PREORDER":
        return <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[0.7rem] font-semibold bg-[#e8f5e9] text-[#2e7d32]">June-July</div>
      case "SOLD_OUT":
        return <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[0.7rem] font-semibold bg-[#fce4ec] text-[#c62828]">Sold Out</div>
      default:
        return null
    }
  })()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (product.status === "SOLD_OUT" || !activeVariant) return

    addItem({
      productId: product.id,
      variantId: activeVariant.id,
      name: product.name,
      price: activeVariant.price,
      weight: activeVariant.weight,
      quantity: 1
    })
    alert("Added to cart!")
  }

  const price = activeVariant ? activeVariant.price / 100 : 0

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-2 relative group flex flex-col">
      <Link href={`/shop/${product.slug}`} className="block relative">
        <div className="bg-yellow-3 h-[190px] sm:h-[200px] flex items-center justify-center text-5xl relative">
          {badge}
          {product.imageUrl ? (
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
          ) : (
            "🥭"
          )}
        </div>
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-[0.75rem] text-muted font-medium mb-1 flex items-center gap-1">
          📍 {product.origin}
        </div>
        <Link href={`/shop/${product.slug}`} className="block">
          <h3 className="font-serif text-[1.2rem] font-bold mb-1 text-dark group-hover:text-green transition-colors">{product.name}</h3>
        </Link>
        <p className="text-[0.82rem] text-muted mb-4 line-clamp-2 leading-relaxed">{product.tasteNote}</p>
        
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-center gap-2 text-[0.72rem] text-muted">
            <div className="flex-1 h-1 bg-[#f0f0f0] rounded-full overflow-hidden">
              <div className="h-full bg-yellow rounded-full" style={{ width: `${product.sweetness}%` }}></div>
            </div>
            Sweetness
          </div>
        </div>

        {activeVariant && (
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex gap-2">
              <div className="flex-1">
                <select 
                  value={activeVariant.grade}
                  onChange={(e) => {
                    const newGrade = e.target.value as "Grade A" | "Grade B";
                    const newVariant = product.priceVariants.find(v => v.grade === newGrade && v.weight === activeVariant.weight) || product.priceVariants.find(v => v.grade === newGrade);
                    if (newVariant) setActiveVariant(newVariant);
                  }}
                  className="w-full px-2 py-1.5 text-[0.75rem] rounded-lg border border-border bg-white text-dark outline-none focus:border-green cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231A5C2A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.5rem_0.5rem] bg-[right_0.5rem_center] bg-no-repeat pr-6"
                >
                  {Array.from(new Set(product.priceVariants.map(v => v.grade))).map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <select 
                  value={activeVariant.weight}
                  onChange={(e) => {
                    const newWeight = parseInt(e.target.value);
                    const newVariant = product.priceVariants.find(v => v.weight === newWeight && v.grade === activeVariant.grade) || product.priceVariants.find(v => v.weight === newWeight);
                    if (newVariant) setActiveVariant(newVariant);
                  }}
                  className="w-full px-2 py-1.5 text-[0.75rem] rounded-lg border border-border bg-white text-dark outline-none focus:border-green cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231A5C2A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.5rem_0.5rem] bg-[right_0.5rem_center] bg-no-repeat pr-6"
                >
                  {Array.from(new Set(product.priceVariants.filter(v => v.grade === activeVariant.grade).map(v => v.weight))).map(weight => (
                    <option key={weight} value={weight}>{weight} kg Box</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="text-[0.65rem] text-muted">{activeVariant.label}</div>
          </div>
        )}

        <div className="flex items-center justify-between gap-3 mt-auto pt-2">
          <div className="text-[1.1rem] font-bold text-green">
            ₹{price}
          </div>
          {product.status === "SOLD_OUT" ? (
            <button 
              disabled
              className="shrink-0 bg-[#95a5a6] text-white rounded-full px-4 py-2 text-[0.82rem] font-semibold cursor-not-allowed"
            >
              Sold Out
            </button>
          ) : (
            <button 
              onClick={handleAddToCart}
              className="shrink-0 bg-green text-white rounded-full px-4 py-2 text-[0.82rem] font-semibold transition-all hover:bg-green-2 hover:scale-105 active:scale-95 z-10 relative"
            >
              Add - ₹{price}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
