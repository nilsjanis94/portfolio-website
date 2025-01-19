'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectsProps {
  onProjectClick: (project: any) => void;
}

export default function Projects({ onProjectClick }: ProjectsProps) {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Eine moderne E-Commerce-Plattform mit Next.js und Stripe',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
      image: '/projects/ecommerce.jpg'
    },
    {
      title: 'Task Management',
      description: 'Kollaboratives Task-Management-System mit Echtzeit-Updates',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      image: '/projects/taskmanager.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive Portfolio-Website mit modernem Design',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
      image: '/projects/portfolio.jpg'
    }
  ];

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              onClick={() => onProjectClick(project)}
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white">Projekt ansehen →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 