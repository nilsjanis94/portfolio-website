'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
      >
        NJW
      </motion.div>
    </motion.div>
  );
} 