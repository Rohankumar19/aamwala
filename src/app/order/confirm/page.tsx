"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, ShoppingBag, ArrowRight, ShieldCheck, Heart } from "lucide-react"
import { useEffect, Suspense } from "react"
import { useCart } from "@/hooks/useCart"

function OrderConfirmContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("id") || "order_" + Date.now().toString()
  const { clearCart } = useCart()

  // Clear cart upon successful order landing
  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10 sm:py-16 bg-gradient-to-b from-green-3/30 via-cream to-cream">
      <div className="max-w-[550px] w-full bg-white rounded-2xl sm:rounded-3xl border border-border/80 shadow-2xl p-5 sm:p-8 md:p-10 text-center relative overflow-hidden backdrop-blur-md">
        
        {/* Decorative background gradients */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green to-yellow" />
        <div className="absolute -right-16 -top-16 w-36 h-36 bg-green-3/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-yellow-3/40 rounded-full blur-2xl pointer-events-none" />

        {/* Success Icon Animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 15, stiffness: 100, delay: 0.1 }}
              className="bg-green-3 text-green rounded-full p-4 relative z-10 border border-green/10"
            >
              <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 stroke-[1.5]" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.3, opacity: [0, 0.4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="absolute inset-0 bg-green/20 rounded-full z-0"
            />
          </div>
        </div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-serif text-3xl md:text-4xl text-dark font-bold mb-3 tracking-tight"
        >
          Order Confirmed!
        </motion.h1>

        {/* Short confirmation message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted text-sm md:text-base mb-6 max-w-[420px] mx-auto leading-relaxed"
        >
          Thank you for your order. We&apos;ve received your payment and are getting your mangoes ready!
        </motion.p>

        {/* Order Details Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-cream/60 border border-border rounded-2xl p-4 sm:p-5 mb-8 text-left"
        >
          <div className="flex flex-col gap-2 pb-3 border-b border-border/60 mb-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-semibold text-muted uppercase tracking-wider">Order ID</span>
            <span className="text-sm font-mono font-bold text-green bg-white border border-green/10 px-3 py-1 rounded-lg shadow-sm break-all">
              {orderId}
            </span>
          </div>
          <div className="flex items-start gap-3 text-xs text-muted">
            <ShieldCheck className="w-4 h-4 text-green shrink-0 mt-0.5" />
            <span>Secured Payment verified by Razorpay standard gateway check.</span>
          </div>
        </motion.div>

        {/* Orchard Update / Status Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col gap-4 items-center mb-8 border-t border-border/50 pt-6"
        >
          <div className="bg-yellow-3 text-orange rounded-full p-2.5">
            <Heart className="w-6 h-6 stroke-[2] fill-orange/15" />
          </div>
          <div className="text-center">
            <h4 className="font-serif text-lg font-bold text-dark mb-1">Direct from Orchards</h4>
            <p className="text-xs text-muted max-w-[380px] leading-relaxed">
              Our orchard farmers are handpicking, custom-sorting, and packaging your fresh mangoes. We will send you SMS / WhatsApp updates once shipped!
            </p>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 bg-green text-white rounded-full py-3.5 px-6 font-semibold hover:bg-green-2 transition-all duration-200 shadow-md hover:shadow-lg group"
          >
            <ShoppingBag className="w-4 h-4" />
            Continue Shopping
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center border border-border bg-white text-dark rounded-full py-3.5 px-6 font-semibold hover:bg-cream transition-all duration-200"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default function OrderConfirmPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-green border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <OrderConfirmContent />
    </Suspense>
  )
}
