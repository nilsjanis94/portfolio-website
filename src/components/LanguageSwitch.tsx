'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function LanguageSwitch() {
  const [language, setLanguage] = useState('de');
  
  return (
    <button
      onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
    >
      {language === 'de' ? 'EN' : 'DE'}
    </button>
  );
} 