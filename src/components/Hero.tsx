import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Shield, Award, Microscope, Heart, CheckCircle } from 'lucide-react';
import { parseProductCSV } from '../utils/csvParser';
import type { CSVProduct } from '../utils/csvParser';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<CSVProduct[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Load products from CSV
  useEffect(() => {
    parseProductCSV('/zjanshealthcare.csv').then((data) => {
      setProducts(data.slice(0, 4)); // Take first 4 products
    });
  }, []);

  // Intersection Observer for performance - only animate when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const certifications = [
    { icon: Shield, label: 'GMP Certified' },
    { icon: Award, label: 'ISO Certified' },
    { icon: Microscope, label: 'WHO Standards' },
    { icon: Heart, label: 'Research Driven' },
    { icon: CheckCircle, label: 'Premium Quality' },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* BACK LAYER - Softly blurred wellness environment */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2400')`,
            filter: 'blur(4px)',
            willChange: 'transform',
          }}
        />
        {/* Soft white overlay for warmth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-slate-50/55 to-white/50" />
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,250,252,0.4)_100%)]" />
      </div>

      {/* MIDDLE LAYER - Semi-transparent abstract shapes with very low opacity */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {isVisible && (
          <>
            {/* Soft botanical/molecular shapes */}
            <div 
              className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-[0.03]"
              style={{
                background: 'radial-gradient(circle, #0B5ED7 0%, transparent 70%)',
                animation: 'float 20s ease-in-out infinite',
              }}
            />
            <div 
              className="absolute bottom-32 right-20 w-80 h-80 rounded-full opacity-[0.025]"
              style={{
                background: 'radial-gradient(circle, #0F9D94 0%, transparent 70%)',
                animation: 'float 25s ease-in-out infinite',
                animationDelay: '-5s',
              }}
            />
            <div 
              className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full opacity-[0.02]"
              style={{
                background: 'radial-gradient(circle, #22A06B 0%, transparent 70%)',
                animation: 'float 18s ease-in-out infinite',
                animationDelay: '-10s',
              }}
            />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* FRONT LAYER - CONTENT (Left Side) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-primary/15 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <div className="w-2 h-2 rounded-full bg-primary" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Science. Quality. Wellness.
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-medical-text leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-700"
              style={{ animationDelay: '100ms' }}
            >
              Premium Healthcare <br />
              <span className="text-primary">Solutions</span>{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Powered by
              </span>
            </h1>

            {/* Subheadline with emphasis */}
            <p
              className="text-xl sm:text-2xl font-semibold text-medical-text leading-relaxed max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: '200ms' }}
            >
              Science & Trusted Quality
            </p>

            {/* Description */}
            <p
              className="text-base text-slate-600 leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom-10 duration-700"
              style={{ animationDelay: '300ms' }}
            >
              Delivering research-driven pharmaceutical, nutraceutical, and wellness products that improve lives through innovation, quality assurance, and global healthcare standards.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 items-center animate-in fade-in slide-in-from-bottom-10 duration-700"
              style={{ animationDelay: '400ms' }}
            >
              <a
                href="#products"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#shop-by-concern"
                className="flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-medical-text border-2 border-slate-200 hover:border-primary shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Shop by Concern
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-4 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                <Download size={18} />
                <span>Download Catalogue</span>
              </a>
            </div>

            {/* Trust Badges - Compact horizontal layout */}
            <div
              className="flex flex-wrap items-center gap-4 pt-6 animate-in fade-in slide-in-from-bottom-10 duration-700"
              style={{ animationDelay: '500ms' }}
            >
              {certifications.map((cert, idx) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-primary hover:shadow-sm transition-all group"
                  >
                    <Icon size={16} className="text-primary" />
                    <span className="text-xs font-semibold text-slate-700">
                      {cert.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FRONT LAYER - PRODUCTS (Right Side) */}
          <div className="lg:col-span-5 relative h-[600px]">
            <div className="relative w-full h-full">
              {/* Product arrangement with gentle floating */}
              {products.length > 0 && (
                <>
                  {/* Large Featured Product - Center */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{
                      animation: isVisible ? 'float 8s ease-in-out infinite' : 'none',
                      animationDelay: '0s',
                    }}
                  >
                    <div className="group relative w-56 h-56 cursor-pointer">
                      <div className="relative w-full h-full rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500 p-4 group-hover:scale-105">
                        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                          <img
                            src={products[0]?.src || 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400'}
                            alt={products[0]?.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent shadow-lg flex items-center justify-center">
                          <CheckCircle size={18} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Supporting Products - Arranged naturally */}
                  {products.slice(1, 4).map((product, idx) => {
                    const positions = [
                      { top: '10%', left: '5%', size: 'w-32 h-32', delay: 1 },
                      { top: '20%', right: '8%', size: 'w-36 h-36', delay: 2 },
                      { bottom: '15%', left: '10%', size: 'w-28 h-28', delay: 1.5 },
                    ];
                    const pos = positions[idx];

                    return (
                      <div
                        key={idx}
                        className="absolute group cursor-pointer z-10"
                        style={{
                          ...pos,
                          animation: isVisible ? `float ${7 + idx}s ease-in-out infinite` : 'none',
                          animationDelay: `${pos.delay}s`,
                        }}
                      >
                        <div className={`${pos.size}`}>
                          <div className="relative w-full h-full rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 p-2 group-hover:scale-110">
                            <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-50">
                              <img
                                src={product.src || 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400'}
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                              />
                            </div>
                            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent shadow-md flex items-center justify-center">
                              <CheckCircle size={12} className="text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}

              {/* Soft glow behind products */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-slate-50/50 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
