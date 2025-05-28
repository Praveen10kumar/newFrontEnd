import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Hexagon, 
  Calculator,
  Mail, 
  MapPin, 
  Phone, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Calculator 
              size={36} 
              className="text-primary-800 mr-2" 
            />
              <span className="ml-2 text-xl font-bold">SNA</span>
            </div>
            <p className="text-secondary-300 mb-4">
              Empowering your finances. Expert bookkeeping and accounting to keep your business on track
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-secondary-300 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-secondary-300 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-secondary-300 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-secondary-300 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  to="/industries" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Controller Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Transactional Accounting
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Cloud Accounting Setup
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Financial Reporting & Analysis
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300">
                  C-399 Pareek College Road Near Sindhi Camp,Jaipur – 302016 INDIA
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300">Contact@Singhalnitinassociates.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-10 pt-6 text-center text-secondary-400 text-sm">
          <p>© {new Date().getFullYear()} Innovate Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;