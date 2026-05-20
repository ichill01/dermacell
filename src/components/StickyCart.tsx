'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/useCartStore';

export default function StickyCart() {
  const [isVisible, setIsVisible] = useState(false);
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 800px (past the hero)
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 pointer-events-none"
        >
          <div className="max-w-3xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-cyan-500/15 rounded-2xl p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between pointer-events-auto">
            <div className="hidden sm:block">
              <h4 className="text-white font-bold text-sm">Dermacell Lab Mask</h4>
              <p className="text-cyan-400 text-xs">660nm & 850nm</p>
            </div>
            
            <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
              <div className="text-white font-bold font-sans">$349.00</div>
              <button 
                onClick={openCart}
                className="bg-scarlet-600 hover:bg-scarlet-500 text-white font-bold tracking-widest py-3 px-8 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.2)] transition-all text-xs"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
