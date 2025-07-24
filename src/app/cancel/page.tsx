'use client';

import Link from 'next/link';
import { XCircle, RefreshCw, Home, HelpCircle } from 'lucide-react';

export default function PaymentCancelled() {
  return (
    <div className="cancelled-container">
      <div className="icon-wrapper">
        <XCircle className="cancel-icon" />
      </div>
      <h1 className="cancelled-title">Payment Cancelled</h1>
      <p className="description">
        No worries! Your payment was canceled and you haven&apos;t been charged.
      </p>
      <div className="button-group">
        <Link href="/" className="action-button">
          <Home className="button-icon" />
          Go to Home
        </Link>
        <Link href="/support" className="action-button">
          <HelpCircle className="button-icon" />
          Contact Support
        </Link>
        <Link href="/checkout" className="action-button retry">
          <RefreshCw className="button-icon" />
          Retry Payment
        </Link>
      </div>
      <div className="benefits">
        <h3 className="benefits-title">What you&apos;re missing out on:</h3>
        <ul className="benefits-list">
          <li>Instant access to premium features</li>
          <li>Priority customer support</li>
          <li>Exclusive member discounts</li>
        </ul>
      </div>
      <style jsx>{`
        .cancelled-container {
          text-align: center;
          padding: 3rem 1rem;
          max-width: 600px;
          margin: auto;
        }
        .icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .cancel-icon {
          color: #e53e3e;
          width: 60px;
          height: 60px;
        }
        .cancelled-title {
          font-size: 2rem;
          color: #2d3748;
          margin-bottom: 1rem;
        }
        .description {
          color: #4a5568;
          font-size: 1rem;
          margin-bottom: 2rem;
        }
        .button-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .action-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background-color: #edf2f7;
          color: #2d3748;
          padding: 0.75rem 1.5rem;
          border-radius: 0.375rem;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        .action-button:hover {
          background-color: #e2e8f0;
        }
        .retry {
          background-color: #38a169;
          color: white;
        }
        .retry:hover {
          background-color: #2f855a;
        }
        .button-icon {
          width: 20px;
          height: 20px;
        }
        .benefits {
          text-align: left;
          padding: 1rem;
          background-color: #f7fafc;
          border-radius: 0.375rem;
        }
        .benefits-title {
          font-size: 1.25rem;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }
        .benefits-list {
          list-style: disc;
          padding-left: 1.5rem;
          color: #4a5568;
        }
      `}</style>
    </div>
  );
}
