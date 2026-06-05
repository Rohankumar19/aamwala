import ProductCard from "@/components/product/ProductCard"

import { products as mockProducts } from "@/lib/data"

export default function ShopPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="bg-gradient-to-br from-[#1a4a1a] to-[#2d7a3a] p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl text-white text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-serif mb-2">🥭 All Mango Varieties</h1>
        <p className="text-white/80">Handpicked from our orchard — Grade A and Grade B boxes available in June-July</p>
      </div>

      <div className="flex flex-col gap-3 mb-8 sm:flex-row sm:items-center">
        <button className="bg-green text-white border border-green rounded-full px-4 py-1.5 text-sm font-medium transition-colors">All Varieties</button>
        
        <select className="w-full p-2 border border-border rounded-lg text-sm text-dark bg-white outline-none focus:border-green sm:ml-auto sm:w-auto">
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
