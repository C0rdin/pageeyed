import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json'
};

export const handler: Handler = async (event) => {
  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { amount, currency = 'EUR' } = JSON.parse(event.body || '{}');

    if (!amount || amount <= 0) {
      return {
        statusCode: 400,
        headers: corsHeaders,
        body: JSON.stringify({ error: 'Invalid amount' })
      };
    }

    const sessionToken = Math.random().toString(36).substring(2, 15);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: currency.toLowerCase(),
          product_data: {
            name: `Website Development Service - ${(amount / 100).toFixed(2)} ${currency}`,
            description: 'Custom website development services by Pageey',
          },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.SITE_URL}/payment-success?session=${sessionToken}`,
      cancel_url: `${process.env.SITE_URL}/pricing`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
    });

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        sessionId: session.id,
        url: session.url,
        sessionToken
      })
    };
  } catch (error) {
    console.error('Stripe error:', error);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ 
        error: 'Failed to create checkout session',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      })
    };
  }
};