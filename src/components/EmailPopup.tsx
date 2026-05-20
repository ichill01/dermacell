'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, CheckCircle2 } from 'lucide-react';

export default function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const hasSubscribedOrDismissed = localStorage.getItem('dermacell_email_popup');
    if (!hasSubscribedOrDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // 5 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('dermacell_email_popup', 'dismissed');
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem('dermacell_email_popup', 'subscribed');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 border border-cyan-500/30 p-8 shadow-2xl shadow-cyan-500/10"
          >
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Join the Skincare Revolution
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Subscribe to receive 10% off your first clinical order, plus exclusive access to future phototherapy research.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-scarlet-600 hover:bg-scarlet-500 text-white font-bold tracking-wider rounded-lg shadow-neon-red transition-all text-sm"
                  >
                    CLAIM 10% OFF
                  </button>
                </form>
                
                <div className="text-[10px] text-slate-500 text-center">
                  By signing up, you agree to our Privacy Policy. You can unsubscribe at any time.
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/15 border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-holographic">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">Verification Complete</h4>
                  <p className="text-cyan-400 text-sm font-mono">CODE: DERMACELL10</p>
                  <p className="text-slate-400 text-xs">
                    Your discount code has been generated. Redirecting...
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
