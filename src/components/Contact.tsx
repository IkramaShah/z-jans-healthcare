import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ShieldAlert, Send, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    subject: 'General Inquiry',
    msg: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setSubmitted(true);
    // Success Confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Reset after some time
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', org: '', subject: 'General Inquiry', msg: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/50 dark:bg-darknavy-dark/40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
                Communication Portal
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight">
                Get in Touch
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4 text-xs sm:text-sm">
                Have questions regarding supply licenses, certifications, drug registrations, or bulk inquiries? Contact our team.
              </p>

              {/* Contacts info */}
              <div className="mt-8 space-y-4 text-xs">
                <div className="flex gap-4 items-center">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary dark:text-secondary">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-semibold">HQ Address</span>
                    <span className="font-bold text-darknavy dark:text-white">Plots 14-16, Industrial Phase 3, Rawalpindi, Pakistan</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary dark:text-secondary">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-semibold">Office Numbers</span>
                    <span className="font-bold text-darknavy dark:text-white">+92 (51) 555-1200 / 1201</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary dark:text-secondary">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-semibold">Corporate Email</span>
                    <span className="font-bold text-darknavy dark:text-white">info@zjans.com / sales@zjans.com</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary dark:text-secondary">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-semibold">Working Hours</span>
                    <span className="font-bold text-darknavy dark:text-white">Mon - Sat: 09:00 AM - 05:00 PM PST</span>
                  </div>
                </div>
              </div>

              {/* Emergency Alert box */}
              <div className="mt-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex gap-3 text-left">
                <ShieldAlert size={20} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-red-600 dark:text-red-400">
                    Pharmacovigilance Alert
                  </h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-normal mt-0.5">
                    To report adverse drug events or side-effects, contact our safety team directly at <span className="font-bold text-red-500">safety@zjans.com</span> or call our 24/7 helpline at +92 (300) 555-4001.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Mockup */}
            <div className="mt-8 h-48 rounded-2xl overflow-hidden relative border border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-white/[0.02]">
              <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-cover bg-center bg-mesh-gradient" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-white/40 dark:bg-black/40 backdrop-blur-[1px]">
                <MapPin size={24} className="text-primary dark:text-secondary animate-bounce mb-2" />
                <span className="text-xs font-bold text-darknavy dark:text-white">Plots 14-16, Industrial Phase 3, Rawalpindi</span>
                <span className="text-[10px] text-gray-400 mt-1">Google Maps Satellite Overlay</span>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="mt-3 px-3 py-1.5 bg-primary hover:bg-primary-dark text-white rounded-lg text-[9px] font-extrabold uppercase tracking-wider shadow-sm transition-colors"
                >
                  Get Route Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="h-full glassmorphism dark:glass-dark border border-white/20 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              
              <div>
                <h3 className="font-display font-extrabold text-xl text-darknavy dark:text-white mb-6 flex items-center gap-2">
                  <MessageSquare size={20} className="text-primary" />
                  Transmit Message
                </h3>

                {submitted ? (
                  <div className="py-16 text-center animate-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={24} className="translate-x-0.5 -translate-y-0.5 animate-pulse" />
                    </div>
                    <h4 className="font-display font-extrabold text-lg text-darknavy dark:text-white">
                      Transmission Confirmed
                    </h4>
                    <p className="text-xs text-gray-400 mt-2 max-w-sm mx-auto leading-relaxed">
                      Your query has been logged in our secure system. A regulatory liaison officer will contact your organization within 12 working hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="e.g. Dr. Alexander"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] text-xs focus:border-primary focus:outline-none dark:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="e.g. alex@hospital.org"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] text-xs focus:border-primary focus:outline-none dark:text-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                          Organization / Clinic
                        </label>
                        <input
                          type="text"
                          value={formData.org}
                          onChange={(e) => setFormData({...formData, org: e.target.value})}
                          placeholder="e.g. Global Health Inc."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] text-xs focus:border-primary focus:outline-none dark:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                          Subject Parameter
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-darknavy-card text-xs focus:border-primary focus:outline-none dark:text-white transition-colors"
                        >
                          <option>General Inquiry</option>
                          <option>Distribution / Logistics Partnership</option>
                          <option>Regulatory & DMF Inquiries</option>
                          <option>Export / Bulk Formulation Quotes</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-1">
                        Message Body <span className="text-primary">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.msg}
                        onChange={(e) => setFormData({...formData, msg: e.target.value})}
                        placeholder="Detail your request here. Include specific drug names or registration requirements."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] text-xs focus:border-primary focus:outline-none dark:text-white transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Send size={14} />
                      Transmit Inquiry
                    </button>
                  </form>
                )}
              </div>

              <span className="text-[10px] text-gray-400 mt-6 block text-center leading-normal">
                By submitting this form, you acknowledge that your personal and organizational credentials will be securely logged in compliance with pharmaceutical data retention acts.
              </span>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
