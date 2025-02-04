'use client';

import { motion } from 'framer-motion';

interface ProjectFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export function ProjectFilter({ activeFilter, setActiveFilter }: ProjectFilterProps) {
  const filters = [
    'Alle',
    'Web Development',
    'Machine Learning',
    'Data Science',
    'Backend'
  ];
  
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {filters.map((filter, index) => (
        <motion.button
          key={filter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeFilter === filter
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white'
          }`}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
} 