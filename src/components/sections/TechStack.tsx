'use client';

import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPrisma } from 'react-icons/si';

interface Technology {
  name: string;
  icon: IconType;
}

export default function TechStack() {
  const technologies: Technology[] = [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Prisma', icon: SiPrisma },
  ];

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Tech Stack
          </span>
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="group relative">
                  <Icon 
                    size={64}
                    color="#2563eb"
                  />
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-sm rounded whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 