import React from 'react';
import { AppProvider } from './context/AppContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';

// Core Page Sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Categories from './components/Categories';
import Featured from './components/Featured';
import Products from './components/Products';
import ProductShowcase from './components/ProductShowcase';
import ShopByConcern from './components/ShopByConcern';
import Research from './components/Research';
import Quality from './components/Quality';
import GlobalMap from './components/GlobalMap';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Floating Utilities & Modals
import ProductComparison from './components/ProductComparison';
import DistributorModal from './components/DistributorModal';
import SearchModal from './components/SearchModal';
import AccessibilityMenu from './components/AccessibilityMenu';
import ScrollProgress from './components/ScrollProgress';

// Internal main layout wrapper that handles hooks
const AppLayout: React.FC = () => {
  // Initialize Lenis Smooth Scrolling
  useSmoothScroll();

  return (
    <div className="relative min-h-screen selection:bg-primary selection:text-white">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <TrustedBy />
        <Products />
        <ShopByConcern />
        <ProductShowcase />
        <About />
        <WhyChooseUs />
        <Categories />
        <Featured />
        <Research />
        <Quality />
        <GlobalMap />
        <Testimonials />
        <News />
        <Contact />
      </main>

      {/* Corporate Footer & Sticky Assets */}
      <Footer />

      {/* Global Interactive Overlays */}
      <ProductComparison />
      <DistributorModal />
      <SearchModal />
      <AccessibilityMenu />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};

export default App;
