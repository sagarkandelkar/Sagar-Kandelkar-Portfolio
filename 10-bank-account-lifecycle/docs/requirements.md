# Bank Account Lifecycle — Functional Requirements

## 1. Dormancy Prediction & Prevention

### FR-001: AI-Based Dormancy Risk Scoring
- System calculates dormancy risk score weekly for all accounts
- Factors: transaction frequency, balance trends, product engagement
- Risk categories: Low, Medium, High with recommended actions

### FR-002: Proactive Engagement Campaigns
- Auto-trigger re-engagement offers for Medium/High risk accounts
- Personalized communication via preferred channel
- Track campaign effectiveness and conversion

## 2. Cross-Sell & Up-Sell

### FR-003: Next-Best-Product Recommendations
- AI engine suggests products based on customer profile and behavior
- Recommendations displayed in mobile app and branch CRM
- Track recommendation-to-application conversion

### FR-004: Relationship Pricing Dashboard
- Display relationship value and personalized pricing
- Show benefits of adding more products
- One-click application for recommended products

## 3. Account Management

### FR-005: 360° Customer Account View
- Single screen showing all accounts, cards, loans, investments
- Transaction history across all products
- Document vault for statements and certificates

### FR-006: Digital Closure Process
- Self-service account closure with balance transfer
- Digital NOC generation
- Exit interview capturing churn reasons

## 4. Analytics & Reporting

### FR-007: Lifecycle Revenue Tracking
- Calculate lifetime value by customer segment
- Track revenue per product and channel
- Cohort-based profitability analysis

### FR-008: Product Penetration Dashboard
- Heatmap of product adoption by segment
- Cross-sell success rate by product pair
- Branch-wise product penetration leaderboard

## 5. Operational Efficiency

### FR-009: Automated Status Updates
- Auto-update account status based on activity
- Trigger KYC refresh before expiry
- Notify relationship manager of significant events

### FR-010: Revival Campaign Management
- Segment dormant accounts by revival probability
- Design targeted offers (fee waiver, bonus interest)
- Measure revival success and account activation

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Risk Score Calculation | Weekly batch |
| Recommendation Latency | < 2 seconds |
| Dashboard Refresh | Daily |
| Data Retention | 10 years |
| Uptime | 99.9% |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
