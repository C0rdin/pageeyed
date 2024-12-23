import React from 'react';
import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { XLogo } from './shared/icons/XLogo';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-indigo-600 mr-3" />
                <span>contact@pageey.com</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61571143133912" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://x.com/pageey_com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <XLogo />
                </a>
                <a href="https://instagram.com/pageey_com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/company/pageey_com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;