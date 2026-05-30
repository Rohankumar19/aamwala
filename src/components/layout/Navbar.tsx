"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/hooks/useCart"
import { ShoppingCart } from "lucide-react"

export default function Navbar() {
  const { itemsCount } = useCart()

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 px-8">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo.jpeg"
            alt="SNS Javik Farm logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span className="font-serif text-xl font-bold text-green tracking-tight">
            SNS <span className="text-yellow">Javik Farm</span>
          </span>
        </Link>
        
        <ul className="hidden md:flex gap-8 list-none">
          <li><Link href="/" className="text-muted text-sm font-medium hover:text-green transition-colors">Home</Link></li>
          <li><Link href="/shop" className="text-muted text-sm font-medium hover:text-green transition-colors">Shop</Link></li>
          <li><Link href="/about" className="text-muted text-sm font-medium hover:text-green transition-colors">Our Farm</Link></li>
          <li><Link href="/faq" className="text-muted text-sm font-medium hover:text-green transition-colors">FAQ</Link></li>
          <li><Link href="/contact" className="text-muted text-sm font-medium hover:text-green transition-colors">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="bg-green text-white rounded-full py-2 px-5 text-sm font-medium flex items-center gap-2 transition-all hover:bg-green-2 hover:-translate-y-[1px]">
            <ShoppingCart size={18} />
            Cart
            <span className="bg-yellow text-dark rounded-full w-[18px] h-[18px] text-[0.7rem] font-bold flex items-center justify-center">
              {itemsCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
