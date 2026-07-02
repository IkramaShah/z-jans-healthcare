import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SearchModal: React.FC = () => {
  const { searchOpen, setSearchOpen, addToComparison } = useApp();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const database = [
    {
      id: 'db-1',
      name: 'Z-Torva (Atorvastatin)',
      category: 'Cardiology',
      activeIngredient: 'Atorvastatin Calcium',
      dosage: '10mg / 20mg / 40mg',
      packaging: '30 Tablets Alu Pack',
      efficacy: 'Reduces LDL cholesterol & protects cardiovascular pathways',
      storage: 'Store below 30°C. Protect from moisture.',
    },
    {
      id: 'db-2',
      name: 'Z-Mox (Amoxicillin)',
      category: 'General Medicine',
      activeIngredient: 'Amoxicillin Trihydrate',
      dosage: '250mg / 500mg',
      packaging: '20 Capsules Blister Pack',
      efficacy: 'Broad-spectrum anti-infective with high bioavailability',
      storage: 'Store below 25°C in dry conditions.',
    },
    {
      id: 'db-3',
      name: 'Z-Joint Formula (Glucosamine)',
      category: 'Orthopedics',
      activeIngredient: 'Glucosamine Sulfate + Chondroitin',
      dosage: '500mg / 400mg',
      packaging: '60 Tablets HDPE Bottle',
      efficacy: 'Repairs joint cartilage tissues and enhances mobility',
      storage: 'Store in a cool dry place below 25°C.',
    },
    {
      id: 'db-4',
      name: 'Z-Folate (Folic Acid)',
      category: 'Gynecology',
      activeIngredient: 'Folic Acid USP',
      dosage: '5mg',
      packaging: '100 Tablets Bottle Pack',
      efficacy: 'Supports maternal health and fetal neurological development',
      storage: 'Protect from light and moisture. Store below 30°C.',
    },
    {
      id: 'db-5',
      name: 'Z-Derm Cream (Hydrocortisone)',
      category: 'Dermatology',
      activeIngredient: 'Hydrocortisone Acetate 1%',
      dosage: '15g Tube',
      packaging: 'Aluminium Collapsible Tube',
      efficacy: 'Anti-inflammatory and antipruritic topical cream',
      storage: 'Store below 25°C. Do not freeze.',
    },
    {
      id: 'db-6',
      name: 'Z-Pyrin Suspension (Paracetamol)',
      category: 'Pediatrics',
      activeIngredient: 'Paracetamol BP',
      dosage: '120mg / 5ml',
      packaging: '60ml Amber Glass Bottle',
      efficacy: 'Rapid antipyretic & pain relief for infants and children',
      storage: 'Store below 30°C. Protect from sunlight.',
    },
    {
      id: 'db-7',
      name: 'Z-Vita Daily',
      category: 'Nutrition',
      activeIngredient: 'A-Z Multivitamins + Zinc + Lutein',
      dosage: '1 Tablet daily',
      packaging: '30 Film Coated Tablets Bottle',
      efficacy: 'Fills nutritional deficiencies and boosts systemic immunity',
      storage: 'Keep container tightly closed in dry conditions.',
    },
    {
      id: 'db-8',
      name: 'Z-Vent Inhaler (Salbutamol)',
      category: 'Respiratory',
      activeIngredient: 'Salbutamol HFA Inhaler',
      dosage: '100mcg per puff',
      packaging: '200 Metered Doses Cannister',
      efficacy: 'Rapid relief of acute bronchospasms and asthma symptoms',
      storage: 'Store below 30°C. Do not puncture.',
    },
    {
      id: 'db-9',
      name: 'Z-Mero Injection (Meropenem)',
      category: 'Critical Care',
      activeIngredient: 'Meropenem USP Injection',
      dosage: '1g IV Vial',
      packaging: 'Single USP Type I Glass Vial',
      efficacy: 'Treats severe multi-resistant systemic infections in ICU',
      storage: 'Prior to reconstitution, store below 25°C.',
    }
  ];

  // Auto focus input on search modal open
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  // Real-time search filter matching
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const cleanQuery = query.toLowerCase();
    const matches = database.filter(item => 
      item.name.toLowerCase().includes(cleanQuery) ||
      item.category.toLowerCase().includes(cleanQuery) ||
      item.activeIngredient.toLowerCase().includes(cleanQuery)
    );
    setResults(matches);
  }, [query]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-darknavy/80 backdrop-blur-md flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-300">
      <div className="w-full max-w-2xl glassmorphism dark:glass-dark border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-200 dark:border-white/5 flex items-center gap-3 relative">
          <Search size={20} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search brand, molecule, or therapeutic category..."
            className="w-full bg-transparent border-none text-sm dark:text-white placeholder-gray-400 focus:outline-none"
          />
          <div className="flex items-center gap-1 bg-primary/10 text-primary dark:text-secondary px-2.5 py-1 rounded-lg text-[9px] font-extrabold uppercase tracking-widest shrink-0">
            <Sparkles size={10} className="animate-pulse" />
            <span>AI Assist</span>
          </div>
          <button
            onClick={() => {
              setQuery('');
              setSearchOpen(false);
            }}
            className="p-1 rounded-lg text-gray-400 hover:text-darknavy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {query === '' ? (
            <div className="py-12 text-center text-gray-400 text-xs">
              <Sparkles size={24} className="mx-auto mb-3 text-primary animate-bounce" />
              <span>Search across our catalog of therapeutic molecules.</span>
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {['Atorvastatin', 'Amoxicillin', 'Joint Repair', 'Inhaler', 'Sterile IV'].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 text-[10px] font-bold text-gray-500 hover:text-primary dark:hover:text-secondary transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-xs flex flex-col items-center">
              <AlertCircle size={24} className="text-amber-500 mb-3" />
              <span>No match found for "{query}".</span>
              <span className="text-[10px] text-gray-500 mt-1 max-w-[280px]">
                Verify chemical spelling or type categories like Cardiology or Critical Care.
              </span>
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl border border-gray-100 dark:border-white/5 bg-white/40 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-darknavy-card hover:shadow-lg transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center group"
              >
                <div className="sm:col-span-8">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
                      {item.category}
                    </span>
                    <span className="text-[9px] font-bold text-gray-400 border border-gray-200 dark:border-white/10 px-1.5 py-0.25 rounded">
                      POM
                    </span>
                  </div>
                  <h4 className="font-display font-extrabold text-sm text-darknavy dark:text-white mt-1 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-1 leading-snug">
                    API: <strong className="text-darknavy dark:text-white/80">{item.activeIngredient}</strong> &bull; {item.efficacy}
                  </p>
                </div>

                <div className="sm:col-span-4 flex sm:justify-end gap-2">
                  <button
                    onClick={() => {
                      addToComparison(item);
                      setSearchOpen(false);
                    }}
                    className="px-3 py-1.5 bg-primary text-white text-[10px] font-extrabold uppercase tracking-wider rounded-lg shadow hover:bg-primary-dark transition-all"
                  >
                    Compare
                  </button>
                  <button
                    onClick={() => {
                      setSearchOpen(false);
                      // Smooth scroll to the specific product section in Categories
                      const el = document.getElementById(`products-${item.category.toLowerCase().replace(' ', '')}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-2 border border-gray-200 dark:border-white/10 rounded-lg text-gray-400 hover:text-darknavy dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                  >
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
export default SearchModal;
