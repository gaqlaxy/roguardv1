import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { PRODUCTS } from './constants';

const Products = lazy(() => import('./components/Products'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Blog = lazy(() => import('./components/Blog'));
const Comparison = lazy(() => import('./components/Comparison'));

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [compareList, setCompareList] = useState<string[]>([]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (path: string) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(path);
  };

  const toggleCompare = (id: string) => {
    setCompareList(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      if (prev.length >= 3) {
        alert("You can only compare up to 3 products at a time.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const clearCompare = () => setCompareList([]);

  // Filter products for comparison view
  const comparisonProducts = PRODUCTS.filter(p => compareList.includes(p.id));

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        currentPath={location.pathname}
        onNavigate={handleNavigate}
        onScrollToSection={scrollToSection}
        compareCount={compareList.length}
      />

      <main>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-600"></div></div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero onCtaClick={() => scrollToSection('services')} />
                  <Services />
                  <Products
                    viewMode="HOME"
                    onViewAll={() => handleNavigate('/products')}
                    selectedForCompare={compareList}
                    toggleCompare={toggleCompare}
                  />
                  <About />
                  <Testimonials />
                  <ContactCTA />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <div className="pt-20">
                  <div className="bg-slate-900 py-12 text-center">
                    <h1 className="text-3xl font-bold text-white">Our Complete Catalog</h1>
                    <p className="text-gray-400 mt-2">Find the perfect purification system for your needs</p>
                  </div>
                  <Products
                    viewMode="ALL_PRODUCTS"
                    onViewAll={() => { }}
                    selectedForCompare={compareList}
                    toggleCompare={toggleCompare}
                  />
                  <ContactCTA />
                </div>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/compare"
              element={
                <div className="pt-20">
                  <Comparison
                    products={comparisonProducts}
                    onRemove={toggleCompare}
                    onClear={clearCompare}
                  />
                  <div className="bg-white">
                    <ContactCTA />
                  </div>
                </div>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer onNavigate={handleNavigate} onScrollToSection={scrollToSection} />
      <WhatsAppFloat />
    </div>
  );
};

export default App;
