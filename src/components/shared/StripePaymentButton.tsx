import React, { useState } from 'react';
import { createPaymentIntent } from '../../services/stripe';
import { StripePaymentProps } from '../../types/stripe';
import { Button } from './Button';
import { Loader2 } from 'lucide-react';

export const StripePaymentButton: React.FC<StripePaymentProps> = ({
  amount,
  currency = 'EUR',
  onSuccess,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    if (isLoading) return;
    
    try {
      setIsLoading(true);
      const { url } = await createPaymentIntent(amount, currency);
      
      if (url) {
        onSuccess({ clientSecret: '', id: '', amount, currency, status: 'pending' });
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      onError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      variant="primary"
      fullWidth
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </span>
      ) : (
        `Pay ${(amount / 100).toFixed(2)} ${currency}`
      )}
    </Button>
  );
};