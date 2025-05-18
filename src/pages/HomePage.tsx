import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Battery, Zap, Sun, Shield, Wrench, Car } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { businesses } from '../data/businesses';
import Hero from '../components/home/Hero';
import batteryReplacement from '../assets/services/battery-replacement.svg';
import batteryInstallation from '../assets/services/battery-installation.svg';
import computerScanning from '../assets/services/computer-scanning.svg';

const HomePage: React.FC = () => {
  const { activeBusiness, isHashimTraders, isHybridCare } = useBusiness();
  const business = businesses[activeBusiness];

  return (
    <>
      <Hero />
      
      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              {isHashimTraders ? 'Our Featured Products' : 'Our Battery Solutions'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {isHashimTraders 
                ? 'High-quality power backup solutions for residential and commercial use'
                : 'Dependable and long-lasting hybrid battery solutions with expert installation'
              }
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {isHashimTraders ? (
              // Hashim Traders Products
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Battery className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">APC Imported UPS</h3>
                  <p className="text-gray-600 mb-4">Premium imported UPS systems with reliable performance and advanced features.</p>
                  <Link to="/hashim/products" className="text-primary-600 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Branded UPS</h3>
                  <p className="text-gray-600 mb-4">Top local brands including Homage, Solarmax, and Inverex with warranty coverage.</p>
                  <Link to="/hashim/products" className="text-primary-600 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Sun className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Solar Inverters</h3>
                  <p className="text-gray-600 mb-4">Efficient solar inverters for sustainable energy solutions and reduced electricity bills.</p>
                  <Link to="/hashim/products" className="text-primary-600 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Batteries</h3>
                  <p className="text-gray-600 mb-4">Lead-Acid & Lithium Batteries for all types of UPS and solar systems with extended life.</p>
                  <Link to="/hashim/products" className="text-primary-600 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              </>
            ) : (
              // Hybrid Care Products
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Battery className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Hybrid Battery Packs</h3>
                  <p className="text-gray-600 mb-4">Brand-new hybrid battery packs for optimal performance and extended life.</p>
                  <Link to="/hybrid/products" className="text-primary-600 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Lithium Battery Upgrades</h3>
                  <p className="text-gray-600 mb-4">Advanced lithium battery upgrades for improved performance and longer lifespan.</p>
                  <Link to="/hybrid/products" className="text-primary-600 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Wrench className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Diagnostic Services</h3>
                  <p className="text-gray-600 mb-4">Comprehensive hybrid system diagnostics to identify and resolve battery issues.</p>
                  <Link to="/hybrid/services" className="text-primary-600 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <Car className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Home Installation</h3>
                  <p className="text-gray-600 mb-4">Convenient home installation and pick-up services available in nearby areas.</p>
                  <Link to="/hybrid/services" className="text-primary-600 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About {business.name}</h2>
              <p className="text-lg text-gray-600">{business.description}</p>
              {isHashimTraders ? (
                <p className="text-lg text-gray-600">
                  With over a decade of experience, we proudly deal in imported APC UPS units and top local brands 
                  such as Homage, Solarmax, and Inverex. Whether you need a reliable UPS, solar inverter setup, 
                  or battery replacement, Hashim Traders is your one-stop solution.
                </p>
              ) : (
                <p className="text-lg text-gray-600">
                  Our team uses high-quality imported batteries, provides warranty-backed installations, 
                  and ensures every customer leaves with complete confidence and satisfaction.
                </p>
              )}
              <Link to={`/${activeBusiness}/about`} className="btn btn-primary inline-flex items-center">
                Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <img src={batteryReplacement} alt="Battery Solutions" className="w-full h-auto" />
              </div>
              <div className="aspect-square bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <img src={batteryInstallation} alt="UPS Installation" className="w-full h-auto" />
              </div>
              <div className="aspect-square bg-white p-4 rounded-lg shadow-md flex items-center justify-center">
                <img src={computerScanning} alt="Diagnostic Services" className="w-full h-auto" />
              </div>
              <div className="aspect-square bg-primary-100 p-4 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-primary-600">Since</h3>
                  <p className="text-4xl font-bold text-primary-800">{business.founded}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              {business.services.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {business.services.description}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {business.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow flex items-center"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <ArrowRight className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">{service}</h3>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to={`/${activeBusiness}/services`} className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            {isHashimTraders 
              ? 'Contact us today for expert power backup solutions and services'
              : 'Contact us today for dependable hybrid battery solutions and expert installation'
            }
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to={`/${activeBusiness}/contact`} className="btn btn-white">
              Contact Us
            </Link>
            <Link to={`/${activeBusiness}/${isHashimTraders ? 'products' : 'services'}`} className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-900">
              {isHashimTraders ? 'View Products' : 'Our Services'}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;