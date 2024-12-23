import { loadStripe } from '@stripe/stripe-js';

let stripePromise: ReturnType<typeof loadStripe>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

interface CheckoutResponse {
  sessionId: string;
  url: string;
  sessionToken: string;
}

export const createCheckoutSession = async (amount: number, currency: string = 'EUR'): Promise<CheckoutResponse> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, currency }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const data = await response.json();
    
    if (!data.url) {
      throw new Error('Invalid response from server');
    }

    return data;
  } catch (error) {
    console.error('Stripe error:', error);
    throw error;
  }
};