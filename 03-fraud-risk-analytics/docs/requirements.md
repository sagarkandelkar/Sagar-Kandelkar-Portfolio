# Fraud Detection — Functional Requirements

## 1. Real-Time Transaction Monitoring

### FR-001: Multi-Factor Risk Scoring
- Evaluate each transaction across amount, geography, time, device, and velocity
- Assign composite risk score: Low / Medium / High
- Trigger alerts for High-risk transactions automatically

### FR-002: Rule Engine Configuration
- Support configurable thresholds (amount limits, velocity windows)
- Allow rule versioning and A/B testing
- Enable/disable rules without code deployment

## 2. Alert Management

### FR-003: Alert Triage Queue
- Prioritize alerts by severity (High → Medium → Low)
- Route alerts to appropriate investigation teams
- Support bulk assignment and reassignment

### FR-004: Investigation Workflow
- Track status: Open → In Progress → Under Review → Resolved
- Capture investigator notes and evidence
- Maintain complete audit trail

## 3. Case Resolution

### FR-005: Outcome Tracking
- Record resolution: Fraud Confirmed / False Positive / Genuine
- Link confirmed fraud cases to SAR preparation
- Calculate false positive rates by rule

### FR-006: Customer Notification
- Auto-notify customers of suspicious activity
- Support SMS, email, and in-app notifications
- Include transaction details and confirmation options

## 4. Reporting & Analytics

### FR-007: Fraud Dashboard
- Real-time fraud rate, alert volume, and investigation backlog
- Trend analysis by channel, geography, and time
- Rule performance metrics

### FR-008: Regulatory Reports
- Generate SAR-ready summaries
- Export compliance reports in required formats
- Maintain 7-year retention as per RBI guidelines

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Transaction Scoring Latency | < 500ms |
| Alert Generation | Real-time |
| Dashboard Refresh | < 5 minutes |
| System Uptime | 99.9% |
| Data Retention | 7 years |
| Audit Trail | Immutable |

---

*Version: 1.0 | Author: Sagar Kandelkar | Date: September 2026*
