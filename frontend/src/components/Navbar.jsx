import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className="bg-[#F0EEE9] shadow-md sticky top-0 z-50 border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#169C78]">
              Tayog<span className="text-gray-800">.dev</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#169C78] font-medium transition duration-300 hover:scale-105"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-[#169C78] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#138463] transition duration-300 shadow-md hover:shadow-lg">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#169C78] p-2 transition duration-300"
              aria-label="Toggle menu"
            >
              {/* Hamburger Icon */}
              <div className="space-y-1">
                <span className={`block h-1 w-6 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2 bg-[#169C78]' : 'bg-gray-700'}`}></span>
                <span className={`block h-1 w-6 bg-current transition-all ${isMenuOpen ? 'opacity-0' : 'bg-gray-700'}`}></span>
                <span className={`block h-1 w-6 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-[#169C78]' : 'bg-gray-700'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - ABSOLUTE POSITION (FIXED) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#F0EEE9] border-t border-gray-200 shadow-lg z-40">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-[#169C78] hover:bg-[#F7CAC9]/20 font-medium rounded-lg transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-2 bg-[#169C78] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#138463] transition duration-300 shadow-md">
                Contact Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;