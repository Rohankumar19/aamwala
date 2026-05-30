import ProductCard from "@/components/product/ProductCard"

import { products as mockProducts } from "@/lib/data"

export default function ShopPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-8">
      <div className="bg-gradient-to-br from-[#1a4a1a] to-[#2d7a3a] p-12 rounded-3xl text-white text-center mb-8">
        <h1 className="text-4xl font-serif mb-2">🥭 All Mango Varieties</h1>
        <p className="text-white/80">Handpicked from our orchard — Grade A and Grade B boxes available in June-July</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-8 items-center">
        <button className="bg-green text-white border border-green rounded-full px-4 py-1.5 text-sm font-medium transition-colors">All Varieties</button>
        
        <select className="ml-auto p-2 border border-border rounded-lg text-sm text-dark bg-white outline-none focus:border-green">
          <option value="popular">Most Popular</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {mockProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
