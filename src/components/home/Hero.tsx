import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Battery, Check, Shield, Zap, Car, Wrench } from 'lucide-react';
import { useBusiness } from '../../context/BusinessContext';
import { businesses } from '../../data/businesses';
import batteryInstallation from '../../assets/gallery/battery-installation.svg';
import hybridBattery from '../../assets/gallery/hybrid-battery.svg';

const Hero: React.FC = () => {
  const { activeBusiness, isHashimTraders, isHybridCare } = useBusiness();
  const business = businesses[activeBusiness];
  const homeRoute = isHashimTraders ? '/hashim' : '/hybrid';
  const heroImage = isHashimTraders ? batteryInstallation : hybridBattery;
  
  return (
    <section className={`relative min-h-screen flex items-center ${
      isHashimTraders 
        ? 'bg-gradient-to-r from-primary-900 to-primary-800' 
        : 'bg-gradient-to-r from-green-900 to-green-800'
      } overflow-hidden`}
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-24 -right-24 w-96 h-96 ${
          isHashimTraders ? 'bg-primary-700/30' : 'bg-green-700/30'
        } rounded-full blur-3xl`}></div>
        <div className={`absolute top-1/2 -left-24 w-72 h-72 ${
          isHashimTraders ? 'bg-primary-600/20' : 'bg-green-600/20'
        } rounded-full blur-3xl`}></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-600/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className={`absolute inset-0 ${
        isHashimTraders 
          ? 'bg-gradient-to-r from-primary-950/80 to-primary-900/60'
          : 'bg-gradient-to-r from-green-950/80 to-green-900/60'
      }`}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <span className={`inline-block px-3 py-1 ${
                isHashimTraders 
                  ? 'bg-primary-500/20 text-primary-300' 
                  : 'bg-green-500/20 text-green-300'
                } rounded-full text-sm font-medium`}
              >
                Established {business.founded}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {business.name}
              </h1>
              <h2 className={`text-2xl md:text-3xl ${
                isHashimTraders ? 'text-primary-300' : 'text-green-300'
              } mt-2`}>
                {business.tagline}
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mt-4">
                {isHashimTraders 
                  ? 'Premium UPS systems, solar inverters, and battery solutions for residential and commercial use.'
                  : 'Dependable and long-lasting hybrid battery solutions with expert installation and trusted after-sales support.'
                }
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link to={`${homeRoute}/contact`} className="btn btn-primary">
                Get a Quote <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to={isHashimTraders ? `${homeRoute}/products` : `${homeRoute}/services`}
                className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-900"
              >
                {isHashimTraders ? 'Explore Products' : 'Our Services'}
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 mt-8"
            >
              {isHashimTraders ? (
                // Hashim Traders Features
                <>
                  <div className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mr-3`}>
                      <Battery className="w-6 h-6 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Quality Products</h3>
                      <p className="text-gray-300 text-sm">APC, Homage, Solarmax & Inverex</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mr-3">
                      <Check className="w-6 h-6 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Expert Service</h3>
                      <p className="text-gray-300 text-sm">Professional Installation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mr-3">
                      <Shield className="w-6 h-6 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Trusted Since 2009</h3>
                      <p className="text-gray-300 text-sm">Reliable Solutions</p>
                    </div>
                  </div>
                </>
              ) : (
                // Hybrid Care Features
                <>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mr-3">
                      <Battery className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Premium Batteries</h3>
                      <p className="text-gray-300 text-sm">High-quality imported cells</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mr-3">
                      <Wrench className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Expert Installation</h3>
                      <p className="text-gray-300 text-sm">Professional Service</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mr-3">
                      <Car className="w-6 h-6 text-green-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Home Installation</h3>
                      <p className="text-gray-300 text-sm">Convenient Service</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt={isHashimTraders ? "UPS and Battery Solutions" : "Hybrid Battery Solutions"}
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className={`absolute inset-0 ${
                isHashimTraders 
                  ? 'bg-gradient-to-t from-primary-900/80 to-transparent' 
                  : 'bg-gradient-to-t from-green-900/80 to-transparent'
              } rounded-xl`}></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className={`${
                  isHashimTraders ? 'bg-primary-500' : 'bg-green-500'
                } text-white px-3 py-1 rounded text-sm font-medium`}>Featured</span>
                <h3 className="text-xl text-white mt-2">
                  {isHashimTraders ? 'Complete Power Solutions' : 'Hybrid Battery Solutions'}
                </h3>
                <p className="text-gray-300">
                  {isHashimTraders 
                    ? 'UPS, Solar Inverters & Lithium Batteries' 
                    : 'Expert Installation & Warranty Support'
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;