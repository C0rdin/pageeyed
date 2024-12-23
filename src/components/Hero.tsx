import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Hero = () => {
  const scrollToSection = useScrollToSection();

  const handleGetStarted = () => {
    scrollToSection('contact');
  };

  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Dream Website – <span className="text-indigo-600">Designed Just for You</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Custom websites tailored to your vision, bringing your digital presence to life with professional design and seamless functionality.
            </p>
            <button 
              onClick={handleGetStarted}
              className="group bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
              alt="Web Design Illustration"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;