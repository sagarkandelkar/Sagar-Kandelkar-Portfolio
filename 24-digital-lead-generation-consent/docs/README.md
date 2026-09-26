<div align="center">

# Case Study 24: Digital Lead Generation & Consent-Based Outreach Platform

**Domain:** Digital Banking / Marketing Technology / Data Privacy  
**Role:** Business Analyst & BFSI IT Consultant  
**Duration:** 4 Months

[<img src="https://img.shields.io/badge/📊%20View%20Full%20Portfolio-2ea44f?style=for-the-badge">](https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio)

</div>

---

## 📋 Executive Summary

This case study documents end-to-end business analysis for a **Digital Lead Generation & Consent Management Platform** enabling a bank to:

1. **Track anonymous user intent signals** across web properties (loan calculators, policy comparison pages)
2. **Capture explicit user consent** for personalized outreach in a GDPR-compliant manner
3. **Score and enrich leads** using behavioral data, demographics, and propensity models
4. **Enable consent-based pitching** through preferred channels (WhatsApp, email, callback) only after opt-in
5. **Measure full-funnel attribution** from web visit → consent → lead → application → disbursal

---

## 🎯 Business Problem

### AS-IS State
- **98% website bounce rate** — visitors browse and leave without a trace
- **No unified view** of customer intent across website, mobile app, partner portals
- **Outbound teams cold-call** purchased lead lists with 2–3% conversion and 400+ monthly complaints
- **Compliance risk** — promotional messages sent without documented consent
- **No lead scoring** — all leads treated equally, sales productivity suffers

### Business Impact
| Pain Point | Impact |
|------------|--------|
| 98% website bounce | ₹4.2 Cr annual marketing spend with minimal ROI |
| Cold calling without consent | 400+ complaints/month, brand damage |
| No consent audit trail | Regulatory exposure under TRAI, RBI guidelines |
| Uniform lead treatment | Hot leads go cold while sales chases low-intent prospects |

---

## 💡 Proposed Solution

**Intent-to-Conversion Platform** with 6 integrated components:

| Component | Function |
|-----------|----------|
| **Web Intent Tracker** | JavaScript tag capturing page views, scroll depth, calculator inputs, exit intent |
| **Consent Management Platform (CMP)** | Cookie banner + preference center for granular consent |
| **Customer Data Platform (CDP)** | Unified profile stitching anonymous + known customer data |
| **Lead Scoring Engine** | Real-time composite scoring (behavioral + demographic + propensity) |
| **Omnichannel Orchestrator** | Consent-aware outreach via WhatsApp, email, SMS, callback |
| **Attribution Dashboard** | End-to-end funnel analytics from impression to disbursal |

---

## 📊 Key Metrics (Target)

| Metric | Baseline | Target (6 Months) |
|--------|----------|-------------------|
| Website Lead Capture Rate | 0.2% | 3.5% |
| Consent Opt-In Rate | N/A | 65% |
| Lead-to-Application Conversion | 2% | 12% |
| Cost Per Lead (CPL) | ₹850 | ₹280 |
| Customer Complaint Rate (Marketing) | 400/month | <50/month |
| Sales Team Productivity | 35 calls/day | 55 calls/day |

---

## 🎁 Unique Systematic Artifacts

| Artifact | What It Demonstrates |
|----------|---------------------|
| **🔒 Consent Management Matrix** | Granular consent capture, storage, withdrawal, and audit trail design (6 categories, GDPR-aligned) |
| **📊 Lead Scoring Model** | Multi-dimensional scoring: behavioral (50%) + demographic (30%) + propensity (20%) |
| **🛡️ Data Privacy Impact Assessment (DPIA)** | GDPR-style risk assessment for web tracking, profiling, and automated decision-making |

---

## 📁 Deliverables Index

```
24-digital-lead-generation-consent/
├── docs/
│   ├── README.md                          ← You are here
│   ├── brd/business_requirements_document.md
│   ├── frd/functional_requirements_document.md
│   ├── user-stories/user_stories.md
│   ├── gap-analysis/as_is_to_be_analysis.md
│   ├── systematic-artifacts/
│   │   ├── consent_management_matrix.md      🎁
│   │   ├── lead_scoring_model.md             🎁
│   │   └── data_privacy_impact_assessment.md 🎁
│   └── roadmap/implementation_roadmap.md
├── data/
│   ├── schema/lead_tracking_schema.sql
│   ├── dictionary/data_dictionary.md
│   └── samples/web_intent_sample.csv
├── sql/analysis/lead_conversion_analytics.sql
├── dashboard/requirements/dashboard_brd.md
└── bpmn/process-flows/intent_to_conversion_flow.md
```

---

## ⚠️ Data Disclaimer

All datasets are **synthetic** and generated for demonstration. No real PII or proprietary banking data is included. Consent flows are modeled on GDPR/TRAI principles for educational use.

---

> **Prepared by:** Sagar Kandelkar — Aspiring Business Analyst | BFSI Domain Expert
> **Contact:** sagarkandelkar389@gmail.com | +91 7276693523
