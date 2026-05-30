import { create } from 'zustand'

interface UserState {
  wishlist: string[]; // array of product IDs
  toggleWishlist: (productId: string) => void;
}

export const useUserStore = create<UserState>((set, get) => ({
  wishlist: [],
  toggleWishlist: (productId) => {
    const { wishlist } = get();
    if (wishlist.includes(productId)) {
      set({ wishlist: wishlist.filter(id => id !== productId) });
    } else {
      set({ wishlist: [...wishlist, productId] });
    }
  }
}))
