'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: 'Umschulung zum Anwendungsentwickler',
      company: 'IBB ',
      period: '2024 - present',
      description: 'Schulische Ausbildung zum Anwendungsentwickler'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Berufserfahrung
          </span>
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 