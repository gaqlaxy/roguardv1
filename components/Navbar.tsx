import React, { useState, useEffect } from 'react';
import { Menu, X, Droplet, Scale } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onScrollToSection: (id: string) => void;
  compareCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onScrollToSection, compareCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string, view: ViewState = 'HOME') => {
    setIsOpen(false);
    onNavigate(view);
    if (view === 'HOME' && id !== 'hero') {
      setTimeout(() => onScrollToSection(id), 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero', view: 'HOME' as ViewState },
    { name: 'About', id: 'about', view: 'HOME' as ViewState },
    { name: 'Products', id: 'products', view: 'HOME' as ViewState },
    { name: 'Blog', id: 'blog', view: 'BLOG' as ViewState },
    { name: 'Testimonials', id: 'testimonials', view: 'HOME' as ViewState },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled || currentView !== 'HOME' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleLinkClick('hero', 'HOME')}
          >
            <div className="bg-brand-600 p-2 rounded-lg text-white mr-2">
              <Droplet size={24} fill="currentColor" />
            </div>
            <span className={`text-2xl font-bold ${isScrolled || currentView !== 'HOME' ? 'text-gray-900' : 'text-gray-900 lg:text-white'}`}>
              RO<span className="text-brand-600">Guard</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.id, link.view)}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  isScrolled || currentView !== 'HOME' ? 'text-gray-700' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}

            {/* Comparison Badge */}
            {compareCount > 0 && (
              <button 
                onClick={() => onNavigate('COMPARE')}
                className="flex items-center space-x-1 bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-200 hover:bg-indigo-100 transition-colors animate-fade-in"
              >
                <Scale size={16} />
                <span className="text-xs font-bold">Compare ({compareCount})</span>
              </button>
            )}

            <button 
              onClick={() => handleLinkClick('contact', 'HOME')}
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 shadow-md shadow-brand-200"
            >
              Get Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             {/* Mobile Comparison Badge */}
             {compareCount > 0 && (
              <button 
                onClick={() => onNavigate('COMPARE')}
                className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full"
              >
                <Scale size={18} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {compareCount}
                </span>
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled || currentView !== 'HOME' ? 'text-gray-700' : 'text-gray-900'}`}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t z-50">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.id, link.view)}
                className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
              >
                {link.name}
              </button>
            ))}
             <button 
              onClick={() => handleLinkClick('contact', 'HOME')}
              className="block w-full text-left px-3 py-3 rounded-md text-base font-bold text-brand-600 bg-brand-50"
            >
              Get Service / Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;