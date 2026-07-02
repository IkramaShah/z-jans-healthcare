import { useEffect } from 'react';
import Lenis from 'lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    let rafId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Global scroll links listener to handle internal anchors smoothly
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement instanceof HTMLElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, {
            offset: -80,
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Optimize scroll performance
    const optimizeScroll = () => {
      if (lenis.isScrolling) {
        document.body.style.pointerEvents = 'none';
      } else {
        document.body.style.pointerEvents = 'auto';
      }
    };

    const scrollInterval = setInterval(optimizeScroll, 100);

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(scrollInterval);
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
      document.body.style.pointerEvents = 'auto';
    };
  }, []);
};
