import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Battery,
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook,
  Car,
  Zap
} from 'lucide-react';
import { useBusiness } from '../../context/BusinessContext';
import { businesses } from '../../data/businesses';
import hashimLogo from '../../assets/logo/HashimTraders_logo.png';
import hybridLogo from '../../assets/logo/Hybrid_Logo.png';

const Footer: React.FC = () => {
  const { activeBusiness, isHashimTraders, isHybridCare } = useBusiness();
  const business = businesses[activeBusiness];
  const logo = isHashimTraders ? hashimLogo : hybridLogo;
  
  return (
    <footer className={isHashimTraders ? "bg-primary-900 text-gray-200" : "bg-green-900 text-gray-200"}>
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt={`${business.name} Logo`} className="h-10" />
              <span className="text-2xl font-bold text-white">{business.name}</span>
            </Link>
            <p className="text-gray-300 mt-4">
              {business.description}
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href={business.socialMedia.facebook}
                target="_blank" 
                rel="noopener noreferrer"
                className={`${isHashimTraders ? 'bg-primary-800 hover:bg-primary-700' : 'bg-green-800 hover:bg-green-700'} p-2 rounded-full transition-colors duration-300`}
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products/Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">
              {isHashimTraders ? 'Our Products' : 'Our Services'}
            </h4>
            <ul className="space-y-2">
              {isHashimTraders ? (
                // Hashim Traders Products
                <>
                  <li>
                    <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="mr-2">›</span> APC Imported UPS
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="mr-2">›</span> Homage UPS
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="mr-2">›</span> Solarmax UPS
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="mr-2">›</span> Inverex UPS
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="mr-2">›</span> Solar Inverters
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="mr-2">›</span> Lead-Acid & Lithium Batteries
                    </Link>
                  </li>
                </>
              ) : (
                // Hybrid Care Services
                <>
                  {business.services.items.map((service, index) => (
                    <li key={index}>
                      <Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                        <span className="mr-2">›</span> {service}
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className={`w-5 h-5 ${isHashimTraders ? 'text-primary-400' : 'text-green-400'} mr-3 mt-1 flex-shrink-0`} />
                <p>
                  {isHashimTraders ? (
                    <>{business.name}, Haider UPS,<br />Main Sui Gas Road, Near Street #07,<br />Gujranwala, 50250, Pakistan</>
                  ) : (
                    <>{business.name}, Haider UPS,<br />
                    Main Sui Gas Road, Near Street #07,<br />
                    Gujranwala, 50250, Pakistan</>
                  )}
                </p>
              </div>
              <div className="flex items-start">
                <PhoneCall className={`w-5 h-5 ${isHashimTraders ? 'text-primary-400' : 'text-green-400'} mr-3 mt-1 flex-shrink-0`} />
                <div>
                  <p>
                    <a href={`tel:+92${business.phone}`} className="hover:text-white">{business.phone}</a>
                  </p>
                </div>
              </div>
              {isHashimTraders && (
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-primary-400 mr-3 mt-1 flex-shrink-0" />
                  <p>
                    <a href="mailto:hashimtraders1817@gmail.com" className="hover:text-white">hashimtraders1817@gmail.com</a>
                  </p>
                </div>
              )}
              <div className="flex items-start">
                <Clock className={`w-5 h-5 ${isHashimTraders ? 'text-primary-400' : 'text-green-400'} mr-3 mt-1 flex-shrink-0`} />
                <div>
                  <p>Monday - Sunday: 9:30 AM - 8:00 PM</p>
                  <p>Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className={`py-4 border-t ${isHashimTraders ? 'border-primary-800 bg-primary-950' : 'border-green-800 bg-green-950'}`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} {business.name}. All Rights Reserved.</p>
          <div className="mt-2 md:mt-0 text-sm">
            <span className="mx-2">Privacy Policy</span>
            <span className="mx-2">|</span>
            <span className="mx-2">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;