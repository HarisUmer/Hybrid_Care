import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBusiness } from '../../context/BusinessContext';
import hashimLogo from '../../assets/logo/HashimTraders_logo.png';
import hybridLogo from '../../assets/logo/Hybrid_Logo.png';
import BusinessSwitcher from './BusinessSwitcher';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const location = useLocation();
  const { isHashimTraders, isHybridCare } = useBusiness();

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
    // Close mobile menu on route change
    setIsMenuOpen(false);
  }, [location]);

  // Always white background with shadow
  const headerClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-lg py-2`;

  // Text color always dark for better contrast on white background
  const linkClass = `text-lg font-medium transition-colors duration-300 text-gray-800 hover:text-primary-500`;

  const activeClass = `${
    isHashimTraders 
      ? 'text-primary-600 border-b-2 border-primary-500'
      : 'text-green-600 border-b-2 border-green-500'
  }`;

  const logoColor = isHashimTraders ? 'text-primary-600' : 'text-green-600';
  const logo = isHashimTraders ? hashimLogo : hybridLogo;
  const businessName = isHashimTraders ? 'Hashim Traders' : 'Hybrid Care';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt={`${businessName} Logo`} className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${linkClass} ${activeClass}` : linkClass
            }
          >
            Contact
          </NavLink>
          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Get a Quote
          </Link>
          <BusinessSwitcher />
        </nav>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="text-gray-800" size={30} />
            ) : (
              <Menu className="text-gray-800" size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white shadow-xl absolute top-full left-0 right-0 z-20"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `text-primary-600 font-semibold border-l-4 border-primary-500 pl-2`
                    : 'text-gray-800 hover:text-primary-500 pl-3'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary-600 font-semibold border-l-4 border-primary-500 pl-2'
                    : 'text-gray-800 hover:text-primary-500 pl-3'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary-600 font-semibold border-l-4 border-primary-500 pl-2'
                    : 'text-gray-800 hover:text-primary-500 pl-3'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary-600 font-semibold border-l-4 border-primary-500 pl-2'
                    : 'text-gray-800 hover:text-primary-500 pl-3'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary-600 font-semibold border-l-4 border-primary-500 pl-2'
                    : 'text-gray-800 hover:text-primary-500 pl-3'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary-600 font-semibold border-l-4 border-primary-500 pl-2'
                    : 'text-gray-800 hover:text-primary-500 pl-3'
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <Link
                to="/contact"
                className="btn btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <BusinessSwitcher />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;