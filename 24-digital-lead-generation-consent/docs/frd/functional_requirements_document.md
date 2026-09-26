# Functional Requirements Document (FRD)
## Digital Lead Generation & Consent-Based Outreach Platform

**Version:** 1.0 | **Author:** Sagar Kandelkar

---

## 1. Scope

Defines functional behavior of the Intent-to-Conversion Platform covering:
- Web Intent Tracker (tag/SDK)
- Consent Management Platform (CMP)
- Lead Scoring Engine
- CRM Integration
- Omnichannel Orchestrator

---

## 2. Module: Web Intent Tracker

### FR-INT-01: Event Capture
**Description:** Capture specified events from website visitors.
**Priority:** Must

| Event | Payload | Trigger |
|-------|---------|---------|
| `page_view` | URL, referrer, timestamp, session_id | Page load |
| `scroll_depth` | Percentage (25/50/75/90/100) | Scroll event |
| `time_on_page` | Duration in seconds | Page unload / heartbeat |
| `calculator_use` | Product type, inputs, result | Form submission |
| `exit_intent` | Mouse position, time on page | Mouse leaves viewport |
| `form_start` | Form ID, timestamp | Focus on first field |
| `form_abandon` | Form ID, last step | Session timeout |
| `document_download` | Document name | Download link click |

**Business Rules:**
- Events batched and sent every 5 seconds or on page unload
- IP addresses hashed before transmission
- Session timeout: 30 minutes of inactivity

---

### FR-INT-02: Anonymous ID Generation
**Description:** Generate persistent anonymous identifier for first-time visitors.
**Priority:** Must

**Acceptance Criteria:**
- ID stored in first-party cookie with 365-day expiry
- ID regenerated if cookie cleared (visitor treated as new)
- ID format: `anon_<uuid>`
- ID shall not contain any PII

---

## 3. Module: Consent Management Platform (CMP)

### FR-CMP-01: Consent Banner Display
**Description:** Display cookie consent banner on first visit.
**Priority:** Must

**Acceptance Criteria:**
- Banner appears on first visit (no prior consent record)
- Blocks interaction until user makes a choice (for CONS_MKT/CONS_PRO)
- 3 options: "Accept All", "Reject All", "Manage Preferences"
- "Manage Preferences" expands to granular toggles per category
- Responsive (mobile-friendly)
- Supports English, Hindi, and Marathi

---

### FR-CMP-02: Granular Consent Capture
**Description:** Capture individual consent preferences per category.
**Priority:** Must

| Category | Code | Default |
|----------|------|---------|
| Essential | CONS_ESS | True (required) |
| Analytics | CONS_ANA | True |
| Marketing | CONS_MKT | False |
| Profiling | CONS_PRO | False |
| Third-Party | CONS_3RD | False |
| Callback | CONS_CBK | False |

**Acceptance Criteria:**
- Each category has independent toggle
- No pre-ticked boxes for opt-in categories
- Timestamp and version recorded for each decision

---

### FR-CMP-03: Consent Withdrawal
**Description:** Users can withdraw consent at any time.
**Priority:** Must

**Channels:**
- Preference center (website/app)
- Email unsubscribe link
- SMS/WhatsApp reply "STOP"
- Branch visit
- Email to DPO

**Acceptance Criteria:**
- Withdrawal propagated to ALL downstream systems within 24 hours
- Confirmation sent via original channel
- Audit log maintained with timestamp, channel, and proof

---

## 4. Module: Lead Scoring Engine

### FR-SCR-01: Real-Time Scoring
**Description:** Calculate composite lead score within 200ms of intent signal capture.
**Priority:** Must

**Inputs:** Behavioral signals, demographic data, propensity model output

**Output:**
```json
{
  "lead_id": "lead_12345",
  "composite_score": 81,
  "behavioral_score": 70,
  "demographic_score": 85,
  "propensity_score": 90,
  "tier": "HOT",
  "calculated_at": "2025-09-26T10:30:00Z"
}
```

**Business Rules:**
- Score recalculated on every significant event
- Score decay: −10 points per week of inactivity (max decay = 50)

---

### FR-SCR-02: Tier Assignment
**Description:** Categorize leads based on composite score.
**Priority:** Must

| Tier | Score Range | SLA | Action |
|------|-------------|-----|--------|
| Hot | 80–100 | 2 hours | Immediate RM callback |
| Warm | 60–79 | 24 hours | WhatsApp nurture + scheduled callback |
| Cold | 40–59 | 72 hours | Email drip + retargeting |
| Frozen | 0–39 | N/A | Lookaliseed audience only |

---

## 5. Module: CRM Integration

### FR-CRM-01: Lead Push
**Description:** Automatically push scored leads to Salesforce CRM.
**Priority:** Must

**Mapped Fields:**
| CDP Field | Salesforce Field |
|-----------|------------------|
| lead_id | Lead_ID__c |
| composite_score | Lead_Score__c |
| tier | Lead_Tier__c |
| consent_mkt | Consent_Marketing__c |
| consent_cbk | Consent_Callback__c |
| preferred_channel | Preferred_Channel__c |
| product_interest | Product_Interest__c |

---

### FR-CRM-02: Deduplication
**Description:** Prevent duplicate leads for same customer.
**Priority:** Must

**Matching Rules:**
1. Exact phone number match
2. Exact email match
3. Anonymous ID + partial phone match (last 4 digits)

**Action on Duplicate:** Update existing lead with higher score; append new behavioral signals

---

## 6. Module: Omnichannel Orchestrator

### FR-OMN-01: Channel Selection
**Description:** Select outreach channel based on consent + preference + tier.
**Priority:** Must

**Channel Priority Matrix:**

| Tier | Preferred Channel | Fallback 1 | Fallback 2 |
|------|-------------------|------------|------------|
| Hot | WhatsApp | Phone | Email |
| Warm | WhatsApp | Email | Phone |
| Cold | Email | WhatsApp | — |
| Frozen | — | — | — |

**Business Rules:**
- No outreach without valid consent for channel and purpose
- Maximum 1 outreach attempt per 48 hours per channel
- Phone callback only during 9 AM – 7 PM local time

---

### FR-OMN-02: Message Personalization
**Description:** Outreach messages personalized based on captured intent.
**Priority:** Must

**WhatsApp (Hot — Personal Loan):**
```
Hi [First Name], you were checking our Personal Loan EMI calculator for
₹[Amount] over [Tenure] years. We have a pre-approved offer at [Rate]% —
₹[EMI]/month. Ready to apply? Reply YES or schedule a call: [Link]
```

**Email (Warm — Credit Card):**
```
Subject: Your Credit Card comparison — here's what you missed

Hi [First Name],

You compared our Platinum Card against 2 others. Here's why 8/10 customers
choose us: [Benefits]. Apply in 2 minutes with zero paperwork.

[Apply Now] [Not Interested — Update Preferences]
```

---

## 7. Error Handling Matrix

| Scenario | Error Code | User Impact | System Action |
|----------|------------|-------------|---------------|
| Consent API timeout | ERR_CMP_001 | Banner stuck | Retry 3x; fallback to essential-only |
| Scoring engine overload | ERR_SCR_001 | Delayed score | Queue + async calculation |
| CRM push failure | ERR_CRM_001 | Lead not visible | Retry 5x; alert ops team |
| Invalid consent combination | ERR_CMP_002 | Invalid state | Log + reject; notify DPO |
