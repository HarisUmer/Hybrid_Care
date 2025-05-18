import React from 'react';
import { motion } from 'framer-motion';
import batteryInstallation from '../assets/gallery/battery-installation.svg';
import workshop from '../assets/gallery/workshop.svg';
import diagnosticTesting from '../assets/gallery/diagnostic-testing.svg';

const GalleryPage: React.FC = () => {
  const images = [
    {
      id: 1,
      url: batteryInstallation,
      title: 'Battery Installation',
      description: 'Professional hybrid battery installation service',
    },
    {
      id: 2,
      url: workshop,
      title: 'Workshop',
      description: 'Our state-of-the-art workshop facility',
    },
    {
      id: 3,
      url: diagnosticTesting,
      title: 'Diagnostic Testing',
      description: 'Advanced computer diagnostic scanning',
    },
    {
      id: 4,
      url: batteryInstallation,
      title: 'Battery Stock',
      description: 'Wide range of genuine hybrid batteries',
    },
    {
      id: 5,
      url: workshop,
      title: 'Quality Service',
      description: 'Expert technicians at work',
    },
    {
      id: 6,
      url: diagnosticTesting,
      title: 'Customer Service',
      description: 'Dedicated customer support',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Our Gallery</h2>
          <p>Take a look at our workshop, services, and completed projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;