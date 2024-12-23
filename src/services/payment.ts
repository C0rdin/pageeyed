import { RevolutPaymentResponse } from '../types/payment';

const REVOLUT_API_URL = import.meta.env.VITE_REVOLUT_API_URL;
const REVOLUT_API_KEY = import.meta.env.VITE_REVOLUT_API_KEY;

export const createPayment = async (amount: number, currency: string = 'EUR'): Promise<RevolutPaymentResponse> => {
  try {
    const response = await fetch(`${REVOLUT_API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${REVOLUT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency,
        capture_mode: 'AUTOMATIC',
      }),
    });

    if (!response.ok) {
      throw new Error('Payment creation failed');
    }

    return response.json();
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};