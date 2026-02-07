import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

const WhatsAppFloat: React.FC = () => {
  const handleClick = () => {
    const url = `https://wa.me/${COMPANY_PHONE}?text=Hi ShamAqua, I would like to know more about your services.`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 md:bottom-10 md:right-10 z-[10001] bg-[#25D366] hover:bg-[#128C7E] text-white p-3 md:p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center border-2 border-white/20"
      style={{ 
        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)'
      }}
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </button>
  );
};

export default WhatsAppFloat;
