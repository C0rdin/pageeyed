export interface CheckoutResponse {
  sessionId: string;
  url: string;
  sessionToken: string;
}

export interface PaymentErrorResponse {
  error: string;
  details?: unknown;
}