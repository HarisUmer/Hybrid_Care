import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo/logo.svg';
import hybridLogo from '../assets/logo/hybrid-care-logo.svg';
import { businesses } from '../data/businesses';

const LandingPage: React.FC = () => {
  const hashim = businesses.hashim;
  const hybrid = businesses.hybrid;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-800 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <img src={logo} alt="Logo" className="h-24 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to Our Business</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose which of our specialized services you're looking for today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hashim Traders Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-4">
                <img src={logo} alt="Hashim Traders Logo" className="h-12 mr-3" />
                <h2 className="text-2xl font-bold text-primary-800">{hashim.name}</h2>
              </div>
              <p className="text-gray-600 mb-6">
                {hashim.description}
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  APC Imported UPS
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Branded UPS (Homage, Solarmax, Inverex)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                  Solar Inverters & Batteries
                </li>
              </ul>
              <Link 
                to="/hashim" 
                className="btn btn-primary w-full"
              >
                Visit Hashim Traders
              </Link>
            </div>
          </motion.div>

          {/* Hybrid Care Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-4">
                <img src={hybridLogo} alt="Hybrid Care Logo" className="h-12 mr-3" />
                <h2 className="text-2xl font-bold text-green-800">{hybrid.name}</h2>
              </div>
              <p className="text-gray-600 mb-6">
                {hybrid.description}
              </p>
              <h3 className="text-lg font-semibold text-green-700 mb-2">Our Services</h3>
              <ul className="mb-6 space-y-2">
                {hybrid.services.items.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {service}
                  </li>
                ))}
              </ul>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-700 mb-2">Contact Us</h3>
                <p className="text-gray-700">{hybrid.contactPerson}</p>
                <p className="text-gray-700">📞 {hybrid.phone}</p>
                <a 
                  href={hybrid.socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  Visit Our Facebook Page
                </a>
              </div>
              <Link 
                to="/hybrid" 
                className="btn bg-green-600 text-white hover:bg-green-700 w-full"
              >
                Visit Hybrid Care
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;