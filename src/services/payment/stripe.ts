import { PaymentError } from '../../types/errors';
import { CheckoutResponse } from '../../types/payment';
import { API_ENDPOINTS } from '../../config/endpoints';

export const createCheckoutSession = async (
  amount: number, 
  currency: string = 'EUR'
): Promise<CheckoutResponse> => {
  try {
    const response = await fetch(API_ENDPOINTS.createPayment, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency }),
      credentials: 'same-origin' // Important for CORS
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ 
        error: 'Unknown error occurred' 
      }));

      throw new PaymentError(
        errorData.error || 'Failed to create checkout session',
        response.status,
        errorData
      );
    }

    const data = await response.json();
    
    if (!data.url) {
      throw new PaymentError('Invalid response from server');
    }

    return data;
  } catch (error) {
    if (error instanceof PaymentError) {
      throw error;
    }
    
    throw new PaymentError(
      'Payment service is temporarily unavailable',
      500,
      { originalError: error }
    );
  }
};