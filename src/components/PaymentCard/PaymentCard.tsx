"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Zap, Shield, Crown, ArrowRight, Sparkles, X } from "lucide-react";

const PaymentCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleUpgrade = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { sessionId } = await res.json();
      if (!sessionId) {
        throw new Error('Could not create Stripe session');
      }

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

  const features = [
    { icon: <Zap className="w-4 h-4" />, text: "Advanced AI Models" },
    { icon: <Crown className="w-4 h-4" />, text: "Priority Processing" },
    { icon: <Shield className="w-4 h-4" />, text: "Premium Support" }
  ];

  return (
    <div className="payment-card-container">
      {/* Floating card */}
      <div className="payment-card">
        {/* Close button for mobile */}
        <button 
          className="close-button"
          onClick={() => setIsVisible(false)}
          aria-label="Close payment card"
        >
          <X className="close-icon" />
        </button>

        {/* Header */}
        <div className="card-header">
          <div className="icon-container">
            <Sparkles className="icon-sparkle" />
          </div>
          <div className="badge">LIMITED TIME</div>
          <h3 className="title">Upgrade to Pro</h3>
          <p className="description">Unlock advanced AI capabilities and premium features</p>
        </div>

        {/* Pricing */}
        <div className="pricing-section">
          <div className="price-container">
            <span className="currency">$</span>
            <span className="price">10</span>
            <span className="period">one-time</span>
          </div>
          <p className="price-note">No recurring charges • Lifetime access</p>
        </div>

        {/* Features */}
        <div className="features-section">
          {features.map((feature, index) => (
            <div key={index} className="feature-item" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <span className="feature-text">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleUpgrade}
          disabled={isLoading}
          className="upgrade-button"
        >
          <div className="button-content">
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Upgrade Now</span>
                <ArrowRight className="button-arrow" />
              </>
            )}
          </div>
          <div className="button-shine"></div>
        </button>

        {/* Trust indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <Shield className="trust-icon" />
            <span>Secure Payment</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span>🔒</span>
            <span>SSL Protected</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .payment-card-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 1000;
          animation: slideIn 0.5s ease-out forwards;
        }

        .payment-card {
          width: 380px;
          background: linear-gradient(135deg, #232323 0%, #1a1a1a 100%);
          border: 1px solid #ffffff14;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .payment-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        }

        .payment-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ffffff20, transparent);
        }

        .card-header {
          text-align: center;
          margin-bottom: 24px;
          position: relative;
        }

        .icon-container {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #ffffff15, #ffffff05);
          border: 1px solid #ffffff10;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          position: relative;
        }

        .icon-sparkle {
          width: 24px;
          height: 24px;
          color: #ffffff;
          animation: pulse 2s infinite;
        }

        .badge {
          position: absolute;
          top: -8px;
          right: -16px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          color: white;
          font-size: 10px;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 6px;
          transform: rotate(12deg);
          animation: bounce 2s infinite;
        }

        .title {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .description {
          font-size: 14px;
          color: #989898;
          line-height: 1.4;
        }

        .pricing-section {
          text-align: center;
          margin-bottom: 24px;
          padding: 20px 0;
          border-top: 1px solid #ffffff08;
          border-bottom: 1px solid #ffffff08;
        }

        .price-container {
          display: flex;
          align-items: baseline;
          justify-content: center;
          margin-bottom: 8px;
        }

        .currency {
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          margin-right: 4px;
        }

        .price {
          font-size: 48px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
        }

        .period {
          font-size: 14px;
          color: #989898;
          margin-left: 8px;
        }

        .price-note {
          font-size: 12px;
          color: #666666;
        }

        .features-section {
          margin-bottom: 24px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          opacity: 0;
          animation: fadeInUp 0.5s ease forwards;
        }

        .feature-item:last-child {
          margin-bottom: 0;
        }

        .feature-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #ffffff08, #ffffff03);
          border: 1px solid #ffffff08;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          color: #ffffff;
        }

        .feature-text {
          font-size: 14px;
          color: #ededed;
          font-weight: 500;
        }

        .upgrade-button {
          width: 100%;
          height: 48px;
          background: linear-gradient(135deg, #ffffff, #f0f0f0);
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          color: #161616;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
          margin-bottom: 16px;
        }

        .upgrade-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }

        .upgrade-button:active {
          transform: translateY(0);
        }

        .upgrade-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          z-index: 2;
        }

        .button-arrow {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }

        .upgrade-button:hover .button-arrow {
          transform: translateX(2px);
        }

        .loading-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid #16161640;
          border-top: 2px solid #161616;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .upgrade-button:hover .button-shine {
          left: 100%;
        }

        .trust-indicators {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 11px;
          color: #666666;
        }

        .trust-icon {
          width: 12px;
          height: 12px;
        }

        .trust-divider {
          width: 1px;
          height: 12px;
          background: #333333;
        }

        .close-button {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          display: none;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .close-icon {
          width: 12px;
          height: 12px;
          color: #ffffff;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: rotate(12deg) translateY(0);
          }
          40% {
            transform: rotate(12deg) translateY(-4px);
          }
          60% {
            transform: rotate(12deg) translateY(-2px);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .payment-card-container {
            position: fixed;
            bottom: 10px;
            right: 16px;
            left: 16px;
            max-width: 320px;
            margin: 0 auto;
          }

          .payment-card {
            width: 100%;
            padding: 20px;
          }

          .title {
            font-size: 20px;
          }

          .price {
            font-size: 36px;
          }

          .close-button {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .payment-card-container {
            bottom: 120px;
            right: 12px;
            left: 12px;
            max-width: 300px;
          }

          .payment-card {
            padding: 16px;
          }

          .title {
            font-size: 18px;
          }

          .description {
            font-size: 13px;
          }

          .price {
            font-size: 32px;
          }

          .upgrade-button {
            height: 44px;
            font-size: 15px;
          }
        }

        /* Hide on very small screens if needed */
        @media (max-width: 360px) {
          .payment-card-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PaymentCard;