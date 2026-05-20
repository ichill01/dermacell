import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import HowItWorks from "@/components/HowItWorks";
import Science from "@/components/Science";
import BeforeAfter from "@/components/BeforeAfter";
import Comparison from "@/components/Comparison";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <HowItWorks />
      <Science />
      <BeforeAfter />
      <Comparison />
      <Reviews />
      <FAQ />
      
      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-slate-950 text-center relative z-20">
        <div className="text-slate-500 text-xs tracking-widest font-sans uppercase">
          DERMACELL LAB © 2026 • All Rights Reserved
        </div>
      </footer>
    </>
  );
}
