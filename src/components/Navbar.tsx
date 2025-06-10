import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Calendar, Calculator, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const industrySections = [
  { label: 'Retail & E-Commerce', hash: 'retail' },
  { label: 'Healthcare & Medical', hash: 'healthcare' },
  { label: 'Construction & Contracting', hash: 'construction' },
  { label: 'Technology & SaaS', hash: 'technology' },
  { label: 'Professional Services', hash: 'professional' },
  { label: 'Nonprofit & Associations', hash: 'nonprofit' },
];

const resourceSections = [
  { label: 'Latest Blog', hash: 'latest-blog' },
  { label: 'FAQs', hash: 'faqs' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  // Dropdown click handler
  const handleDropdownClick = (
    e: React.MouseEvent,
    page: string,
    hash: string
  ) => {
    e.preventDefault();
    if (location.pathname === page) {
      // Already on page: update hash and scroll
      window.history.replaceState(null, '', `${page}#${hash}`);
      scrollToSection(hash);
      setShowDropdown(null);
    } else {
      // Navigate to page with hash (will scroll after navigation)
      navigate(`${page}#${hash}`);
      setShowDropdown(null);
    }
  };

  // Main link click handler
  const handleMainLinkClick = (
    e: React.MouseEvent,
    path: string,
    dropdownKey: string
  ) => {
    if (!(location.pathname === path && !location.hash)) {
      e.preventDefault();
      navigate(path);
    }
    setShowDropdown(null);
  };

  // Scroll to hash on navigation (for direct URL access)
  useEffect(() => {
    if (
      (location.pathname === '/resources' || location.pathname === '/industries') &&
      location.hash
    ) {
      const section = location.hash.replace('#', '');
      setTimeout(() => scrollToSection(section), 100);
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
            {navItems.map((item) => {
              // Resources dropdown
              if (item.name === 'Resources') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setShowDropdown('resources')}
                    onMouseLeave={() => setShowDropdown(null)}
                  >
                    <button
                      onClick={(e) => handleMainLinkClick(e, item.path, 'resources')}
                      className="flex items-center text-neutral-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
                    >
                      {item.name}
                      <ChevronDown
                        size={18}
                        className={`ml-1 transition-transform duration-200 ${showDropdown === 'resources' ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {showDropdown === 'resources' && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white shadow-md rounded-md z-10"
                        >
                          {resourceSections.map((section) => (
                            <button
                              key={section.hash}
                              onClick={(e) => handleDropdownClick(e, '/resources', section.hash)}
                              className="w-full text-left block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100"
                            >
                              {section.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              // Industries dropdown
              if (item.name === 'Industries') {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setShowDropdown('industries')}
                    onMouseLeave={() => setShowDropdown(null)}
                  >
                    <button
                      onClick={(e) => handleMainLinkClick(e, item.path, 'industries')}
                      className="flex items-center text-neutral-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
                    >
                      {item.name}
                      <ChevronDown
                        size={18}
                        className={`ml-1 transition-transform duration-200 ${showDropdown === 'industries' ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {showDropdown === 'industries' && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white shadow-md rounded-md z-10"
                        >
                          {industrySections.map((section) => (
                            <button
                              key={section.hash}
                              onClick={(e) => handleDropdownClick(e, '/industries', section.hash)}
                              className="w-full text-left block px-4 py-2 text-sm text-neutral-700 hover:bg-gray-100"
                            >
                              {section.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              // Regular nav item
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-neutral-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              );
            })}
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
              {navItems.map((item) => {
                if (item.name === 'Resources') {
                  return (
                    <React.Fragment key={item.name}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center text-neutral-700 hover:text-primary-600 py-2 transition-colors block"
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-1" />
                      </Link>
                      <div className="pl-4">
                        {resourceSections.map((section) => (
                          <button
                            key={section.hash}
                            onClick={(e) => {
                              e.preventDefault();
                              if (location.pathname === '/resources') {
                                window.history.replaceState(null, '', `/resources#${section.hash}`);
                                scrollToSection(section.hash);
                                setIsOpen(false);
                              } else {
                                navigate(`/resources#${section.hash}`);
                                setIsOpen(false);
                              }
                            }}
                            className="block w-full text-left text-neutral-700 hover:text-primary-600 py-2 transition-colors"
                          >
                            {section.label}
                          </button>
                        ))}
                      </div>
                    </React.Fragment>
                  );
                }
                if (item.name === 'Industries') {
                  return (
                    <React.Fragment key={item.name}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center text-neutral-700 hover:text-primary-600 py-2 transition-colors block"
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-1" />
                      </Link>
                      <div className="pl-4">
                        {industrySections.map((section) => (
                          <button
                            key={section.hash}
                            onClick={(e) => {
                              e.preventDefault();
                              if (location.pathname === '/industries') {
                                window.history.replaceState(null, '', `/industries#${section.hash}`);
                                scrollToSection(section.hash);
                                setIsOpen(false);
                              } else {
                                navigate(`/industries#${section.hash}`);
                                setIsOpen(false);
                              }
                            }}
                            className="block w-full text-left text-neutral-700 hover:text-primary-600 py-2 transition-colors"
                          >
                            {section.label}
                          </button>
                        ))}
                      </div>
                    </React.Fragment>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-neutral-700 hover:text-primary-600 py-2 transition-colors block"
                  >
                    {item.name}
                  </Link>
                );
              })}
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
