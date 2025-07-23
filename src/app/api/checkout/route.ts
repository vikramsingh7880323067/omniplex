import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// This function handles POST requests to /api/checkout
export async function POST(request: NextRequest) {
  try {
    // Create a checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID, // The Price ID from your .env.local file
          quantity: 1,
        },
      ],
      mode: "payment",
      // IMPORTANT: These URLs must be absolute for production
      success_url: `${request.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin")}/cancel`,
    });

    // Return the session ID
    return NextResponse.json({ sessionId: session.id });

  } catch (err: any) {
    console.error("Error creating Stripe session:", err);
    return NextResponse.json({ error: { message: err.message } }, { status: 500 });
  }
}