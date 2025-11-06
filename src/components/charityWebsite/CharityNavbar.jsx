import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CharityNavbar = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about-us', label: 'About Us' },
    { id: 'our-vision', label: 'Our Vision' },
    { id: 'our-impacts', label: 'Our Impacts' },
    { id: 'operation-team', label: 'Operation Team' },
    { id: 'coaches', label: 'Coaches' },
    { id: 'content-creators', label: 'Content Creators' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  const DONATE_URL = 'https://www.paypal.com/donate'; // Replace with actual donation URL

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-primary-500 to-primary-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('about-us')}
            className="text-2xl font-bold text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg px-2 py-1"
            aria-label="CAFALL Charity Home"
          >
            <span className={isScrolled ? 'text-primary-600' : 'text-white'}>
              CAFALL CHARITY
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-primary-400 ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-white bg-white/20'
                    : isScrolled
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-3/4 rounded-full ${
                      isScrolled ? 'bg-primary-600' : 'bg-white'
                    }`}
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Donate Button */}
            <motion.a
              href={DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 4px 14px 0 rgba(251, 191, 36, 0.39)',
                  '0 6px 20px 0 rgba(251, 191, 36, 0.5)',
                  '0 4px 14px 0 rgba(251, 191, 36, 0.39)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              aria-label="Donate to CAFALL Charity"
            >
              Donate
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <motion.span
                className={`block h-0.5 w-6 rounded-full ${
                  isScrolled ? 'bg-primary-600' : 'bg-white'
                }`}
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, y: 7 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`block h-0.5 w-6 rounded-full ${
                  isScrolled ? 'bg-primary-600' : 'bg-white'
                }`}
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`block h-0.5 w-6 rounded-full ${
                  isScrolled ? 'bg-primary-600' : 'bg-white'
                }`}
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-br from-primary-600 to-primary-700 border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`whitespace-nowrap w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                    activeSection === item.id
                      ? 'bg-white/20'
                      : 'hover:bg-white/10'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              <motion.a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 mt-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-semibold rounded-lg shadow-lg"
                whileTap={{ scale: 0.98 }}
                aria-label="Donate to CAFALL Charity"
              >
                Donate
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default CharityNavbar;
