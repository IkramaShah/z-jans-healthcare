import React from 'react';
import { Award, ShieldCheck, HeartPulse, Building2, FlameKindling, Landmark, Compass, Server } from 'lucide-react';

export const TrustedBy: React.FC = () => {
  const complianceLogos = [
    { name: 'WHO GMP Certified', icon: Award },
    { name: 'ISO 9001:2015', icon: ShieldCheck },
    { name: 'DRAP Approved', icon: Landmark },
    { name: 'Health Department', icon: HeartPulse },
    { name: 'ISO 14001 EMS', icon: FlameKindling },
    { name: 'Global R&D Partners', icon: Building2 },
    { name: 'ISO 45001 OHSAS', icon: Compass },
    { name: 'DRAP Bio-Safety', icon: Server },
  ];

  return (
    <section className="py-12 border-y border-gray-200/50 dark:border-white/5 bg-gray-50/50 dark:bg-darknavy-dark/40 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
          Compliance & Accreditations
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Z-Jans meets international regulatory and biological standards
        </span>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative w-full flex items-center overflow-x-hidden">
        {/* Left and Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-medical-bg dark:from-darknavy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-medical-bg dark:from-darknavy to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex gap-8 py-4 animate-marquee whitespace-nowrap min-w-full">
          {[...complianceLogos, ...complianceLogos].map((logo, idx) => {
            const Icon = logo.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl glassmorphism dark:glass-dark border border-white/40 dark:border-white/10 shadow-sm hover:border-primary/30 dark:hover:border-white/20 transition-all duration-300"
              >
                <div className="p-1.5 rounded-lg bg-primary/5 dark:bg-white/5 text-primary dark:text-secondary">
                  <Icon size={18} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-darknavy dark:text-white/90">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TrustedBy;
