import React from 'react';
import { Phone, Mail, MapPin, ImageOff } from 'lucide-react';
import Link from '../utils/Link';
import Logo from '../assets/Logo.png';

const Footer = () => (
  <footer className="bg-gray-900 text-white text-start py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className='flex items-center'>
          <img src={Logo} alt="Smart Cities Infra" className="h-12 w-11 mb-4" />
          <h3 className="text-xl font-bold mb-4">SMART CITIES INFRA</h3>
          </div>
          <p className="text-gray-400">
            Transforming infrastructure for better living through innovative solutions.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><Link to="/services/building" className="text-gray-400 hover:text-white transition-colors">Building Services</Link></li>
            <li><Link to="/services/environmental" className="text-gray-400 hover:text-white transition-colors">Environmental Controls</Link></li>
            <li><Link to="/services/software" className="text-gray-400 hover:text-white transition-colors">Software Services</Link></li>
            <li><Link to="/services/lighting" className="text-gray-400 hover:text-white transition-colors">Lighting Solutions</Link></li>
            <li><Link to="/services/safety" className="text-gray-400 hover:text-white transition-colors">Safety & Security</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
              <span>Vijay Nagar Colony, Hyderabad</span>
            </li>
            <li className="flex items-center">
              <Phone size={18} className="mr-2 flex-shrink-0" />
              <span>+91 9618086245</span>
            </li>
            <li className="flex items-center">
              <Mail size={18} className="mr-2 flex-shrink-0" />
              <span>info@smartcitiesinfra.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 Smart Cities Infra. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;