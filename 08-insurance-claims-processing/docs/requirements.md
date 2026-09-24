# Insurance Claims — Functional Requirements

## 1. Digital Claim Intimation

### FR-001: Multi-Channel Intimation
- Mobile app claim registration with photo upload
- WhatsApp bot for claim intimation
- Call center IVR with claim ID generation

### FR-002: Policy Verification
- Auto-fetch policy details from policy number
- Coverage validation in real-time
- Rider and add-on benefit check

## 2. Survey & Assessment

### FR-003: Surveyor Assignment
- Auto-assign based on geography and workload
- Video survey option for minor claims
- Digital survey form with photo capture

### FR-004: Assessment Workflow
- Damage estimate calculation
- Depreciation auto-calculation
- Manager approval for claims > ₹1L

## 3. Settlement

### FR-005: Payment Processing
- Auto-approval for claims < ₹50K with clean history
- NEFT/IMPS disbursement
- Settlement within T+7 of survey

### FR-006: Customer Communication
- Status updates at each stage
- Estimated settlement date
- Digital settlement receipt

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Claim Registration | < 3 minutes |
| Survey Assignment | < 24 hours |
| Settlement TAT | < 7 days |
| System Uptime | 99.9% |

---

*Version: 1.0 | Author: Sagar Kandelkar | Date: September 2026*
