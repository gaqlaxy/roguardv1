import React, { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck, Droplets, Play, Star } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20">

      {/* Background Decor - Subtle Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-50/50 to-transparent"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-brand-50/40 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Column: Text Content */}
        <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 rounded-full px-5 py-2 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-slate-600 text-sm font-medium tracking-wide">Trusted by 1,000+ Homes</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Drink Pure. <br />
            <span className="text-brand-600 relative">
              Live Healthier.
              {/* Decorative Underline/Splash */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
            Advanced RO purification technology that restores essential minerals.
            Water that tastes better and keeps your family safe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={onCtaClick}
              className="group px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-semibold text-lg transition-all shadow-xl shadow-slate-200 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center"
            >
              Book Service
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-white text-slate-900 border border-slate-200 hover:border-brand-200 hover:bg-brand-50/50 rounded-full font-semibold text-lg transition-all flex items-center justify-center"
            >
              <span className="mr-2 p-1 bg-brand-100 rounded-full group-hover:scale-110 transition-transform">
                <Play size={12} className="text-brand-600 fill-brand-600 ml-0.5" />
              </span>
              See Products
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-slate-400">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-brand-500 w-5 h-5" />
              <span className="text-sm font-medium text-slate-600">ISO Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="text-brand-500 w-5 h-5" />
              <span className="text-sm font-medium text-slate-600">Copper Tech</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="text-brand-500 w-5 h-5" />
              <span className="text-sm font-medium text-slate-600">4.8/5 Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual (Clean Product Shot) */}
        <div className={`flex-1 relative transition-all duration-1000 delay-200 ease-out transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative z-10">
            {/* Product Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-brand-100 to-cyan-100 rounded-full blur-[60px] -z-10"></div>

            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-100/50 border border-white/50">
              <img
                src="/about.png"
                alt="Modern Water Purifier"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Glass Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">Current Status</p>
                  <p className="text-sm text-slate-700 font-medium flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Purification Active
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900">12<span className="text-sm font-normal text-slate-500">L/hr</span></p>
                </div>
              </div>
            </div>

            {/* Floating Bubbles Decoration */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-full shadow-xl border border-slate-50 flex items-center justify-center animate-bounce-slow z-20">
              <div className="text-center">
                <p className="text-2xl font-bold text-brand-600">0%</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase">Bacteria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;