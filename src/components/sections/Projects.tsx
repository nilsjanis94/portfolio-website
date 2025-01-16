'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectsProps {
  onProjectClick?: (project: any) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Eine Portfolio-Website mit Next.js und Framer Motion',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
      image: '/projects/portfolio.jpg'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Ein vollständiges E-Commerce-System mit Warenkorb und Zahlungsabwicklung',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/projects/ecommerce.jpg'
    },
    {
      title: 'Task Management App',
      description: 'Eine Produktivitäts-App zur Verwaltung von Projekten und Aufgaben',
      tech: ['Vue.js', 'Firebase', 'Vuex', 'TailwindCSS'],
      image: '/projects/taskmanager.jpg'
    },
    {
      title: 'Weather Dashboard',
      description: 'Eine Echtzeit-Wetteranwendung mit detaillierten Vorhersagen',
      tech: ['React', 'OpenWeather API', 'ChartJS', 'Axios'],
      image: '/projects/weather.jpg'
    },
    {
      title: 'Social Media Analytics',
      description: 'Dashboard für Social Media Metriken und Analysen',
      tech: ['Angular', 'D3.js', 'Node.js', 'PostgreSQL'],
      image: '/projects/analytics.jpg'
    }
  ];

  const slideLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const slideRight = () => {
    setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Meine Projekte
          </span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={slideLeft}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-4 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
            disabled={currentIndex === 0}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="min-w-full px-4"
                  onClick={() => onProjectClick?.(project)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 300px, 400px"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href="https://github.com/nilsjanis94"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="text-white">Projekt ansehen →</span>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={slideRight}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-4 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
            disabled={currentIndex === projects.length - 1}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 