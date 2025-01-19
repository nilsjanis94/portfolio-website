'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
}

export function AnimatedCounter({ from, to, duration = 2 }: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, to, { duration });
    return animation.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
} 