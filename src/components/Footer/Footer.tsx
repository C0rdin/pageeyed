import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Logo } from '../shared/Logo';
import { XLogo } from '../shared/icons/XLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo 
              iconClassName="w-10 h-10"
              textClassName="text-2xl font-bold ml-2 text-white"
            />
            <p className="text-gray-400 mt-4">
              Creating beautiful, functional websites tailored to your vision.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#process" className="text-gray-400 hover:text-white">Process</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61571143133912" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/pageey_com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <XLogo />
              </a>
              <a href="https://instagram.com/pageey_com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/pageey_com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pageey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};