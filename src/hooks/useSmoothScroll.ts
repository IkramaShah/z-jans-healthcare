import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Premium Smooth Scroll Hook - Responsive & Natural
 * Optimized for immediate response with smooth elegance
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,  // Reduced for responsiveness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // Snappier easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,  // Increased for immediate response
      touchMultiplier: 2.0,
      infinite: false,
      autoResize: true,
      syncTouch: false,  // Better touch performance
    });

    let rafId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Smooth anchor navigation
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement instanceof HTMLElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, {
            offset: -100,
            duration: 1.0,
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    document.documentElement.classList.add('lenis');

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      document.documentElement.classList.remove('lenis');
    };
  }, []);
};
