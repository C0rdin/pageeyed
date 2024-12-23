export interface PaymentIntent {
  clientSecret: string;
  id: string;
  amount: number;
  currency: string;
  status: string;
}

export interface StripePaymentProps {
  amount: number;
  currency?: string;
  onSuccess: (payment: PaymentIntent) => void;
  onError: (error: Error) => void;
};