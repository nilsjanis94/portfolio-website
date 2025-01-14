'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../ui/ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Tech Stack', href: 'tech-stack' },
    { name: 'Projekte', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experience', href: 'experience' },
    { name: 'Blog', href: 'blog' },
    { name: 'Kontakt', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Aktiven Abschnitt bestimmen mit deutlich erhöhtem Offset
      const sections = navigation.map(item => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 200; // Erhöhter Offset für noch früheres Auslösen

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop - 150; // Größerer negativer Offset
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navigation[index].href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      const top = section.offsetTop - navHeight;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleClick('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:scale-105 transition-transform"
          >
            NJW
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className={`relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer ${
                  activeSection === item.href ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {item.name}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                  />
                )}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-current transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-current transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="py-2 space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleClick(item.href)}
                    className="block w-full text-left py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-2">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 