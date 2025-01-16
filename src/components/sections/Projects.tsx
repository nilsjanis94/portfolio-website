'use client';

import { motion, useMotionValue, useTransform, useSpring, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ProjectsProps {
  onProjectClick?: (project: any) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const controls = useAnimationControls();

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

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const springConfig = { damping: 20, stiffness: 100 };
  const xSpring = useSpring(x, springConfig);

  const handleDragEnd = () => {
    setIsDragging(false);
    const currentX = x.get();
    
    // Snap to nearest project
    const projectWidth = 400 + 32; // width + gap
    const nearestProject = Math.round(currentX / projectWidth) * projectWidth;
    
    controls.start({
      x: Math.max(Math.min(nearestProject, 0), -width),
      transition: { type: "spring", ...springConfig }
    });
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
        
        <motion.div ref={carousel} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div 
            drag="x"
            style={{ x: xSpring }}
            dragConstraints={{ right: 0, left: -width }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            animate={controls}
            className="flex gap-8 will-change-transform"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="min-w-[300px] md:min-w-[400px] select-none"
                whileHover={{ scale: isDragging ? 1 : 1.02 }}
                transition={{ type: "spring", ...springConfig }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div 
                    onClick={() => !isDragging && onProjectClick?.(project)}
                    className="cursor-pointer"
                  >
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.abs(Math.round(x.get() / (400 + 32))) === index
                  ? 'bg-blue-600'
                  : 'bg-gray-300'
              }`}
              onClick={() => {
                controls.start({
                  x: Math.max(Math.min(-(index * (400 + 32)), 0), -width),
                  transition: { type: "spring", ...springConfig }
                });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 