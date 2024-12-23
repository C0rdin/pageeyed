import React from 'react';
import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { XLogo } from '../shared/icons/XLogo';

export const ContactInfo = () => {
  return (
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
  );
};