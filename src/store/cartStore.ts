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
        
        const currentTotalWeight = items.reduce((total, i) => total + (i.weight * i.quantity), 0);
        if (currentTotalWeight + (item.weight * item.quantity) > 10) {
          if (typeof window !== 'undefined') alert('⚠️ Maximum 10kg allowed per address!');
          return;
        }

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
        const items = get().items;
        const currentItem = items.find((i) => i.productId === productId && i.variantId === variantId);
        
        if (currentItem) {
          const otherItemsWeight = items.reduce((total, i) => {
            if (i.productId === productId && i.variantId === variantId) return total;
            return total + (i.weight * i.quantity);
          }, 0);
          
          if (otherItemsWeight + (currentItem.weight * quantity) > 10) {
            if (typeof window !== 'undefined') alert('⚠️ Maximum 10kg allowed per address!');
            return;
          }
        }

        set({
          items: items.map((i) => 
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
