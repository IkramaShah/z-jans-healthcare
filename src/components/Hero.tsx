import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ChevronRight, FileText, Sparkles, Award, ShieldCheck, Microscope } from 'lucide-react';
import { parseProductCSV } from '../utils/csvParser';
import type { CSVProduct } from '../utils/csvParser';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [stats, setStats] = useState({ markets: 0, products: 0, compliance: 0 });
  const [products, setProducts] = useState<CSVProduct[]>([]);
  
  // Load products from CSV
  useEffect(() => {
    parseProductCSV('/zjanshealthcare.csv').then((data) => {
      setProducts(data.slice(0, 4)); // Take first 4 products for hero
    });
  }, []);

  // Animate stats numbers on mount
  useEffect(() => {
    const targets = { markets: 45, products: 180, compliance: 100 };
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const ease = progress * (2 - progress);

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
  }, []);

  // Canvas Molecular Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(60, Math.floor((width * height) / 25000));
    const mouse = { x: -1000, y: -1000, radius: 180 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2.5 + 1.5;
        this.color = Math.random() > 0.5 ? 'rgba(0, 87, 255, 0.3)' : 'rgba(0, 180, 216, 0.3)';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const drawLines = () => {
      ctx.shadowBlur = 0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.12;
            ctx.strokeStyle = `rgba(0, 180, 216, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animateCanvas = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawLines();
      animationId = requestAnimationFrame(animateCanvas);
    };

    animateCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownloadProfile = () => {
    alert("Downloading Z-Jans Healthcare Product Catalogue (PDF).");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden bg-mesh-gradient dark:bg-mesh-gradient-dark transition-colors duration-500"
    >
      {/* Molecule Canvas Backing */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/8 rounded-full blur-3xl animate-glow-pulse pointer-events-none" style={{ animationDelay: '-2s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Text & CTA Block */}
        <div className="lg:col-span-7 text-left flex flex-col items-start">
          {/* Premium Badges Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism dark:glass-dark border border-primary/20 dark:border-white/10 shadow-sm">
              <Sparkles size={14} className="text-accent animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
                Premium Healthcare
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-[11px] font-extrabold uppercase tracking-widest">
              <ShieldCheck size={14} />
              GMP Certified
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[11px] font-extrabold uppercase tracking-widest">
              <Microscope size={14} />
              Research Driven
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-darknavy dark:text-white leading-[1.05] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700" style={{ animationDelay: '100ms' }}>
            Premium Health <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Supplements & Nutrition
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: '200ms' }}>
            Discover our scientifically formulated range of supplements, vitamins, and wellness products. Each formulation is backed by rigorous research and manufactured to the highest pharmaceutical standards.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto animate-in fade-in slide-in-from-bottom-10 duration-700" style={{ animationDelay: '300ms' }}>
            <a
              href="#products"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-1 transition-all duration-300 group"
            >
              Explore Products
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#shop-by-concern"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-secondary text-darknavy dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Shop by Concern
            </a>

            <button
              onClick={handleDownloadProfile}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold text-primary dark:text-secondary hover:bg-primary/5 dark:hover:bg-secondary/5 transition-all duration-300 group"
            >
              <FileText size={16} />
              <span>Download Catalogue</span>
            </button>
          </div>
        </div>

        {/* Right: Floating Product Cards */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-lg">
            {/* Floating Product Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {products.slice(0, 4).map((product, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer animate-float"
                  style={{ 
                    animationDelay: `${idx * 0.2}s`,
                    animationDuration: `${3 + idx * 0.5}s` 
                  }}
                >
                  {/* Product Card */}
                  <div className="glassmorphism dark:glass-dark border border-white/30 dark:border-white/10 rounded-2xl p-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                    {/* Product Image */}
                    <div className="relative h-32 mb-3 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5">
                      <img 
                        src={product.src || 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400'} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-2 right-2">
                        <Award size={16} className="text-accent" />
                      </div>
                    </div>

                    {/* Product Info */}
                    <h4 className="font-bold text-sm text-darknavy dark:text-white mb-1 line-clamp-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-xs text-primary dark:text-secondary font-extrabold">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>
        </div>

      </div>

      {/* Floating Statistics Section Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 w-full py-8 border-t border-gray-200/50 dark:border-white/5 bg-white/40 dark:bg-darknavy/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
          <div className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '400ms' }}>
            <span className="block font-display font-extrabold text-2xl sm:text-4xl text-primary dark:text-secondary">
              {stats.markets}+
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1 block">
              Countries Exported
            </span>
          </div>
          <div className="border-x border-gray-200 dark:border-white/10 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '500ms' }}>
            <span className="block font-display font-extrabold text-2xl sm:text-4xl text-darknavy dark:text-white">
              {stats.products}+
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1 block">
              Premium Products
            </span>
          </div>
          <div className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: '600ms' }}>
            <span className="block font-display font-extrabold text-2xl sm:text-4xl text-accent">
              {stats.compliance}%
            </span>
            <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1 block">
              GMP Compliance
            </span>
          </div>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-36 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-1 z-20">
        <span className="text-[9px] uppercase tracking-widest font-extrabold text-gray-400 dark:text-gray-500">Scroll</span>
        <ArrowDown size={14} className="text-gray-400 dark:text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
