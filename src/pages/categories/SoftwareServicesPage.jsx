import React from 'react';
import { ChevronRight, Radio, Database, Wifi, BarChart3, Cloud, Building, Users, TrendingUp, Cpu, Zap } from 'lucide-react';
import Link from '../../utils/Link';
import FadeIn from '../../components/FadeIn';

const SoftwareServicesPage = () => {
  const services = [
    { name: 'Audiovisual', link: '/service/audiovisual', icon: Radio, color: 'bg-purple-500' },
    { name: 'ERP & CRP Systems', link: '/service/erp-crp', icon: Database, color: 'bg-blue-500' },
    { name: 'Mobility', link: '/service/mobility', icon: Wifi, color: 'bg-cyan-500' },
    { name: 'Connectivity', link: '/service/connectivity', icon: Wifi, color: 'bg-indigo-500' },
    { name: 'Big Data Analytics', link: '/service/big-data', icon: BarChart3, color: 'bg-green-500' },
    { name: 'Cloud Services / Virtualization', link: '/service/cloud', icon: Cloud, color: 'bg-sky-500' },
    { name: 'Real Estate Management', link: '/service/real-estate-mgmt', icon: Building, color: 'bg-orange-500' },
    { name: 'Attendance / Time / HR', link: '/service/hr-systems', icon: Users, color: 'bg-pink-500' },
    { name: 'Electrical Management', link: '/service/electrical-mgmt', icon: Zap, color: 'bg-lime-500' },
    { name: 'Tenant-Facing Services', link: '/service/tenant-services', icon: Users, color: 'bg-teal-500' },
    { name: 'Logistics and Distribution', link: '/service/logistics', icon: TrendingUp, color: 'bg-red-500' },
    { name: 'Robotics', link: '/service/robotics', icon: Cpu, color: 'bg-gray-600' },
    { name: 'Industrial / Retail', link: '/service/industrial', icon: Building, color: 'bg-yellow-600' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12">
            <Link to="/services" className="text-blue-600 hover:text-blue-700 flex items-center mb-4 group">
              <ChevronRight size={20} className="transform rotate-180 group-hover:-translate-x-1 transition-transform" /> 
              <span className="ml-1">Back to Services</span>
            </Link>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Business Enterprise & Software Services</h1>
            <div className="w-24 h-1 mx-auto bg-purple-600 mb-4"></div>
            <p className="text-xl text-gray-600">
              Enterprise software solutions and business management systems
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
                  <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
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

export default SoftwareServicesPage;