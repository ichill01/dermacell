import { ShieldCheck, Truck, RefreshCcw, Award } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, title: "1-Year Warranty", desc: "Full replacement guarantee" },
  { icon: RefreshCcw, title: "60-Day Trial", desc: "Risk-free clinical testing" },
  { icon: Truck, title: "Free Global Shipping", desc: "2-3 day expedited delivery" },
  { icon: Award, title: "FDA Cleared", desc: "Class II Medical Device" }
];

export default function TrustBadges() {
  return (
    <section className="py-12 border-y border-cyan-500/20 bg-slate-900/30 backdrop-blur-md relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center divide-x-0 md:divide-x divide-cyan-500/10">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-4">
              <div className="w-12 h-12 rounded-full bg-cyan-900/30 border border-cyan-500/20 flex items-center justify-center mb-4 text-cyan-400">
                <badge.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold tracking-wide mb-1">{badge.title}</h3>
              <p className="text-xs text-slate-400">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
