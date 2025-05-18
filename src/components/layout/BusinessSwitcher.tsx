import React from 'react';
import { Link } from 'react-router-dom';
import { useBusiness } from '../../context/BusinessContext';

const BusinessSwitcher: React.FC = () => {
  const { isHashimTraders, isHybridCare } = useBusiness();

  return (
    <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full border border-gray-200">
      <span className="text-sm text-gray-600">Switch to:</span>
      {isHashimTraders ? (
        <Link
          to="/hybrid"
          className="text-sm font-medium text-green-600 hover:text-green-800 transition-colors"
        >
          Hybrid Care
        </Link>
      ) : (
        <Link
          to="/hashim"
          className="text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors"
        >
          Hashim Traders
        </Link>
      )}
    </div>
  );
};

export default BusinessSwitcher; 