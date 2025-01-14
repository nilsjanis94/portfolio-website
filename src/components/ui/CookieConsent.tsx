'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-lg"
        >
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-sm">
              Diese Website verwendet Cookies für eine bessere Nutzererfahrung.
            </p>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Akzeptieren
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 