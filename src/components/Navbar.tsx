import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar, Calculator, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
    },
    { name: 'Resources', path: '/resources' },
    { 
      name: 'More', 
      path: '#',
      subItems: [
        { name: 'Contact', path: '/contact' },
        { name: 'Industries', path: '/industries' },
        { name: 'Referral & Earn', path: '/referral' },
      ]
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Calculator 
              size={36} 
              className="text-primary-800 mr-2" 
            />
            <span className="text-2xl font-bold text-primary-900">SNA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <button 
                      className="flex items-center text-neutral-700 hover:text-blue-600 font-medium transition-colors"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="text-neutral-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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
                <div key={item.name}>
                  {item.subItems ? (
                    <>
                      <button 
                        className="flex items-center text-neutral-700 hover:text-primary-600 py-2 transition-colors w-full"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 text-neutral-700 hover:text-primary-600"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-neutral-700 hover:text-primary-600 py-2 transition-colors block"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
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