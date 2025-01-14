'use client';

import { motion } from 'framer-motion';

export default function Blog() {
  const posts = [
    {
      title: 'Moderne Web-Entwicklung mit Next.js',
      excerpt: 'Ein Einblick in die neuesten Features von Next.js 14',
      date: '2024-01-15',
      slug: 'modern-web-development'
    },
    {
      title: 'Die Zukunft von React',
      excerpt: 'Wie React Server Components die Entwicklung verändern',
      date: '2024-01-10',
      slug: 'future-of-react'
    },
    {
      title: 'TypeScript Best Practices',
      excerpt: 'Tipps und Tricks für besseren TypeScript-Code',
      date: '2024-01-05',
      slug: 'typescript-best-practices'
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Blog
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
} 