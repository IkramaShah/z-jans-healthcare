import React from 'react';
import { Leaf, GraduationCap, HeartPulse, Heart, Calendar } from 'lucide-react';

export const CSR: React.FC = () => {
  const csrInitiatives = [
    {
      title: 'Free Healthcare Camps',
      desc: 'Conducting rural medical camps providing free diagnostics, consultation, and essential medications to underprivileged regions.',
      icon: HeartPulse,
      impact: '120k+ Patients Served',
    },
    {
      title: 'Pharmacy Internships',
      desc: 'Funding university research programs and offering sterile cleanroom training sponsorships to promising science students.',
      icon: GraduationCap,
      impact: '400+ Graduates Trained',
    },
    {
      title: 'Green Factory Footprint',
      desc: 'Integrating solar arrays, water purification recycle pipelines, and zero-plastic waste packaging options.',
      icon: Leaf,
      impact: '35% CO2 Reductions',
    }
  ];

  return (
    <section id="csr" className="py-24 bg-white dark:bg-darknavy transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
            Social & Environmental Impact
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight">
            Corporate Social Responsibility
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-xs sm:text-sm">
            We believe enterprise growth must align with social welfare and environmental preservation. We commit resources annually to public health support, research education, and green manufacturing.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            {csrInitiatives.map((item, idx) => {
              const InitiativeIcon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-6 rounded-3xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-darknavy-card hover:shadow-2xl transition-all duration-300 flex items-start gap-5 group"
                >
                  <div className="p-3.5 rounded-2xl bg-primary/5 text-primary dark:text-secondary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 mt-1">
                    <InitiativeIcon size={24} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h4 className="text-sm font-extrabold text-darknavy dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                        {item.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest bg-accent/15 text-accent">
                        {item.impact}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Premium Visual Box / Timeline of Accomplishment */}
          <div className="lg:col-span-6">
            <div className="h-full rounded-3xl glassmorphism dark:glass-dark border border-white/20 dark:border-white/10 p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <h3 className="font-display font-extrabold text-xl text-darknavy dark:text-white mb-6 flex items-center gap-2">
                  <Heart size={20} className="text-red-500 animate-pulse" />
                  Social Welfare Roadmap
                </h3>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                  Our strategic milestones coordinate with regional ministries of health and universities to deliver community services.
                </p>

                {/* Vertical list of roadmaps */}
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-1 bg-primary/10 text-primary dark:text-secondary rounded-lg mt-0.5 text-xs font-bold">2027</div>
                    <div>
                      <h4 className="text-xs font-bold text-darknavy dark:text-white">100% Solar-Powered Compounding Plant</h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">Reducing grid consumption carbon offsets by 800 metric tons annually.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="p-1 bg-primary/10 text-primary dark:text-secondary rounded-lg mt-0.5 text-xs font-bold">2028</div>
                    <div>
                      <h4 className="text-xs font-bold text-darknavy dark:text-white font-sans">Mobile Diagnostic Clinics Launch</h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">Deploying custom-fitted vans with ultrasound and lab equipment directly into remote communities.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="p-1 bg-primary/10 text-primary dark:text-secondary rounded-lg mt-0.5 text-xs font-bold">2029</div>
                    <div>
                      <h4 className="text-xs font-bold text-darknavy dark:text-white">Bio-Degradable Blister Foils Integration</h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">Partnering with green materials labs to formulate bio-dissolving outer product packages.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-white/5 pt-6 mt-8 flex items-center gap-3">
                <Calendar size={16} className="text-primary dark:text-secondary" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                  Annual Audit Reporting
                </span>
                <span className="text-[10px] font-bold text-darknavy dark:text-white">
                  Published every Q3
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default CSR;
