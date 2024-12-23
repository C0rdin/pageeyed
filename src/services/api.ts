export const sendEmail = async (data: {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};