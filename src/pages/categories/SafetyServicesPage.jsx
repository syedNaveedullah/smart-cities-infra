import React from 'react';
import { ChevronRight, Lock, AlertCircle, Radio, Eye, Shield, Wifi, Cpu } from 'lucide-react';
import Link from '../../utils/Link';
import FadeIn from '../../components/FadeIn';

const SafetyServicesPage = () => {
  const services = [
    { name: 'Access Control', link: '/service/access-control', icon: Lock, color: 'bg-red-500' },
    { name: 'Mass Notification', link: '/service/mass-notification', icon: AlertCircle, color: 'bg-orange-500' },
    { name: 'Voice Evacuation', link: '/service/voice-evacuation', icon: Radio, color: 'bg-yellow-500' },
    { name: 'Video Surveillance', link: '/service/video-surveillance', icon: Eye, color: 'bg-blue-500' },
    { name: 'Fire System', link: '/service/fire-system', icon: AlertCircle, color: 'bg-red-600' },
    { name: 'Intrusion Detection', link: '/service/intrusion-detection', icon: Shield, color: 'bg-purple-500' },
    { name: 'M2M', link: '/service/m2m', icon: Wifi, color: 'bg-cyan-500' },
    { name: 'AI Solutions', link: '/service/ai-solutions', icon: Cpu, color: 'bg-indigo-500' }
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
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Safety & Security</h1>
            <div className="w-24 h-1 mx-auto bg-red-600 mb-4"></div>
            <p className="text-xl text-gray-600">
              Comprehensive security and safety solutions for your infrastructure
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
                  <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
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

export default SafetyServicesPage;