import React from 'react';
import { ChevronRight, Gauge, Database, TrendingUp, Building, Zap, Wind } from 'lucide-react';
import Link from '../../utils/Link';
import FadeIn from '../../components/FadeIn';

const EnvironmentalServicesPage = () => {
  const services = [
    { name: 'Energy Metering', link: '/service/energy-metering', icon: Gauge, color: 'bg-blue-500' },
    { name: 'Energy Storage', link: '/service/energy-storage', icon: Database, color: 'bg-green-500' },
    { name: 'Load Sharing / Demand Response', link: '/service/load-sharing', icon: TrendingUp, color: 'bg-purple-500' },
    { name: 'Building Energy Management System (BEMS)', link: '/service/bems', icon: Building, color: 'bg-indigo-500' },
    { name: 'Electrical Management', link: '/service/electrical-mgmt', icon: Zap, color: 'bg-yellow-500' },
    { name: 'Pollution & Emissions', link: '/service/pollution', icon: Wind, color: 'bg-teal-500' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12">
            <Link to="/services" className="text-blue-600 hover:text-blue-700 flex items-center mb-4 group">
              <ChevronRight size={20} className="transform rotate-180 group-hover:-translate-x-1 transition-transform" /> 
              <span className="ml-1">Back to Services</span>
            </Link>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Environmental Controls & Energy Management</h1>
            <div className="w-24 h-1 mx-auto bg-green-600 mb-4"></div>
            <p className="text-xl text-gray-600">
              Sustainable energy solutions and environmental control systems
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <Link to={service.link}>
                <div className="bg-white text-start p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    View Details <ChevronRight size={18} className="ml-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalServicesPage;