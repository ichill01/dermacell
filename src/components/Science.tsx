'use client';

import { motion } from 'framer-motion';
import { Activity, Zap } from 'lucide-react';

export default function Science() {
  return (
    <section className="py-24 relative border-t border-cyan-500/15 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            The Science of <span className="text-cyan-400">Photobiomodulation</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Clinical breakdown of our dual-frequency therapeutic light system.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Graph Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden bg-slate-900/40 border-cyan-500/20"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-sans text-cyan-400 font-bold flex items-center gap-2 tracking-wide">
                <Activity className="w-5 h-5" />
                Targeted Light Spectrum
              </h3>
              <div className="flex gap-4 text-xs font-mono">
                <span className="flex items-center gap-1 text-scarlet-500"><div className="w-2 h-2 bg-scarlet-500 rounded-full"/> 660nm Red</span>
                <span className="flex items-center gap-1 text-cyan-500"><div className="w-2 h-2 bg-cyan-500 rounded-full"/> 850nm Near-Infrared</span>
              </div>
            </div>

            {/* SVG Graph Simulation */}
            <div className="h-64 relative border-b border-l border-slate-700">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M0,80 Q20,20 40,60 T80,40 T100,20" 
                  fill="none" 
                  stroke="#DC2626" 
                  strokeWidth="2" 
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                  d="M0,90 Q30,40 50,70 T90,30 T100,50" 
                  fill="none" 
                  stroke="#06b6d4" 
                  strokeWidth="2" 
                />
              </svg>
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20%_20%]" />
            </div>
          </motion.div>

          {/* Mitochondria Detail */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel rounded-2xl p-8 flex flex-col justify-between group bg-slate-900/40 border-cyan-500/20"
          >
            <div>
              <h3 className="font-sans text-cyan-400 font-bold mb-4 flex items-center gap-2 tracking-wide">
                <Zap className="w-5 h-5" />
                ATP Cellular Synthesis
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Cytochrome c oxidase absorbs photon energy, accelerating the electron transport chain. Cellular ATP production is stimulated to speed up recovery and rejuvenate skin.
              </p>
            </div>
            
            <div className="relative h-40 border border-cyan-500/20 rounded-xl overflow-hidden flex items-center justify-center bg-slate-950/80">
              {/* Animated abstract mitochondria */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-20 h-10 border-2 border-cyan-500/50 rounded-full relative"
              >
                <div className="absolute inset-2 border-t-2 border-b-2 border-scarlet-500/70 rounded-full animate-pulse" />
              </motion.div>
              <div className="absolute top-2 right-2 flex gap-1">
                <div className="w-1 h-1 bg-cyan-400/80 animate-ping" />
                <div className="w-1 h-1 bg-cyan-400/80 animate-ping [animation-delay:0.2s]" />
                <div className="w-1 h-1 bg-cyan-400/80 animate-ping [animation-delay:0.4s]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
