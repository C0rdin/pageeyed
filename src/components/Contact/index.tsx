import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

const Contact = () => {
  return (
    // Add tabIndex for better accessibility and to ensure the section can receive focus
    <section id="contact" tabIndex={-1} className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;