'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
  payload: any;
}

export default function GitHubActivity() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubActivity() {
      try {
        const response = await fetch('https://api.github.com/users/nilsjanis94/events/public');
        const data = await response.json();
        setEvents(data.slice(0, 5)); // Zeige die letzten 5 Events
      } catch (error) {
        console.error('Failed to fetch GitHub activity:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGitHubActivity();
  }, []);

  return (
    <section id="github-activity" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            GitHub Aktivität
          </span>
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {isLoading ? (
            <div className="text-center">Lade Aktivitäten...</div>
          ) : (
            events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium">{event.repo.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {formatEventType(event.type)}
                    </p>
                    <time className="text-xs text-gray-500">
                      {new Date(event.created_at).toLocaleDateString('de-DE')}
                    </time>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function formatEventType(type: string): string {
  switch (type) {
    case 'PushEvent':
      return 'Push zu Repository';
    case 'CreateEvent':
      return 'Repository erstellt';
    case 'ForkEvent':
      return 'Repository geforkt';
    case 'WatchEvent':
      return 'Repository markiert';
    default:
      return type;
  }
} 