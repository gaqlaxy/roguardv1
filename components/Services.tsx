import React from 'react';
import { CheckCircle, Phone, Clock, PenTool as Tool, Shield } from 'lucide-react';
import { SERVICE_PLANS, COMPANY_PHONE, formatPrice } from '../constants';

const Services: React.FC = () => {
    const handleBookService = (planTitle: string) => {
        const message = `Halo, I am interested in booking: ${planTitle}`;
        const url = `https://wa.me/${COMPANY_PHONE}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Expert Care</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Comprehensive RO Solutions
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        From brand new installations to professional maintenance plans.
                        We ensure your water purifier stays perfect.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {[
                        { icon: <Clock size={28} />, title: "60 Min Response", desc: "Quick turnaround time" },
                        { icon: <Tool size={28} />, title: "Expert Technicians", desc: "Background verified pros" },
                        { icon: <Shield size={28} />, title: "Genuine Spares", desc: "100% authentic parts" },
                        { icon: <Phone size={28} />, title: "24/7 Support", desc: "Always here to help" },
                    ].map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl hover:shadow-md transition-shadow">
                            <div className="bg-brand-100 p-3 rounded-full text-brand-600 mb-3">
                                {feature.icon}
                            </div>
                            <h4 className="font-bold text-gray-900">{feature.title}</h4>
                            <p className="text-sm text-gray-500">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICE_PLANS.map((plan) => (
                        <div
                            key={plan.id}
                            className={`relative flex flex-col p-6 rounded-2xl transition-all duration-300 ${plan.isPopular
                                ? 'bg-white border-2 border-brand-500 shadow-xl scale-105 z-10'
                                : 'bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-brand-200'
                                }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
                                <p className="text-sm text-gray-500 mt-1 h-10">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                                <span className="text-3xl font-bold text-gray-900">{formatPrice(plan.price)}</span>
                                <span className="text-gray-500 text-sm"> / {plan.period}</span>
                            </div>

                            <ul className="space-y-3 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-700">
                                        <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleBookService(plan.title)}
                                className={`w-full py-3 rounded-xl font-semibold transition-colors ${plan.isPopular
                                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-200'
                                    : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
