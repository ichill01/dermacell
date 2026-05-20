import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import products from '../../../../data/products.json';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
  apiVersion: '2026-04-22.dahlia',
});

export async function POST(req: Request) {
  try {
    const { quantity } = await req.json();
    
    const mask = products.find(p => p.id === 'sku_mask_001');
    if (!mask) throw new Error('Product not found');

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: mask.name,
              description: mask.description,
            },
            unit_amount: Math.round(mask.price * 100),
          },
          quantity: quantity || 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/?success=true`,
      cancel_url: `${req.headers.get('origin')}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const error = err as Error & { statusCode?: number };
    console.error('Stripe error:', error.message);
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode || 500 }
    );
  }
}
