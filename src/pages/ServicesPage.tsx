import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Battery, Sun, Zap, Settings, Users, Shield, Wrench, Car } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { businesses } from '../data/businesses';
import hashimServices from '../data/hashim-services.json';
import hybridServices from '../data/hybrid-services.json';

interface ServiceItem {
  id: number;
  name: string;
  description: string;
  features: string[];
  icon: string;
}

const ServicesPage: React.FC = () => {
  const { activeBusiness, isHashimTraders, isHybridCare } = useBusiness();
  const business = businesses[activeBusiness];
  const servicesData: ServiceItem[] = isHashimTraders ? hashimServices : hybridServices;

  // Map icon names to Lucide React components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'battery':
        return <Battery className="w-12 h-12" />;
      case 'sun':
        return <Sun className="w-12 h-12" />;
      case 'zap':
        return <Zap className="w-12 h-12" />;
      case 'settings':
        return <Settings className="w-12 h-12" />;
      case 'users':
        return <Users className="w-12 h-12" />;
      case 'shield':
        return <Shield className="w-12 h-12" />;
      case 'tool':
        return <Wrench className="w-12 h-12" />;
      case 'wrench':
        return <Wrench className="w-12 h-12" />;
      case 'car':
        return <Car className="w-12 h-12" />;
      default:
        return <Battery className="w-12 h-12" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-16 px-4">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            {isHashimTraders 
              ? 'We provide comprehensive power backup solutions with expert installation and maintenance services'
              : 'We offer dependable hybrid battery solutions with expert installation and diagnostic services'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * service.id }}
              className="card p-6 bg-white rounded-lg shadow-md"
            >
              <div className="feature-icon text-primary-600 mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2 mt-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 mt-2"></span>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-8">
            {isHashimTraders 
              ? 'Contact us today for expert power backup solutions and services'
              : 'Contact us today for dependable hybrid battery solutions and expert installation'
            }
          </p>
          <Link to={`/${activeBusiness}/contact`} className="btn btn-primary">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;