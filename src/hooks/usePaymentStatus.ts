import { useState } from 'react';

const PAYMENT_STATUS_KEY = 'payment_status';
const PAYMENT_SESSION_KEY = 'payment_session';

export const usePaymentStatus = () => {
  const [isPaymentComplete, setIsPaymentComplete] = useState<boolean>(() => {
    const stored = localStorage.getItem(PAYMENT_STATUS_KEY);
    return stored === 'true';
  });

  const setPaymentComplete = (status: boolean, sessionToken?: string) => {
    if (status && sessionToken) {
      localStorage.setItem(PAYMENT_SESSION_KEY, sessionToken);
    }
    localStorage.setItem(PAYMENT_STATUS_KEY, status.toString());
    setIsPaymentComplete(status);
  };

  const verifyPaymentSession = (sessionToken: string) => {
    const storedSession = localStorage.getItem(PAYMENT_SESSION_KEY);
    return storedSession === sessionToken;
  };

  const clearPaymentStatus = () => {
    localStorage.removeItem(PAYMENT_STATUS_KEY);
    localStorage.removeItem(PAYMENT_SESSION_KEY);
    setIsPaymentComplete(false);
  };

  return { 
    isPaymentComplete, 
    setPaymentComplete,
    verifyPaymentSession,
    clearPaymentStatus
  };
};