import { useCallback } from 'react';

export const useScrollToSection = () => {
  return useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Fixed header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);
};