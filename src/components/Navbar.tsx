// src/components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Calculator } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
    { name: 'Industries', path: '/industries' },
    { name: 'Referral & Earn', path: '/referral' },
  ];

  const scrollToHash = (hash: string) => {
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to section if there's a hash
  useEffect(() => {
    if (location.pathname === '/resources' && location.hash) {
      const section = location.hash.replace('#', '');
      setTimeout(() => scrollToHash(section), 100); // Delay ensures content is mounted
    }
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Calculator size={36} className="text-primary-800 mr-2" />
            <span className="text-2xl font-bold text-primary-900">SNA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 relative">
            {navItems.map((item) =>
              item.name === 'Resources' ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link
                    to={item.path}
                    className="text-neutral-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                  {showDropdown && (
                    <div className="absolute top-full mt-2 w-48 bg-white shadow-md rounded-md z-10">
                      <Link
                        to="/resources#latest-blog"
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100"
                      >
                        Latest Blog
                      </Link>
                      <Link
                        to="/resources#faqs"
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100"
                      >
                        FAQs
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-neutral-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/consultation"
                className="bg-primary-600 text-white px-5 py-2 rounded-md hover:bg-primary-700 transition-colors flex items-center"
              >
                <Calendar size={18} className="mr-2" />
                <span>Free Consultation</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-700 hover:text-primary-600 py-2 transition-colors block"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/resources#latest-blog"
                onClick={() => setIsOpen(false)}
                className="text-neutral-700 hover:text-primary-600 py-2 transition-colors block"
              >
                Latest Blog
              </Link>
              <Link
                to="/resources#faqs"
                onClick={() => setIsOpen(false)}
                className="text-neutral-700 hover:text-primary-600 py-2 transition-colors block"
              >
                FAQs
              </Link>
              <Link
                to="/consultation"
                onClick={() => setIsOpen(false)}
                className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
              >
                <Calendar size={18} className="mr-2" />
                <span>Free Consultation</span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
