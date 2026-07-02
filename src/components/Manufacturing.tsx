import React, { useState } from 'react';
import { Microscope, TestTube2, Factory, ShieldCheck, Box, Truck, ChevronRight } from 'lucide-react';

export const Manufacturing: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2); // Default to Manufacturing

  const steps = [
    {
      id: 0,
      title: 'Research',
      icon: Microscope,
      desc: 'API molecular design, raw chemical isolation, and computerized formulation modeling to establish clinical pathways.',
      detail: 'Our laboratory synthesis phase leverages raw active pharmaceutical ingredients (APIs) sourced from FDA-approved global manufacturers.',
      standards: 'USP / BP / JP Pharmacopoeia compliance'
    },
    {
      id: 1,
      title: 'Clinical Dev',
      icon: TestTube2,
      desc: 'Pharmacological profiling, bio-equivalence evaluations, and safety threshold testing under clinical settings.',
      detail: 'Rigorous pharmacokinetic assessments confirm that the rate and extent of absorption match global reference drug profiles.',
      standards: 'Good Clinical Practice (GCP) guidelines'
    },
    {
      id: 2,
      title: 'Manufacturing',
      icon: Factory,
      desc: 'Compounding, granulation, compression, and coating inside ISO class 5 sterile cleanroom ecosystems.',
      detail: 'Our automated compounding reactors and high-speed rotary tablet presses maintain zero-contact sterile pipelines.',
      standards: 'WHO Good Manufacturing Practices (WHO GMP)'
    },
    {
      id: 3,
      title: 'Quality Assurance',
      icon: ShieldCheck,
      desc: 'High-Performance Liquid Chromatography (HPLC) analytics, batch inspection, and chemical stability testing.',
      detail: 'Every single batch undergoes accelerated degradation testing and impurity profiling before being cleared for packing.',
      standards: 'SGS ISO 9001 / ISO 17025 testing labs'
    },
    {
      id: 4,
      title: 'Packaging',
      icon: Box,
      desc: 'Automated blister sealing, serialization tracking, and oxygen-barrier bottle packaging.',
      detail: 'Blisters are sealed with reinforced aluminum foils under clean nitrogen purging to ensure molecular stability.',
      standards: 'Anti-counterfeiting unique QR serialization'
    },
    {
      id: 5,
      title: 'Distribution',
      icon: Truck,
      desc: 'Cold-chain shipping, humidity controls, and global air/ocean freight delivery tracking.',
      detail: 'Equipped with digital temperature dataloggers, our logistics partners ensure delivery matches storage guidelines.',
      standards: 'Good Distribution Practices (GDP)'
    }
  ];

  return (
    <section id="manufacturing" className="py-24 bg-gray-50/50 dark:bg-darknavy-dark/40 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
            Process Excellence
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight">
            How We Manufacture Premium Therapeutics
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-xs sm:text-sm">
            From molecular synthesis to international distribution channels, we operate under rigid pharmaceutical standards. Click on any step below to explore our operations.
          </p>
        </div>

        {/* Process Steps Horizontal Navigation */}
        <div className="relative mb-12">
          {/* Progress Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-white/10 -translate-y-1/2 z-0" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2 z-0 transition-all duration-500" 
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          />

          {/* Interactive Steps Circles */}
          <div className="relative z-10 flex justify-between items-center w-full">
            {steps.map((step) => {
              const StepIcon = step.icon;
              const isActive = activeStep === step.id;
              const isPassed = activeStep >= step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 shadow-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-primary border-primary text-white scale-110 shadow-primary/20'
                        : isPassed
                        ? 'bg-secondary border-secondary text-white'
                        : 'bg-white dark:bg-darknavy border-gray-200 dark:border-white/10 text-gray-400 group-hover:border-primary group-hover:text-primary'
                    }`}
                  >
                    <StepIcon size={18} className={`${isActive ? 'animate-pulse' : ''}`} />
                  </div>
                  <span 
                    className={`text-[10px] font-extrabold uppercase tracking-wider mt-3 hidden md:block transition-colors ${
                      isActive ? 'text-primary dark:text-secondary' : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed step content block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          
          {/* Step description card */}
          <div className="lg:col-span-8 glassmorphism dark:glass-dark border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-xl flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-extrabold text-primary dark:text-secondary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                  Phase 0{steps[activeStep].id + 1}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-darknavy dark:text-white">
                  {steps[activeStep].title} Process
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed border-l-2 border-primary/50 pl-4">
                {steps[activeStep].detail}
              </p>
            </div>

            <div className="border-t border-gray-200/50 dark:border-white/5 pt-6 mt-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-accent animate-pulse" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                  Compliance Rule
                </span>
                <span className="text-[11px] font-bold text-darknavy dark:text-white">
                  {steps[activeStep].standards}
                </span>
              </div>
              
              {activeStep < steps.length - 1 && (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="text-xs font-extrabold uppercase tracking-wider text-primary dark:text-secondary flex items-center gap-1 hover:underline"
                >
                  <span>Next Phase</span>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>

          {/* Interactive Stat card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-primary to-darknavy dark:from-darknavy-card dark:to-darknavy text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl min-h-[300px]">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary">
                Operational Efficacy
              </span>
              <h4 className="font-display font-extrabold text-xl mt-3 leading-snug">
                Sterility & Compliance Ratio
              </h4>
            </div>

            <div className="my-8">
              <span className="block font-display font-extrabold text-6xl tracking-tighter text-secondary">
                {activeStep === 0 ? '99.9%' : activeStep === 1 ? '100%' : activeStep === 2 ? '99.99%' : activeStep === 3 ? '100%' : activeStep === 4 ? '99.8%' : '100%'}
              </span>
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-gray-300 block mt-2">
                Biological Safety Factor
              </span>
            </div>

            <p className="text-[11px] text-gray-300 leading-snug">
              Every production room undergoes particulate monitoring and clean air cycles via HEPA ventilation filters.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Manufacturing;
