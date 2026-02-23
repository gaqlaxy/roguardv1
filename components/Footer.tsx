import React from "react";
import { Droplet, Facebook, Instagram, Twitter } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
  onScrollToSection: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onScrollToSection }) => {
  const handleLinkClick = (path: string, sectionId?: string) => {
    onNavigate(path);
    if (path === "/" && sectionId && sectionId !== "hero") {
      setTimeout(() => onScrollToSection(sectionId), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
                Sham<span className="text-brand-500">Aqua</span>
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
                <button
                  type="button"
                  onClick={() => handleLinkClick("/", "hero")}
                  className="hover:text-brand-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("/", "about")}
                  className="hover:text-brand-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("/", "products")}
                  className="hover:text-brand-400 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("/", "testimonials")}
                  className="hover:text-brand-400 transition-colors"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("/", "contact")}
                  className="hover:text-brand-400 transition-colors"
                >
                  RO Installation
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("/", "contact")}
                  className="hover:text-brand-400 transition-colors"
                >
                  Annual Maintenance
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("/", "contact")}
                  className="hover:text-brand-400 transition-colors"
                >
                  Filter Replacement
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLinkClick("/", "contact")}
                  className="hover:text-brand-400 transition-colors"
                >
                  Water Testing
                </button>
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
            <button type="button" className="hover:text-slate-300">
              Privacy Policy
            </button>
            <button type="button" className="hover:text-slate-300">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
