
'use client';
import Link from 'next/link';
import { XCircle, RefreshCw, Home, HelpCircle } from 'lucide-react';

export default function CancelPage() {
  return (
    <div className="cancel-container">
      {/* Background decorative elements */}
      <div className="background-decoration">
        <div className="decoration-circle decoration-1"></div>
        <div className="decoration-circle decoration-2"></div>
      </div>

      <div className="cancel-card">
        {/* Cancel Icon */}
        <div className="icon-container">
          <div className="cancel-icon-bg">
            <XCircle className="cancel-icon" />
          </div>
        </div>

        {/* Cancel Message */}
        <div className="content">
          <h1 className="title">Payment Canceled</h1>
          <p className="description">
            No worries! Your payment was canceled and you haven't been charged. 
            You can try upgrading again anytime.
          </p>

          {/* Why upgrade section */}
          <div className="upgrade-benefits">
            <h3 className="benefits-title">
              What you're missing out on:
            </h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-dot"></div>
                Advanced AI Models with better responses
              </div>
              <div className="benefit-item">
                <div className="benefit-dot"></div>
                Priority processing for faster results
              </div>
              <div className="benefit-item">
                <div className="benefit-dot"></div>
                Premium support when you need help
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Link href="/" className="primary-button">
              <RefreshCw className="button-icon" />
              Try Upgrading Again
            </Link>
            <Link href="/" className="secondary-button">
              <Home className="button-icon" />
              Go Back Home
            </Link>
          </div>

          {/* Help section */}
          <div className="help-section">
            <HelpCircle className="help-icon" />
            <p className="help-text">
              Having trouble with payment? <Link href="/support" className="help-link">Contact Support</Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cancel-container {
          min-height: 100vh;
          background-color: #161616;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }

        .background-decoration {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .decoration-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.08;
        }

        .decoration-1 {
          width: 180px;
          height: 180px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          top: 15%;
          right: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .decoration-2 {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #ffa726, #ff8f00);
          bottom: 20%;
          left: 15%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .cancel-card {
          background: linear-gradient(135deg, #232323 0%, #1a1a1a 100%);
          border: 1px solid #ffffff14;
          border-radius: 24px;
          padding: 48px;
          max-width: 560px;
          width: 100%;
          text-align: center;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          backdrop-filter: blur(20px);
          position: relative;
          animation: slideIn 0.8s ease-out;
        }

        .cancel-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ff6b6b, transparent);
          border-radius: 24px 24px 0 0;
        }

        .icon-container {
          margin-bottom: 32px;
          animation: bounceIn 1s ease-out 0.3s both;
        }

        .cancel-icon-bg {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 0 40px rgba(255, 107, 107, 0.2);
          animation: pulse 3s infinite;
        }

        .cancel-icon {
          width: 40px;
          height: 40px;
          color: white;
        }

        .content {
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .title {
          font-size: 32px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .description {
          font-size: 16px;
          color: #989898;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .upgrade-benefits {
          background: linear-gradient(135deg, #ffffff05, #ffffff02);
          border: 1px solid #ffffff08;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
          text-align: left;
        }

        .benefits-title {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 16px;
          text-align: center;
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #ededed;
        }

        .benefit-dot {
          width: 6px;
          height: 6px;
          background: #ffa726;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .primary-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #ffffff, #f0f0f0);
          color: #161616;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          padding: 16px 32px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }

        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
        }

        .secondary-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          padding: 12px 24px;
          border: 1px solid #ffffff20;
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .secondary-button:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #ffffff40;
        }

        .button-icon {
          width: 18px;
          height: 18px;
        }

        .help-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding-top: 24px;
          border-top: 1px solid #ffffff08;
        }

        .help-icon {
          width: 16px;
          height: 16px;
          color: #666666;
        }

        .help-text {
          font-size: 13px;
          color: #666666;
        }

        .help-link {
          color: #ffa726;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .help-link:hover {
          color: #ff8f00;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 40px rgba(255, 107, 107, 0.2);
          }
          50% {
            box-shadow: 0 0 60px rgba(255, 107, 107, 0.3);
          }
        }

        @media (max-width: 768px) {
          .cancel-card {
            padding: 32px 24px;
            margin: 16px;
          }

          .title {
            font-size: 24px;
          }

          .description {
            font-size: 14px;
          }

          .primary-button, .secondary-button {
            font-size: 14px;
            padding: 12px 20px;
          }

          .action-buttons {
            gap: 8px;
          }
        }

        @media (max-width: 480px) {
          .action-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
