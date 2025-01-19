'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  level: number;
  color: string;
}

export function SkillBadge({ name, level, color }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color}`}
        />
      </div>
    </motion.div>
  );
} 