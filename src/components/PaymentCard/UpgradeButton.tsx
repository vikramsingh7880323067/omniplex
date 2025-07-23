"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { ArrowRight } from "lucide-react";

// This is the new, focused button component
const UpgradeButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpgrade = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const { sessionId } = await res.json();
      if (!sessionId) throw new Error('Could not create Stripe session');

      const stripe = await loadStripe(
        "pk_test_51Ro84PCwTr7OtlNi3Q6QYPsQks0zSclUbtT2BzLyZN4ImhkyqOtrrm1c8KDXWavu287sUDJssaddVky6QfIycntL00TF2DOzuc"
      );

      if (stripe) {
        stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error('Error during upgrade process:', error);
      alert('Failed to start the payment process. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleUpgrade}
        disabled={isLoading}
        className="upgrade-button-integrated"
      >
        {isLoading ? "Processing..." : (
          <>
            Upgrade to Pro <ArrowRight className="arrow-icon" />
          </>
        )}
      </button>

      {/* Scoped CSS for just this button */}
      <style jsx>{`
        .upgrade-button-integrated {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 20px;
          background-color: #ffffff;
          color: #161616;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .upgrade-button-integrated:hover {
          background-color: #f0f0f0;
          transform: translateY(-1px);
        }
        .upgrade-button-integrated:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .arrow-icon {
          width: 16px;
          height: 16px;
        }
      `}</style>
    </>
  );
};

export default UpgradeButton;