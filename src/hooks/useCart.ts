import { useState, useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'

export function useCart() {
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const items = useCartStore((state) => state.items)
  const addItem = useCartStore((state) => state.addItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const clearCart = useCartStore((state) => state.clearCart)
  const total = useCartStore((state) => state.getTotal())
  const itemsCount = items.reduce((count, item) => count + item.quantity, 0)

  return {
    items: isMounted ? items : [],
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    total: isMounted ? total : 0,
    itemsCount: isMounted ? itemsCount : 0,
    isMounted,
  }
}
