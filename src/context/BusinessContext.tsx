import React, { createContext, useState, useContext, ReactNode } from 'react';

type BusinessType = 'hashim' | 'hybrid';

interface BusinessContextProps {
  activeBusiness: BusinessType;
  setActiveBusiness: (business: BusinessType) => void;
  isHashimTraders: boolean;
  isHybridCare: boolean;
}

const BusinessContext = createContext<BusinessContextProps | undefined>(undefined);

interface BusinessProviderProps {
  children: ReactNode;
}

export const BusinessProvider: React.FC<BusinessProviderProps> = ({ children }) => {
  const [activeBusiness, setActiveBusiness] = useState<BusinessType>('hybrid');

  const isHashimTraders = activeBusiness === 'hashim';
  const isHybridCare = activeBusiness === 'hybrid';

  return (
    <BusinessContext.Provider
      value={{
        activeBusiness,
        setActiveBusiness,
        isHashimTraders,
        isHybridCare
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = (): BusinessContextProps => {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
}; 