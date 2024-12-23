import { Handler } from '@netlify/functions';
import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.VITE_SENDGRID_API_KEY!);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const { name, email, message, recaptchaToken } = JSON.parse(event.body || '');

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: 'POST' }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid reCAPTCHA' }),
      };
    }

    const msg = {
      to: 'contact@pageey.com',
      from: 'contact@pageey.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
      `,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error sending email' }),
    };
  }
};