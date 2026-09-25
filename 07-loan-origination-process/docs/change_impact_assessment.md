# Change Impact Assessment Matrix

> **Project:** Loan Origination Process Analysis
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Author:** Sagar Kandelkar

---

## Impact Assessment Framework

Every change is scored across 5 dimensions:

| Dimension | Scale | What It Measures |
|-----------|-------|-----------------|
| **Process Change** | 1–5 | How much the workflow changes |
| **System Change** | 1–5 | Integration, config, or custom dev needed |
| **People Impact** | 1–5 | Training, role change, or headcount |
| **Data Impact** | 1–5 | Data migration, cleansing, new fields |
| **Regulatory Impact** | 1–5 | Compliance review, RBI/SEBI notification |

**Total Impact Score = Sum of all 5 dimensions**

| Total | Impact Level | Action Required |
|-------|-------------|-----------------|
| 5–10 | Low | Standard change management |
| 11–18 | Medium | Dedicated change lead, training plan |
| 19–25 | High | Steering committee oversight, phased rollout |

---

## Change Impact by Requirement

| Req ID | Change Description | Process | System | People | Data | Regulatory | Total | Level |
|--------|-------------------|---------|--------|--------|------|------------|-------|-------|
| FR-001 | Digital application replaces paper forms | 5 | 4 | 4 | 3 | 2 | **18** | 🟡 Medium |
| FR-002 | API-based bureau check replaces manual CIBIL pull | 3 | 5 | 2 | 4 | 3 | **17** | 🟡 Medium |
| FR-003 | Income verification via bank statement API | 3 | 5 | 2 | 4 | 3 | **17** | 🟡 Medium |
| FR-004 | Auto-sanction for low-risk profiles (STP) | 5 | 5 | 5 | 5 | 5 | **25** | 🔴 High |
| FR-005 | Digital agreement execution (eSign) | 4 | 4 | 3 | 2 | 4 | **17** | 🟡 Medium |
| FR-006 | Automated disbursement trigger | 3 | 4 | 2 | 3 | 2 | **14** | 🟡 Medium |
| FR-007 | Real-time EMI calculator on app | 2 | 3 | 1 | 1 | 1 | **8** | 🟢 Low |
| FR-008 | Customer self-service document upload | 4 | 4 | 3 | 3 | 2 | **16** | 🟡 Medium |
| FR-009 | Branch-level loan officer dashboard | 3 | 4 | 4 | 3 | 1 | **15** | 🟡 Medium |
| FR-010 | NPA early warning alerts | 2 | 3 | 2 | 4 | 4 | **15** | 🟡 Medium |

---

## High-Impact Deep Dive: FR-004 (STP Auto-Sanction)

**Why this scores 25/25:**

| Dimension | Score | Justification |
|-----------|-------|---------------|
| **Process (5)** | Loan officers lose sanction authority for 60% of cases. New exception-handling workflow needed. |
| **System (5)** | Core banking rule engine rewrite, credit scoring model deployment, API gateway changes. |
| **People (5)** | Loan officers move from approvers to reviewers. 200+ staff need reskilling. Union consultation required. |
| **Data (5)** | Historical loan data migration for model training. Real-time data pipeline for scoring. |
| **Regulatory (5)** | RBI approval needed for automated lending. Fair lending audit. Model explainability requirements. |

**Mitigation Strategy:**
1. **Phase 1:** STP only for ₹5L–₹15L, salaried, CIBIL > 750 (narrowest scope)
2. **Phase 2:** Expand to self-employed with 2-year history
3. **Phase 3:** Full STP rollout after 6-month pilot validation
4. **Governance:** Weekly model performance review, RBI quarterly reporting

---

## System Impact Heat Map

```
                    Process   System   People   Data   Regulatory
                    ──────────────────────────────────────────────
Core Banking         ████     █████    ████    ████     ███
    (Finacle/TCS)    [4]      [5]      [4]     [4]      [3]

Credit Bureau API    ██       █████    █      ████     ████
    (CIBIL/Experian) [2]      [5]      [1]     [4]      [4]

Document Mgmt        ████     ████     ███     ███      ██
    (DMS)            [4]      [4]      [3]     [3]      [2]

Mobile App           ███      ████     █       █        █
    (Android/iOS)    [3]      [4]      [1]     [1]      [1]

HR/Training          █        █        █████   █        █
    (LMS)            [1]      [1]      [5]     [1]      [1]

Reporting/DWH        ██       ███      █       █████    ████
    (BI Tools)       [2]      [3]      [1]     [5]      [4]
```

---

## Training Impact Summary

| Role | Current Skill | New Skill Required | Training Hours | Go-Live Buffer |
|------|---------------|-------------------|----------------|----------------|
| Loan Officer | Manual appraisal | Exception review, customer advisory | 40 hours | 2 weeks |
| Branch Manager | Sanction oversight | STP monitoring, escalations | 16 hours | 1 week |
| Credit Analyst | Spreadsheet scoring | Model monitoring, drift detection | 80 hours | 4 weeks |
| Customer Service | Query handling | Digital app troubleshooting | 24 hours | 1 week |
| IT Support | Core banking admin | API monitoring, rule engine config | 40 hours | 2 weeks |

**Total training investment:** ₹18.5 Lakhs (materials + facilitation + backfill)

---

## Data Migration Scope

| Source System | Target System | Records | Complexity | Risk |
|---------------|---------------|---------|------------|------|
| Legacy loan MIS | Core banking | 2.8M | High (field mapping) | 🟡 |
| Paper sanction files | Document Mgmt | 450K | Medium (scan + OCR) | 🟢 |
| CIBIL batch extracts | Real-time API | — | Low (API integration) | 🟢 |
| Branch registers | Digital app | — | Low (new fields) | 🟢 |

---

## Change Timeline

```
Month 1:  Impact assessment complete, steering committee formed
Month 2:  Training plan finalized, vendor engagement
Month 3:  System development starts, data migration begins
Month 4:  UAT begins, training delivery starts
Month 5:  Pilot branch launch, monitoring dashboards live
Month 6:  Full rollout, 2-week hypercare
Month 7:  Steady state, lessons learned
```

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
