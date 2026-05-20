'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingCart, Loader2 } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useState } from 'react';

export default function Cart() {
  const { isOpen, closeCart, quantity, increment, decrement } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const price = 349.00;

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-slate-900 border-l border-cyan-500/30 z-50 flex flex-col shadow-[-10px_0_30px_rgba(6,182,212,0.1)]"
          >
            <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
              <h2 className="text-xl font-bold tracking-widest text-cyan-400 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                SECURE CHECKOUT
              </h2>
              <button onClick={closeCart} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Progress Indicator */}
              <div className="w-full bg-slate-800 rounded-full h-1.5 mb-8">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '50%' }}
                  className="bg-scarlet-500 h-1.5 rounded-full shadow-neon-red"
                />
              </div>

              {/* Product Item */}
              <div className="flex gap-4 p-4 glass-panel rounded-xl">
                <div className="w-20 h-20 bg-slate-800 rounded-lg flex items-center justify-center border border-cyan-500/20">
                  <span className="text-xs text-cyan-500">MASK_001</span>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Dermacell Lab RLT Mask</h3>
                    <p className="text-sm text-cyan-400/70">660nm & 850nm Therapy</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono font-bold">${price.toFixed(2)}</span>
                    <div className="flex items-center gap-3 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                      <button onClick={decrement} className="hover:text-cyan-400"><Minus className="w-4 h-4" /></button>
                      <span className="font-mono text-sm w-4 text-center">{quantity}</span>
                      <button onClick={increment} className="hover:text-cyan-400"><Plus className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-3 pt-6 border-t border-cyan-500/20 text-sm">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono">${(price * quantity).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Shipping</span>
                  <span className="text-cyan-400">Calculated next</span>
                </div>
                <div className="flex justify-between text-white font-bold text-lg pt-3 border-t border-slate-800">
                  <span>Total</span>
                  <span className="font-mono">${(price * quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-cyan-500/20 bg-slate-950/50">
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full relative group overflow-hidden bg-scarlet-600 hover:bg-scarlet-500 text-white font-bold tracking-widest py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-neon-red"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative flex items-center justify-center gap-2">
                  {isCheckingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : 'PROCEED TO CHECKOUT'}
                </span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
