# Loan Origination — Functional Requirements

## 1. Digital Application

### FR-001: Online Loan Application
- Multi-product support (Home, Personal, Car, Education)
- Eligibility calculator with instant estimate
- Document upload with OCR (PAN, salary slips, bank statements)
- Co-applicant and guarantor support

### FR-002: Application Tracking
- Real-time status updates via app and SMS
- Stage-wise progress: Application → Appraisal → Sanction → Disbursement
- Document deficiency alerts with resubmission link

## 2. Credit Appraisal

### FR-003: Automated Risk Scoring
- CIBIL score fetch with customer consent
- DTI, FOIR, LTV auto-calculation
- Risk grade assignment (A/B/C/D)
- Property valuation integration

### FR-004: Straight-Through Processing
- Auto-approval for Grade A with DTI < 30%
- Manual review queue for edge cases
- Bureau inquiry count check (max 3 in 6 months)

## 3. Sanction & Disbursement

### FR-005: Digital Sanction Letter
- Auto-generated offer with terms and conditions
- E-sign acceptance via Aadhaar OTP
- NACH mandate registration

### FR-006: Disbursement
- Preferred mode selection (NEFT/RTGS/IMPS)
- Auto-disbursement post acceptance
- First EMI date calculation

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Application Processing | < 5 minutes for STP |
| Appraisal TAT | < 24 hours |
| Disbursement Speed | Same day post sanction |
| System Uptime | 99.9% |

---

*Version: 1.0 | Author: Sagar Kandelkar | Date: September 2026*
