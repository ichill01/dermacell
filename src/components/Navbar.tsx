'use client';

import { useCartStore } from '@/store/useCartStore';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const openCart = useCartStore((state) => state.openCart);
  const quantity = useCartStore((state) => state.quantity);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          <span className="font-bold text-lg tracking-widest text-white">DERMACELL <span className="text-cyan-400 font-medium">LAB</span></span>
        </div>
        
        <button 
          onClick={openCart}
          className="relative p-2 rounded-full hover:bg-white/5 transition-colors group"
        >
          <ShoppingCart className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
          {quantity > 0 && (
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-scarlet-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-neon-red animate-pulse"
            >
              {quantity}
            </motion.div>
          )}
        </button>
      </div>
    </nav>
  );
}
