import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  delay?: number;
}

/**
 * Premium Scroll Reveal Hook
 * Triggers animations when elements enter viewport (25-30% visibility)
 * Enterprise-grade pharmaceutical website experience
 */
export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  const {
    threshold = 0.25, // Trigger when 25% visible
    rootMargin = '0px',
    animationClass = 'scroll-fade-in',
    delay = 0,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    element.style.opacity = '0';
    element.style.visibility = 'hidden';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation with delay
            setTimeout(() => {
              element.style.visibility = 'visible';
              element.classList.add(animationClass);
            }, delay);

            // Unobserve after animation triggers (performance optimization)
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, animationClass, delay]);

  return elementRef;
};

/**
 * Staggered Scroll Reveal for Multiple Elements
 * Perfect for product cards, list items, etc.
 */
export const useScrollRevealStagger = (count: number, baseDelay = 0, staggerDelay = 100) => {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const index = refs.current.indexOf(element);
            const delay = baseDelay + index * staggerDelay;

            setTimeout(() => {
              element.style.visibility = 'visible';
              element.classList.add('scroll-fade-in');
            }, delay);

            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '0px',
      }
    );

    refs.current.forEach((ref) => {
      if (ref) {
        ref.style.opacity = '0';
        ref.style.visibility = 'hidden';
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [count, baseDelay, staggerDelay]);

  return refs;
};

export default useScrollReveal;
