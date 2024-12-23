import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { usePaymentStatus } from '../hooks/usePaymentStatus';
import { Button } from '../components/shared/Button';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setPaymentComplete } = usePaymentStatus();
  const sessionToken = searchParams.get('session');

  useEffect(() => {
    if (!sessionToken) {
      navigate('/');
      return;
    }

    // Mark payment as complete with session token
    setPaymentComplete(true, sessionToken);

    // Automatically redirect after 3 seconds
    const timer = setTimeout(() => {
      navigate('/order?payment=success');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, setPaymentComplete, sessionToken]);

  const handleContinue = () => {
    navigate('/order?payment=success');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. You'll be redirected to the order form to provide your website requirements.
          </p>
          <Button
            onClick={handleContinue}
            variant="primary"
            fullWidth
          >
            Continue to Order Form
          </Button>
          <p className="text-gray-500 text-sm mt-4">
            Redirecting automatically in a few seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;