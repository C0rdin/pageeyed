import React from 'react';
import { Building2, Newspaper, ShoppingBag, Layout, Code } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Services = () => {
  const scrollToSection = useScrollToSection();
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-indigo-600" />,
      title: "Business Websites",
      description: "Professional websites that represent your brand and drive growth."
    },
    {
      icon: <Newspaper className="w-12 h-12 text-indigo-600" />,
      title: "Blogs",
      description: "Engaging blog platforms optimized for content creation and sharing."
    },
    {
      icon: <ShoppingBag className="w-12 h-12 text-indigo-600" />,
      title: "E-commerce Stores",
      description: "Secure and scalable online stores to sell your products."
    },
    {
      icon: <Layout className="w-12 h-12 text-indigo-600" />,
      title: "Landing Pages",
      description: "High-converting landing pages designed to capture leads."
    },
    {
      icon: <Code className="w-12 h-12 text-indigo-600" />,
      title: "Custom Projects",
      description: "Tailored solutions for unique business requirements."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;