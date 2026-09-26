# Dashboard Requirements Document
## Lead Generation Performance Dashboard

**Author:** Sagar Kandelkar — Business Analyst  
**Audience:** CMO, Head of Digital Marketing, Sales Managers, Compliance Officer  
**Refresh Frequency:** Real-time (5-min intervals); Daily for historical trends

---

## 1. Dashboard: Executive Summary

**Purpose:** High-level view of lead generation ROI and compliance posture for C-suite.

### KPIs

| Metric | Visualization | Target | Alert Threshold |
|--------|---------------|--------|-----------------|
| Total Leads (MTD) | Big number + sparkline | — | — |
| Lead Capture Rate | Gauge | ≥ 3.5% | < 2.5% |
| Cost Per Lead (CPL) | Big number + trend | ≤ ₹280 | > ₹400 |
| Lead-to-Application Rate | Gauge | ≥ 12% | < 8% |
| Consent Opt-In Rate | Gauge | ≥ 65% | < 55% |
| Marketing Complaints | Big number + trend | < 50/month | > 75/month |

### Layout
```
┌─────────────────────────────────────────────────────────────┐
│  EXECUTIVE SUMMARY — Digital Lead Generation                 │
├─────────────┬─────────────┬─────────────┬─────────────────┤
│ Total Leads │    CPL      │  Conv Rate  │   Complaints    │
│   1,247     │   ₹265      │   13.2%     │      12         │
│   ↑ 18%     │   ↓ 12%     │   ↑ 2.1pp   │      ↓ 8        │
├─────────────┴─────────────┴─────────────┴─────────────────┤
│  [Line Chart: Leads vs Conversion — Last 90 Days]          │
├─────────────────────────────────────────────────────────────┤
│  [Funnel: Visitor → Capture → Consent → Score → Contact   │
│          → Convert]                                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Dashboard: Sales Operations

**Purpose:** Real-time pipeline visibility for sales managers and RMs.

### Sections

#### 2.1 Hot Lead Queue
- Table: Top 50 Hot leads requiring action within SLA
- Columns: Lead ID, Product, Score, Tier, Time in Queue, SLA Status, Preferred Channel, Assigned RM
- Actions: "Claim Lead", "Reassign", "Mark as Contacted"

#### 2.2 RM Performance
- Bar chart: Conversions by RM this week
- Table: RM name → leads assigned → contacted → converted → conversion rate

#### 2.3 Tier Distribution
- Donut chart: Hot (40%), Warm (35%), Cold (20%), Frozen (5%)
- Drill-down: Click slice → see list of leads in that tier

---

## 3. Dashboard: Marketing Analytics

**Purpose:** Channel and campaign performance for digital marketing team.

### Sections

#### 3.1 Channel Attribution
- Stacked bar chart: Leads by source (Organic, Paid, Social, Direct, Referral)
- Conversion rate overlay per channel

#### 3.2 Product Performance
- Horizontal bar chart: Leads and conversion rate by product

#### 3.3 A/B Test Results
- Table: Banner variant → impressions → opt-ins → opt-in rate → significance
- Winner flag for statistically significant winner

---

## 4. Dashboard: Compliance Monitor

**Purpose:** Real-time consent and privacy compliance tracking.

### Sections

#### 4.1 Consent Status Overview
- Pie chart: Active consents vs withdrawn by category
- Trend line: Opt-in rate over last 90 days

#### 4.2 Withdrawal Heat Map
- Calendar heat map: Withdrawal volume by day
- Drill-down: Click day → see withdrawal reasons

#### 4.3 SLA Compliance
- Gauge: % of withdrawals propagated within 24 hours
- Alert table: Any pending propagation >20 hours

#### 4.4 Audit Trail Search
- Search box: Customer ID, phone, or email
- Results table: All consent events with timestamps, channels, and proof links

---

## 5. Access Control

| Role | Dashboards | Drill-Down |
|------|------------|------------|
| CMO | Executive Summary | All |
| Sales Head | Sales Operations + Executive Summary | Sales Ops only |
| RM | Hot Lead Queue (assigned only) | Own leads only |
| Marketing Lead | Marketing Analytics + Executive Summary | Marketing only |
| Compliance Officer | Compliance Monitor | All (read-only) |
| DPO | Compliance Monitor + Audit Trail | All (read-only) |

---

## 6. Technical Notes

- **Theme:** White background with bank brand colors (blue primary, green positive, red alerts)
- **Responsive:** Desktop-first; mobile app for RM hot lead alerts only
- **Export:** PDF snapshot (scheduled daily); CSV export (all tables)
- **Alerts:** Email + in-app notification for SLA breaches and compliance thresholds
