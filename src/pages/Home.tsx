import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Pricing from '../components/Pricing'; // This now points to index.tsx
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;