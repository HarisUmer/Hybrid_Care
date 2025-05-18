import React from 'react';
import { motion } from 'framer-motion';
import { useBusiness } from '../context/BusinessContext';
import { businesses } from '../data/businesses';

const AboutPage: React.FC = () => {
  const { activeBusiness, isHashimTraders, isHybridCare } = useBusiness();
  const business = businesses[activeBusiness];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="section-title mb-12">
          <h2>About {business.name}</h2>
          <p>{business.tagline}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">
              {business.description}
            </p>
            {isHashimTraders ? (
              <>
                <p className="text-lg text-gray-700">
                  With over a decade of experience, we proudly deal in imported APC UPS units and top local brands 
                  such as Homage, Solarmax, and Inverex. Whether you need a reliable UPS, solar inverter setup, 
                  or battery replacement, Hashim Traders is your one-stop solution.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Our Products</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>APC Imported UPS</li>
                    <li>Branded UPS (Homage, Solarmax, Inverex)</li>
                    <li>Solar Inverters</li>
                    <li>Lead-Acid & Lithium Batteries</li>
                    <li>Complete Solar Battery Solutions</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <p className="text-lg text-gray-700">
                  Our team uses high-quality imported batteries, provides warranty-backed installations, 
                  and ensures every customer leaves with complete confidence and satisfaction. With over 8 years 
                  of hands-on experience, we specialize in hybrid battery solutions for various vehicle models.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {business.services.items.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6">Visit or Contact Us</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">Location:</h4>
                <p className="text-gray-600">
                  {isHashimTraders ? (
                    <>
                      Hashim Traders, Haider UPS,<br />
                      Main Sui Gas Road, Near Street #07,<br />
                      Gujranwala, 50250, Pakistan
                    </>
                  ) : (
                    <>
                     Hashim Traders, Haider UPS,<br />
                      Main Sui Gas Road, Near Street #07,<br />
                      Gujranwala, 50250, Pakistan
                    </>
                  )}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Business Hours:</h4>
                <p className="text-gray-600">
                  9:30 AM – 8:00 PM (Monday to Sunday)<br />
                  'Friday: Closed' 
                  </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Contact:</h4>
                <p className="text-gray-600">
                  Phone/WhatsApp: <a href={`tel:+92${business.phone}`} className="text-primary-600 hover:underline">{business.phone}</a><br />
                  {isHashimTraders && (
                    <>
                      Email: <a href="mailto:hashimtraders1817@gmail.com" className="text-primary-600 hover:underline">hashimtraders1817@gmail.com</a>
                    </>
                  )}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Social Media:</h4>
                <a 
                  href={business.socialMedia.facebook}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-primary-600 hover:underline"
                >
                  Visit Us on Facebook
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;