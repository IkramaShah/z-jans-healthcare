import React, { useState } from 'react';
import { Briefcase, MapPin, Award, GraduationCap, CheckCircle2, ChevronRight, X } from 'lucide-react';

export const Careers: React.FC = () => {
  const [activeJob, setActiveJob] = useState<any | null>(null);

  const benefits = [
    'Fully sponsored continuous chemical & formulation training',
    'Advanced research access in ISO 5 cleanroom setups',
    'Comprehensive medical & life coverage for families',
    'Graduate trainee residency funding for local universities',
  ];

  const jobs = [
    {
      title: 'Senior Formulation Chemist',
      dept: 'Research & Development',
      loc: 'Rawalpindi (On-Site)',
      exp: '5+ Years in Pharma R&D',
      desc: 'Formulating complex dosage solid compounds and performing initial chemical compatibility analysis.',
      reqs: ['M.Pharm / PhD in Pharmaceutical Chemistry', 'Experience with HPLC and dissolution testing apparatus', 'Familiarity with DRAP and WHO registration guidelines'],
    },
    {
      title: 'Quality Assurance Analyst',
      dept: 'Quality Control Lab',
      loc: 'Rawalpindi (On-Site)',
      exp: '2+ Years in QA Operations',
      desc: 'Executing batch testing protocols, reviewing cleanroom sterility parameters, and auditing production logs.',
      reqs: ['B.Pharm / Doctor of Pharmacy (Pharm.D)', 'Attention to sterile protocol compliance', 'Strong documentation and reporting capability'],
    },
    {
      title: 'Global Supply Chain Lead',
      dept: 'Logistics division',
      loc: 'Dubai Office / Remote Hybrid',
      exp: '4+ Years in Cold-Chain Logistics',
      desc: 'Managing international freight, cold-chain regulatory validation, and coordinating shipping hubs.',
      reqs: ['Degree in Supply Chain or Logistics Management', 'Experience with international GDP customs rules', 'Strong contractor negotiation capacity'],
    }
  ];

  return (
    <section id="careers" className="py-24 bg-white dark:bg-darknavy transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Culture and Benefits */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
              Careers at Z-Jans
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight">
              Join Our Scientific Expedition
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm leading-relaxed">
              We seek qualified professionals, chemical experts, and passionate researchers. At Z-Jans Healthcare, you will collaborate inside state-of-the-art sterile manufacturing environments to deliver lifesaving therapeutic molecules.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 size={16} className="text-accent mt-0.5" />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Graduate CTA */}
            <div className="mt-10 p-6 rounded-3xl glassmorphism dark:glass-dark border border-white/20 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary dark:text-secondary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-darknavy dark:text-white">Graduate Trainee Program</h4>
                  <p className="text-[10px] text-gray-400">Applications open for pharmacy residents</p>
                </div>
              </div>
              <button 
                onClick={() => alert("Graduate Trainee application form is loading.")}
                className="p-2 bg-primary text-white rounded-xl hover:scale-105 transition-transform"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Open Positions List */}
          <div className="lg:col-span-7 lg:pl-8">
            <h3 className="font-display font-extrabold text-xl text-darknavy dark:text-white mb-8 flex items-center gap-2">
              <Briefcase size={20} className="text-primary" />
              Open Formulations Divisions Jobs
            </h3>

            {/* Jobs list */}
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-darknavy-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-sm font-extrabold text-darknavy dark:text-white">
                        {job.title}
                      </h4>
                      <span className="text-[10px] uppercase font-bold text-primary dark:text-secondary mt-0.5 block">
                        {job.dept}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-400 px-2 py-1 rounded bg-gray-100 dark:bg-white/5">
                        <MapPin size={10} />
                        {job.loc}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-400 px-2 py-1 rounded bg-gray-100 dark:bg-white/5">
                        <Award size={10} />
                        {job.exp}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    {job.desc}
                  </p>

                  <div className="flex justify-end pt-4 border-t border-gray-100 dark:border-white/5">
                    <button
                      onClick={() => setActiveJob(job)}
                      className="px-4 py-2 bg-primary/5 hover:bg-primary text-primary hover:text-white dark:bg-white/5 dark:hover:bg-secondary dark:hover:text-darknavy text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
                    >
                      Review Requirements & Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Apply Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white dark:bg-darknavy rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-darknavy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            >
              <X size={18} />
            </button>

            <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
              Position Details
            </span>
            <h3 className="font-display font-extrabold text-2xl text-darknavy dark:text-white mt-2">
              {activeJob.title}
            </h3>

            <div className="mt-6 space-y-4">
              <div>
                <span className="block text-xs font-bold text-darknavy dark:text-white">Role Summary</span>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{activeJob.desc}</p>
              </div>

              <div>
                <span className="block text-xs font-bold text-darknavy dark:text-white mb-2">Primary Prerequisites</span>
                <ul className="space-y-2">
                  {activeJob.reqs.map((req: string, i: number) => (
                    <li key={i} className="flex gap-2 items-start text-xs text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Submit application info */}
              <div className="border-t border-gray-100 dark:border-white/5 pt-6 my-6">
                <span className="block text-xs font-bold text-darknavy dark:text-white mb-2">How to Apply</span>
                <p className="text-[11px] text-gray-500 leading-snug">
                  Please email your comprehensive CV, copies of academic degrees, and professional registrations to <span className="font-bold text-primary dark:text-secondary">careers@zjans.com</span> referencing the position in the subject line.
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setActiveJob(null)}
                className="w-full py-3 bg-primary text-white hover:bg-primary-dark text-xs font-bold rounded-xl shadow-md transition-colors"
              >
                Close Job Specifications
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Careers;
