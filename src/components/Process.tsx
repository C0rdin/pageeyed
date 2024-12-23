import React from 'react';
import { ClipboardList, CheckCircle, CreditCard, Monitor } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-12 h-12 text-indigo-600" />,
      title: "Describe Your Vision",
      description: "Fill out our detailed form with your website requirements and preferences."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-indigo-600" />,
      title: "Approve the Quote",
      description: "Review and approve our detailed quote tailored to your needs."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-indigo-600" />,
      title: "Pay and Relax",
      description: "Make a secure payment and let us start working on your website immediately."
    },
    {
      icon: <Monitor className="w-12 h-12 text-indigo-600" />,
      title: "Receive Your Website",
      description: "Get your fully functional website with all requested features."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                {step.icon}
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-indigo-200"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;