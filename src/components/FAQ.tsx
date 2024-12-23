import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to create a website?",
      answer: "The timeline varies depending on the complexity of your project. A basic website typically takes 2-3 weeks, while more complex projects may take 4-8 weeks. We'll provide you with a specific timeline based on your requirements."
    },
    {
      question: "Can I request changes after the website is delivered?",
      answer: "Yes! We offer revision rounds based on your chosen package. Additional revisions can be requested at a reasonable rate. We want to ensure you're completely satisfied with your website."
    },
    {
      question: "Do you offer technical support after delivery?",
      answer: "Absolutely! We provide 30 days of complimentary technical support after your website launch. Extended support packages are available for ongoing maintenance and updates."
    },
    {
      question: "What's included in the website packages?",
      answer: "All our packages include responsive design, basic SEO setup, contact forms, and performance optimization. Additional features vary by package and can be customized based on your needs."
    },
    {
      question: "Do you provide hosting services?",
      answer: "While we don't directly host websites, we can recommend reliable hosting providers and help you set up your hosting environment. We'll ensure your website is properly deployed and running smoothly."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow ${
                  openIndex === index ? 'ring-2 ring-indigo-500' : ''
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;