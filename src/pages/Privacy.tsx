import React from 'react';
import { sections } from '../data/privacy';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> December 22, 2024
          </p>
          <p className="text-gray-600 mb-8">
            At pageey.com, we value your privacy and are committed to protecting your personal data. 
            This Privacy Policy outlines how we collect, use, and safeguard your information when 
            you use our website and services.
          </p>
          
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              {section.content.map((item, idx) => (
                <div key={idx} className="text-gray-600 mb-4">
                  {item.id && (
                    <span className="font-medium">{item.id} </span>
                  )}
                  <p>{item.text}</p>
                  {item.list && (
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      {item.list.map((listItem, listIdx) => (
                        <li key={listIdx}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions or concerns about this Privacy Policy, please contact us:
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

export default Privacy;