import React from 'react';
import { ChevronRight, CheckCircle, Star, ArrowRight } from 'lucide-react';
import Link from '../utils/Link';
import FadeIn from '../components/FadeIn';

const ServiceDetailTemplate = ({ 
  title, 
  description, 
  features, 
  benefits, 
  useCases, 
  icon: Icon, 
  color = 'blue',
  backLink = '/services/building'
}) => {
  const colorClasses = {
    blue: { gradient: 'from-blue-600 to-blue-800', text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-600' },
    green: { gradient: 'from-green-600 to-green-800', text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-600' },
    purple: { gradient: 'from-purple-600 to-purple-800', text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-600' },
    red: { gradient: 'from-red-600 to-red-800', text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-600' },
    orange: { gradient: 'from-orange-600 to-orange-800', text: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-600' },
    yellow: { gradient: 'from-yellow-600 to-yellow-800', text: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-600' }
  };

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Link to={backLink} className="text-blue-600 hover:text-blue-700 flex items-center mb-6 group">
            <ChevronRight size={20} className="transform rotate-180 group-hover:-translate-x-1 transition-transform" /> 
            <span className="ml-1">Back to Services</span>
          </Link>
          
          <div className={`bg-gradient-to-r ${colors.gradient} text-white p-12 rounded-2xl mb-12 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 opacity-10">
              {Icon && <Icon size={200} />}
            </div>
            <div className="relative z-10">
              {Icon && <Icon size={64} className="mb-4" />}
              <h1 className="text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl opacity-90">{description}</p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <FadeIn delay={100} direction="left">
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h2 className={`text-3xl font-bold ${colors.text} mb-6 flex items-center`}>
                <CheckCircle className="mr-3" size={32} />
                Key Features
              </h2>
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start group">
                    <CheckCircle className={`${colors.text} mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform`} size={20} />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="right">
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h2 className={`text-3xl font-bold ${colors.text} mb-6 flex items-center`}>
                <Star className="mr-3" size={32} />
                Benefits
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start group">
                    <ArrowRight className={`${colors.text} mr-3 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform`} size={20} />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {useCases && useCases.length > 0 && (
          <FadeIn delay={300}>
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
              <h2 className={`text-3xl font-bold ${colors.text} mb-6`}>Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases.map((useCase, idx) => (
                  <div key={idx} className={`${colors.bg} p-6 rounded-lg border-l-4 ${colors.border}`}>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={400}>
          <div className={`${colors.bg} p-10 rounded-xl text-center border-2 ${colors.border}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in this solution?</h2>
            <p className="text-gray-600 mb-6 text-lg">Contact our experts for a detailed consultation and custom quote</p>
            <Link
              to="/contact"
              className={`inline-flex items-center bg-gradient-to-r ${colors.gradient} text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg`}
            >
              Get in Touch <ArrowRight className="ml-2" size={24} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default ServiceDetailTemplate;