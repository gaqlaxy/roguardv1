import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Blog from './components/Blog';
import Comparison from './components/Comparison';
import { ViewState } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('HOME');
  const [compareList, setCompareList] = useState<string[]>([]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (newView: ViewState) => {
    // When switching views, scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' });
    setView(newView);
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
        currentView={view} 
        onNavigate={handleNavigate}
        onScrollToSection={scrollToSection}
        compareCount={compareList.length}
      />
      
      <main>
        {view === 'HOME' && (
          <>
            <Hero onCtaClick={() => scrollToSection('contact')} />
            <About />
            <Products 
              viewMode="HOME" 
              onViewAll={() => handleNavigate('ALL_PRODUCTS')} 
              selectedForCompare={compareList}
              toggleCompare={toggleCompare}
            />
            <Testimonials />
            <ContactCTA />
          </>
        )}

        {view === 'ALL_PRODUCTS' && (
          <div className="pt-20">
            <div className="bg-slate-900 py-12 text-center">
              <h1 className="text-3xl font-bold text-white">Our Complete Catalog</h1>
              <p className="text-gray-400 mt-2">Find the perfect purification system for your needs</p>
            </div>
            <Products 
              viewMode="ALL_PRODUCTS" 
              onViewAll={() => {}} // No-op in all view
              selectedForCompare={compareList}
              toggleCompare={toggleCompare}
            />
            <ContactCTA />
          </div>
        )}

        {view === 'BLOG' && (
           <Blog />
        )}

        {view === 'COMPARE' && (
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
        )}
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;