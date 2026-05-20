'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BeforeAfter() {
  return (
    <section className="py-24 relative border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            Clinical <span className="text-cyan-400">Results</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Visibly improved texture, tone, and reduction in fine lines after an 8-week protocol.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl glass-panel rounded-2xl overflow-hidden border border-cyan-500/15 p-2 shadow-lg bg-slate-900/30"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
               <Image 
                 src="/before-after.png"
                 alt="Before and After 8 weeks of Dermacell Lab use"
                 fill
                 className="object-cover"
               />
               
               {/* Label overlays */}
               <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold tracking-widest border border-white/20">
                 WEEK 01
               </div>
               <div className="absolute top-6 right-6 bg-cyan-500/80 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold tracking-widest border border-white/20">
                 WEEK 08
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
