'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Cleanse & Prepare",
    desc: "Start with a clean, dry face. Ensure all makeup, sunscreen, and heavy serums are removed so the clinical-grade LEDs can penetrate deeply into the dermis."
  },
  {
    number: "02",
    title: "Initiate 15-Min Protocol",
    desc: "Secure the mask and power on. The optimal dual-wavelength (660nm red + 850nm near-infrared) session will run and automatically power off after exactly 15 minutes."
  },
  {
    number: "03",
    title: "Amplify Results",
    desc: "Immediately apply your favorite serums or moisturizers. The photobiomodulation process temporarily increases cellular absorption, maximizing the efficacy of your skincare."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            Daily <span className="text-cyan-400">Treatment Protocol</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A seamless, non-invasive addition to your daily skincare routine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-slate-900 border border-cyan-500/30 flex items-center justify-center mb-8 relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all">
                <span className="text-3xl font-bold text-cyan-400 font-mono">{step.number}</span>
                <div className="absolute inset-0 rounded-full border border-cyan-400/0 group-hover:border-cyan-400/50 group-hover:scale-110 transition-all duration-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
