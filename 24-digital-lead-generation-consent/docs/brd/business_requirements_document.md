# Business Requirements Document (BRD)
## Digital Lead Generation & Consent-Based Outreach Platform

**Version:** 1.0 | **Author:** Sagar Kandelkar

---

## 1. Executive Summary

### Business Need
The bank loses **98% of website visitors** without capturing intent signals. Outbound marketing relies on purchased cold leads with **2% conversion** and **400+ monthly complaints** due to lack of consent.

### Proposed Solution
Deploy an **Intent-to-Conversion Platform** that tracks web behavior, captures explicit consent, scores leads in real time, and enables personalized, consent-compliant outreach.

### Business Benefits
| Benefit | Quantified Impact |
|---------|-------------------|
| Reduced customer acquisition cost | CPL drops from ₹850 to ₹280 |
| Improved sales productivity | 57% more daily conversions |
| Regulatory compliance | Zero consent-related complaints |
| Higher customer satisfaction | Outreach only to interested, consenting customers |

---

## 2. Business Objectives

| ID | Objective | Success Metric | Target |
|----|-----------|----------------|--------|
| BO-01 | Capture intent signals from anonymous visitors | Lead capture rate | ≥ 3.5% |
| BO-02 | Obtain explicit consent for outreach | Opt-in rate | ≥ 65% |
| BO-03 | Prioritize high-intent leads | Lead-to-application conversion | ≥ 12% |
| BO-04 | Ensure 100% consent compliance | Marketing complaints | < 50/month |
| BO-05 | Enable omnichannel engagement | Channel preference capture | ≥ 80% |

---

## 3. AS-IS vs TO-BE Process

### AS-IS
```
Customer searches "personal loan" → lands on page → browses 2 min → leaves
→ Bank has ZERO record → 2 days later: cold call from purchased list
→ Customer annoyed → Complaint filed → Brand damage
→ Cost per conversion: ₹4,200 | Conversion: 2%
```

### TO-BE
```
Customer searches "personal loan" → lands on page → tracker captures behavior
→ Exit intent: "Get best rate on WhatsApp?" → Enters phone + checks consent
→ Lead scored: Composite 81 (🔥 HOT) → Pushed to CRM
→ RM calls within 2 hours with pre-approved offer
→ Customer: "Perfect timing!" → Application initiated
→ Cost per conversion: ₹280 | Conversion: 13%
```

---

## 4. Functional Requirements (Summary)

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-01 | Track anonymous user behavior on website | Must |
| FR-02 | Display consent banner on first visit | Must |
| FR-03 | Capture granular consent preferences | Must |
| FR-04 | Calculate real-time lead score | Must |
| FR-05 | Push scored leads to CRM | Must |
| FR-06 | Trigger omnichannel outreach based on consent | Must |
| FR-07 | Provide preference center for consent withdrawal | Must |
| FR-08 | Generate compliance audit reports | Must |
| FR-09 | A/B test consent banner variants | Should |
| FR-10 | Predict next-best-product using ML | Could |

---

## 5. Non-Functional Requirements

| NFR | Requirement | Target |
|-----|-------------|--------|
| Performance | Lead score calculation latency | < 200ms |
| Availability | Platform uptime | 99.9% |
| Scalability | Concurrent web sessions | 50,000 |
| Security | Encryption standard | AES-256 + TLS 1.3 |
| Compliance | Consent withdrawal propagation | < 24 hours |
| Data Retention | Anonymous tracking data purge | 90 days |

---

## 6. Constraints & Assumptions

**Constraints:**
- Budget: ₹1.2 Cr (including CDP, CMP, CRM integration)
- Timeline: 4 months for pilot; 6 months for full rollout
- Must integrate with existing Salesforce CRM
- Must comply with RBI KYC and TRAI TCCCPR

**Assumptions:**
- Marketing team will adopt lead scoring within 30 days of go-live
- IT team will provide API access to existing customer master
- Legal team will approve consent language within 2 weeks

---

## 7. Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Low consent opt-in rate | High | Medium | A/B test banner designs; incentive-based opt-in |
| Sales team resistance | Medium | High | Training + commission linkage to scored leads |
| Integration delays | High | Medium | Parallel track development; vendor escalation |
| Regulatory rejection | Very High | Low | Early compliance review; legal sign-off at each stage |
