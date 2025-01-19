import { useEffect } from 'react';

export function useKeyboardNav() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'h':
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'p':
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'c':
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          break;
        // ... weitere Shortcuts
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
} 