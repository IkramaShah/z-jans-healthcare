import React, { useState } from 'react';
import { X, GitCompare, RefreshCw, Send } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ProductComparison: React.FC = () => {
  const { 
    comparisonItems, 
    removeFromComparison, 
    clearComparison, 
    comparisonBarOpen, 
    setComparisonBarOpen,
    setDistributorOpen
  } = useApp();

  const [expanded, setExpanded] = useState(false);

  if (comparisonItems.length === 0 || !comparisonBarOpen) return null;

  return (
    <>
      {/* Floating Minimize Tray at bottom */}
      {!expanded && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-2xl glassmorphism dark:glass-dark rounded-2xl border border-primary/20 shadow-2xl p-4 flex items-center justify-between animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl text-primary dark:text-secondary">
              <GitCompare size={18} />
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-darknavy dark:text-white block">
                Formulation Comparison
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400">
                {comparisonItems.length} of 3 items selected
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={clearComparison}
              className="p-2 rounded-xl text-xs font-bold text-gray-400 hover:text-darknavy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              <RefreshCw size={14} />
            </button>
            <button
              onClick={() => setExpanded(true)}
              className="px-4 py-2 bg-primary text-white hover:bg-primary-dark text-[11px] font-extrabold uppercase tracking-wider rounded-xl shadow-md transition-all"
            >
              Compare Side-by-Side
            </button>
            <button
              onClick={() => setComparisonBarOpen(false)}
              className="p-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-500/5 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Expanded Comparison Full-Screen Modal */}
      {expanded && (
        <div className="fixed inset-0 z-50 bg-darknavy/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300">
          <div className="w-full max-w-5xl glassmorphism dark:glass-dark border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 relative">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-white/5 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-2xl text-primary dark:text-secondary">
                  <GitCompare size={24} />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-darknavy dark:text-white">
                    API & Formulation Comparison
                  </h3>
                  <p className="text-xs text-gray-400">
                    Detailed pharmacological parameters comparison
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={clearComparison}
                  className="px-3 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-widest text-gray-400 hover:text-darknavy dark:hover:text-white border border-gray-200 dark:border-white/5 transition-colors"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setExpanded(false)}
                  className="p-2 rounded-xl text-gray-400 hover:text-darknavy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Comparison Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border border-gray-200/50 dark:border-white/5 rounded-2xl p-4 bg-gray-50/20 dark:bg-white/[0.01]">
              
              {/* Parameter Labels (Column 1) */}
              <div className="hidden md:flex flex-col gap-6 font-bold text-xs uppercase tracking-wider text-gray-400 pt-[72px]">
                <div className="h-10 flex items-center">Active API</div>
                <div className="h-10 flex items-center">Dosage Form</div>
                <div className="h-10 flex items-center">Packaging</div>
                <div className="h-10 flex items-center">Clinical Efficacy</div>
                <div className="h-14 flex items-center">Storage Specs</div>
                <div className="h-10 flex items-center">Inquiry</div>
              </div>

              {/* Items Columns (Columns 2-4) */}
              {comparisonItems.map((item) => (
                <div key={item.id} className="relative flex flex-col gap-6 bg-white/40 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-xl p-5 shadow-sm">
                  {/* Delete Item button */}
                  <button
                    onClick={() => removeFromComparison(item.id)}
                    className="absolute top-2 right-2 p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-500/5 transition-colors"
                  >
                    <X size={14} />
                  </button>

                  {/* Header info */}
                  <div className="h-12 flex flex-col justify-center">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-extrabold text-darknavy dark:text-white leading-tight mt-1 truncate">
                      {item.name}
                    </h4>
                  </div>

                  {/* Mobile labels shown inline */}
                  <div className="flex flex-col gap-6 text-xs text-darknavy dark:text-white/80">
                    <div className="h-10 flex flex-col justify-center">
                      <span className="md:hidden text-[9px] uppercase tracking-wider text-gray-400 block mb-0.5">Active API</span>
                      <span className="font-bold">{item.activeIngredient}</span>
                    </div>
                    <div className="h-10 flex flex-col justify-center">
                      <span className="md:hidden text-[9px] uppercase tracking-wider text-gray-400 block mb-0.5">Dosage Form</span>
                      <span className="font-bold">{item.dosage}</span>
                    </div>
                    <div className="h-10 flex flex-col justify-center">
                      <span className="md:hidden text-[9px] uppercase tracking-wider text-gray-400 block mb-0.5">Packaging</span>
                      <span>{item.packaging}</span>
                    </div>
                    <div className="h-10 flex flex-col justify-center leading-tight">
                      <span className="md:hidden text-[9px] uppercase tracking-wider text-gray-400 block mb-0.5">Clinical Efficacy</span>
                      <span className="line-clamp-2">{item.efficacy}</span>
                    </div>
                    <div className="h-14 flex flex-col justify-center leading-tight">
                      <span className="md:hidden text-[9px] uppercase tracking-wider text-gray-400 block mb-0.5">Storage Specs</span>
                      <span className="text-gray-500 dark:text-gray-400">{item.storage}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="h-10 flex items-center mt-2">
                    <button
                      onClick={() => {
                        setExpanded(false);
                        setDistributorOpen(true);
                      }}
                      className="w-full py-2.5 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/10 text-white rounded-xl text-[10px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-300"
                    >
                      <Send size={10} />
                      Bulk Quote
                    </button>
                  </div>
                </div>
              ))}

              {/* Empty slot triggers search or closing */}
              {Array.from({ length: Math.max(0, 3 - comparisonItems.length) }).map((_, idx) => (
                <div key={idx} className="hidden md:flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-white/10 rounded-xl p-5 min-h-[300px] text-center">
                  <GitCompare size={24} className="text-gray-300 dark:text-gray-700 animate-pulse mb-3" />
                  <span className="text-xs font-bold text-gray-400">Empty Slot</span>
                  <p className="text-[10px] text-gray-400 max-w-[120px] mt-1 leading-snug">
                    Select another category card to compare
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      )}
    </>
  );
};
export default ProductComparison;
