import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Shield, Award, Microscope, Heart, CheckCircle } from 'lucide-react';
import { parseProductCSV } from '../utils/csvParser';
import type { CSVProduct } from '../utils/csvParser';
import OptimizedImage from './OptimizedImage';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<CSVProduct[]>([]);
  const [stats, setStats] = useState({ markets: 0, products: 0, compliance: 0 });
  const [statsVisible, setStatsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Load products from CSV
  useEffect(() => {
    parseProductCSV('/zjanshealthcare.csv').then((data) => {
      setProducts(data.slice(0, 6)); // Get 6 products for floating display
    });
  }, []);

  // Animated statistics
  useEffect(() => {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statsVisible) {
            setStatsVisible(true);
            
            const targets = { markets: 45, products: 180, compliance: 100 };
            const duration = 2000;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const ease = progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

              setStats({
                markets: Math.floor(ease * targets.markets),
                products: Math.floor(ease * targets.products),
                compliance: Math.floor(ease * targets.compliance),
              });

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsElement = document.querySelector('.hero-stats');
    if (statsElement) {
      statsObserver.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        statsObserver.unobserve(statsElement);
      }
    };
  }, [statsVisible]);

  const certifications = [
    { icon: Shield, label: 'GMP Certified' },
    { icon: Award, label: 'ISO Certified' },
    { icon: Microscope, label: 'WHO Standards' },
    { icon: Heart, label: 'Research Driven' },
    { icon: CheckCircle, label: 'Premium Quality' },
  ];

  // Product positioning for natural composition
  const productPositions = [
    { top: '8%', left: '5%', size: 'w-32 h-32', delay: 0, duration: 10 },
    { top: '12%', right: '8%', size: 'w-36 h-36', delay: 0.3, duration: 12 },
    { top: '38%', left: '3%', size: 'w-28 h-28', delay: 0.6, duration: 11 },
    { top: '45%', right: '5%', size: 'w-40 h-40', delay: 0.9, duration: 13 },
    { bottom: '15%', left: '7%', size: 'w-36 h-36', delay: 1.2, duration: 11.5 },
    { bottom: '10%', right: '10%', size: 'w-32 h-32', delay: 1.5, duration: 12.5 },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* LAYER 1: Premium Pharmaceutical Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2400')`,
            filter: 'blur(4px)',
          }}
        />
        {/* Semi-transparent white overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-slate-50/70 to-white/65" />
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(248,250,252,0.6)_100%)]" />
      </div>

      {/* LAYER 2: Subtle Molecular Graphics */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden opacity-20">
        <svg className="absolute top-16 left-12 w-80 h-80 text-primary/20" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        
        <svg className="absolute bottom-20 right-16 w-64 h-64 text-secondary/15" viewBox="0 0 200 200">
          <path d="M20,100 Q60,80 100,100 T180,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M20,120 Q60,100 100,120 T180,120" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        {/* Small floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/10"
            style={{
              top: `${15 + i * 10}%`,
              left: `${10 + i * 8}%`,
              animation: `float ${8 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LAYER 4: Content (Left Side) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/95 backdrop-blur-sm border border-primary/20 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Science. Quality. Wellness.
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-tight text-darknavy leading-[1.05]">
                Premium Healthcare <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              
              <p className="text-2xl sm:text-3xl font-semibold text-darknavy leading-tight">
                Powered by <span className="text-primary">Science</span> & <span className="text-secondary">Trusted Quality</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Delivering research-driven pharmaceutical, nutraceutical, and wellness products that improve lives through innovation, quality assurance, and global healthcare standards.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center pt-4">
              <a
                href="#products"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Products
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#shop-by-concern"
                className="flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-darknavy border-2 border-slate-300 hover:border-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                Shop by Concern
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-4 text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-300"
              >
                <Download size={18} />
                <span>Download Catalogue</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-300">
              {certifications.map((cert, idx) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white backdrop-blur-sm border border-slate-300 hover:border-primary hover:shadow-sm transition-all duration-300"
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

          {/* LAYER 3: Floating Products (Right Side) */}
          <div className="lg:col-span-5 relative h-[700px] hidden lg:block">
            <div className="relative w-full h-full">
              
              {/* Floating Products */}
              {isMounted && products.map((product, idx) => {
                const position = productPositions[idx];
                if (!position) return null;

                return (
                  <div
                    key={idx}
                    className="absolute group hover-pause"
                    style={{
                      ...position,
                      animation: `float-gentle ${position.duration}s ease-in-out infinite`,
                      animationDelay: `${position.delay}s`,
                    }}
                  >
                    <div className={`${position.size}`}>
                      <div className="relative w-full h-full rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-300 shadow-xl hover:shadow-2xl transition-all duration-500 p-3 group-hover:scale-105">
                        <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                          <OptimizedImage
                            src={product.src || 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400'}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="eager"
                            priority={idx < 2}
                          />
                          {/* Subtle glow on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        {/* Certification badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent shadow-lg flex items-center justify-center">
                          <CheckCircle size={14} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Soft ambient glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Animated Statistics */}
        <div className="hero-stats mt-20 pt-12 border-t border-slate-300">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-display font-extrabold text-primary">
                {stats.markets}+
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Countries Exported
              </div>
            </div>
            <div className="space-y-2 border-x border-slate-300">
              <div className="text-5xl font-display font-extrabold text-darknavy">
                {stats.products}+
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                Premium Products
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-display font-extrabold text-accent">
                {stats.compliance}%
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">
                GMP Compliance
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-slate-50/60 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
