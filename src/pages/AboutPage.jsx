import React from 'react';
import { MapPin, Cpu, Star, Users } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import SEO from '../components/SEO';

const AboutPage = () => (
  <div className="min-h-screen pt-24 pb-20">
    {/* about page SEO */}
    <SEO
        title="Smart Cities Infra - About Us"
        description="Learn about Smart Cities Infra's mission, vision, and core values as a leading provider of smart infrastructure solutions."
        keywords="about smart cities infra, smart infrastructure solutions, company mission, vision and values, smart city technology provider"
        type="website"
      />
    {/* ---------------- */}
    <div className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Smart Cities Infra</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming infrastructure for better living through innovative solutions
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <FadeIn delay={100} direction="left">
          <div className="bg-white p-10 rounded-xl shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              We are dedicated to offering a comprehensive range of services and solutions across various engineering domains, including infrastructure, software, business enterprises, energy management, environmental control, and safety, security and health services.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Smart Cities Infra offers the expertise of industry-certified professionals who deliver solutions in compliance with industrial standards and norms, continuously striving to achieve excellence for our customers.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200} direction="right">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-10 rounded-xl shadow-xl">
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="leading-relaxed mb-4 opacity-90 text-lg">
              To be the leading provider of smart infrastructure solutions, creating sustainable and efficient environments that enhance quality of life and drive economic growth.
            </p>
            <p className="leading-relaxed opacity-90 text-lg">
              We envision a future where technology and infrastructure seamlessly integrate to create smarter, more livable cities.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={300}>
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-2xl shadow-lg mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: 'Innovation', 
                desc: 'Constantly exploring new technologies to provide cutting-edge solutions', 
                icon: Cpu 
              },
              { 
                title: 'Quality', 
                desc: 'Adhering to the highest standards for customer satisfaction', 
                icon: Star 
              },
              { 
                title: 'Expertise', 
                desc: 'Skilled professionals across various technology fields', 
                icon: Users 
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <value.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Located in Hyderabad</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-4 text-gray-700">
              <MapPin className="text-blue-600" size={32} />
              <div className="text-left">
                <p className="font-semibold text-lg">Vijay Nagar Colony</p>
                <p className="text-gray-600">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={500}>
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Why Partner With Us?</h2>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            With extensive experience and industry-certified professionals, we deliver solutions that are approved by prime organizations and consultants. Our commitment to quality, performance, and 24/7 support makes us the trusted choice for smart infrastructure solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold mb-2">80+</div>
              <div className="text-sm opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Expert Team</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
);

export default AboutPage;