import { useEffect } from 'react';

const PageLoadAnimation = () => {
  useEffect(() => {
    // Stagger all sections on page load
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      (section as HTMLElement).style.opacity = '0';
      (section as HTMLElement).style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        (section as HTMLElement).style.transition = 'all 1s cubic-bezier(0.19, 1, 0.22, 1)';
        (section as HTMLElement).style.opacity = '1';
        (section as HTMLElement).style.transform = 'translateY(0)';
      }, 300 + index * 200);
    });
  }, []);

  return null;
};

export default PageLoadAnimation;
