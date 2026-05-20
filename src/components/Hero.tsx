'use client';

import { motion } from 'framer-motion';
import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
export default function Hero() {
  const openCart = useCartStore((state) => state.openCart);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-background opacity-50" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-cyan-600/20 blur-[120px] rounded-full" />
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-scarlet-600/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block border border-cyan-500/20 bg-cyan-500/5 px-4 py-1 rounded-full text-cyan-400 text-xs tracking-widest font-mono uppercase">
            Clinical Grade Phototherapy
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
            Dermacell Lab:<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500">
              The Future of
            </span><br/>
            Skincare.
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
            Harness the power of 660nm and 850nm therapeutic light frequencies. Engineered to stimulate mitochondrial function, accelerate cellular repair, and restore skin elasticity.
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
            <button 
              onClick={openCart}
              className="group relative px-8 py-4 bg-scarlet-600 hover:bg-scarlet-500 text-white font-bold tracking-widest rounded-lg overflow-hidden transition-all shadow-[0_0_15px_rgba(220,38,38,0.2)] hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] text-sm"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">SHOP THE MASK</span>
            </button>
            <div className="flex flex-col gap-1 justify-center">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white font-sans">$349</span>
                <span className="text-slate-400 text-xs line-through">$429</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400">
                <span>★★★★★</span>
                <span className="text-slate-400 font-sans">4.9/5 (182 Reviews)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Premium Product Display */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] w-full flex items-center justify-center"
        >
          <div className="absolute inset-0 glass-panel rounded-3xl border-cyan-500/10 shadow-xl flex items-center justify-center overflow-hidden group p-2 bg-slate-900/20">
            
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 to-slate-950/20" />

            {/* Product Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5">
               <Image 
                 src="/hero-mask.png"
                 alt="Dermacell Lab RLT Recovery Mask"
                 fill
                 className="object-cover transition-transform duration-75 group-hover:scale-[1.02]"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Elegant Floating UI elements */}
            <div className="absolute top-8 left-8 text-[10px] text-white/60 tracking-widest uppercase font-mono">
              Wavelengths: 660nm & 850nm
            </div>
            <div className="absolute bottom-8 right-8 text-[10px] text-white/60 tracking-widest uppercase text-right font-mono">
              Medical Grade Silicone
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
