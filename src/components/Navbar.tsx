import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, Sun, Moon, ArrowRight, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode, setSearchOpen, setDistributorOpen } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products', hasMega: true },
    { name: 'Shop by Concern', href: '#shop-by-concern' },
    { name: 'Research', href: '#research', hasMega: true },
    { name: 'Quality', href: '#quality' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  const productMegaLinks = [
    { title: 'General Medicine', desc: 'Everyday therapeutics & anti-infectives', href: '#products-general' },
    { title: 'Cardiology', desc: 'Advanced cardiovascular care molecules', href: '#products-cardio' },
    { title: 'Orthopedics', desc: 'Joint, bone & muscle restorative care', href: '#products-ortho' },
    { title: 'Gynecology', desc: 'Hormonal and women’s health therapeutics', href: '#products-gynae' },
    { title: 'Dermatology', desc: 'Topical formulations and skin wellness', href: '#products-derma' },
    { title: 'Critical Care', desc: 'Life-saving intensive care injections', href: '#products-critical' },
  ];

  const researchMegaLinks = [
    { title: 'R&D Pipelines', desc: 'Active clinical development candidates', href: '#research' },
    { title: 'Bio-equivalence', desc: 'Rigorous comparative pharmacological studies', href: '#research' },
    { title: 'Clinical Trials', desc: 'Phase I-IV safety and efficacy reports', href: '#research' },
    { title: 'Scientific Publications', desc: 'Reviewed studies in global medical journals', href: '#research' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-4 glassmorphism dark:glass-dark shadow-lg border-b border-white/10 dark:border-white/5'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-secondary text-white shadow-md shadow-primary/20 overflow-hidden">
            <span className="font-display font-extrabold text-xl tracking-tighter">Z</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wide text-darknavy dark:text-white leading-none">
              Z-JANS
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary dark:text-secondary mt-0.5">
              HEALTHCARE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasMega && setActiveMegaMenu(link.name)}
              onMouseLeave={() => link.hasMega && setActiveMegaMenu(null)}
            >
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-semibold tracking-wide text-darknavy/80 hover:text-primary dark:text-white/80 dark:hover:text-secondary flex items-center gap-1 transition-colors duration-200"
              >
                {link.name}
                {link.hasMega && <ChevronDown size={14} className="opacity-60" />}
              </a>

              {/* Mega Menu Dropdowns */}
              {link.hasMega && activeMegaMenu === link.name && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[600px]">
                  <div className="glassmorphism dark:glass-dark rounded-2xl p-6 shadow-2xl border border-white/25 dark:border-white/10 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="col-span-2 pb-2 border-b border-gray-200/50 dark:border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-secondary">
                        {link.name} Division
                      </span>
                      <a href={link.href} className="text-xs flex items-center gap-1 text-darknavy dark:text-white hover:text-primary dark:hover:text-secondary transition-colors">
                        Explore all <ArrowRight size={12} />
                      </a>
                    </div>
                    {link.name === 'Products'
                      ? productMegaLinks.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            className="p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5 transition-all duration-200 group"
                          >
                            <span className="block text-sm font-bold text-darknavy dark:text-white group-hover:text-primary dark:group-hover:text-secondary">
                              {item.title}
                            </span>
                            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                              {item.desc}
                            </span>
                          </a>
                        ))
                      : researchMegaLinks.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            className="p-3 rounded-xl hover:bg-primary/5 dark:hover:bg-white/5 transition-all duration-200 group"
                          >
                            <span className="block text-sm font-bold text-darknavy dark:text-white group-hover:text-primary dark:group-hover:text-secondary">
                              {item.title}
                            </span>
                            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                              {item.desc}
                            </span>
                          </a>
                        ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global Controls & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* AI Search Toggle */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="Search medicine"
            className="p-2 rounded-xl text-darknavy hover:text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
          >
            <Search size={18} />
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-2 rounded-xl text-darknavy hover:text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 flex items-center gap-1 transition-all duration-200 text-sm font-bold"
            >
              <Globe size={18} />
              <span>{currentLang}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-32 glassmorphism dark:glass-dark rounded-xl shadow-lg border border-white/20 py-2">
                {['EN', 'DE', 'FR', 'ES'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setCurrentLang(lang);
                      setLangOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-xs font-bold hover:bg-primary/5 dark:hover:bg-white/5 ${
                      currentLang === lang ? 'text-primary dark:text-secondary' : 'text-darknavy dark:text-white/80'
                    }`}
                  >
                    {lang === 'EN' ? 'English (EN)' : lang === 'DE' ? 'Deutsch (DE)' : lang === 'FR' ? 'Français (FR)' : 'Español (ES)'}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="p-2 rounded-xl text-darknavy hover:text-primary dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Distributor Portal CTA */}
          <button
            onClick={() => setDistributorOpen(true)}
            className="px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300"
          >
            Distributor Portal
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-darknavy dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-xl text-darknavy dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
          >
            <Search size={18} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-darknavy dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] z-40 bg-medical-bg/95 dark:bg-darknavy/95 backdrop-blur-2xl animate-in fade-in slide-in-from-right duration-300">
          <div className="flex flex-col h-full justify-between p-8 overflow-y-auto">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-darknavy dark:text-white hover:text-primary dark:hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 dark:text-gray-400">Language</span>
                <div className="flex gap-2">
                  {['EN', 'DE', 'ES'].map(l => (
                    <button
                      key={l}
                      onClick={() => setCurrentLang(l)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        currentLang === l ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-white/5 text-darknavy dark:text-white'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => {
                  setIsOpen(false);
                  setDistributorOpen(true);
                }}
                className="w-full py-4 text-center text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-lg shadow-primary/20"
              >
                Distributor Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
