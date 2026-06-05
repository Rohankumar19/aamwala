"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/hooks/useCart"
import { Menu, ShoppingCart, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our Farm" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const { itemsCount } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16 gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setIsOpen(false)}>
          <Image
            src="/brand/logo.jpeg"
            alt="SNS Jaivik Farm logo"
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover shrink-0"
            priority
          />
          <span className="font-serif text-base font-bold text-green tracking-tight sm:text-xl truncate">
            SNS <span className="text-yellow">Jaivik Farm</span>
          </span>
        </Link>
        
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-muted text-sm font-medium hover:text-green transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/cart" className="bg-green text-white rounded-full py-2 px-3 sm:px-5 text-sm font-medium flex items-center gap-2 transition-all hover:bg-green-2 hover:-translate-y-[1px]" onClick={() => setIsOpen(false)}>
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            <span className="bg-yellow text-dark rounded-full w-[18px] h-[18px] text-[0.7rem] font-bold flex items-center justify-center">
              {itemsCount}
            </span>
          </Link>
          <button
            type="button"
            className="md:hidden border border-border rounded-full p-2 text-dark"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden max-w-[1200px] mx-auto pb-4">
          <div className="grid gap-1 rounded-2xl border border-border bg-white p-2 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-dark hover:bg-green-3 hover:text-green"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
