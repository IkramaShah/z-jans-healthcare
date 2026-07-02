import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const News: React.FC = () => {
  const articles = [
    {
      id: 'news-1',
      category: 'Clinical Study',
      title: 'Successful Bio-equivalence Reports for Z-Torva Formulations',
      desc: 'Our latest clinical trial reports confirm equivalent bioavailability indexes between Z-Torva and international references.',
      date: 'June 28, 2026',
      readTime: '6 min read',
      img: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'news-2',
      category: 'Regulatory Release',
      title: 'Z-Jans Submits Drug Master Files to MENA Regulators',
      desc: 'Expanding our global footprint with active regulatory registration dossiers submitted for GCC market clearances.',
      date: 'May 14, 2026',
      readTime: '4 min read',
      img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'news-3',
      category: 'Medical Event',
      title: 'Z-Jans to Showcase Biotech Research at CPHI Worldwide 2026',
      desc: 'Meet our senior scientific board in Milan as we present novel compound encapsulation delivery systems.',
      date: 'April 09, 2026',
      readTime: '3 min read',
      img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600',
    }
  ];

  return (
    <section id="news" className="py-24 bg-gray-50/50 dark:bg-darknavy-dark/40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
              Corporate Newsroom
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight">
              Latest Research & Press Releases
            </h2>
          </div>
          
          <a
            href="#news"
            onClick={(e) => { e.preventDefault(); alert("Navigating to full archive."); }}
            className="text-xs font-extrabold uppercase tracking-wider text-primary dark:text-secondary inline-flex items-center gap-1.5 hover:underline"
          >
            <span>View Full Archive</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl border border-gray-200/50 dark:border-white/5 bg-white dark:bg-darknavy-card overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image panel with hover zoom */}
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute bottom-4 left-4 z-20 px-2.5 py-1 bg-primary text-white text-[10px] font-extrabold uppercase tracking-wider rounded-lg">
                    {item.category}
                  </span>
                </div>

                {/* Info Text */}
                <div className="p-6">
                  {/* Date & read time */}
                  <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-sm sm:text-base text-darknavy dark:text-white leading-snug group-hover:text-primary dark:group-hover:text-secondary transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-gray-400 mt-3 line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                <button
                  onClick={() => alert(`Opening article: ${item.title}`)}
                  className="text-xs font-bold text-darknavy hover:text-primary dark:text-white/80 dark:hover:text-secondary inline-flex items-center gap-1.5 transition-colors group/btn"
                >
                  <BookOpen size={14} />
                  <span>Read Article</span>
                  <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
export default News;
