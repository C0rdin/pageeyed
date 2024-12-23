import React from 'react';
import { sections } from '../data/terms';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> December 22, 2024
          </p>
          <p className="text-gray-600 mb-8">
            Welcome to pageey.com. By accessing or using our website and services, 
            you agree to comply with and be bound by the following Terms and Conditions. 
            Please read them carefully before placing an order or using our services.
          </p>
          
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <div className="space-y-4">
                {section.content.map((item, idx) => (
                  <div key={idx} className="text-gray-600">
                    {item.id && (
                      <span className="font-medium">{item.id} </span>
                    )}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For any questions or concerns, please contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              pageey.com<br />
              Email: <a href="mailto:contact@pageey.com" className="text-indigo-600 hover:text-indigo-700">
                contact@pageey.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;