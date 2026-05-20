'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const features = [
  { name: 'Irradiance Output', our: '>100 mW/cm²', generic: '<30 mW/cm²' },
  { name: 'Wavelengths', our: '660nm & 850nm', generic: '630nm only' },
  { name: 'LED Density', our: '240 Clinical LEDs', generic: '60-100 Standard' },
  { name: 'Material', our: 'Medical-Grade Silicone', generic: 'Hard Plastic' },
  { name: 'Battery Life', our: '120 Minutes', generic: '30 Minutes' },
];

export default function Comparison() {
  return (
    <section className="py-24 relative bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            How We <span className="text-cyan-400">Compare</span>
          </h2>
          <p className="text-slate-400">Benchmark metrics against generic consumer models.</p>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden border border-cyan-500/15">
          <div className="grid grid-cols-3 border-b border-cyan-500/15 bg-slate-900/40">
            <div className="p-4 md:p-6 text-slate-400 font-sans text-xs uppercase tracking-wider font-semibold">Metric</div>
            <div className="p-4 md:p-6 text-cyan-400 font-bold font-sans border-l border-cyan-500/15 text-center text-sm tracking-wider">DERMACELL</div>
            <div className="p-4 md:p-6 text-slate-500 font-sans border-l border-cyan-500/15 text-center text-sm tracking-wider">GENERIC</div>
          </div>
          
          <div className="divide-y divide-cyan-500/10">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-3 hover:bg-slate-800/50 transition-colors"
              >
                <div className="p-4 md:p-6 text-white font-medium flex items-center">
                  {feature.name}
                </div>
                <div className="p-4 md:p-6 border-l border-cyan-500/15 flex flex-col items-center justify-center gap-2 bg-cyan-950/15">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-100 text-sm text-center font-sans">{feature.our}</span>
                </div>
                <div className="p-4 md:p-6 border-l border-cyan-500/15 flex flex-col items-center justify-center gap-2 opacity-60">
                  <X className="w-5 h-5 text-scarlet-500" />
                  <span className="text-slate-400 text-sm text-center font-sans">{feature.generic}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
