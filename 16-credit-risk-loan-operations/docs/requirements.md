# Credit Risk & Loan Operations — Functional Requirements

## 1. Credit Application & Scoring

### FR-001: Digital Application Capture
- Multi-channel application intake (branch, web, mobile, DSA)
- Auto-fill from existing customer profile where available
- Document upload with OCR and validation

### FR-002: Multi-Bureau Credit Check
- Parallel CIBIL, Experian, Equifax bureau queries
- Alternative data scoring (utility payments, rental history)
- Consolidated credit report with unified score

### FR-003: ML-Based Credit Scoring
- 200+ feature ML model for probability of default (PD)
- Loss given default (LGD) estimation with collateral tracking
- Exposure at default (EAD) calculation for revolving products

## 2. Approval & Monitoring

### FR-004: Risk-Based Auto-Decision
- Straight-through processing (STP) for low-risk applications
- Risk-banded approval limits with dual-approval thresholds
- Explanation of decision for regulatory fairness

### FR-005: Real-Time Portfolio Monitoring
- Concentration risk tracking by sector, geography, product
- Early warning indicators with 90-day advance notice
- Stress testing with automated scenario analysis

## 3. NPA & Recovery

### FR-006: Early Warning System
- 30+ leading indicators of account distress
- Automated watchlist classification and intervention triggers
- Restructuring workflow with eligibility checks

### FR-007: Recovery Strategy Selection
- Data-driven recovery path (settlement, legal, asset sale)
- Recovery tracking with timeline and cost monitoring
- NPA provisioning automation with Basel-compliant calculations

## 4. Regulatory & Reporting

### FR-008: Basel Compliance Automation
- IRB approach capital calculation
- ECL (Expected Credit Loss) computation per Ind AS 109
- Automated regulatory returns to RBI

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Decision Speed | < 2 hours |
| Model Refresh | Monthly |
| Data Retention | 10 years |
| System Uptime | 99.9% |
| Audit Trail | 100% |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
