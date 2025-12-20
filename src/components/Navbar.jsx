import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from '../utils/Link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-blue-900 transition-all duration-300 group-hover:scale-105">
              SMART CITIES <span className="text-blue-600">INFRA</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900 transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-900 transition-all duration-300 font-medium relative group">
              Solutions & Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-900 transition-all duration-300 font-medium relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium">
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 transition-transform duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fadeIn">
            <Link to="/" className="block text-gray-700 hover:text-blue-900 py-2 transition-colors">
              Home
            </Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-900 py-2 transition-colors">
              Solutions & Services
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-900 py-2 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="block text-blue-900 py-2 transition-colors">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

