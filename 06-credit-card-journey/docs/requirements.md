# Credit Card Customer Journey — Functional Requirements

## 1. Digital Application

### FR-001: Online Credit Card Application
- Pre-filled application for existing bank customers
- Document upload with OCR (PAN, income proof, address proof)
- Real-time eligibility check with soft credit pull
- Instant in-principle approval for pre-qualified customers

### FR-002: Application Tracking
- Real-time status updates via app and SMS
- Document deficiency alerts with resubmission link
- Estimated approval timeline display
- Proactive communication at each stage

## 2. Approval & Fulfillment

### FR-003: Credit Decision Engine
- Automated credit scoring with ML models
- Income verification via bank statement analysis
- Risk-based limit assignment
- Manual review queue for edge cases

### FR-004: Card Fulfillment
- Digital card for instant online usage
- Physical card with tracking via courier partner
- Virtual card number display in app
- Card delivery ETA updates

## 3. Activation & Onboarding

### FR-005: Digital Activation
- App-based activation with OTP + selfie verification
- PIN generation and change via app
- First transaction nudge with welcome offer
- Tutorial walkthrough for card features

### FR-006: Welcome Journey
- Personalized welcome offer based on segment
- Cashback on first transaction
- Rewards program enrollment
- Spend milestone targets with bonus points

## 4. Usage & Engagement

### FR-007: Real-Time Spend Notifications
- Instant transaction alert with merchant details
- Category-wise spend tracker
- Monthly budget alerts at 50%, 80%, 100%
- Unusual spend alerts

### FR-008: Rewards Management
- Real-time points balance display
- One-click redemption (cashback, statement credit, vouchers)
- Points expiry alerts 60/30 days before expiry
- Bonus points for category-specific spending

## 5. Retention & Growth

### FR-009: Churn Prevention
- Low utilization alerts with targeted offers
- Inactive card re-engagement campaigns
- Limit enhancement for good payment history
- Product upgrade recommendations

### FR-010: Customer Support
- In-app chatbot for common queries
- One-tap card block/unblock
- Dispute filing with merchant details
- EMI conversion at point of sale

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Application Processing | < 5 minutes for instant approval |
| Notification Latency | < 3 seconds |
| App Uptime | 99.95% |
| Statement Generation | T+1 of billing cycle |
| Data Retention | 7 years |

---

*Version: 1.0 | Author: Sagar Kandelkar | Date: September 2026*
