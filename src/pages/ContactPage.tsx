import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import { useBusiness } from '../context/BusinessContext';
import { businesses } from '../data/businesses';

const ContactPage: React.FC = () => {
  const { activeBusiness, isHashimTraders, isHybridCare } = useBusiness();
  const business = businesses[activeBusiness];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>
            {isHashimTraders 
              ? 'Get in touch with us for all your power backup solution needs'
              : 'Get in touch with us for dependable hybrid battery solutions'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {isHashimTraders ? (
                  <>
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-primary-500 mt-1" />
                      <div className="ml-4">
                        <h4 className="font-medium">Address</h4>
                        <p className="text-gray-600">Hashim Traders, Haider UPS,<br />Main Sui Gas Road, Near Street #07,<br />Gujranwala, 50250, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-primary-500 mt-1" />
                      <div className="ml-4">
                        <h4 className="font-medium">Phone/WhatsApp</h4>
                        <p className="text-gray-600">
                          <a href="tel:+923006441817" className="hover:text-primary-600">0300 6441817</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-primary-500 mt-1" />
                      <div className="ml-4">
                        <h4 className="font-medium">Email</h4>
                        <p className="text-gray-600">
                          <a href="mailto:hashimtraders1817@gmail.com" className="hover:text-primary-600">hashimtraders1817@gmail.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-primary-500 mt-1" />
                      <div className="ml-4">
                        <h4 className="font-medium">Business Hours</h4>
                        <p className="text-gray-600">Monday - Sunday: 9:30 AM - 8:00 PM</p>
                        <p className="text-gray-600">Friday: Closed</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-primary-500 mt-1" />
                      <div className="ml-4">
                        <h4 className="font-medium">Address</h4>
                        <p className="text-gray-600">Hashim Traders, Haider UPS,<br />
                      Main Sui Gas Road, Near Street #07,<br />
                      Gujranwala, 50250, Pakistan</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-primary-500 mt-1" />
                      <div className="ml-4">
                        <h4 className="font-medium">Phone/WhatsApp</h4>
                        <p className="text-gray-600">
                          <a href={`tel:+92${business.phone}`} className="hover:text-primary-600">{business.phone}</a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-primary-500 mt-1" />
                      <div className="ml-4">
                        <h4 className="font-medium">Business Hours</h4>
                        <p className="text-gray-600">Monday - Sunday: 9:30 AM - 8:00 PM</p>
                        <p className="text-gray-600">Friday: Closed</p>
                      </div>
                    </div>
                  </>
                )}
                <div className="flex items-start">
                  <Facebook className="w-6 h-6 text-primary-500 mt-1" />
                  <div className="ml-4">
                    <h4 className="font-medium">Social Media</h4>
                    <p className="text-gray-600">
                      <a 
                        href={business.socialMedia.facebook}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary-600"
                      >
                        Visit Us on Facebook
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Note: Replace with actual Google Maps embed for the business location */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6753.062190503397!2d74.182718!3d32.189917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f29bc79e42995%3A0xf1a3a0f5a6e85c23!2sHashim%20Traders%20Haider%20UPS!5e0!3m2!1sen!2sus!4v1747570664029!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;