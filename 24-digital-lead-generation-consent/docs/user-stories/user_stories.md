# User Stories
## Digital Lead Generation & Consent-Based Outreach Platform

---

## Epic 1: Web Intent Capture

### US-001: Anonymous Visitor Tracking
**As a** digital marketing manager,  
**I want** to track anonymous visitor behavior,  
**So that** I understand which products generate the most interest.

**Acceptance Criteria:**
- GIVEN an anonymous visitor lands on a product page, THEN a first-party cookie is set with unique anonymous ID
- GIVEN a visitor navigates, THEN scroll/click/calculator events are captured with timestamps
- GIVEN a visitor leaves, THEN all events are batched and sent to CDP within 5 seconds

**Story Points:** 5 | **Priority:** Must

---

### US-002: Exit Intent Capture
**As a** prospective customer,  
**I want** a relevant offer before I leave,  
**So that** I don't lose the information I researched.

**Acceptance Criteria:**
- GIVEN exit intent detected, THEN a contextual popup appears with soft lead capture offer
- GIVEN popup appears, WHEN visitor enters email/phone, THEN consent checkbox shown before submission
- GIVEN visitor declines, THEN no data stored and browsing continues

**Story Points:** 3 | **Priority:** Must

---

## Epic 2: Consent Management

### US-003: Granular Consent Banner
**As a** website visitor,  
**I want** to choose exactly what data I share,  
**So that** I feel in control of my privacy.

**Acceptance Criteria:**
- GIVEN first-time visitor, THEN consent banner appears in local language
- GIVEN visitor clicks "Manage Preferences", THEN granular toggles shown for all categories
- GIVEN visitor toggles any category, THEN choices stored with timestamp and version

**Story Points:** 8 | **Priority:** Must

---

### US-004: Consent Withdrawal
**As a** customer,  
**I want** to withdraw marketing consent easily,  
**So that** I stop receiving promotional messages.

**Acceptance Criteria:**
- GIVEN customer previously opted in, WHEN they visit preference center, THEN they can toggle OFF any category
- GIVEN customer replies "STOP" on WhatsApp, THEN withdrawal processed within 24 hours with confirmation
- GIVEN withdrawal occurs, THEN customer excluded from ALL future outreach for withdrawn categories

**Story Points:** 5 | **Priority:** Must

---

## Epic 3: Lead Scoring

### US-005: Real-Time Lead Scoring
**As a** sales manager,  
**I want** leads automatically scored,  
**So that** my team focuses on the most promising prospects.

**Acceptance Criteria:**
- GIVEN visitor completes calculator or provides contact, THEN composite score calculated within 200ms
- GIVEN score ≥80, THEN lead tagged as "Hot" and alert sent to assigned RM
- GIVEN lead returns after 7 days, THEN score recalculated with decay applied

**Story Points:** 8 | **Priority:** Must

---

### US-006: Lead Tier Visibility in CRM
**As a** relationship manager,  
**I want** to see lead tier and score in CRM,  
**So that** I can prioritize my daily calling list.

**Acceptance Criteria:**
- GIVEN lead exists in Salesforce, WHEN scoring engine processes it, THEN Lead_Score__c and Lead_Tier__c populated
- GIVEN RM views dashboard, WHEN sorted by tier, THEN Hot leads appear at top with red indicator
- GIVEN Hot lead not contacted within 2 hours, THEN sales manager receives escalation alert

**Story Points:** 3 | **Priority:** Must

---

## Epic 4: Omnichannel Outreach

### US-007: Consent-Based WhatsApp Outreach
**As a** relationship manager,  
**I want** to send personalized WhatsApp messages to consenting leads,  
**So that** I engage them on their preferred channel.

**Acceptance Criteria:**
- GIVEN lead has CONS_MKT=TRUE and preferred_channel='WHATSAPP', THEN personalized message queued
- GIVEN message sent, WHEN lead replies, THEN conversation logged in CRM and status updates to "ENGAGED"
- GIVEN lead withdrew CONS_MKT, WHEN outreach job runs, THEN lead skipped and compliance log created

**Story Points:** 5 | **Priority:** Must

---

### US-008: Personalized Email Drip Campaign
**As a** marketing automation specialist,  
**I want** email sequences triggered by lead behavior and score,  
**So that** Cold leads are nurtured until they become Warm.

**Acceptance Criteria:**
- GIVEN lead scored as Cold (40–59), THEN they enter 3-email drip sequence over 14 days
- GIVEN lead opens email and clicks link, THEN score increases by 5 points
- GIVEN lead unsubscribes via email link, THEN CONS_MKT set to FALSE within 1 hour

**Story Points:** 5 | **Priority:** Should

---

## Epic 5: Analytics & Reporting

### US-009: Compliance Audit Report
**As a** compliance officer,  
**I want** monthly consent activity reports,  
**So that** I demonstrate regulatory compliance to auditors.

**Acceptance Criteria:**
- GIVEN month has ended, THEN report includes: consents granted, withdrawals, opt-in rates, sample audit records
- GIVEN auditor requests data, THEN export all consent records with proof references within 10 minutes
- GIVEN withdrawal spikes >20%, THEN automatic alert sent to DPO

**Story Points:** 5 | **Priority:** Must

---

### US-010: Lead Funnel Dashboard
**As a** head of digital marketing,  
**I want** real-time funnel dashboard,  
**So that** I optimize acquisition spend.

**Acceptance Criteria:**
- GIVEN dashboard loads, THEN I see: visitors → captured → consented → scored → contacted → converted
- GIVEN I click any stage, THEN drill-down shows drop-off reasons and channel attribution
- GIVEN new lead converts, THEN conversion rate refreshes within 5 minutes

**Story Points:** 8 | **Priority:** Should

---

## Story Map Summary

| Epic | User Stories | Total Points | Status |
|------|--------------|--------------|--------|
| Web Intent Capture | US-001, US-002 | 8 | 🔴 Not Started |
| Consent Management | US-003, US-004 | 13 | 🔴 Not Started |
| Lead Scoring | US-005, US-006 | 11 | 🔴 Not Started |
| Omnichannel Outreach | US-007, US-008 | 10 | 🔴 Not Started |
| Analytics & Reporting | US-009, US-010 | 13 | 🔴 Not Started |
| **TOTAL** | **10 stories** | **55** | |

---

## Definition of Done (DoD)

- [ ] Code developed and peer-reviewed
- [ ] Unit tests passing (≥80% coverage)
- [ ] Integration tests passing
- [ ] UAT executed with BA sign-off
- [ ] Documentation updated
- [ ] Compliance review completed (if data/privacy related)
