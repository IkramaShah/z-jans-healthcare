import React, { useRef, useState } from 'react';
import { Microscope, Activity, Cpu, Truck, Scroll, Users, Atom, Leaf } from 'lucide-react';

interface BentoCardProps {
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  gridClass?: string;
  badge?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, desc, icon: Icon, gridClass = '', badge }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group rounded-3xl border border-slate-200 dark:border-white/5 bg-white dark:bg-darknavy-card p-8 shadow-md hover:shadow-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between min-h-[220px] ${gridClass}`}
    >
      {/* Vercel-like Spotlight glow layer */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(0, 87, 255, 0.08), transparent 80%)`,
          }}
        />
      )}

      {/* Decorative accent background indicator */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

      {/* Card Header (Icon & Badge) */}
      <div className="flex justify-between items-start">
        <div className="p-3 rounded-2xl bg-primary/5 dark:bg-white/5 text-primary dark:text-secondary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
          <Icon size={22} className="group-hover:rotate-6 transition-transform" />
        </div>
        {badge && (
          <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest bg-accent/10 text-accent">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-6 z-10">
        <h3 className="font-display font-extrabold text-lg text-darknavy dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export const WhyChooseUs: React.FC = () => {
  const cards: BentoCardProps[] = [
    {
      title: 'Research & Development',
      desc: 'Our pharmaceutical scientists research bio-equivalence and active chemical compounds, ensuring stable formulations and efficacy profile.',
      icon: Microscope,
      gridClass: 'md:col-span-2',
      badge: 'Active pipeline',
    },
    {
      title: 'Quality Control',
      desc: 'Double-blind lab testing of physical properties, dissolving rates, and absolute purity indexes.',
      icon: Activity,
      badge: 'Zero Defect Policy',
    },
    {
      title: 'Manufacturing Excellence',
      desc: 'Slick cleanroom setups, automated packaging operations, and sterile air handling systems.',
      icon: Cpu,
    },
    {
      title: 'Global Supply Chain',
      desc: 'Secure cold-chain and standard shipping operations supporting hospitals, clinics, and government supply lines.',
      icon: Truck,
      gridClass: 'md:col-span-2',
    },
    {
      title: 'Regulatory Compliance',
      desc: 'Strict adherence to DRAP rules, WHO standards, and international ISO quality policies.',
      icon: Scroll,
      badge: '100% Certified',
    },
    {
      title: 'Experienced Scientific Team',
      desc: 'Our staff consists of doctors of pharmacy, chemical engineers, and experienced quality control specialists.',
      icon: Users,
    },
    {
      title: 'Modern Formulation Innovation',
      desc: 'Developing drug delivery systems including sustained release capsules and enhanced absorption solutions.',
      icon: Atom,
      gridClass: 'md:col-span-2',
    },
    {
      title: 'Sustainability Focused',
      desc: 'Using low-carbon manufacturing systems, sterile recycling, and eco-friendly packaging.',
      icon: Leaf,
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-darknavy-dark/40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
            Why Choose Z-Jans
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight">
            Designed for Trust, Innovated for Health
          </h2>
          <p className="text-slate-600 dark:text-gray-400 mt-4 text-xs sm:text-sm">
            We provide hospitals, government bodies, and global partners with high-grade pharmaceutical manufacturing options built upon strict scientific principles.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <BentoCard key={idx} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
};
export default WhyChooseUs;
