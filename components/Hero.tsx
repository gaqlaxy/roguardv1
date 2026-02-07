import React from 'react';
import { ArrowRight, ShieldCheck, Droplets } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2500&auto=format&fit=crop" 
          alt="Clean refreshing water background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center space-x-2 bg-brand-600/20 border border-brand-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-brand-300 text-sm font-medium tracking-wide">#1 Rated Water Service in City</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Pure Water, <br/>
            <span className=" bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300">
              Healthier Life.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
            Protect your family from waterborne diseases. Experience the purest drinking water with our advanced RO technology and 24/7 expert maintenance support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="group bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center sm:justify-start"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              View Products
            </button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-brand-400" />
              <span className="text-sm font-medium">5-Year Warranty</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="text-brand-400" />
              <span className="text-sm font-medium">99.9% Purity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;