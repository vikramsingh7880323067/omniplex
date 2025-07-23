'use client';

import Link from 'next/link';
import { CheckCircle, Sparkles, Crown, ArrowRight, Home } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="success-container">
      {/* Background decorative elements */}
      <div className="background-decoration">
        <div className="decoration-circle decoration-1"></div>
        <div className="decoration-circle decoration-2"></div>
        <div className="decoration-circle decoration-3"></div>
      </div>

      <div className="success-card">
        {/* Success Icon Animation */}
        <div className="icon-container">
          <div className="success-icon-bg">
            <CheckCircle className="success-icon" />
          </div>
          <div className="sparkle-1">
            <Sparkles className="sparkle" />
          </div>
          <div className="sparkle-2">
            <Sparkles className="sparkle" />
          </div>
          <div className="sparkle-3">
            <Sparkles className="sparkle" />
          </div>
        </div>

        {/* Success Message */}
        <div className="content">
          <h1 className="title">Payment Successful!</h1>
          <p className="subtitle">Welcome to Pro! 🎉</p>
          <p className="description">
            Thank you for upgrading. You now have access to advanced AI models, 
            priority processing, and premium support features.
          </p>

          {/* Pro Features Unlocked */}
          <div className="features-unlocked">
            <h3 className="features-title">
              <Crown className="crown-icon" />
              Pro Features Unlocked
            </h3>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-dot"></div>
                Advanced AI Models
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                Priority Processing
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                Premium Support
              </div>
              <div className="feature-item">
                <div className="feature-dot"></div>
                Unlimited Access
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Link href="/" className="primary-button">
              <Home className="button-icon" />
              Start Using Pro Features
              <ArrowRight className="arrow-icon" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .success-container {
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
          opacity: 0.1;
        }

        .decoration-1 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #00ff88, #00cc66);
          top: 10%;
          left: 10%;
          animation: float 6s ease-in-out infinite;
        }

        .decoration-2 {
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #0099ff, #0066cc);
          top: 60%;
          right: 15%;
          animation: float 8s ease-in-out infinite reverse;
        }

        .decoration-3 {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #ff6b6b, #ee5a24);
          bottom: 20%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .success-card {
          background: linear-gradient(135deg, #232323 0%, #1a1a1a 100%);
          border: 1px solid #ffffff14;
          border-radius: 24px;
          padding: 48px;
          max-width: 600px;
          width: 100%;
          text-align: center;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.05) inset;
          backdrop-filter: blur(20px);
          position: relative;
          animation: slideIn 0.8s ease-out;
        }

        .success-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00ff88, transparent);
          border-radius: 24px 24px 0 0;
        }

        .icon-container {
          position: relative;
          margin-bottom: 32px;
          animation: bounceIn 1s ease-out 0.3s both;
        }

        .success-icon-bg {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #00ff88, #00cc66);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          box-shadow: 0 0 40px rgba(0, 255, 136, 0.3);
          animation: pulse 2s infinite;
        }

        .success-icon {
          width: 40px;
          height: 40px;
          color: white;
        }

        .sparkle-1, .sparkle-2, .sparkle-3 {
          position: absolute;
          animation: sparkle 2s infinite;
        }

        .sparkle-1 {
          top: 10px;
          right: 10px;
          animation-delay: 0s;
        }

        .sparkle-2 {
          top: 30px;
          left: 0px;
          animation-delay: 0.5s;
        }

        .sparkle-3 {
          bottom: 0px;
          right: 30px;
          animation-delay: 1s;
        }

        .sparkle {
          width: 16px;
          height: 16px;
          color: #00ff88;
        }

        .content {
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .title {
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 20px;
          font-weight: 600;
          color: #00ff88;
          margin-bottom: 16px;
        }

        .description {
          font-size: 16px;
          color: #989898;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .features-unlocked {
          background: linear-gradient(135deg, #ffffff05, #ffffff02);
          border: 1px solid #ffffff08;
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
        }

        .features-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 18px;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .crown-icon {
          width: 20px;
          height: 20px;
          color: #ffd700;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #ededed;
          text-align: left;
        }

        .feature-dot {
          width: 6px;
          height: 6px;
          background: #00ff88;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .action-buttons {
          display: flex;
          justify-content: center;
        }

        .primary-button {
          display: flex;
          align-items: center;
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
          position: relative;
          overflow: hidden;
        }

        .primary-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
        }

        .button-icon, .arrow-icon {
          width: 18px;
          height: 18px;
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }

        .primary-button:hover .arrow-icon {
          transform: translateX(4px);
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
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 40px rgba(0, 255, 136, 0.3);
          }
          50% {
            box-shadow: 0 0 60px rgba(0, 255, 136, 0.5);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          .success-card {
            padding: 32px 24px;
            margin: 16px;
          }

          .title {
            font-size: 28px;
          }

          .subtitle {
            font-size: 18px;
          }

          .description {
            font-size: 14px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .primary-button {
            font-size: 14px;
            padding: 14px 24px;
          }
        }
      `}</style>
    </div>
  );
}