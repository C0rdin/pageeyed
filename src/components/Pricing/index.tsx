import React from 'react';
import { PricingCard } from './PricingCard';
import { PRICING_PLANS } from './constants';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Transparent Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;