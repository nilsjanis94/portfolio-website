'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MouseEvent } from 'react';

export function Card3D({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event: MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      className="relative"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative preserve-3d transition-transform duration-200"
      >
        {children}
      </motion.div>
    </motion.div>
  );
} 