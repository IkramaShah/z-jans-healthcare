import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { parseProductCSV } from '../utils/csvParser';
import type { CSVProduct } from '../utils/csvParser';

export const ProductShowcase: React.FC = () => {
  const [products, setProducts] = useState<CSVProduct[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    parseProductCSV('/zjanshealthcare.csv').then(setProducts);
  }, []);

  // Take first 4 products for showcase
  const featuredProducts = products.slice(0, 4);

  if (featuredProducts.length === 0) {
    return null;
  }

  return (
    <section id="product-showcase" className="py-24 bg-white transition-colors duration-500 relative overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-mesh-gradient pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary flex items-center gap-2 mb-4">
            <Sparkles size={14} />
            Premium Collection
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-medical-text leading-tight mb-6">
            Featured Products
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our most trusted formulations, crafted with precision and backed by scientific research. Each product meets the highest pharmaceutical standards.
          </p>
        </div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Large Featured Product */}
          {featuredProducts[0] && (
            <div 
              className="lg:col-span-7 lg:row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredProduct(0)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={featuredProducts[0].src || 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=1200'} 
                  alt={featuredProducts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darknavy via-darknavy/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full min-h-[600px] p-8 flex flex-col justify-between">
                {/* Top Badges */}
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm text-accent text-xs font-extrabold uppercase tracking-wider flex items-center gap-2">
                    <Award size={14} />
                    Best Seller
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-bold border border-white/20">
                    GMP Certified
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="text-white">
                  <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">
                    Premium Formula
                  </span>
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 mb-4 group-hover:text-secondary transition-colors">
                    {featuredProducts[0].title}
                  </h3>
                  <p className="text-base text-gray-200 mb-6 max-w-md">
                    Scientifically formulated for maximum efficacy and bioavailability. Trusted by healthcare professionals worldwide.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-secondary">
                      {featuredProducts[0].price}
                    </span>
                    <a
                      href={featuredProducts[0].href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all duration-300 hover:gap-4"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 border-2 border-transparent rounded-3xl transition-all duration-500 pointer-events-none ${
                hoveredProduct === 0 ? 'border-primary shadow-2xl shadow-primary/30' : ''
              }`} />
            </div>
          )}

          {/* Smaller Featured Products Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {featuredProducts.slice(1, 4).map((product, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProduct(idx + 1)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={product.src || 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=800'} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darknavy via-darknavy/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full min-h-[280px] p-6 flex flex-col justify-between">
                  {/* Top Badge */}
                  <div className="flex justify-end">
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                      <ShieldCheck size={20} />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="text-white">
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      {product.caption}
                    </span>
                    <h4 className="font-display font-extrabold text-xl mt-2 mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {product.title}
                    </h4>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-extrabold text-secondary">
                        {product.price}
                      </span>
                      <a
                        href={product.href}
                        className="p-2 rounded-lg bg-primary/20 hover:bg-primary text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                      >
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 border-2 border-transparent rounded-3xl transition-all duration-500 pointer-events-none ${
                  hoveredProduct === idx + 1 ? 'border-secondary shadow-2xl shadow-secondary/30' : ''
                }`} />
              </div>
            ))}
          </div>

        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider glassmorphism dark:glass-dark border border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-secondary text-darknavy dark:text-white hover:shadow-xl transition-all duration-300 group"
          >
            View Full Catalogue
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
