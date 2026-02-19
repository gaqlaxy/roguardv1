import React, { useEffect, useRef, useState } from 'react';
import { X, Check, MessageCircle, Droplet, Zap, Ruler } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../constants';
import EnquiryModal from './EnquiryModal';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [showEnquiry, setShowEnquiry] = useState(false);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (showEnquiry) {
          setShowEnquiry(false);
          return;
        }
        onClose();
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable || focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, showEnquiry]);

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-fade-in-up"
      >

        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
          <div className="relative w-full aspect-square max-w-sm mx-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl shadow-lg mix-blend-multiply"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col">
          <div className="mb-auto">
            <h3 className="text-sm font-bold text-brand-600 uppercase tracking-wide mb-1">RO Purifier</h3>
            <h2 id="product-modal-title" className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>

            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
              {product.originalPrice && (
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div className="flex items-center text-gray-500 mb-1">
                  <Ruler size={16} className="mr-2" />
                  <span className="text-xs font-medium uppercase">Capacity</span>
                </div>
                <span className="font-semibold text-gray-900">{product.capacity}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div className="flex items-center text-gray-500 mb-1">
                  <Zap size={16} className="mr-2" />
                  <span className="text-xs font-medium uppercase">Technology</span>
                </div>
                <span className="font-semibold text-gray-900">{product.filtrationStages} Stages</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600 text-sm">
                    <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={() => setShowEnquiry(true)}
            className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-200 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Send Enquiry
          </button>
          <p className="text-center text-xs text-gray-400 mt-3">
            Secure inquiry via WhatsApp, Phone or Email.
          </p>
        </div>
      </div>

      {showEnquiry && (
        <EnquiryModal
          product={product}
          onClose={() => setShowEnquiry(false)}
        />
      )}
    </div>
  );
};

export default ProductModal;
