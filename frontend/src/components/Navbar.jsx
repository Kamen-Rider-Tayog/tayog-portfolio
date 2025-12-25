import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import useTheme from '../hooks/useTheme'; // Updated import

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme(); // Using the hook

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className="bg-[#F0EEE9] dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#169C78] dark:text-[#4ECDC4]">
              Tayog<span className="text-gray-800 dark:text-gray-200">.dev</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-[#169C78] dark:hover:text-[#4ECDC4] font-medium transition duration-300 hover:scale-105"
              >
                {item.name}
              </a>
            ))}
            
            {/* Dark Mode Toggle - Updated to circle */}
            <button
              onClick={toggleTheme}
              className="bg-white/50 dark:bg-gray-800/50 transition-colors duration-300 flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FontAwesomeIcon 
                  icon={faSun} 
                  className="text-yellow-500 text-2xl transition-transform duration-300 hover:rotate-45" 
                />
              ) : (
                <FontAwesomeIcon 
                  icon={faMoon} 
                  className="text-gray-700 text-2xl transition-transform duration-300 hover:rotate-45" 
                />
              )}
            </button>

            <button className="bg-[#169C78] dark:bg-[#4ECDC4] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#138463] dark:hover:bg-[#3DB7AD] transition duration-300 shadow-md hover:shadow-lg">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Dark Mode Toggle - Updated to circle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 border border-gray-300 dark:border-gray-700 flex items-center justify-center aspect-square"
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
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-[#169C78] dark:hover:text-[#4ECDC4] p-2 transition duration-300"
              aria-label="Toggle menu"
            >
              {/* Hamburger Icon */}
              <div className="space-y-1">
                <span className={`block h-1 w-6 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2 bg-[#169C78] dark:bg-[#4ECDC4]' : 'bg-gray-700 dark:bg-gray-300'}`}></span>
                <span className={`block h-1 w-6 bg-current transition-all ${isMenuOpen ? 'opacity-0' : 'bg-gray-700 dark:bg-gray-300'}`}></span>
                <span className={`block h-1 w-6 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-[#169C78] dark:bg-[#4ECDC4]' : 'bg-gray-700 dark:bg-gray-300'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#F0EEE9] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg z-40">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-[#169C78] dark:hover:text-[#4ECDC4] hover:bg-[#F7CAC9]/20 dark:hover:bg-gray-800 font-medium rounded-lg transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex space-x-3 px-4 py-3">
                <button className="flex-1 bg-[#169C78] dark:bg-[#4ECDC4] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#138463] dark:hover:bg-[#3DB7AD] transition duration-300 shadow-md">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;