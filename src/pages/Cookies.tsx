import React from 'react';
import { sections } from '../data/cookies';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> December 22, 2024
          </p>
          <p className="text-gray-600 mb-8">
            At pageey.com, we use cookies to enhance your browsing experience, analyze website 
            performance, and provide personalized services. This Cookie Policy explains what 
            cookies are, how we use them, and your options for managing cookies.
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
              If you have any questions about this Cookie Policy or how we use cookies, please contact us:
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

export default Cookies;