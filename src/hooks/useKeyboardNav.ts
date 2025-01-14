import { useEffect } from 'react';

export function useKeyboardNav(sections: string[]) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const currentSection = sections.findIndex(id => 
          document.getElementById(id)?.getBoundingClientRect().top === 0
        );
        
        const nextIndex = e.key === 'ArrowDown' 
          ? Math.min(currentSection + 1, sections.length - 1)
          : Math.max(currentSection - 1, 0);
        
        document.getElementById(sections[nextIndex])?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sections]);
} 