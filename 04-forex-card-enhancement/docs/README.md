# Forex Card Enhancement Study

## Overview

This portfolio case study analyzes the complete Forex card lifecycle — from application and issuance to loading, multi-currency spending, and closure — to identify digital enhancement opportunities and customer experience improvements in the BFSI sector.

**Label:** Portfolio Case Study — Synthetic Scenario

📊 **[View Infographic Summary](../../infographics/04-forex-card.html)**

## Objectives

1. Map the end-to-end Forex card customer journey
2. Identify pain points in the current application, load, and spend processes
3. Define digital enhancement opportunities (self-service, real-time notifications, mobile app features)
4. Propose a roadmap for multi-currency wallet improvements
5. Demonstrate business analysis skills in product enhancement and customer experience

## Key Areas

- **Application & Onboarding:** Digital application, KYC verification, card issuance
- **Currency Loading:** Multi-currency load, exchange rate transparency, rate locking
- **Spending & Tracking:** Point-of-sale transactions, ATM withdrawals, real-time alerts
- **Reload & Repatriation:** Top-up flows, unused balance repatriation, LRS limit tracking
- **Closure & Support:** Card blocking, lost card handling, customer service touchpoints

## Deliverables

| Category | Files |
|----------|-------|
| **Journey Map** | `customer_journey.md` — AS-IS vs TO-BE touchpoints, emotions, metrics |
| **Pain Points** | `pain_points_opportunities.md` — 12 pain points with opportunity matrix |
| **Business Impact** | `business_impact.md` — ROI analysis: ₹4.2 Cr benefits, 7.7x ROI |
| **Data** | `forex_customers.csv` — 20 customer records with LRS limits |
| **Data** | `forex_transactions.csv` — 30 transactions across 5 currencies |
| **Data** | `fx_rates.csv` — 6 currency pairs with buy/sell rates |
| **Data** | `forex_cards.csv` — 20 card records with status and balances |
| **Data Dictionary** | `data_dictionary.md` — Field definitions |
| **SQL Schema** | `schema.sql` — PostgreSQL DDL with views |
| **EDA Notebook** | `analysis/eda.ipynb` — Currency usage, spend patterns, limit tracking |
| **Requirements** | `requirements.md` — Functional & non-functional requirements |
| **Gap Analysis** | `gap_analysis.md` — AS-IS vs TO-BE |
| **Roadmap** | `implementation_roadmap.md` — Enhancement timeline |

## Data Disclaimer

All data in this project is **synthetic and self-created** for demonstration purposes only. No real customer, bank, or transaction data is used.

---

*Created: September 2026 | Analyst: Sagar Kandelkar*

## 📊 Process Flow (Mermaid)

```mermaid
graph LR
    A[👤 Customer Applies] --> B[📝 Digital KYC]
    B --> C[✅ Approval]
    C --> D[💳 Card Issuance]
    D --> E[📱 Digital Activation]
    E --> F[💰 Currency Load]
    F --> G[🔒 Rate Lock Option]
    G --> H[🌍 Spend Abroad]
    H --> I[📨 Real-Time Alert]
    I --> J[📊 LRS Tracking]
    J --> K[🏠 Balance Repatriation]
```
