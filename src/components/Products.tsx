import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Star, Award, Package } from 'lucide-react';
import { parseProductCSV } from '../utils/csvParser';
import type { CSVProduct } from '../utils/csvParser';
import { useApp } from '../context/AppContext';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<CSVProduct[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const { setDistributorOpen } = useApp();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    parseProductCSV('/zjanshealthcare.csv').then(setProducts);
  }, []);

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'supplements', label: 'Supplements' },
    { id: 'skincare', label: 'Skincare' },
    { id: 'wellness', label: 'Wellness' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'new', label: 'New Arrivals' },
    { id: 'bestsellers', label: 'Best Sellers' },
  ];

  // Simple filter logic (you can enhance this based on actual product categories)
  const filteredProducts = filter === 'all' ? products : products;

  return (
    <section id="products" className="py-24 bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary flex items-center justify-center gap-2 mb-4">
            <Package size={14} />
            Product Portfolio
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-medical-text leading-tight mb-4">
            Our Premium Products
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Browse our comprehensive range of pharmaceutical-grade products, each crafted with precision and backed by rigorous quality standards.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                filter === f.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                  : 'bg-white text-medical-text border-2 border-slate-200 hover:border-primary hover:shadow-md hover:scale-105'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Product Showcase */}
        <div className="relative mb-24">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50/50 dark:from-darknavy-dark/40 to-transparent z-10 pointer-events-none" />
          
          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50/50 dark:from-darknavy-dark/40 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-4 py-2"
            style={{ 
              scrollBehavior: 'smooth',
            }}
          >
            {products.concat(products).map((product, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-80 group relative rounded-3xl overflow-hidden cursor-pointer bg-white dark:bg-darknavy-card border border-gray-200/50 dark:border-white/5 hover:shadow-2xl hover:border-primary dark:hover:border-secondary transition-all duration-500"
              >
                {/* Product Image */}
                <div className="relative h-72 overflow-hidden bg-gray-100 dark:bg-white/5">
                  <img 
                    src={product.src || 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=800'} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darknavy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-accent/90 backdrop-blur-sm text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                      <Award size={12} />
                      GMP Certified
                    </span>
                  </div>

                  {/* Quick Action Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => setDistributorOpen(true)}
                      className="p-3 rounded-xl bg-primary hover:bg-primary-dark text-white shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    {product.caption}
                  </span>
                  <h3 className="font-display font-extrabold text-lg text-darknavy dark:text-white mt-2 mb-3 line-clamp-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                    {product.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">(4.9)</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                    <div>
                      <span className="text-xs text-gray-400 block">Price</span>
                      <span className="text-xl font-extrabold text-primary dark:text-secondary">
                        {product.price}
                      </span>
                    </div>
                    <a
                      href={product.href}
                      className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-primary dark:hover:bg-secondary text-darknavy dark:text-white hover:text-white text-sm font-bold transition-all duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Standard Grid Layout for Filtered Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white dark:bg-darknavy-card border border-gray-200/50 dark:border-white/5 hover:shadow-2xl hover:border-primary dark:hover:border-secondary transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-white/5">
                <img 
                  src={product.src || 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600'} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-darknavy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm text-white text-xs font-bold">
                    ✓ Certified
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  {product.caption}
                </span>
                <h3 className="font-display font-bold text-base text-darknavy dark:text-white mt-2 mb-3 line-clamp-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/5">
                  <span className="text-lg font-extrabold text-primary dark:text-secondary">
                    {product.price}
                  </span>
                  <a
                    href={product.href}
                    className="text-sm font-bold text-darknavy dark:text-white hover:text-primary dark:hover:text-secondary transition-colors"
                  >
                    Details →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
