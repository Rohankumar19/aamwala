import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItemType {
  productId: string;
  variantId: string;
  name: string;
  price: number;
  weight: number;
  quantity: number;
  imageUrl?: string;
}

interface CartState {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const items = get().items;
        const existingItem = items.find(
          (i) => i.productId === item.productId && i.variantId === item.variantId
        );
        
        if (existingItem) {
          set({
            items: items.map((i) => 
              i.productId === item.productId && i.variantId === item.variantId 
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            )
          });
        } else {
          set({ items: [...items, item] });
        }
      },
      removeItem: (productId, variantId) => {
        set({ 
          items: get().items.filter(
            (i) => !(i.productId === productId && i.variantId === variantId)
          ) 
        });
      },
      updateQuantity: (productId, variantId, quantity) => {
        set({
          items: get().items.map((i) => 
            i.productId === productId && i.variantId === variantId 
              ? { ...i, quantity } 
              : i
          )
        });
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
    }),
    {
      name: 'sns-jaivik-cart',
    }
  )
)
