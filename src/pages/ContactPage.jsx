import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // EmailJS configuration - Replace with your actual credentials
      // const serviceId = 'YOUR_SERVICE_ID';
      // const templateId = 'YOUR_TEMPLATE_ID';
      // const publicKey = 'YOUR_PUBLIC_KEY';
      
      // Uncomment below when EmailJS is configured:
      // import emailjs from '@emailjs/browser';
      // await emailjs.send(serviceId, templateId, formData, publicKey);
      
      // Simulated email sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Get in touch with our team</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn delay={100} direction="left">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 text-start">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-6900 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-800'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {status.message && (
                  <div
                    className={`p-4 rounded-lg animate-fadeIn ${
                      status.type === 'success'
                        ? 'bg-green-50 border border-green-200 text-green-800'
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="right">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6 text-start">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-lg">Address</h3>
                      <p className="text-gray-600">Vijay Nagar Colony, Hyderabad</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-lg">Phone</h3>
                      <p className="text-gray-600">+91 9618086245</p>
                      <p className="text-gray-600">+91 8639808471</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-lg">Email</h3>
                      <p className="text-gray-600">smartcitiesinfra@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white text-start p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-lg">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-500">
                  <p className="font-semibold flex items-center">
                    <Phone className="mr-2" size={20} />
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;