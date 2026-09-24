# SAP-Aligned Business Requirements Document (Sample)

> **Project:** Digital Loan Origination via SAP FS-CML
> **Type:** Portfolio Sample — Synthetic Scenario
> **Purpose:** Demonstrate SAP-aware BA thinking for BFSI implementations

---

## 1. Document Control

| Field | Details |
|-------|---------|
| Document Name | BRD — Digital Loan Origination (SAP FS-CML) |
| Version | 1.0 |
| Author | Sagar Kandelkar |
| Date | October 2026 |
| Status | Draft |

---

## 2. Executive Summary

This document outlines business requirements for implementing a **digital loan origination process** within the bank's existing **SAP FS-CML (Loans Management)** environment. The objective is to reduce loan application-to-sanction time from 7 days to under 24 hours while maintaining credit risk controls.

**SAP Modules Involved:**
- **SAP FS-CML** — Loan contract creation and management
- **SAP FS-BP** — Business Partner (customer master)
- **SAP GRC** — Credit risk checks and compliance
- **SAP PI/PO** — Integration with CIBIL bureau and document management

---

## 3. AS-IS Process (Current State)

```
Customer visits branch → Paper application → Manual data entry →
Branch sends to credit team → Manual CIBIL check → Income verification (email/phone) →
Credit committee review → Physical sanction letter → Manual disbursement
```

**Pain Points:**
- 7-day average turnaround
- Duplicate data entry (branch → system → credit → disbursement)
- No real-time status visibility for customer
- Manual document collection and storage

---

## 4. TO-BE Process (SAP-Enabled Future State)

```
Customer applies via Fiori app → Auto-populated from BP master →
Real-time CIBIL via SAP PI → Document upload to DMS →
Automated scoring in FS-CML → Digital sanction workflow →
STP disbursement via payment engine
```

---

## 5. Functional Requirements

### FR-001: Business Partner Verification

| Field | Detail |
|-------|--------|
| **Requirement** | System shall auto-populate loan application from existing Business Partner (BP) master data |
| **SAP Module** | FS-BP |
| **Transaction** | BP (FPP1) — Create / BP (FPP2) — Change |
| **Configuration** | BP Role: FLCU00 (Customer) + FLCU01 (Customer FI) |
| **Business Rule** | If BP exists with valid KYC, pre-fill name, address, ID proof. If new BP, trigger KYC workflow. |
| **Screen/Field** | Loan Application Fiori app → "Customer Details" section |

**Acceptance Criteria:**
- BP data pulls in < 2 seconds
- Editable fields clearly marked vs read-only fields
- New BP triggers automatic KYC task creation

---

### FR-002: Credit Bureau Integration

| Field | Detail |
|-------|--------|
| **Requirement** | System shall fetch real-time CIBIL score and credit history via API |
| **SAP Module** | PI/PO (Process Integration) |
| **Interface** | IDOC / SOAP API to CIBIL |
| **Configuration** | Communication Channel: CC_CIBIL_BUREAU |
| **Business Rule** | If CIBIL < 650 → auto-decline. If 650–750 → manual review. If > 750 → straight-through processing (STP). |
| **Data Mapping** | CIBIL XML → SAP Credit Score field (BUREAU_SCORE) |

**Acceptance Criteria:**
- Bureau response received in < 5 seconds
- Score stored in BP custom field
- Failed bureau calls trigger alert to IT operations

---

### FR-003: Document Management

| Field | Detail |
|-------|--------|
| **Requirement** | Customer shall upload income proof, ID proof, and bank statements via app |
| **SAP Module** | DMS (Document Management System) + FS-BP |
| **Transaction** | CV01N — Create Document |
| **Configuration** | Document Type: ZLNAPP (Loan Application Documents) |
| **Business Rule** | Mandatory documents: PAN, Aadhaar, Last 3 months bank statement. Optional: Form 16, Salary slip. |

**Acceptance Criteria:**
- PDF/JPG/PNG upload supported (max 5MB each)
- OCR extracts key data (name, PAN number, salary) for validation
- Missing documents block application submission

---

### FR-004: Credit Scoring & Risk Assessment

| Field | Detail |
|-------|--------|
| **Requirement** | System shall calculate internal risk score using CIBIL + income + employment data |
| **SAP Module** | FS-CML — Credit Risk |
| **Transaction** | FPDL — Display Loans Worklist |
| **Configuration** | Scorecard: ZINT_SCORE_01 (Internal Scoring Model) |
| **Business Rule** | Score < 40 → Reject. 40–70 → Review queue. > 70 → Auto-approve (within policy limit). |

**Acceptance Criteria:**
- Score calculates in real-time after all data inputs
- Score breakdown visible to credit analyst
- Audit log maintains scoring history

---

### FR-005: Digital Sanction & Agreement

| Field | Detail |
|-------|--------|
| **Requirement** | Approved loans generate digital sanction letter with e-sign capability |
| **SAP Module** | FS-CML + Adobe Sign / DocuSign integration |
| **Transaction** | FPDL → Release Contract |
| **Configuration** | Output Type: ZSANLET (Sanction Letter) |
| **Business Rule** | E-sign must complete within 72 hours or application auto-expires. |

**Acceptance Criteria:**
- Sanction letter auto-generated with correct terms (ROI, tenure, EMI)
- Customer receives SMS + email with e-sign link
- Signed document archived in DMS

---

### FR-006: Straight-Through Disbursement

| Field | Detail |
|-------|--------|
| **Requirement** | E-signed loans disburse automatically to customer's linked account |
| **SAP Module** | FS-CML + FI (Financial Accounting) + Payment Engine |
| **Transaction** | FPE1 — Post Disbursement |
| **Configuration** | Payment Method: NEFT/RTGS via SAP payment run |
| **Business Rule** | Disburse only if: sanction signed + collateral verified (for secured loans) + cooling period elapsed. |

**Acceptance Criteria:**
- Disbursement completes within 2 hours of e-sign
- GL entry auto-posted (Dr Loan Asset, Cr Customer Account)
- Customer receives disbursement confirmation SMS

---

## 6. Non-Functional Requirements

| Requirement | Target | SAP Relevance |
|-------------|--------|---------------|
| Application Response Time | < 3 seconds | SAP Fiori performance tuning |
| CIBIL API Latency | < 5 seconds | PI/PO message queue optimization |
| System Uptime | 99.9% | SAP Basis monitoring |
| Data Retention | 7 years | SAP ILM (Information Lifecycle Management) |
| Audit Trail | All actions logged | SAP Security Audit Log |

---

## 7. Integration Matrix

| System | Direction | Protocol | SAP Component | Frequency |
|--------|-----------|----------|---------------|-----------|
| CIBIL Bureau | Outbound | SOAP API | SAP PI/PO | Real-time |
| Document DMS | Internal | RFC | SAP DMS | Real-time |
| Payment Engine | Outbound | IDOC | SAP FI-AP | Real-time |
| SMS Gateway | Outbound | REST API | SAP PI/PO | Real-time |
| Mobile App | Inbound | OData | SAP Gateway | Real-time |

---

## 8. Reporting Requirements

| Report | Description | SAP Source |
|--------|-------------|------------|
| Daily Loan Pipeline | Applications received, in-process, sanctioned, rejected | FS-CML Worklist |
| TAT Analysis | Average time per stage (application → sanction → disbursement) | FS-CML + custom BW report |
| Credit Score Distribution | Bucket analysis of applicant scores | BP master + custom field |
| NPA Early Warning | Loans showing first missed EMI | FS-CML + Collections |

---

## 9. Assumptions & Dependencies

1. SAP FS-CML module is licensed and implemented
2. SAP PI/PO infrastructure exists for API integrations
3. CIBIL API contract is in place
4. Customer master (BP) exists for existing customers
5. Mobile app Fiori front-end development is parallel workstream

---

## 10. Glossary

| Term | Definition |
|------|-----------|
| BP | Business Partner — SAP's unified customer master |
| FS-CML | Financial Services — Loans Management |
| FPDL | Transaction code for Loan Worklist |
| PI/PO | Process Integration / Process Orchestration |
| STP | Straight-Through Processing |
| DMS | Document Management System |
| TAT | Turnaround Time |

---

*Portfolio Sample — Synthetic Scenario | Analyst: Sagar Kandelkar*
