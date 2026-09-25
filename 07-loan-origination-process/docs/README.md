# Loan Origination Process Analysis — Portfolio Case Study

## Overview

This portfolio case study analyzes the complete loan lifecycle — from digital application and credit appraisal through sanction and disbursement — to identify straight-through processing (STP) opportunities that reduce turnaround time while maintaining credit quality.

**Label:** Portfolio Case Study — Synthetic Scenario

---

## 1. Complete Customer Lifecycle

```
Application → Document Upload → Credit Appraisal → Risk Scoring → Sanction → Agreement → Disbursement → Repayment → Closure
```

| Stage | AS-IS Experience | TO-BE Experience |
|-------|------------------|------------------|
| **Application** | Branch visit, paper form | Mobile app with eligibility calculator |
| **Document Upload** | Photocopies at branch | Camera + OCR with auto-validation |
| **Credit Appraisal** | Manual CIBIL + income verification | Real-time API + bank statement analysis |
| **Risk Scoring** | Static rule-based | ML model with 150+ variables |
| **Sanction** | 10-day credit committee | Auto-sanction for 65% applications |
| **Agreement** | Physical document signing | E-sign with Aadhaar authentication |
| **Disbursement** | 3-day processing | Same-day after e-sign |
| **Repayment** | ECS mandate setup | Auto-debit + flexible EMI options |
| **Closure** | Branch visit for NOC | Digital NOC + account closure |

---

## 2. Transformation Impact — AS-IS vs TO-BE

| Metric | Before (AS-IS) | After (TO-BE) | Improvement |
|--------|---------------|---------------|-------------|
| **Sanction Time** | 10 days | 24 hours | **90% faster** |
| **STP Rate** | 5% | 65% | **12x improvement** |
| **Cost Per Loan** | ₹4,500 | ₹1,200 | **73% lower** |
| **Customer Satisfaction** | 3.0 / 5 | 4.3 / 5 | **+1.3 points** |
| **Credit Decision Accuracy** | 82% | 94% | **+12 points** |
| **Documentation Errors** | 15% | 2% | **87% reduction** |

---

## 3. Digital Enhancement Themes

| Theme | Description | Impact |
|-------|-------------|--------|
| **STP Processing** | End-to-end automation for low-risk applications | 65% of loans auto-approved |
| **Digital Verification** | API-based income, employment, property verification | Reduces fraud by 40% |
| **API-Based Bureau** | Real-time CIBIL/Experian/Crif pulls | Instant credit assessment |
| **Auto-Sanction** | ML model within policy limits | Credit analyst focuses on exceptions only |
| **EMI Management** | Flexible repayment, moratorium, prepayment | Customer retention +30% |

---

## 4. Projected Business Impact

| Category | Annual Benefit |
|----------|---------------|
| Operational Cost Savings | ₹6.2 Cr |
| Higher Sanction Volume | ₹4.5 Cr |
| Fraud Prevention | ₹2.1 Cr |
| Customer Experience | ₹1.5 Cr |
| **Net Annual Benefit** | **₹14.3 Cr** |
| **Payback Period** | **3 months** |

---

## 5. Project Deliverables

| Category | Files |
|----------|-------|
| **Data** | `loan_applications.csv`, `credit_appraisal.csv`, `disbursements.csv` |
| **Data Dictionary** | `data_dictionary.md` |
| **SQL Schema** | `schema.sql` |
| **EDA Notebook** | `analysis/eda.ipynb` |
| **Dashboard** | `dashboard/loan-dashboard.html` |
| **Requirements** | `requirements.md` |
| **Gap Analysis** | `gap_analysis.md` |
| **Roadmap** | `implementation_roadmap.md` |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
