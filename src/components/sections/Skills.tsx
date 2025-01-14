'use client';

import { motion, useInView } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  const skills = [
    { name: 'Frontend Development', level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'Backend Development', level: 85, color: 'from-purple-500 to-purple-600' },
    { name: 'UI/UX Design', level: 80, color: 'from-pink-500 to-pink-600' },
    { name: 'Database Management', level: 85, color: 'from-green-500 to-green-600' },
    { name: 'DevOps', level: 75, color: 'from-yellow-500 to-yellow-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Meine Fähigkeiten
          </span>
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {shouldAnimate ? <AnimatedCounter from={0} to={skill.level} /> : skill.level}%
                </span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: shouldAnimate ? `${skill.level}%` : 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 