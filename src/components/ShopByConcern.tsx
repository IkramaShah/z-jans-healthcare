import React, { useState } from 'react';
import { 
  Sparkles, Heart, Bone, Activity, User, Users, 
  HeartPulse, AppleIcon, Scale, Zap, Smile 
} from 'lucide-react';

export const ShopByConcern: React.FC = () => {
  const [hoveredConcern, setHoveredConcern] = useState<string | null>(null);

  const concerns = [
    {
      id: 'skin-care',
      title: 'Skin Care',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=600',
      description: 'Radiant, healthy skin solutions',
      productCount: 15
    },
    {
      id: 'immunity',
      title: 'Immunity',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600',
      description: 'Boost your natural defense',
      productCount: 22
    },
    {
      id: 'joint-health',
      title: 'Joint Health',
      icon: Bone,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
      description: 'Mobility and flexibility support',
      productCount: 18
    },
    {
      id: 'hair-care',
      title: 'Hair Care',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600',
      description: 'Strong, lustrous hair formula',
      productCount: 12
    },
    {
      id: 'womens-health',
      title: "Women's Health",
      icon: User,
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=600',
      description: 'Specialized feminine wellness',
      productCount: 20
    },
    {
      id: 'mens-health',
      title: "Men's Health",
      icon: Users,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
      description: 'Vitality and strength enhancement',
      productCount: 16
    },
    {
      id: 'heart-health',
      title: 'Heart Health',
      icon: HeartPulse,
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=600',
      description: 'Cardiovascular wellness',
      productCount: 25
    },
    {
      id: 'digestive-health',
      title: 'Digestive Health',
      icon: AppleIcon,
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=600',
      description: 'Gut health optimization',
      productCount: 14
    },
    {
      id: 'bone-health',
      title: 'Bone Health',
      icon: Bone,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
      description: 'Calcium and bone density',
      productCount: 19
    },
    {
      id: 'weight-management',
      title: 'Weight Management',
      icon: Scale,
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600',
      description: 'Healthy metabolism support',
      productCount: 13
    },
    {
      id: 'energy-wellness',
      title: 'Energy & Wellness',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600',
      description: 'Vitality and daily energy',
      productCount: 21
    },
    {
      id: 'beauty',
      title: 'Beauty',
      icon: Smile,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600',
      description: 'Glow from within',
      productCount: 17
    },
  ];

  return (
    <section id="shop-by-concern" className="py-24 bg-slate-50 transition-colors duration-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-4 inline-block">
            Personalized Healthcare Solutions
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-medical-text leading-tight mb-6">
            Shop by Concern
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Discover products tailored to your specific health needs. Each category is backed by scientific research and premium formulations.
          </p>
        </div>

        {/* Concerns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {concerns.map((concern) => {
            const Icon = concern.icon;
            const isHovered = hoveredConcern === concern.id;

            return (
              <a
                key={concern.id}
                href={`#products?concern=${concern.id}`}
                onMouseEnter={() => setHoveredConcern(concern.id)}
                onMouseLeave={() => setHoveredConcern(null)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105"
                style={{ aspectRatio: '1/1' }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={concern.image} 
                    alt={concern.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darknavy via-darknavy/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                  {/* Icon Badge */}
                  <div className="flex justify-end">
                    <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 ${
                      isHovered ? 'scale-110 bg-primary/20 border-primary/40' : ''
                    }`}>
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="text-white">
                    <h3 className="font-display font-extrabold text-lg sm:text-xl mb-2 group-hover:text-secondary transition-colors">
                      {concern.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-2 opacity-90">
                      {concern.description}
                    </p>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold">
                      <span>{concern.productCount}</span>
                      <span className="text-gray-300">Products</span>
                    </span>
                  </div>
                </div>

                {/* Hover Border Glow */}
                <div className={`absolute inset-0 border-2 border-transparent rounded-3xl transition-all duration-500 ${
                  isHovered ? 'border-primary shadow-2xl shadow-primary/20' : ''
                }`} />
              </a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            Explore All Products
            <Heart size={16} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ShopByConcern;
