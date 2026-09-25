# Requirements Traceability Matrix (RTM)

> **Project:** BFSI Customer Onboarding
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Author:** Sagar Kandelkar

---

## RTM Philosophy

Every requirement traces forward to:
- **SQL Query** (data extraction for analysis)
- **Test Case** (validation scenario)
- **Data Entity** (where it lives in the system)
- **Data Dictionary Field** (structured definition)
- **Gap Analysis Pain Point** (why it matters)

Every requirement traces backward to:
- **Business Objective**
- **Regulatory Driver** (if applicable)

---

## Functional Requirement Traceability

| Req ID | Requirement | Business Objective | SQL Query | Test Case | Data Entity | Data Dictionary | Gap Pain Point | Regulatory |
|--------|-------------|-------------------|-----------|-----------|-------------|-----------------|----------------|------------|
| FR-001 | KYC document upload (PAN, Aadhaar, Address Proof) | Reduce onboarding TAT | Q-001 | TC-001 | `customer_docs` | DD-001 | Manual doc collection causes 3-day delays | RBI KYC Master Direction |
| FR-002 | Real-time PAN validation via NSDL | Prevent identity fraud | Q-002 | TC-002 | `pan_verification` | DD-002 | Fake PAN cases detected only post-disbursement | RBI AML Guidelines |
| FR-003 | Aadhaar eKYC via UIDAI | Paperless onboarding | Q-003 | TC-003 | `aadhaar_ekyc` | DD-003 | Paper KYC takes 5+ days | Aadhaar Act 2016 |
| FR-004 | Digital signature capture | Eliminate physical visits | Q-004 | TC-004 | `esign_consent` | DD-004 | Branch visit = drop-off point | IT Act 2000 |
| FR-005 | Account opening form auto-fill from KYC | Reduce data entry errors | Q-005 | TC-005 | `account_application` | DD-005 | 40% forms have manual entry errors | RBI BCBS Guidelines |
| FR-006 | Risk scoring (low/medium/high) based on profile | Risk-based due diligence | Q-006 | TC-006 | `risk_assessment` | DD-006 | All customers treated equally = high risk exposure | RBI AML Master Direction |
| FR-007 | Product recommendation engine | Cross-sell at point of sale | Q-007 | TC-007 | `product_eligibility` | DD-007 | No real-time product matching | — |
| FR-008 | Welcome kit generation (email + physical) | First impression management | Q-008 | TC-008 | `communication_log` | DD-008 | Welcome kit sent after 7 days | — |

---

## Non-Functional Requirement Traceability

| NFR ID | Requirement | Test Case | Metric | Target | Measurement Method |
|--------|-------------|-----------|--------|--------|-------------------|
| NFR-001 | Onboarding completion within 15 minutes | TC-NFR-001 | Average time | ≤ 15 min | Session duration logging |
| NFR-002 | 99.9% uptime during business hours | TC-NFR-002 | Availability | ≥ 99.9% | Infrastructure monitoring |
| NFR-003 | Data encryption at rest and in transit | TC-NFR-003 | Encryption coverage | 100% | Security audit |
| NFR-004 | Concurrent user support (10,000+) | TC-NFR-004 | Peak throughput | ≥ 10K users | Load testing (JMeter) |
| NFR-005 | Accessibility compliance (WCAG 2.1 AA) | TC-NFR-005 | Accessibility score | ≥ AA | Screen reader testing |

---

## Detailed Traceability Links

### FR-001: KYC Document Upload

**SQL Query (Q-001):**
```sql
SELECT customer_id, doc_type, upload_timestamp, verification_status,
       DATEDIFF(hour, upload_timestamp, verification_timestamp) AS verification_tat_hours
FROM customer_docs
WHERE upload_date >= DATEADD(day, -30, GETDATE())
ORDER BY verification_tat_hours DESC;
```

**Test Case (TC-001):**
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Upload PAN card (PDF, < 2MB) | Upload success, thumbnail preview shown |
| 2 | Upload unsupported format (.exe) | Error: "Only PDF, JPG, PNG allowed" |
| 3 | Upload file > 5MB | Error: "File size exceeds 5MB limit" |
| 4 | Upload blurred image | Warning: "Image quality low. Retake?" |

**Data Entity:** `customer_docs`
- customer_id (FK → customers)
- doc_type (PAN | Aadhaar | AddressProof | Photo)
- file_path (encrypted storage reference)
- upload_timestamp
- verification_status (Pending | Verified | Rejected)

**Gap Pain Point:** Branch-based document collection requires customer visit → 3-day average delay → 35% drop-off.

---

### FR-004: Digital Signature Capture

**SQL Query (Q-004):**
```sql
SELECT branch_code, 
       COUNT(*) AS total_applications,
       SUM(CASE WHEN esign_status = 'Completed' THEN 1 ELSE 0 END) AS esign_completed,
       ROUND(100.0 * SUM(CASE WHEN esign_status = 'Completed' THEN 1 ELSE 0 END) / COUNT(*), 2) AS esign_adoption_pct
FROM account_application
WHERE application_date >= DATEADD(month, -3, GETDATE())
GROUP BY branch_code
ORDER BY esign_adoption_pct ASC;
```

**Test Case (TC-004):**
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Complete onboarding, reach signature step | eSign option presented alongside physical form |
| 2 | Select eSign | OTP sent to registered mobile |
| 3 | Enter valid OTP | Signature captured, application submitted |
| 4 | Enter invalid OTP | Error: "Invalid OTP. 2 attempts remaining" |
| 5 | Skip eSign | Physical form generated, branch visit required |

**Data Entity:** `esign_consent`
- application_id (FK → account_application)
- consent_timestamp
- otp_verified (boolean)
- esign_provider (eMudhra | SignDesk | DSC)

**Gap Pain Point:** Physical signature requires branch visit = highest drop-off point in funnel (47% abandon).

---

## Cross-Reference Index

| Artifact Type | Count | Coverage |
|---------------|-------|----------|
| Functional Requirements | 8 | 100% traced |
| Non-Functional Requirements | 5 | 100% traced |
| SQL Queries | 8 | All FRs covered |
| Test Cases | 13 (8 FR + 5 NFR) | All requirements covered |
| Data Entities | 8 | All FRs covered |
| Data Dictionary Fields | 8 | All entities covered |
| Gap Analysis Pain Points | 8 | All FRs justified |
| Regulatory Drivers | 6 | Relevant FRs traced |

---

## Gap Analysis ↔ Requirement Bidirectional Trace

| Pain Point | Requirements Addressed | Estimated Impact |
|------------|------------------------|------------------|
| Manual doc collection (3-day delay) | FR-001, FR-003 | TAT reduction: 72h → 2h |
| Identity fraud (fake PAN) | FR-002 | Fraud prevention: ₹2.1 Cr/year |
| Branch visit dependency | FR-003, FR-004 | Drop-off reduction: 47% → 12% |
| Data entry errors (40% forms) | FR-005 | Error reduction: 40% → 5% |
| Uniform risk treatment | FR-006 | Risk-weighted savings: ₹80L/year |
| No cross-sell at POS | FR-007 | Revenue uplift: ₹3.2 Cr/year |
| Delayed welcome kit | FR-008 | NPS improvement: +18 points |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
