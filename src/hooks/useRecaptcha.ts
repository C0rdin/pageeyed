import { useEffect, useCallback } from 'react';

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad: () => void;
  }
}

export const useRecaptcha = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const executeRecaptcha = useCallback(async () => {
    try {
      const token = await window.grecaptcha.execute(
        import.meta.env.VITE_RECAPTCHA_SITE_KEY,
        { action: 'submit' }
      );
      return token;
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      throw error;
    }
  }, []);

  return { executeRecaptcha };
};