'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 'USR_9482',
    name: 'Dr. Sarah Jenkins',
    role: 'Dermatologist',
    text: 'The optimal wavelength combination and high irradiance make this the only at-home device I recommend to my clinic patients for cellular recovery.',
    rating: 5
  },
  {
    id: 'USR_1042',
    name: 'Marcus T.',
    role: 'Verified User',
    text: 'Noticeable reduction in inflammation within 14 days of protocol initiation. The build quality feels like professional medical equipment.',
    rating: 5
  },
  {
    id: 'USR_8831',
    name: 'Elena R.',
    role: 'Verified User',
    text: 'Skin texture improved significantly. The automated 15-minute timer ensures I get the exact clinical dosage required.',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 relative border-t border-cyan-500/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-950 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            Clinical <span className="text-cyan-400">Reviews & Studies</span>
          </h2>
          <p className="text-slate-400">What dermatologists and verified users are saying.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-panel-hover glass-panel p-8 rounded-2xl flex flex-col h-full bg-slate-900/35 border-cyan-500/15"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-cyan-400 fill-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                ))}
              </div>
              
              <p className="text-slate-300 flex-grow mb-8 leading-relaxed text-sm italic">
                &quot;{review.text}&quot;
              </p>
              
              <div className="border-t border-cyan-500/15 pt-4 flex justify-between items-end">
                <div>
                  <div className="text-white font-bold">{review.name}</div>
                  <div className="text-cyan-400/80 text-xs font-mono">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
