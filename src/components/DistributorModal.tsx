import React, { useState } from 'react';
import { X, Send, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';

export const DistributorModal: React.FC = () => {
  const { distributorOpen, setDistributorOpen } = useApp();
  const [formData, setFormData] = useState({
    company: '',
    country: '',
    license: '',
    value: 'Below $100K',
    contact: '',
    email: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!distributorOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.company || !formData.country || !formData.license || !formData.contact || !formData.email) {
      alert("Please fill in all required license validation fields.");
      return;
    }

    setSubmitted(true);
    // Double Confetti blast!
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => {
      confetti({ particleCount: 50, spread: 80, origin: { y: 0.4 } });
    }, 200);

    setTimeout(() => {
      setSubmitted(false);
      setDistributorOpen(false);
      setFormData({
        company: '',
        country: '',
        license: '',
        value: 'Below $100K',
        contact: '',
        email: '',
        notes: ''
      });
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300">
      <div className="w-full max-w-lg glassmorphism dark:glass-dark border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={() => setDistributorOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-darknavy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} className="animate-pulse" />
            </div>
            <h3 className="font-display font-extrabold text-2xl text-darknavy dark:text-white">
              Application Transmitted
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 max-w-sm mx-auto leading-relaxed">
              Your license details have been sent to our Compliance Board. Our regulatory desk will verify the drug licensing registers in your jurisdiction and email your login keys shortly.
            </p>
          </div>
        ) : (
          <div>
            {/* Header info */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 text-primary dark:text-secondary rounded-2xl">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-xl text-darknavy dark:text-white">
                  Distributor Registration
                </h3>
                <p className="text-xs text-gray-400">
                  Verify licensing credentials to establish wholesale agreements
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                    Company Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="e.g. MedLink Dubai Ltd"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] text-xs focus:border-primary focus:outline-none dark:text-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                    Operating Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    placeholder="e.g. United Arab Emirates"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] text-xs focus:border-primary focus:outline-none dark:text-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                    Drug Distribution License # *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.license}
                    onChange={(e) => setFormData({...formData, license: e.target.value})}
                    placeholder="e.g. MOH/AE/55681"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] text-xs focus:border-primary focus:outline-none dark:text-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                    Estimated Annual Volume
                  </label>
                  <select
                    value={formData.value}
                    onChange={(e) => setFormData({...formData, value: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-darknavy-card text-xs focus:border-primary focus:outline-none dark:text-white transition-colors"
                  >
                    <option>Below $100K</option>
                    <option>$100K - $500K</option>
                    <option>$500K - $2M</option>
                    <option>Above $2M</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    placeholder="e.g. Ms. Fatima Al-Mansoori"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] text-xs focus:border-primary focus:outline-none dark:text-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                    Professional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="e.g. fatima@medlink.com"
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] text-xs focus:border-primary focus:outline-none dark:text-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                  Specific molecule needs or comments
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  placeholder="e.g. Interested in Atorvastatin bulk pricing and stability profiles."
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] text-xs focus:border-primary focus:outline-none dark:text-white transition-colors resize-none"
                />
              </div>

              <div className="flex items-start gap-2 text-[10px] text-gray-400 leading-snug border-t border-gray-100 dark:border-white/5 pt-4">
                <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                <span>By submitting, you consent to let Z-Jans verify your distributor credentials on official health ministry databases.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Send size={12} />
                Submit Credentials
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default DistributorModal;
