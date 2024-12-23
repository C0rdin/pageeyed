import React from 'react';
import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { usePaymentStatus } from '../hooks/usePaymentStatus';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isPaymentComplete, verifyPaymentSession } = usePaymentStatus();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const sessionToken = searchParams.get('session');

  // Special case for payment success page with valid session token
  if (location.pathname === '/payment-success' && sessionToken) {
    return <>{children}</>;
  }

  // Check if payment is complete
  if (!isPaymentComplete) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};