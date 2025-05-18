import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { BusinessProvider, useBusiness } from './context/BusinessContext';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Business route wrapper component
const BusinessRoutes = () => {
  const { setActiveBusiness } = useBusiness();
  const location = useLocation();
  
  // Update active business based on URL
  React.useEffect(() => {
    if (location.pathname.startsWith('/hashim')) {
      setActiveBusiness('hashim');
    } else if (location.pathname.startsWith('/hybrid')) {
      setActiveBusiness('hybrid');
    }
  }, [location.pathname, setActiveBusiness]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      
      {/* Hashim Traders Routes */}
      <Route path="/hashim" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      
      {/* Hybrid Care Routes */}
      <Route path="/hybrid" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

function App() {
  return (
    <BusinessProvider>
      <BusinessRoutes />
    </BusinessProvider>
  );
}

export default App;