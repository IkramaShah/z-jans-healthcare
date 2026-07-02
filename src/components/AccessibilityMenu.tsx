import React, { useState } from 'react';
import { Eye, HelpCircle, X, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AccessibilityMenu: React.FC = () => {
  const { textSize, toggleTextSize, highContrast, toggleHighContrast } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-24 z-40 flex flex-col items-end">
      {/* Floating Trigger Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Accessibility controls"
          className="p-3 bg-white dark:bg-darknavy-card text-primary dark:text-secondary rounded-full shadow-2xl border border-primary/20 hover:scale-110 hover:shadow-primary/30 transition-all duration-300 focus:outline-none"
        >
          <Eye size={20} className="animate-pulse" />
        </button>
      )}

      {/* Control Panel Menu */}
      {open && (
        <div className="w-64 glassmorphism dark:glass-dark border border-white/20 dark:border-white/10 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/5 mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
              Accessibility Settings
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg text-gray-400 hover:text-darknavy dark:hover:text-white transition-all"
            >
              <X size={14} />
            </button>
          </div>

          <div className="space-y-4">
            {/* Font Size Selector */}
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Font Size scaling
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => textSize !== 'normal' && toggleTextSize()}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                    textSize === 'normal'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  Normal
                </button>
                <button
                  onClick={() => textSize !== 'large' && toggleTextSize()}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                    textSize === 'large'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  Large (1.12x)
                </button>
              </div>
            </div>

            {/* Contrast Mode Selector */}
            <div>
              <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                Contrast Mode
              </span>
              <button
                onClick={toggleHighContrast}
                className={`w-full py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-between transition-all ${
                  highContrast
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-gray-200'
                }`}
              >
                <span>High Contrast Filter</span>
                {highContrast && <Check size={14} />}
              </button>
            </div>

            {/* Keyboard Guidelines helper */}
            <div className="border-t border-gray-100 dark:border-white/5 pt-3 text-[10px] text-gray-500 leading-normal flex items-start gap-1">
              <HelpCircle size={12} className="text-primary shrink-0 mt-0.5" />
              <span>Use standard <strong className="text-darknavy dark:text-white">Tab</strong> and <strong className="text-darknavy dark:text-white">Enter</strong> keys to navigate through menus and links.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AccessibilityMenu;
