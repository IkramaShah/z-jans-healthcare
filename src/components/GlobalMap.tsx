import React, { useState } from 'react';
import { MapPin, Globe2 } from 'lucide-react';

export const GlobalMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<number>(0);

  const hubs = [
    {
      id: 0,
      name: 'Rawalpindi Headquarters',
      role: 'Core Formulation & Biotech Labs',
      location: 'South Asia (HQ)',
      details: 'Spans 4 automated production plants, state-of-the-art sterile liquid lines, and bio-equivalence research facilities.',
      coords: { x: '58%', y: '42%' },
    },
    {
      id: 1,
      name: 'Dubai Logistic Hub',
      role: 'GCC Distribution Center',
      location: 'United Arab Emirates (UAE)',
      details: 'Temperature-controlled central repository facilitating rapid transit to hospitals and ministries across Middle East.',
      coords: { x: '50%', y: '48%' },
    },
    {
      id: 2,
      name: 'Tashkent Registry Office',
      role: 'Central Asia Regulatory Base',
      location: 'Uzbekistan',
      details: 'Handles registrations, pharmacovigilance reports, and medical liaison across CIS regions.',
      coords: { x: '59%', y: '32%' },
    },
    {
      id: 3,
      name: 'Nairobi Depot',
      role: 'East Africa Distribution liaison',
      location: 'Kenya',
      details: 'Provides localized cold-chain storage and medical product supply support to regional hospitals.',
      coords: { x: '46%', y: '68%' },
    },
    {
      id: 4,
      name: 'London Scientific Liaison',
      role: 'European R&D Office',
      location: 'United Kingdom',
      details: 'Facilitates collaboration with European universities and coordinates imports of high-purity chemical APIs.',
      coords: { x: '35%', y: '24%' },
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-darknavy-dark/40 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: text details and interactive selector */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
                Global Operations Network
              </span>
              
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-darknavy dark:text-white mt-3 leading-tight animate-fade-in">
                Supply Chain & Global Presence
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-4 text-xs sm:text-sm leading-relaxed">
                Z-Jans therapeutics reach patients in over 45 countries. We operate specialized hubs, licensing liaison offices, and temperature-controlled storage networks.
              </p>

              {/* Hub buttons selectors */}
              <div className="mt-8 space-y-3">
                {hubs.map((hub) => (
                  <button
                    key={hub.id}
                    onClick={() => setActiveHub(hub.id)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 ${
                      activeHub === hub.id
                        ? 'bg-white dark:bg-darknavy-card border-primary dark:border-secondary shadow-lg'
                        : 'bg-transparent border-gray-200/50 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10'
                    }`}
                  >
                    <div className={`p-2 rounded-xl mt-0.5 ${
                      activeHub === hub.id ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-white/5 text-gray-400'
                    }`}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-darknavy dark:text-white leading-tight">
                        {hub.name}
                      </h4>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mt-1 block">
                        {hub.role}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Graphic Panel */}
          <div className="lg:col-span-7 lg:pl-8">
            <div className="relative w-full h-[350px] sm:h-[450px] rounded-3xl border border-gray-200/60 dark:border-white/5 glassmorphism dark:glass-dark shadow-2xl p-6 overflow-hidden flex flex-col justify-between">
              
              {/* Animated Map Grid Backing */}
              <div className="absolute inset-0 z-0 bg-cover opacity-10 dark:opacity-20 pointer-events-none bg-mesh-gradient" />

              {/* Vector SVG World Map Outline Graphic */}
              <svg 
                className="absolute inset-0 w-full h-full text-gray-300/40 dark:text-gray-700/30 p-8 z-0 pointer-events-none"
                viewBox="0 0 1000 500" 
                fill="currentColor"
              >
                {/* Simulated continents lines */}
                <path d="M150,150 Q200,80 300,100 T450,120 T600,100 T750,130 T900,120 T950,220 T800,320 T700,450 T550,420 T400,350 T250,400 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <path d="M300,200 Q320,180 360,170 T400,220 T440,250 T380,300 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M500,150 Q550,100 650,120 T700,180 T750,280 T680,380 T580,320 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>

              {/* Dynamic blinking hotspot nodes mapping */}
              <div className="absolute inset-0 z-10 p-8">
                {hubs.map((hub) => (
                  <div
                    key={hub.id}
                    className="absolute"
                    style={{ left: hub.coords.x, top: hub.coords.y }}
                  >
                    <button
                      onClick={() => setActiveHub(hub.id)}
                      className="relative group/pin focus:outline-none"
                    >
                      {/* Pulse waves */}
                      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 dark:bg-secondary/20 animate-ping pointer-events-none ${
                        activeHub === hub.id ? 'opacity-100' : 'opacity-0 group-hover/pin:opacity-50'
                      }`} />
                      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/45 dark:bg-secondary/45 pointer-events-none ${
                        activeHub === hub.id ? 'scale-100' : 'scale-0 group-hover/pin:scale-100'
                      } transition-transform duration-300`} />

                      {/* Small center dot */}
                      <div className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-md transition-colors duration-300 ${
                        activeHub === hub.id ? 'bg-primary dark:bg-secondary' : 'bg-gray-400 group-hover/pin:bg-primary'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Map overlay header card */}
              <div className="relative z-20 flex justify-between items-start pointer-events-none">
                <div className="glass-dark border border-white/10 p-3 rounded-2xl flex items-center gap-2">
                  <Globe2 size={16} className="text-secondary animate-pulse" />
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-white">
                    Live Operations Map
                  </span>
                </div>
              </div>

              {/* Map overlay details card for selected Hub */}
              <div className="relative z-20 glassmorphism dark:glass-dark border border-white/20 dark:border-white/10 rounded-2xl p-5 shadow-lg max-w-sm animate-in slide-in-from-bottom-2 duration-300">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary dark:text-secondary">
                      {hubs[activeHub].location}
                    </span>
                    <h4 className="text-xs font-bold text-darknavy dark:text-white mt-0.5">
                      {hubs[activeHub].name}
                    </h4>
                  </div>
                  <div className="text-[9px] font-extrabold uppercase bg-accent/20 text-accent px-2 py-0.5 rounded-md">
                    Active Hub
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {hubs[activeHub].details}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default GlobalMap;
