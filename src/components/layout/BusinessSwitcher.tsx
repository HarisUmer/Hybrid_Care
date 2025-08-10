import React from 'react';
import { useBusiness } from '../../context/BusinessContext';

const BusinessSwitcher: React.FC = () => {
  const { activeBusiness, setActiveBusiness, isHashimTraders, isHybridCare } = useBusiness();

  const handleBusinessSwitch = () => {
    if (isHashimTraders) {
      setActiveBusiness('hybrid');
    } else {
      setActiveBusiness('hashim');
    }
  };

  return (
    <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full border border-gray-200">
      <span className="text-sm text-gray-600">Switch to:</span>
      <button
        onClick={handleBusinessSwitch}
        className="text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors cursor-pointer"
      >
        {isHashimTraders ? 'Hybrid Care' : 'Hashim Traders'}
      </button>
    </div>
  );
};

export default BusinessSwitcher; 