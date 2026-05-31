import Link from "next/link"
import ProductCard from "@/components/product/ProductCard"

import { products as mockProducts } from "@/lib/data"

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-8">
      {/* HERO */}
      <div className="relative min-h-[620px] overflow-hidden rounded-3xl bg-green p-8 md:p-16 lg:p-20 flex items-end mb-8">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/media/hero-mango-video.m4v"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,38,18,0.88)_0%,rgba(12,58,24,0.62)_48%,rgba(12,58,24,0.2)_100%)]" />

        <div className="relative z-10 max-w-[620px] text-center md:text-left">
          <div className="hero-lazy hero-lazy-1 bg-yellow/20 border border-yellow/45 text-yellow px-4 py-1.5 rounded-full text-xs font-semibold inline-block mb-6 tracking-wide">
            Season 2026 • Now Harvesting
          </div>
          <h1 className="hero-lazy hero-lazy-2 text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-[1.08] mb-5 font-bold font-serif">
            Pure Mangoes,<br />
            <em className="text-yellow not-italic">Directly from</em><br />
            Our Orchard
          </h1>
          <p className="hero-lazy hero-lazy-3 text-white/85 text-lg leading-relaxed mb-8 font-light">
            Handpicked at peak ripeness from our family orchard in Bihar&apos;s mango belt. No chemicals. No middlemen. No cold storage. Just the real taste of summer
          </p>
          <div className="hero-lazy hero-lazy-4 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/shop" className="bg-yellow text-dark rounded-full px-8 py-3 text-sm font-semibold transition-all hover:bg-[#ffd15c] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,166,35,0.4)]">
              Shop Mangoes
            </Link>
            <Link href="/contact" className="bg-yellow/10 text-yellow border-2 border-yellow/45 rounded-full px-8 py-3 text-sm font-semibold transition-all hover:border-yellow hover:bg-yellow hover:text-dark">
              Ask Availability
            </Link>
          </div>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div className="bg-white rounded-2xl p-6 grid grid-cols-3 md:grid-cols-6 gap-4 border border-border mb-16 text-center">
        <div className="text-xs text-muted font-medium"><strong className="block text-xl mb-1">🌿</strong>Natural Farming</div>
        <div className="text-xs text-muted font-medium"><strong className="block text-xl mb-1">✋</strong>Handpicked</div>
        <div className="text-xs text-muted font-medium"><strong className="block text-xl mb-1">🚚</strong>Farm Direct</div>
        <div className="text-xs text-muted font-medium"><strong className="block text-xl mb-1">📦</strong>Safe Packing</div>
        <div className="text-xs text-muted font-medium"><strong className="block text-xl mb-1">🔒</strong>Secure Payment</div>
        <div className="text-xs text-muted font-medium"><strong className="block text-xl mb-1">⭐</strong>4.9/5 Rating</div>
      </div>

      {/* FEATURED VARIETIES */}
      <div className="text-center mb-12">
        <div className="bg-green-3 text-green px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4 tracking-wide uppercase">
          🥭 Featured Varieties
        </div>
        <h2 className="text-3xl md:text-4xl text-dark mb-2 font-serif">This Season&apos;s Finest</h2>
        <p className="text-muted max-w-md mx-auto">Grade A and Grade B mango boxes, available during June-July harvest</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
