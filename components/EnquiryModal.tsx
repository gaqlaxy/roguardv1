import React, { useRef, useEffect } from 'react';
import { X, MessageCircle, Phone, Mail } from 'lucide-react';
import { Product } from '../types';
import { COMPANY_PHONE, COMPANY_EMAIL, WHATSAPP_MESSAGE_PRE } from '../constants';

interface EnquiryModalProps {
    product: Product;
    onClose: () => void;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ product, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // trapping focus could be added here
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    const handleWhatsApp = () => {
        const text = encodeURIComponent(`${WHATSAPP_MESSAGE_PRE} ${product.name}`);
        window.open(`https://wa.me/${COMPANY_PHONE}?text=${text}`, '_blank');
    };

    const handleCall = () => {
        window.open(`tel:+${COMPANY_PHONE}`);
    };

    const handleEmail = () => {
        const subject = encodeURIComponent(`Enquiry for ${product.name}`);
        const body = encodeURIComponent(`Hello,\n\nI am interested in the ${product.name}. Please provide more details.\n\nThanks.`);
        window.open(`mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`);
    };

    return (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div
                ref={modalRef}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-up"
            >
                <div className="p-6 text-center border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Choose your preferred way to enquire about <br />
                        <span className="font-semibold text-brand-600">{product.name}</span>
                    </p>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <X size={20} className="text-gray-600" />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <button
                        onClick={handleWhatsApp}
                        className="w-full flex items-center p-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-xl transition-all group"
                    >
                        <div className="p-3 bg-green-500 rounded-full text-white shadow-md group-hover:scale-110 transition-transform">
                            <MessageCircle size={24} />
                        </div>
                        <div className="ml-4 text-left">
                            <p className="font-bold text-gray-900">WhatsApp</p>
                            <p className="text-xs text-gray-500">Get instant reply</p>
                        </div>
                    </button>

                    <button
                        onClick={handleCall}
                        className="w-full flex items-center p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-all group"
                    >
                        <div className="p-3 bg-blue-500 rounded-full text-white shadow-md group-hover:scale-110 transition-transform">
                            <Phone size={24} />
                        </div>
                        <div className="ml-4 text-left">
                            <p className="font-bold text-gray-900">Call Now</p>
                            <p className="text-xs text-gray-500">Speak to an expert</p>
                        </div>
                    </button>

                    <button
                        onClick={handleEmail}
                        className="w-full flex items-center p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-all group"
                    >
                        <div className="p-3 bg-gray-700 rounded-full text-white shadow-md group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <div className="ml-4 text-left">
                            <p className="font-bold text-gray-900">Send Email</p>
                            <p className="text-xs text-gray-500">Get a detailed quote</p>
                        </div>
                    </button>
                </div>

                <div className="p-4 bg-gray-50 text-center text-xs text-gray-400">
                    We usually respond within 1 hour during business hours.
                </div>
            </div>
        </div>
    );
};

export default EnquiryModal;
