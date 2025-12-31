import React from 'react';
import { ArrowRight, Star, Building, Wind, Cpu, Sun, Shield, Activity, Zap, Users, CheckCircle, Phone, ChevronRight } from 'lucide-react';
import Link from '../utils/Link';
import FadeIn from '../components/FadeIn';
import ParallaxSection from '../components/ParallaxSection';
import SEO from '../components/SEO'
import CountUp from '../components/CountUp';
import GIF from "../assets/city.gif";
import MAIN from "../assets/main2.jpg";
import Img1 from "../assets/review1.png";
import Img2 from "../assets/review2.jpg";
import BgImg from "../assets/city3.jpg";

const HomePage = () => (
  <div className="min-h-screen pt-8">
     <SEO 
        title="Smart Cities Infra - Smart Building Solutions & IoT Infrastructure"
        description="Transform your buildings with cutting-edge smart solutions. We offer building automation, energy management, safety systems, and IoT infrastructure for modern cities."
        keywords="smart cities, smart buildings, IoT, building automation, energy management, facility management, HVAC, building safety"
        type="website"
      />
    {/* Hero Section with Parallax */}
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center mb-4 bg-gradient-to-br from-blue-50 to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="w-full px-6 sm:px-10 lg:px-20 pt-24 z-10">
        <FadeIn>
          <main className="flex flex-col gap-16">
            {/* ===================== ROW 1 ===================== */}
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* LEFT TEXT */}
              <div className="w-full lg:w-1/2 text-left">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <p className="text-4xl sm:text-5xl lg:text-7xl text-blue-900">
                    Experience
                  </p>

                  <img
                    src={GIF}
                    alt="Experience"
                    className="w-32 sm:w-40 h-auto object-contain mt-2 sm:mt-6 shadow-lg"
                  />
                </div>

                <p className="text-4xl sm:text-5xl lg:text-7xl text-blue-900">
                  Hassle-free Living
                </p>
              </div>

              {/* RIGHT DESCRIPTION */}
              <div className="w-full lg:w-2/5 text-left">
                <p className="text-sm sm:text-base text-blue-800 mb-6">
                  Smart Cities Infra offers the expertise of industry-certified
                  professionals who deliver solutions in compliance with
                  industrial standards and norms, continuously striving to
                  achieve excellence for our customers.
                </p>

                <Link
                  to="/services"
                  className="inline-flex bg-black text-white px-6 py-3 hover:bg-gray-800 transition-all transform hover:scale-105 hover:shadow-xl font-semibold">
                  Explore Services
                </Link>
              </div>
            </div>

            {/* ===================== ROW 2 ===================== */}
            <div className="flex flex-col lg:flex-row items-center gap-14">
              {/* REVIEW CARD */}
              <div className="w-full lg:w-2/5 flex justify-center">
                <div className="w-full sm:w-[85%] bg-white p-4 border border-gray-300">
                  {/* Rating */}
                  <div className="flex items-center gap-2 border-b pb-2 mb-4">
                    <span className="text-yellow-400">
                      <Star fill="currentColor" />
                    </span>
                    <span className="font-semibold">4.8</span>
                    <span className="text-sm text-gray-500">
                      Review Ratings
                    </span>
                  </div>

                  {/* Review */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold">
                        NA
                      </div>
                      <div>
                        <p className="text-sm font-semibold">Nur Alam Khan</p>
                        <p className="text-xs text-start text-gray-500">
                          Customer
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      “This is a nice property. Awesome property for living with
                      an awesome family. Thanks SMART-CITIES-INFRA team for
                      providing this service.”
                    </p>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-4">
                    <img
                      src={Img1}
                      alt="Building 1"
                      className="w-1/2 h-24 object-cover"
                    />
                    <img
                      src={Img2}
                      alt="Building 2"
                      className="w-1/2 h-24 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* MAIN IMAGE */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={MAIN}
                  alt="Innovation"
                  className="w-full max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </main>
        </FadeIn>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <FadeIn delay={100}>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={215} />
              </div>
              <div className="text-blue-200">Winning Awards</div>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={780} />
              </div>
              <div className="text-blue-200">Properties Ready</div>
            </div>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={15} suffix="k" />
              </div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center justify-center">
                <Star className="text-yellow-400 mr-2" size={32} />
                4.9
              </div>
              <div className="text-blue-200">Overall Rating</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Section 2 with Parallax */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgImg})` }}
      />

      {/* 🔹 Dark Overlay (for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔹 Grid Pattern (optional) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* 🔹 Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transforming For{" "}
            <span className="relative inline-block">
              Better Living
              <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-500/40 -z-10"></span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Smart building solutions and services for modern infrastructure
            management
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Services Overview */}
    <section className="py-20 bg-white relative text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Solutions & Services
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across various engineering domains
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Building Services",
              desc: "Comprehensive building management solutions",
              link: "/services/building",
              icon: Building,
            },
            {
              title: "Environmental Controls",
              desc: "Energy management and environmental solutions",
              link: "/services/environmental",
              icon: Wind,
            },
            {
              title: "Software Services",
              desc: "Enterprise software and business solutions",
              link: "/services/software",
              icon: Cpu,
            },
            {
              title: "Lighting Solutions",
              desc: "Advanced lighting control systems",
              link: "/services/lighting",
              icon: Sun,
            },
            {
              title: "Safety & Security",
              desc: "Comprehensive security solutions",
              link: "/services/safety",
              icon: Shield,
            },
            {
              title: "Electrical Management",
              desc: "Complete electrical system solutions",
              link: "/service/electrical-mgmt",
              icon: Zap,
            },
            {
              title: "Real Estate",
              desc: "Property management services",
              link: "/service/real-estate-mgmt",
              icon: Users,
            },
          ].map((service, idx) => (
            <FadeIn key={idx} delay={idx * 50}>
              <Link to={service.link}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100 group">
                  <service.icon className="w-12 h-12 text-blue-900 mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <div className="flex items-center text-blue-900 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <ChevronRight size={20} className="ml-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden text-start">
      <ParallaxSection speed={0.2}>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
      </ParallaxSection>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-16"></div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Certified Professionals",
              desc: "Industry-certified experts with years of experience",
              icon: CheckCircle,
            },
            {
              title: "Quality & Trust",
              desc: "Reliable quality backed by trusted partnerships",
              icon: Shield,
            },
            {
              title: "Performance",
              desc: "Exquisite performance reliability in all solutions",
              icon: Activity,
            },
            {
              title: "24/7 Support",
              desc: "Immediate response and competent service support",
              icon: Phone,
            },
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100} direction="up">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-blue-900" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -left-48"></div>
        <div className="absolute w-96 h-96 bg-white rounded-full -bottom-48 -right-48"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our experts today for a consultation
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-2xl font-semibold">
            Contact Us Now
          </Link>
        </FadeIn>
      </div>
    </section>
  </div>
);

export default HomePage;
