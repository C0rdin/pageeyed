import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './shared/Logo';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-indigo-600">Home</button>
            <button onClick={() => handleNavClick('services')} className="text-gray-700 hover:text-indigo-600">Services</button>
            <button onClick={() => handleNavClick('process')} className="text-gray-700 hover:text-indigo-600">Process</button>
            <button onClick={() => handleNavClick('pricing')} className="text-gray-700 hover:text-indigo-600">Pricing</button>
            <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-indigo-600">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick('home')} className="text-gray-700 hover:text-indigo-600">Home</button>
              <button onClick={() => handleNavClick('services')} className="text-gray-700 hover:text-indigo-600">Services</button>
              <button onClick={() => handleNavClick('process')} className="text-gray-700 hover:text-indigo-600">Process</button>
              <button onClick={() => handleNavClick('pricing')} className="text-gray-700 hover:text-indigo-600">Pricing</button>
              <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-indigo-600">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;