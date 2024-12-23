import React, { useState } from 'react';
import { Check, Loader2, AlertCircle } from 'lucide-react';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { PricingCardProps } from './types';
import { Button } from '../shared/Button';
import { createCheckoutSession } from '../../services/payment/stripe';
import { PaymentError } from '../../types/errors';

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollToSection = useScrollToSection();

  const handleClick = async () => {
    if (!plan.priceInCents) {
      scrollToSection('contact');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const { url } = await createCheckoutSession(plan.priceInCents);
      
      if (url) {
        window.location.href = url;
      } else {
        throw new PaymentError('Unable to initiate payment');
      }
    } catch (err) {
      let errorMessage = 'Unable to process payment. Please try again later.';
      
      if (err instanceof PaymentError) {
        errorMessage = err.message;
        console.error('Payment error:', {
          message: err.message,
          statusCode: err.statusCode,
          details: err.details
        });
      } else {
        console.error('Unexpected error:', err);
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative rounded-lg ${
      plan.popular 
        ? 'bg-indigo-600 text-white shadow-xl transform scale-105' 
        : 'bg-white text-gray-900 shadow-lg'
    }`}>
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-sm font-semibold px-4 py-1 rounded-tr-lg rounded-bl-lg">
          Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">{plan.price}</span>
        </div>
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <Check className={`w-5 h-5 mr-2 ${plan.popular ? 'text-white' : 'text-indigo-600'}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
            {error}
          </div>
        )}

        <Button
          onClick={handleClick}
          variant={plan.popular ? 'secondary' : 'primary'}
          fullWidth
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </span>
          ) : plan.priceInCents ? (
            `Select ${plan.name} Plan`
          ) : (
            'Contact Us'
          )}
        </Button>
      </div>
    </div>
  );
};