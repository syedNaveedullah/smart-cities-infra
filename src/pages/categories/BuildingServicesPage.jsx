import React from 'react';
import { ChevronRight, Droplet, Building, Zap, Wind, Users, BarChart3, Gauge } from 'lucide-react';
import Link from '../../utils/Link';
import FadeIn from '../../components/FadeIn';

const BuildingServicesPage = () => {
  const services = [
    { name: 'Water Management', link: '/service/water-management', icon: Droplet, color: 'bg-blue-500' },
    { name: 'Elevators', link: '/service/elevators', icon: Building, color: 'bg-gray-600' },
    { name: 'Generators', link: '/service/generators', icon: Zap, color: 'bg-yellow-500' },
    { name: 'Ventilation / Blinds', link: '/service/ventilation', icon: Wind, color: 'bg-cyan-500' },
    // { name: 'Occupancy & Utilization', link: '/service/occupancy', icon: Users, color: 'bg-purple-500' },
    { name: 'Occupancy & Utilization - HVAC', link: '/service/hvac', icon: Wind, color: 'bg-indigo-500' },
    { name: 'Asset Utilization', link: '/service/asset-utilization', icon: BarChart3, color: 'bg-green-500' },
    { name: 'Parking', link: '/service/parking', icon: Building, color: 'bg-orange-500' },
    { name: 'Indoor Air Quality', link: '/service/air-quality', icon: Wind, color: 'bg-teal-500' },
    { name: 'Equipment Monitoring', link: '/service/equipment-monitoring', icon: Gauge, color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12">
            <Link to="/services" className="text-blue-600 hover:text-blue-700 flex items-center mb-4 group">
              <ChevronRight size={20} className="transform rotate-180 group-hover:-translate-x-1 transition-transform" /> 
              <span className="ml-1">Back to Services</span>
            </Link>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Building Services</h1>
            <div className="w-24 h-1 mx-auto bg-blue-600 mb-4"></div>
            <p className="text-xl text-gray-600">
              Comprehensive building management and infrastructure solutions
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
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
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

export default BuildingServicesPage;