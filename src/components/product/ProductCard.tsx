import Link from "next/link"
import Image from "next/image"

interface PriceVariant {
  id: string
  weight: number
  price: number
  grade?: "Grade A" | "Grade B"
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

  const startingPrice = product.priceVariants.length > 0 
    ? Math.min(...product.priceVariants.map(v => v.price)) / 100 
    : 0;

  return (
    <Link href={`/shop/${product.slug}`} className="bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-2 relative group block">
      <div className="bg-yellow-3 h-[190px] sm:h-[200px] flex items-center justify-center text-5xl relative">
        {badge}
        {product.imageUrl ? (
          <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
        ) : (
          "🥭"
        )}
      </div>
      <div className="p-5">
        <div className="text-[0.75rem] text-muted font-medium mb-1 flex items-center gap-1">
          📍 {product.origin}
        </div>
        <h3 className="font-serif text-[1.2rem] font-bold mb-1 text-dark group-hover:text-green transition-colors">{product.name}</h3>
        <p className="text-[0.82rem] text-muted mb-4 line-clamp-2 leading-relaxed">{product.tasteNote}</p>
        
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-center gap-2 text-[0.72rem] text-muted">
            <div className="flex-1 h-1 bg-[#f0f0f0] rounded-full overflow-hidden">
              <div className="h-full bg-yellow rounded-full" style={{ width: `${product.sweetness}%` }}></div>
            </div>
            Sweetness
          </div>
        </div>

        <div className="flex gap-1.5 mb-3 flex-wrap">
          {product.priceVariants.map((v) => (
            <span key={v.id} className="bg-green-3 text-green rounded-full px-2.5 py-1 text-[0.72rem] font-medium">
              {v.grade ? `${v.grade} ` : ""}{v.weight}kg
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 mt-4">
          <div className="text-[1.1rem] font-bold text-green">
            ₹{startingPrice} <span className="text-[0.75rem] font-normal text-muted">onwards</span>
          </div>
          <button className="shrink-0 bg-green text-white rounded-full px-4 py-2 text-[0.82rem] font-semibold transition-all hover:bg-green-2 hover:scale-105 active:scale-95">
            Add
          </button>
        </div>
      </div>
    </Link>
  )
}
