import React from "react";
import {
  Settings,
  Users,
  Clock,
  Award,
  Target,
  Heart,
  Shield,
} from "lucide-react";

const About: React.FC = () => {
  const features = [
    {
      icon: <Settings size={32} className="text-brand-600" />,
      title: "Expert Installation",
      desc: "Certified technicians ensure your system is set up perfectly for maximum efficiency.",
    },
    {
      icon: <Clock size={32} className="text-brand-600" />,
      title: "24/7 Support",
      desc: "Round-the-clock customer support to resolve any water quality issues instantly.",
    },
    {
      icon: <Award size={32} className="text-brand-600" />,
      title: "Genuine Parts",
      desc: "We use only authentic, certified spare parts for all repairs and maintenance.",
    },
    {
      icon: <Users size={32} className="text-brand-600" />,
      title: "Trusted by Thousands",
      desc: "Over 1000+ satisfied families rely on ShamAqua for their daily drinking water.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              About ShamAqua
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Committed to Delivering <br />
              <span className="text-brand-600">The Purest Water</span> Since
              2015
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At ShamAqua, we believe that clean water is a fundamental right,
              not a luxury. We started with a simple mission: to provide
              affordable, high-quality water purification solutions to every
              household.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Unlike generic sellers, we are service-first. We understand that
              an RO purifier is only as good as its maintenance. That's why we
              offer comprehensive annual maintenance contracts (AMC) and rapid
              response repair services.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-start p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
                >
                  <div className="mb-3 p-3 bg-white rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* <img
                src="/about.png"
                alt="Technician repairing RO filter"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              /> */}

              {/* Add Video here  */}
              <video
                src="/aquaabout.webm"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium opacity-90">
                  Certified Technicians
                </p>
                <p className="text-xl font-bold">
                  Expert Service at your Doorstep
                </p>
              </div>
            </div>

            <div className="hidden lg:block absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl font-bold text-brand-600">98%</span>
                <span className="text-green-500 bg-green-50 px-2 py-1 rounded text-xs font-bold">
                  Positive
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                Customer satisfaction rate based on last year's service calls.
              </p>
            </div>
          </div>
        </div>

        {/* New Sections: Mission, Story, Values */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our DNA</h3>
            <p className="text-gray-600">
              We are more than just a water purifier company. We are a team of
              passionate individuals dedicated to improving community health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="text-brand-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Our Mission
              </h4>
              <p className="text-gray-600 leading-relaxed">
                To ensure every glass of water consumed in our city is safe,
                pure, and healthy. We aim to eliminate waterborne diseases
                through advanced technology and proactive service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="text-red-500" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Core Values
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Shield size={16} className="mr-2 text-brand-500" /> Integrity
                  in pricing
                </li>
                <li className="flex items-center">
                  <Shield size={16} className="mr-2 text-brand-500" /> Quality
                  without compromise
                </li>
                <li className="flex items-center">
                  <Shield size={16} className="mr-2 text-brand-500" />{" "}
                  Customer-first approach
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-purple-600" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Our Story
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2015 by two engineers who faced severe water quality
                issues in their own neighborhood. What started as a small garage
                repair shop has now grown into the city's most trusted water
                partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
