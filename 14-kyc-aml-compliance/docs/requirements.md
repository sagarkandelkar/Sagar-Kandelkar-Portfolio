# KYC / AML Compliance — Functional Requirements

## 1. Perpetual KYC

### FR-001: Continuous Customer Data Validation
- Automated daily checks against external databases
- Trigger re-verification on address change, name change
- Risk score recalculation on significant life events

### FR-002: Digital Document Refresh
- OCR-based document expiry detection
- Proactive customer notification before expiry
- In-app document update with auto-verification

## 2. AI-Powered Screening

### FR-003: Transaction Monitoring
- Real-time anomaly detection using ML
- Behavioral profiling per customer
- Alert generation with risk explanation

### FR-004: Sanctions & PEP Screening
- Daily batch screening against global watchlists
- Real-time screening for high-risk transactions
- Fuzzy matching to reduce false positives

## 3. Risk Management

### FR-005: Dynamic Risk Scoring
- Multi-factor risk model: geography, product, behavior
- Auto-escalation for High-risk customers
- Risk-based documentation requirements

### FR-006: Concentration Risk Monitoring
- Exposure limits by customer, sector, geography
- Automated alerts approaching limits
- Regulatory limit compliance tracking

## 4. Regulatory Reporting

### FR-007: Automated SAR Generation
- Pre-filled SAR templates from case data
- Workflow for compliance officer review
- Direct filing to FIU-IND portal

### FR-008: Regulatory Dashboard
- RBI inspection-ready reports
- Audit trail for all compliance actions
- Historical compliance score tracking

## 5. Investigation & Case Management

### FR-009: Case Management Workflow
- Alert-to-case conversion with evidence capture
- Investigator assignment and workload balancing
- Case timeline and status tracking

### FR-010: Network Analysis
- Link analysis for related parties
- Visualization of transaction networks
- Detection of shell company patterns

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Screening Latency | < 5 seconds |
| Alert Generation | Real-time |
| Data Retention | 10 years |
| Audit Trail | Immutable |
| System Uptime | 99.9% |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
