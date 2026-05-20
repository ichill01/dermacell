import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
  apiVersion: '2026-04-22.dahlia',
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  try {
    if (webhookSecret) {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } else {
      event = JSON.parse(body);
    }
  } catch (err) {
    const error = err as Error;
    console.error(`Webhook Error: ${error.message}`);
    return NextResponse.json({ error: `Webhook Error: ${error.message}` }, { status: 400 });
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Log to a verifiable success artifact
    const artifactPath = path.join(process.cwd(), 'data', 'order_success_artifact.json');
    const orderData = {
      orderId: session.id,
      customerEmail: session.customer_details?.email,
      amountTotal: session.amount_total,
      currency: session.currency,
      status: session.payment_status,
      timestamp: new Date().toISOString()
    };

    // Ensure data dir exists
    if (!fs.existsSync(path.dirname(artifactPath))) {
      fs.mkdirSync(path.dirname(artifactPath), { recursive: true });
    }
    
    // Append to array of orders
    let orders = [];
    if (fs.existsSync(artifactPath)) {
      try {
        orders = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
      } catch {
        // ignore error
      }
    }
    orders.push(orderData);
    
    fs.writeFileSync(artifactPath, JSON.stringify(orders, null, 2));
    console.log('[SUCCESS] Order completed and logged:', session.id);
  }

  return NextResponse.json({ received: true });
}
