import React, { useState, useEffect } from 'react';
import { ArrowUp, Send, MessageCircle, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setDistributorOpen } = useApp();
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('zjans-cookie-consent');
    if (!consent) {
      setCookieConsent(false);
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    setTimeout(() => {
      alert("Subscribed! You will receive our scientific newsletters.");
      setSubscribing(false);
      setEmail('');
    }, 1500);
  };

  const acceptCookies = () => {
    localStorage.setItem('zjans-cookie-consent', 'accepted');
    setCookieConsent(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-darknavy text-white transition-colors duration-500 pt-20 border-t border-white/5 overflow-hidden">
      
      {/* Mesh Glow Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Newsletter & Headline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-center">
          
          <div className="lg:col-span-6 text-left">
            <h3 className="font-display font-extrabold text-2xl tracking-tight">
              Stay Updated with Z-Jans Scientific Research
            </h3>
            <p className="text-gray-400 mt-2 text-xs leading-relaxed max-w-md">
              Receive news on new molecular certifications, formulation pipelines, and global drug approvals directly to your inbox.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter corporate email address"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                disabled={subscribing}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-all shrink-0"
              >
                <Send size={12} />
                <span>{subscribing ? 'Subbing' : 'Subscribe'}</span>
              </button>
            </form>
          </div>

        </div>

        {/* Detailed Site Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-16 text-left text-xs">
          
          {/* Col 1: Corporate Brand */}
          <div className="col-span-2 flex flex-col items-start gap-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-secondary text-white font-display font-extrabold text-xl tracking-tighter shadow-md shadow-primary/20">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-wide text-white leading-none">
                  Z-JANS
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-secondary mt-0.5">
                  HEALTHCARE
                </span>
              </div>
            </a>
            <p className="text-gray-400 leading-relaxed max-w-xs mt-2">
              Pioneering international-grade pharmaceutical compounding. DRAP, WHO GMP, and ISO accredited manufacturer.
            </p>
            <div className="flex gap-3 text-gray-400 mt-2">
              <a href="#facebook" aria-label="Facebook link" className="hover:text-primary transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a href="#twitter" aria-label="Twitter link" className="hover:text-secondary transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#linkedin" aria-label="LinkedIn link" className="hover:text-secondary transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Products Links */}
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-secondary mb-4">Therapeutics</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li><a href="#products-cardio" className="hover:text-white transition-colors">Cardiology division</a></li>
              <li><a href="#products-general" className="hover:text-white transition-colors">General Medicine</a></li>
              <li><a href="#products-ortho" className="hover:text-white transition-colors">Orthopedics</a></li>
              <li><a href="#products-derma" className="hover:text-white transition-colors">Dermatology</a></li>
              <li><a href="#products-critical" className="hover:text-white transition-colors">Critical Care</a></li>
            </ul>
          </div>

          {/* Col 3: Research Links */}
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-secondary mb-4">Research & QA</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li><a href="#research" className="hover:text-white transition-colors">R&D Pipeline</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Bio-equivalence studies</a></li>
              <li><a href="#quality" className="hover:text-white transition-colors">Quality Control Lab</a></li>
              <li><a href="#quality" className="hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Col 4: Corporate info */}
          <div>
            <h4 className="font-extrabold uppercase tracking-wider text-secondary mb-4">Enterprise</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About History</a></li>
              <li><a href="#csr" className="hover:text-white transition-colors">CSR Impact</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Open Positions</a></li>
              <li><button onClick={() => setDistributorOpen(true)} className="hover:text-white text-left transition-colors">Distributor portal</button></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Details</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row md:items-center justify-between text-[11px] text-gray-500 gap-4 text-left">
          <span>&copy; {new Date().getFullYear()} Z-Jans Healthcare Ltd. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#terms" className="hover:underline">Terms of Supply</a>
            <a href="#privacy" className="hover:underline">Privacy & FDA compliance Policies</a>
            <a href="#pharmacovigilance" className="hover:underline">Pharmacovigilance Guidelines</a>
          </div>
        </div>

      </div>

      {/* Floating Buttons: Back-to-Top and WhatsApp Support */}
      <div className="fixed left-6 bottom-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/923005554001"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact WhatsApp Safety desk"
          className="p-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform focus:outline-none flex items-center justify-center"
        >
          <MessageCircle size={20} />
        </a>
      </div>

      <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-3">
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="p-3 bg-white dark:bg-darknavy-card text-darknavy dark:text-white rounded-full shadow-2xl border border-gray-200 dark:border-white/10 hover:scale-110 transition-all focus:outline-none"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      {/* Cookie Consent overlay */}
      {!cookieConsent && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-24 z-50 max-w-sm glass-dark border border-white/10 rounded-2xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-300 flex items-start gap-4">
          <div className="p-2 bg-primary/20 text-secondary rounded-xl shrink-0 mt-0.5">
            <AlertCircle size={16} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Regulatory Cookie Policy</h4>
            <p className="text-[10px] text-gray-400 leading-relaxed mt-1">
              We use analytics cookies to monitor site performance and ensure safe distributor transactions.
            </p>
            <div className="flex gap-2 mt-3 justify-end">
              <button
                onClick={acceptCookies}
                className="px-3.5 py-1.5 bg-primary text-white hover:bg-primary-dark rounded-lg text-[9px] font-extrabold uppercase tracking-wider transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
export default Footer;
