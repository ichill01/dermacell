'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is it safe to use every day?",
    answer: "Yes, the Dermacell Lab mask is FDA-cleared and designed for safe, daily use. For optimal cellular recovery and collagen synthesis, we recommend 15-minute sessions, 3 to 5 times a week."
  },
  {
    question: "Do I need to wear eye protection?",
    answer: "The mask is designed to be completely safe for the eyes. The medical-grade LEDs are positioned to avoid direct light exposure to the retinas, and the integrated silicone eye-guards provide additional comfort."
  },
  {
    question: "How long until I see clinical results?",
    answer: "Many users report an immediate 'glow' and reduction in inflammation after the first use. For structural changes like reduced fine lines and improved skin texture, consistent use over 4 to 8 weeks is required as the cellular regeneration cycle takes time."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 60-Day Risk-Free Clinical Trial. If you are not completely satisfied with your results after consistent use, you can return the mask for a full refund. We also include a 1-Year Comprehensive Warranty."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
          <p className="text-slate-400">Frequently asked questions about the protocol.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="glass-panel border border-cyan-500/15 rounded-xl overflow-hidden transition-all duration-300 bg-slate-900/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <span className="text-cyan-400 ml-4 flex-shrink-0">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-slate-300 leading-relaxed text-sm">
                      <div className="pt-4 border-t border-cyan-500/20">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
