'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-50"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-50"
      />
    </div>
  );
} 