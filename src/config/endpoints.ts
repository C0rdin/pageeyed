// Use /api prefix instead of /.netlify/functions
const API_BASE = '/api';

export const API_ENDPOINTS = {
  createPayment: `${API_BASE}/create-payment-intent`,
} as const;