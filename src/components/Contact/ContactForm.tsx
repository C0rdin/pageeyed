import React, { useState } from 'react';
import { useRecaptcha } from '../../hooks/useRecaptcha';
import { sendEmail } from '../../services/api';
import { Input } from '../shared/Input';
import { TextArea } from '../shared/TextArea';
import { Button } from '../shared/Button';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { executeRecaptcha } = useRecaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const recaptchaToken = await executeRecaptcha();
      await sendEmail({ ...formData, recaptchaToken });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Error sending message:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        required
      />
      <div>
        <Button
          type="submit"
          disabled={status === 'loading'}
          fullWidth
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
      {status === 'success' && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">Failed to send message. Please try again.</p>
      )}
    </form>
  );
};