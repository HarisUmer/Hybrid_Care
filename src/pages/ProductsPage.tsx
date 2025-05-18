import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useBusiness } from '../context/BusinessContext';
import { businesses } from '../data/businesses';
import hashimProducts from '../data/hashim-products.json';
import hybridProducts from '../data/hybrid-products.json';

// Import Hashim Traders product images
import apcUps from '../assets/products/apc-ups.svg';
import homageUps from '../assets/products/homage-ups.svg';
import solarmaxUps from '../assets/products/solarmax-ups.svg';
import inverexUps from '../assets/products/inverex-ups.svg';
import solarInverter from '../assets/products/solar-inverter.svg';
import batteries from '../assets/products/batteries.svg';

// Import Hybrid Care product images (these would need to be created/added to the assets folder)
import priusBattery from '../assets/products/prius-battery.svg';
import insightBattery from '../assets/products/insight-battery.svg';
import aquaBattery from '../assets/products/aqua-battery.svg';
import lithiumBattery from '../assets/products/lithium-battery.svg';
import batteryCells from '../assets/products/battery-cells.svg';
import diagnosticTools from '../assets/products/diagnostic-tools.svg';

interface ProductItem {
  id: number;
  name: string;
  description: string;
  features: string[];
  image: string;
}

const ProductsPage: React.FC = () => {
  const { activeBusiness, isHashimTraders, isHybridCare } = useBusiness();
  const business = businesses[activeBusiness];
  const productsData: ProductItem[] = isHashimTraders ? hashimProducts : hybridProducts;

  // Map the local images to the products
  const productImages: Record<string, string> = {
    // Hashim Traders product images
    '/assets/products/apc-ups.svg': apcUps,
    '/assets/products/homage-ups.svg': homageUps,
    '/assets/products/solarmax-ups.svg': solarmaxUps,
    '/assets/products/inverex-ups.svg': inverexUps,
    '/assets/products/solar-inverter.svg': solarInverter,
    '/assets/products/batteries.svg': batteries,
    
    // Hybrid Care product images
    '/assets/products/prius-battery.svg': priusBattery,
    '/assets/products/insight-battery.svg': insightBattery,
    '/assets/products/aqua-battery.svg': aquaBattery,
    '/assets/products/lithium-battery.svg': lithiumBattery,
    '/assets/products/battery-cells.svg': batteryCells,
    '/assets/products/diagnostic-tools.svg': diagnosticTools,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Our Products</h2>
          <p>
            {isHashimTraders 
              ? 'Premium power backup solutions for residential and commercial use'
              : 'High-quality hybrid battery solutions for optimal vehicle performance'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card overflow-hidden bg-white rounded-lg shadow-md"
            >
              <div className="relative h-48 bg-gray-100 p-4 flex items-center justify-center">
                <img
                  src={productImages[product.image]}
                  alt={product.name}
                  className="h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link to={`/${activeBusiness}/contact`} className="btn btn-primary w-full mt-6">
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;