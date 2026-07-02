import React from 'react';
import { CheckSquare, Award, ClipboardList } from 'lucide-react';

export const Quality: React.FC = () => {
  const qaChecks = [
    { title: 'API Identity Verification', desc: 'Confirming raw compound chemical profiles via Fourier-Transform Infrared (FTIR) spectroscopy.' },
    { title: 'High-Performance Liquid Chromatography', desc: 'Confirming exact concentrations of active ingredients down to the microgram.' },
    { title: 'Sterility Testing Protocols', desc: 'Verifying cleanroom environments meet Class 100/ISO 5 particulate criteria.' },
    { title: 'Accelerated Stability Studies', desc: 'Monitoring drug behavior under high moisture and heat to ensure standard expiry durations.' },
    { title: 'Packaging Seal Integrity', desc: 'Performing vacuum leak tests on blister packs to prevent oxidation.' },
    { title: 'Dissolution Profiling', desc: 'Measuring the rate at which tablets dissolve in biological fluids to guarantee efficacy.' }
  ];

  const standards = [
    { title: 'ISO 17025', subtitle: 'Lab Testing Competence' },
    { title: 'WHO GMP', subtitle: 'Manufacturing Hygiene Standards' },
    { title: 'DRAP Rules', subtitle: 'National Regulatory Registration' },
    { title: 'ISO 9001:2015', subtitle: 'Quality Management System' }
  ];

  return (
    <section id="quality" className="py-24 bg-gray-50/50 dark:bg-darknavy-dark/40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Quality text and certifications */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
              Quality Assurance
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight">
              Zero-Tolerance Quality Protocols
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm leading-relaxed">
              At Z-Jans, quality assurance is integrated into every phase of drug processing, not just the final packaging. We operate ISO 17025 accredited labs equipped with advanced testing machines to guarantee absolute purity, exact dosages, and maximum biological safety.
            </p>

            {/* Certifications cards grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {standards.map((std, idx) => (
                <div key={idx} className="p-4 rounded-2xl glassmorphism dark:glass-dark border border-white/20 shadow-sm hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={18} className="text-primary dark:text-secondary" />
                    <span className="text-xs font-extrabold text-darknavy dark:text-white">
                      {std.title}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight block">
                    {std.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual QA Checklist */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="glassmorphism dark:glass-dark border border-white/20 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="font-display font-extrabold text-xl text-darknavy dark:text-white mb-6 flex items-center gap-2">
                <ClipboardList size={22} className="text-primary" />
                Laboratory Inspection Checklist
              </h3>

              {/* Checks list */}
              <div className="space-y-4">
                {qaChecks.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-4 p-4 rounded-2xl border border-gray-100/50 dark:border-white/5 bg-white/40 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="text-accent mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckSquare size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-darknavy dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Quality;
