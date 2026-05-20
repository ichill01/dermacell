import { create } from 'zustand';

interface CartState {
  isOpen: boolean;
  quantity: number;
  openCart: () => void;
  closeCart: () => void;
  setQuantity: (qty: number) => void;
  increment: () => void;
  decrement: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  isOpen: false,
  quantity: 1,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  setQuantity: (qty: number) => set({ quantity: Math.max(1, qty) }),
  increment: () => set((state) => ({ quantity: state.quantity + 1 })),
  decrement: () => set((state) => ({ quantity: Math.max(1, state.quantity - 1) })),
}));
