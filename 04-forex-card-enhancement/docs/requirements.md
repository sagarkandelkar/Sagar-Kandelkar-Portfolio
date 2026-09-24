# Forex Card Enhancement — Functional Requirements

## 1. Digital Application & Onboarding

### FR-001: Online Forex Card Application
- Customer can apply via mobile app or website
- Auto-fill from existing bank relationship
- Upload passport and PAN digitally
- Real-time application status tracking

### FR-002: Digital KYC Verification
- Video KYC option for remote verification
- Document OCR for passport and address proof
- KYC status updates via SMS and app notification
- Re-KYC reminders before expiry

## 2. Multi-Currency Wallet Management

### FR-003: Currency Load & Conversion
- Load INR and convert to up to 10 currencies
- Real-time exchange rate display with markup transparency
- Rate lock option for 30 minutes during load
- Bulk load for family cards

### FR-004: Wallet Reallocation
- Move funds between currency wallets
- Auto-convert at POS if wallet currency insufficient
- Set preferred currency order for auto-deduction

## 3. Spending & Tracking

### FR-005: Real-Time Transaction Alerts
- Instant SMS and push notification on every transaction
- Alert threshold configurable by customer
- Foreign currency and INR amount in alert
- Location-based alert (unusual country notification)

### FR-006: Expense Categorization & Budgeting
- Auto-categorize transactions (hotel, food, shopping, ATM)
- Daily/weekly spending limit setup
- Budget alert at 80% of set limit
- Export statement in PDF and Excel

## 4. LRS & Compliance

### FR-007: LRS Limit Tracking
- Real-time display of remaining LRS limit
- Annual limit: USD 250,000 per customer
- Alert at 80% and 95% of limit utilization
- Prohibit transactions exceeding remaining limit

### FR-008: Regulatory Reporting
- Auto-generate LRS utilization certificate
- Export Form 15CA/CB data for remittance
- Maintain 7-year transaction history

## 5. Customer Support

### FR-009: Self-Service Card Management
- Temporary block/unblock via app
- Report lost card and instant replacement request
- PIN reset via OTP
- View PIN securely in app

### FR-010: Unused Balance Repatriation
- One-click transfer of unused balance to savings account
- Repatriation within 10 days of card expiry
- Proactive reminders before expiry

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| App Load Time | < 3 seconds |
| Rate Refresh | Every 60 seconds |
| Transaction Alert Latency | < 5 seconds |
| Uptime | 99.9% |
| Data Retention | 7 years |

---

*Version: 1.0 | Author: Sagar Kandelkar | Date: September 2026*
