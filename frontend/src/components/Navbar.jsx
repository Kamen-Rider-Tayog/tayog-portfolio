import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const hamburgerVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-[#169C78] dark:text-[#4ECDC4]">
              Tayog<span className="text-gray-800 dark:text-gray-200">.dev</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="text-gray-700 dark:text-gray-300 hover:text-[#169C78] dark:hover:text-[#4ECDC4] font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#169C78] dark:bg-[#4ECDC4] group-hover:w-full transition-all duration-300"
                  layoutId="underline"
                />
              </motion.a>
            ))}
            
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 border border-gray-300 dark:border-gray-700 shadow-sm"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FontAwesomeIcon 
                  icon={faSun} 
                  className="text-yellow-500 text-lg" 
                />
              ) : (
                <FontAwesomeIcon 
                  icon={faMoon} 
                  className="text-gray-700 text-lg" 
                />
              )}
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(22, 156, 120, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#169C78] dark:bg-[#4ECDC4] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#138463] dark:hover:bg-[#3DB7AD] transition duration-300 shadow-md"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 border border-gray-300 dark:border-gray-700 flex items-center justify-center shadow-sm"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FontAwesomeIcon 
                  icon={faSun} 
                  className="text-yellow-500 text-base" 
                />
              ) : (
                <FontAwesomeIcon 
                  icon={faMoon} 
                  className="text-gray-700 text-base" 
                />
              )}
            </motion.button>

            <motion.button
              variants={hamburgerVariants}
              animate={isMenuOpen ? "open" : "closed"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition duration-300 shadow-sm"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FontAwesomeIcon 
                  icon={faXmark} 
                  className="text-gray-700 dark:text-gray-300 text-lg" 
                />
              ) : (
                <FontAwesomeIcon 
                  icon={faBars} 
                  className="text-gray-700 dark:text-gray-300 text-lg" 
                />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-4 text-gray-700 dark:text-gray-300 hover:text-[#169C78] dark:hover:text-[#4ECDC4] hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-lg transition duration-300 text-lg"
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="px-4 py-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-[#169C78] dark:bg-[#4ECDC4] text-white px-6 py-4 rounded-lg font-medium hover:bg-[#138463] dark:hover:bg-[#3DB7AD] transition duration-300 shadow-md text-lg"
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </div>
            
            {/* Close overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 -z-10 bg-black/10 dark:bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-[#169C78] dark:bg-[#4ECDC4]"
        animate={{ 
          width: isScrolled ? "100%" : "0%",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
};

export default Navbar;