'use client';

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'nilsjanis@icloud.com',
      href: 'mailto:nilsjanis@icloud.com'
    },
    {
      icon: PhoneIcon,
      title: 'Telefon',
      value: '+49 176 63220364',
      href: 'tel:+4917663220364'
    },
    {
      icon: MapPinIcon,
      title: 'Standort',
      value: 'Wurster Nordseeküste, Deutschland',
      href: 'https://maps.google.com/?q=Wurster Nordseeküste'
    },
    {
      icon: GlobeAltIcon,
      title: 'Website',
      value: 'www.example.com',
      href: 'https://www.example.com'
    }
  ];

  return (
    <section id="contact-info" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Kontaktdaten
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactDetails.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target={contact.title === 'Standort' || contact.title === 'Website' ? '_blank' : undefined}
              rel={contact.title === 'Standort' || contact.title === 'Website' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <contact.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{contact.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 