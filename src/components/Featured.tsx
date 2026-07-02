import React, { useState } from 'react';
import { Pill, FileText, Send, Info, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Featured: React.FC = () => {
  const { setDistributorOpen } = useApp();
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const featuredProducts = [
    {
      id: 'fp-1',
      name: 'Z-Torva (Atorvastatin)',
      category: 'Cardiology',
      description: 'Used alongside diet to lower cholesterol, LDLs, and triglycerides while raising HDL levels.',
      strength: '10mg / 20mg / 40mg',
      packaging: '3 x 10 Alu-Alu Tablets',
      status: 'In Stock - Export Ready',
      cert: 'WHO GMP Compliant',
    },
    {
      id: 'fp-2',
      name: 'Z-Mox (Amoxicillin)',
      category: 'General Medicine / Antibiotics',
      description: 'Broad spectrum penicillin antibiotic indicated for infections of ears, throat, skin, and urinary tract.',
      strength: '250mg / 500mg Capsules',
      packaging: '2 x 10 Blister Pack',
      status: 'In Stock - Export Ready',
      cert: 'ISO 9001 Certified',
    },
    {
      id: 'fp-3',
      name: 'Z-Joint Formula',
      category: 'Orthopedics / Joint Health',
      description: 'High-purity crystalline glucosamine sulfate blended with chondroitin to stimulate joint cartilage recovery.',
      strength: '500mg + 400mg Coated Tablets',
      packaging: '60 Tablets HDPE Bottle',
      status: 'In Stock - Regional Sales Only',
      cert: 'GMP Accredited',
    },
    {
      id: 'fp-4',
      name: 'Z-Derm Topical Cream',
      category: 'Dermatology / Anti-inflammatory',
      description: 'Steroid-based hydrocortisone formulation designed to reduce swelling, itchiness, and skin redness.',
      strength: '1% w/w cream, 15g',
      packaging: 'Aluminium Laminated Tube',
      status: 'In Stock - Export Ready',
      cert: 'DRAP Registered',
    }
  ];

  return (
    <section id="featured" className="py-24 bg-white dark:bg-darknavy transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
              Product Showcase
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight">
              Featured Formulations
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-xs sm:text-sm">
              Explore our core therapeutic brands. Manufactured using bio-available chemical compounds and packed under strict sterility standards.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group rounded-3xl border border-gray-200/50 dark:border-white/5 bg-white dark:bg-darknavy-card p-6 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between min-h-[460px] overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              {/* Medicine Capsule Illustration Overlay */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                <Pill size={28} className="group-hover:rotate-12 transition-transform" />
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-600 dark:text-gray-400">
                  {product.category}
                </span>

                <h3 className="font-display font-extrabold text-lg text-darknavy dark:text-white mt-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>

                <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 text-[10px] font-bold">
                  <CheckCircle2 size={12} />
                  <span>{product.cert}</span>
                </div>

                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mt-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Packaging details table */}
                <div className="mt-6 border-t border-slate-200 dark:border-white/5 pt-4 space-y-2 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-gray-400">Strength</span>
                    <span className="font-bold text-darknavy dark:text-white/80">{product.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-gray-400">Packaging</span>
                    <span className="font-bold text-darknavy dark:text-white/80">{product.packaging}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 dark:text-gray-400">Status</span>
                    <span className="font-bold text-primary dark:text-secondary">{product.status}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 space-y-2">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-2.5 rounded-xl border border-slate-300 dark:border-white/10 hover:border-primary dark:hover:border-secondary text-xs font-bold text-darknavy dark:text-white flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-all"
                >
                  <Info size={14} />
                  Learn More
                </button>

                <button
                  onClick={() => setDistributorOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <Send size={12} />
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Info Modal popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white dark:bg-darknavy rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-2xl relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-darknavy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            >
              <FileText size={18} />
            </button>

            <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
              Product Monograph
            </span>
            <h3 className="font-display font-extrabold text-2xl text-darknavy dark:text-white mt-2">
              {selectedProduct.name}
            </h3>

            <div className="mt-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <span className="block text-xs font-bold text-darknavy dark:text-white">Indications & Usage</span>
                <p className="mt-1 text-xs leading-relaxed">{selectedProduct.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-y border-gray-100 dark:border-white/5 py-4 my-4">
                <div>
                  <span className="text-[10px] font-bold uppercase text-gray-400 block">Dosage Strength</span>
                  <span className="font-bold text-darknavy dark:text-white text-xs mt-1 block">{selectedProduct.strength}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase text-gray-400 block">Accreditation</span>
                  <span className="font-bold text-green-600 dark:text-green-400 text-xs mt-1 block">{selectedProduct.cert}</span>
                </div>
              </div>
              <div>
                <span className="block text-xs font-bold text-darknavy dark:text-white">Safety Warning</span>
                <p className="mt-1 text-[11px] text-gray-500 leading-snug">
                  Prescription-only medicine (POM). To be dispensed only under clinical supervision of registered medical practitioners.
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="flex-1 py-3 border border-gray-200 dark:border-white/10 text-xs font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 text-darknavy dark:text-white transition-colors"
              >
                Close Monograph
              </button>
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setDistributorOpen(true);
                }}
                className="flex-1 py-3 bg-primary text-white hover:bg-primary-dark text-xs font-bold rounded-xl shadow-md transition-colors"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default Featured;
