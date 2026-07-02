import React from 'react';
import { 
  Activity, Heart, Hammer, Baby, Smile, GlassWater, Wind, ActivitySquare,
  ChevronRight, ArrowRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Categories: React.FC = () => {
  const { addToComparison, comparisonItems } = useApp();

  const categoriesData = [
    {
      id: 'products-cardio',
      name: 'Cardiology',
      icon: Heart,
      color: 'from-red-500/10 to-primary/10',
      textColor: 'text-red-500 dark:text-red-400',
      sampleProduct: {
        id: 'p-cardio',
        name: 'Z-Torva (Atorvastatin)',
        category: 'Cardiology',
        activeIngredient: 'Atorvastatin Calcium',
        dosage: '10mg / 20mg / 40mg',
        packaging: '30 Tablets Alu-Alu Pack',
        efficacy: 'Reduces LDL cholesterol & protects cardiovascular pathways',
        storage: 'Store below 30°C. Protect from moisture.',
      }
    },
    {
      id: 'products-general',
      name: 'General Medicine',
      icon: Activity,
      color: 'from-primary/10 to-secondary/10',
      textColor: 'text-primary dark:text-secondary',
      sampleProduct: {
        id: 'p-general',
        name: 'Z-Mox (Amoxicillin)',
        category: 'General Medicine',
        activeIngredient: 'Amoxicillin Trihydrate',
        dosage: '250mg / 500mg',
        packaging: '20 Capsules Blister Pack',
        efficacy: 'Treats systemic bacterial infections, high bioavailability',
        storage: 'Store below 25°C in dry conditions.',
      }
    },
    {
      id: 'products-ortho',
      name: 'Orthopedics',
      icon: Hammer,
      color: 'from-orange-500/10 to-amber-500/10',
      textColor: 'text-orange-500 dark:text-amber-400',
      sampleProduct: {
        id: 'p-ortho',
        name: 'Z-Joint (Glucosamine)',
        category: 'Orthopedics',
        activeIngredient: 'Glucosamine Sulfate + Chondroitin',
        dosage: '500mg / 400mg',
        packaging: '60 Tablets HDPE Bottle',
        efficacy: 'Repairs cartilage tissues and enhances joint mobility',
        storage: 'Store in a cool dry place below 25°C.',
      }
    },
    {
      id: 'products-gynae',
      name: 'Gynecology',
      icon: Heart, // Representing health and care
      color: 'from-pink-500/10 to-purple-500/10',
      textColor: 'text-pink-500 dark:text-pink-400',
      sampleProduct: {
        id: 'p-gynae',
        name: 'Z-Folate (Folic Acid)',
        category: 'Gynecology',
        activeIngredient: 'Folic Acid USP',
        dosage: '5mg',
        packaging: '100 Tablets Bottle Pack',
        efficacy: 'Supports maternal health and fetal neurological development',
        storage: 'Protect from light and moisture. Store below 30°C.',
      }
    },
    {
      id: 'products-derma',
      name: 'Dermatology',
      icon: Smile,
      color: 'from-teal-500/10 to-accent/10',
      textColor: 'text-teal-500 dark:text-accent',
      sampleProduct: {
        id: 'p-derma',
        name: 'Z-Derm Cream (Hydrocortisone)',
        category: 'Dermatology',
        activeIngredient: 'Hydrocortisone Acetate 1%',
        dosage: '15g Tube',
        packaging: 'Aluminium Collapsible Tube',
        efficacy: 'Anti-inflammatory and antipruritic topical cream',
        storage: 'Store below 25°C. Do not freeze.',
      }
    },
    {
      id: 'products-pediatric',
      name: 'Pediatrics',
      icon: Baby,
      color: 'from-indigo-500/10 to-blue-500/10',
      textColor: 'text-indigo-500 dark:text-indigo-400',
      sampleProduct: {
        id: 'p-ped',
        name: 'Z-Pyrin Suspension',
        category: 'Pediatrics',
        activeIngredient: 'Paracetamol BP',
        dosage: '120mg / 5ml',
        packaging: '60ml Amber Glass Bottle',
        efficacy: 'Rapid antipyretic & pain relief for infants and children',
        storage: 'Store below 30°C. Protect from sunlight.',
      }
    },
    {
      id: 'products-nutrition',
      name: 'Nutrition & Health',
      icon: GlassWater,
      color: 'from-emerald-500/10 to-accent/10',
      textColor: 'text-emerald-500 dark:text-accent',
      sampleProduct: {
        id: 'p-nutri',
        name: 'Z-Vita Daily',
        category: 'Nutrition',
        activeIngredient: 'A-Z Multivitamins + Zinc + Lutein',
        dosage: '1 Tablet daily',
        packaging: '30 Film Coated Tablets Bottle',
        efficacy: 'Fills nutritional deficiencies and boosts systemic immunity',
        storage: 'Keep container tightly closed in dry conditions.',
      }
    },
    {
      id: 'products-respiratory',
      name: 'Respiratory',
      icon: Wind,
      color: 'from-sky-500/10 to-cyan-500/10',
      textColor: 'text-sky-500 dark:text-cyan-400',
      sampleProduct: {
        id: 'p-resp',
        name: 'Z-Vent Inhaler',
        category: 'Respiratory',
        activeIngredient: 'Salbutamol HFA Inhaler',
        dosage: '100mcg per puff',
        packaging: '200 Metered Doses Cannister',
        efficacy: 'Rapid relief of acute bronchospasms and asthma symptoms',
        storage: 'Store below 30°C. Do not puncture cannister.',
      }
    },
    {
      id: 'products-critical',
      name: 'Critical Care',
      icon: ActivitySquare,
      color: 'from-rose-500/10 to-red-500/10',
      textColor: 'text-rose-500 dark:text-rose-400',
      sampleProduct: {
        id: 'p-critical',
        name: 'Z-Mero IV Injection',
        category: 'Critical Care',
        activeIngredient: 'Meropenem USP Injection',
        dosage: '1g IV Vial',
        packaging: 'Single USP Type I Glass Vial',
        efficacy: 'Treats severe multi-resistant systemic infections in ICU',
        storage: 'Prior to reconstitution, store below 25°C.',
      }
    }
  ];

  return (
    <section id="products" className="py-24 bg-white dark:bg-darknavy transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
              Therapeutic Portfolio
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight">
              Premium Product Divisions
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-xs sm:text-sm">
              We manufacture across nine distinct segments. Use our comparison tool to evaluate active chemical formulations, stability standards, and efficacy targets.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-primary dark:text-secondary">
            <span>Hover to reveal sample molecule specs</span>
            <ChevronRight size={14} />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesData.map((category) => {
            const Icon = category.icon;
            const isComparing = comparisonItems.some(item => item.id === category.sampleProduct.id);

            return (
              <div
                key={category.id}
                id={category.id}
                className="relative group rounded-3xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-darknavy-card p-6 shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[380px]"
              >
                {/* Background soft color blob */}
                <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${category.color} rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-110`} />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3.5 rounded-2xl bg-white dark:bg-white/5 shadow-md flex items-center justify-center ${category.textColor}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-darknavy dark:text-white">
                        {category.name}
                      </h3>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500">
                        Z-Jans Formulation
                      </span>
                    </div>
                  </div>

                  {/* Core description block */}
                  <div className="space-y-4">
                    <div>
                      <span className="block text-[10px] font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
                        Featured Molecule
                      </span>
                      <span className="text-sm font-bold text-darknavy dark:text-white mt-1 block">
                        {category.sampleProduct.name}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] border-t border-gray-100 dark:border-white/5 pt-3">
                      <div>
                        <span className="text-gray-400 block uppercase tracking-wider font-semibold">Active API</span>
                        <span className="font-bold text-darknavy dark:text-white/80 block mt-0.5 truncate">
                          {category.sampleProduct.activeIngredient}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400 block uppercase tracking-wider font-semibold">Dosage</span>
                        <span className="font-bold text-darknavy dark:text-white/80 block mt-0.5">
                          {category.sampleProduct.dosage}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-3">
                      {category.sampleProduct.efficacy}
                    </p>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                  <a
                    href="#featured"
                    className="text-xs font-bold text-darknavy/80 hover:text-primary dark:text-white/80 dark:hover:text-secondary inline-flex items-center gap-1.5 transition-colors group/link"
                  >
                    View Showcase
                    <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>

                  <button
                    onClick={() => addToComparison(category.sampleProduct)}
                    disabled={isComparing}
                    className={`px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                      isComparing
                        ? 'bg-accent/20 text-accent cursor-not-allowed'
                        : 'bg-primary/5 hover:bg-primary dark:bg-white/5 dark:hover:bg-secondary text-primary dark:text-white dark:hover:text-darknavy'
                    }`}
                  >
                    {isComparing ? 'Comparing' : 'Compare Formulation'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Categories;
