import React from 'react';
import { Beaker, Fingerprint, ShieldAlert } from 'lucide-react';
import { ResearchDNA } from './ResearchDNA';

export const Research: React.FC = () => {
  const researchStats = [
    { value: '14+', label: 'Active R&D Pipelines' },
    { value: '28+', label: 'Bio-equivalence Trials' },
    { value: '08', label: 'Drug Master Files (DMF)' },
    { value: '45+', label: 'R&D Scientists & PhDs' },
  ];

  const highlights = [
    {
      title: 'Chemical Stability Analytics',
      desc: 'Executing accelerated degradation tests under high temperatures to ensure molecular shelf-life stability.',
      icon: Fingerprint,
    },
    {
      title: 'Bio-availability Optimizations',
      desc: 'Modifying chemical carriers to improve gastrointestinal dissolution and rapid therapeutic absorption.',
      icon: Beaker,
    },
    {
      title: 'Advanced Bio-safety Screening',
      desc: 'Conducting cytotoxicity profiles and biocompatibility testing prior to manufacturing approval.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section id="research" className="py-24 bg-darknavy-dark text-white transition-colors duration-500 overflow-hidden relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-mesh-gradient-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-secondary">
              Research & Innovation
            </span>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-3 leading-tight">
              Driven by Science. <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Focused on Humanity.
              </span>
            </h2>

            <p className="text-gray-400 mt-6 text-sm leading-relaxed max-w-xl">
              Z-Jans Research Laboratories operate under a zero-compromise scientific mandate. We focus on optimizing therapeutic efficacy, improving pharmacokinetic profiles, and confirming absolute safety before any formulation enters mass production.
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 space-y-6">
              {highlights.map((item, idx) => {
                const HighlightIcon = item.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-secondary mt-1">
                      <HighlightIcon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/5">
              {researchStats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <span className="block font-display font-extrabold text-2xl text-secondary">
                    {stat.value}
                  </span>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-gray-400 mt-1 block leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D DNA Canvas */}
          <div className="lg:col-span-6">
            <ResearchDNA />
          </div>

        </div>

      </div>
    </section>
  );
};
export default Research;
