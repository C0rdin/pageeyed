import React from 'react';
import { createPayment } from '../../services/payment';
import { PaymentProps } from '../../types/payment';
import { Button } from './Button';

export const PaymentButton: React.FC<PaymentProps> = ({
  amount,
  currency,
  onSuccess,
  onError
}) => {
  const handlePayment = async () => {
    try {
      const response = await createPayment(amount, currency);
      if (response.payment_url) {
        window.location.href = response.payment_url;
      }
      onSuccess(response);
    } catch (error) {
      onError(error as Error);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      variant="primary"
      fullWidth
    >
      Pay {amount} {currency}
    </Button>
  );
};