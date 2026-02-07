import React from "react";
import { Droplet, Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 text-white">
              <Droplet
                size={24}
                className="text-brand-500 mr-2"
                fill="currentColor"
              />
              <span className="text-2xl font-bold">
                RO<span className="text-brand-500">Guard</span>
              </span>
            </div>
            <p className="text-sm text-slate-400">
              Trusted providers of advanced water purification systems and
              reliable maintenance services since 2015.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#hero"
                  className="hover:text-brand-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-brand-400 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-brand-400 transition-colors"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-400 transition-colors"
                >
                  RO Installation
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-400 transition-colors"
                >
                  Annual Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-400 transition-colors"
                >
                  Filter Replacement
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-400 transition-colors"
                >
                  Water Testing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-brand-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-brand-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-brand-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} ShamAqua Systems. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
