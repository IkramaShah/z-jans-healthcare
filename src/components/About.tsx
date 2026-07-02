import React, { useState } from 'react';
import { Target, Eye, Heart, Award, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  const milestones = [
    { year: '2012', title: 'Company Inception', desc: 'Established initial liquid & tablet formulation lines under high-grade laboratory control.' },
    { year: '2016', title: 'WHO-GMP Certification', desc: 'Achieved complete World Health Organization Good Manufacturing Practice standards approval.' },
    { year: '2019', title: 'Global Export Launch', desc: 'Expanded distribution networks, exporting critical molecules across Central Asia and the MENA region.' },
    { year: '2022', title: 'Advanced Biotech Lab', desc: 'Inaugurated a dedicated biotechnology and molecular research laboratory focusing on bio-equivalence.' },
    { year: '2026', title: 'Enterprise Digitalization', desc: 'Optimizing product tracking with advanced QA and AI integration, serving millions globally.' },
  ];

  const tabContents = {
    mission: {
      title: 'Our Mission',
      desc: 'To formulate, manufacture, and deliver high-efficacy pharmaceutical solutions that meet rigorous international specifications, ensuring affordable access to vital healthcare treatments for populations worldwide.',
      icon: Target,
      points: ['Continuous molecular research', 'Strict GMP & DRAP standard compliance', 'Affordable critical healthcare access'],
    },
    vision: {
      title: 'Our Vision',
      desc: 'To be recognized globally as a pioneering pharmaceutical developer, setting benchmarks in chemical formulation, manufacturing automation, and ethical healthcare leadership.',
      icon: Eye,
      points: ['Expansion of biotechnology divisions', 'Carbon-neutral sterile manufacturing', 'Zero-defect quality assurance'],
    },
    values: {
      title: 'Core Values',
      desc: 'Precision, ethics, and care represent the DNA of our business operations, determining how we interact with health systems, medical professionals, and patients.',
      icon: Heart,
      points: ['Scientific integrity above all', 'Patient-safety first protocols', 'Sustainable green manufacturing'],
    },
  };

  const ActiveIcon = tabContents[activeTab].icon;

  return (
    <section id="about" className="py-24 bg-white dark:bg-darknavy transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
            About Z-Jans Healthcare
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight">
            An International Standard Pharmaceutical Enterprise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-base leading-relaxed">
            With over a decade of commitment to pharmaceutical excellence, Z-Jans Healthcare combines sophisticated laboratory research, automated factories, and high-purity ingredients to support global patient welfare.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Mission, Vision, Values and Tabs */}
          <div className="lg:col-span-6">
            <div className="flex gap-2 border-b border-slate-200 dark:border-white/5 pb-4 mb-8">
              {(['mission', 'vision', 'values'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-gray-500 hover:text-darknavy dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Panel */}
            <div className="bg-white dark:bg-darknavy-card rounded-3xl border border-slate-200 dark:border-white/5 p-8 shadow-xl relative overflow-hidden min-h-[350px] flex flex-col justify-between">
              <div className="absolute -right-8 -top-8 w-28 h-28 bg-primary/5 rounded-full blur-xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary dark:text-secondary">
                    <ActiveIcon size={24} />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-darknavy dark:text-white">
                    {tabContents[activeTab].title}
                  </h3>
                </div>

                <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {tabContents[activeTab].desc}
                </p>

                <ul className="space-y-3">
                  {tabContents[activeTab].points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs font-bold text-darknavy dark:text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-200 dark:border-white/5 pt-6 mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-secondary" />
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-600 dark:text-gray-400">
                    SGS Audited Enterprise
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Milestones */}
          <div className="lg:col-span-6 lg:pl-8">
            <h3 className="font-display font-extrabold text-xl text-darknavy dark:text-white mb-8 flex items-center gap-2">
              Our Milestones
              <ArrowUpRight size={18} className="text-primary" />
            </h3>

            {/* Vertical Timeline */}
            <div className="relative border-l border-slate-300 dark:border-white/10 pl-6 ml-4 space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative group">
                  {/* Circle indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full bg-white dark:bg-darknavy border-2 border-primary group-hover:border-accent flex items-center justify-center transition-all duration-300 shadow-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-accent transition-colors" />
                  </div>

                  {/* Year Tag */}
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-primary dark:text-secondary mb-1">
                    {milestone.year}
                  </span>

                  {/* Content card */}
                  <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <h4 className="text-sm font-extrabold text-darknavy dark:text-white mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default About;
