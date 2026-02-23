import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Customers Say</h2>
          <p className="mt-4 text-gray-500 lg:hidden text-sm">Swipe to see more reviews &rarr;</p>
        </div>

        {/* 
          Mobile/Tablet: Horizontal Scroll (Flex)
          Desktop (lg+): Grid
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:pb-0 hide-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-center bg-slate-50 p-8 rounded-2xl relative border border-slate-100 hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <Quote className="absolute top-8 right-8 text-brand-100 transform rotate-180" size={48} />
              
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={`${testimonial.id}-star-${i}`} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 relative z-10 flex-grow">"{testimonial.content}"</p>

              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <span className="text-gray-500 text-xs">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
