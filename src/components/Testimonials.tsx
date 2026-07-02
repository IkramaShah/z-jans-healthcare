import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const list = [
    {
      quote: "We have partnered with Z-Jans for over six years to supply essential cardiovascular molecules. Their batch consistency and zero-defect packaging ensure our cardiac wards operate smoothly.",
      author: "Dr. Tariq Mahmood",
      role: "Clinical Director of Cardiology",
      institution: "National Heart Hospital",
      rating: 5,
    },
    {
      quote: "Z-Jans' bio-equivalence reports are exceptionally comprehensive. As a major distributor in Central Asia, their DRAP approvals and compliance transparency make local customs registrations seamless.",
      author: "Farrukh Akhmedov",
      role: "Managing Director",
      institution: "Aura Pharma CIS",
      rating: 5,
    },
    {
      quote: "During regional healthcare emergencies, Z-Jans coordinated shipping logistics with temperature dataloggers. Their critical care medicines arrived in perfect molecular stability.",
      author: "Dr. Elizabeth Nduta",
      role: "Chief Procurement Officer",
      institution: "East Africa Healthcare Alliance",
      rating: 5,
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % list.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [list.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % list.length);
  };

  return (
    <section className="py-24 bg-white dark:bg-darknavy transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
          Partner Testimonials
        </span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 mb-16 leading-tight">
          What Healthcare Leaders Say
        </h2>

        {/* Carousel Slider */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          {list.map((item, index) => {
            const isActive = index === activeIndex;
            if (!isActive) return null;

            return (
              <div 
                key={index} 
                className="w-full glassmorphism dark:glass-dark border border-white/20 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative animate-in fade-in zoom-in-95 duration-500"
              >
                {/* Floating Quote Icon */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Quote size={20} />
                </div>

                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-relaxed font-medium italic pt-4">
                  "{item.quote}"
                </p>

                {/* Rating */}
                <div className="flex justify-center gap-1 my-6 text-amber-500">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <div className="border-t border-gray-100 dark:border-white/5 pt-6">
                  <span className="block text-sm font-extrabold text-darknavy dark:text-white">
                    {item.author}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                    {item.role} &bull; <span className="font-semibold text-primary dark:text-secondary">{item.institution}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Dot indicators & Arrows */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-primary text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-primary/5 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          
          <div className="flex gap-2">
            {list.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-primary w-6' : 'bg-gray-200 dark:bg-white/10'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-primary text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-primary/5 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};
export default Testimonials;
