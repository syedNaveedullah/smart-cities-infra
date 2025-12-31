import React from 'react';
import { ArrowRight, Building, Wind, Cpu, Sun, Shield } from 'lucide-react';
import Link from '../utils/Link';
import FadeIn from '../components/FadeIn';
import building from '../assets/building.png';
import environmental from '../assets/environmental.png';
import software from '../assets/software.png';
import lighting from '../assets/lighting.png';
import security from '../assets/security.png';
import SEO from '../components/SEO';

const ServicesPage = () => (
  <div className="min-h-screen pt-24 pb-20">
    {/* services page SEO */}
    <SEO 
       title="Smart Cities Infra - Services"
       description="Explore our comprehensive range of smart building solutions and services, including building management, environmental controls, software services, lighting solutions, and safety & security systems."   
       keywords="smart building services, environmental controls, software services, lighting solutions, safety and security, building management systems, energy management"  
       type="website"
     />
     {/* ---------------- */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">

      {/* PAGE HEADER */}
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Smart Building Solutions & Services
          </h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for modern infrastructure management
          </p>
        </div>
      </FadeIn>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          {
            title: 'Building Services',
            link: '/services/building',
            items: 9,
            icon: Building,
            image: building,
            description: 'Water management, elevators, HVAC, and more'
          },
          {
            title: 'Environmental Controls & Energy Management',
            link: '/services/environmental',
            items: 6,
            icon: Wind,
            image: environmental,
            description: 'Energy metering, BEMS, and sustainability solutions'
          },
          {
            title: 'Business Enterprise & Software Services',
            link: '/services/software',
            items: 12,
            icon: Cpu,
            image: software,
            description: 'ERP, CRM, cloud services, and analytics'
          },
          {
            title: 'Lighting Solutions',
            link: '/services/lighting',
            items: 5,
            icon: Sun,
            image: lighting,
            description: 'Smart lighting controls and energy-efficient systems'
          },
          {
            title: 'Safety & Security',
            link: '/services/safety',
            items: 8,
            icon: Shield,
            image: security,
            description: 'Access control, surveillance, and fire safety'
          }
        ].map((category, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <Link to={category.link}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group min-h-[360px] flex flex-col">

                {/* IMAGE BACKGROUND SECTION */}
                <div className="relative flex-1">
                  
                  {/* Background Image */}
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 w-full h-full object-contain scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* FOOTER */}
                <div className="p-6 bg-white">
                   {/* Content */}
                  <div className="relative text-start text-blue-900">
                    <p className="opacity-90 text-sm">
                      {category.description}
                    </p>
                    <p className="text-sm font-semibold">
                      {category.items} services available
                    </p>
                  </div>
                  
                  <div className="flex justify-end items-center  text-black font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Explore Services <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>

              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
  </div>
);

export default ServicesPage;




