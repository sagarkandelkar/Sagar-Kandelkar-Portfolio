# Fraud Risk Management — Functional Requirements

## 1. Threat Intelligence & Detection

### FR-001: Real-Time Transaction Monitoring
- Monitor all transactions across channels with sub-second latency
- Rule-based and ML-based anomaly detection engines
- Risk score calculated for every transaction (0–1000)

### FR-002: Fraud Triangle Analysis
- Flag transactions matching pressure + opportunity + rationalization patterns
- Automated risk scoring for customer behavior deviations
- Periodic reassessment of customer risk profiles

## 2. Control Framework

### FR-003: Three Lines of Defense Model
- First line: Business unit self-monitoring with automated alerts
- Second line: Risk oversight with control testing dashboards
- Third line: Internal audit with independent assurance workflows

### FR-004: Red Flag Indicator Library
- 200+ configurable red flag rules across products and channels
- Automatic rule triggering with severity classification
- Rule effectiveness tracking with false positive tuning

## 3. Incident Response

### FR-005: Structured Incident Playbooks
- Pre-defined response workflows by fraud type (card, wire, identity, etc.)
- Automated containment actions (block, freeze, notify)
- Evidence preservation with digital chain of custody

### FR-006: Forensic Investigation Module
- Digital evidence capture and tagging
- Transaction reconstruction and timeline visualization
- Case management with court-ready reporting

## 4. Reporting & Compliance

### FR-007: Regulatory Reporting Automation
- RBI / FIU suspicious transaction reports (STRs)
- Automated SAR/STR filing with validation checks
- Audit trail of all decisions and overrides

### FR-008: Executive Fraud Dashboard
- Real-time fraud loss metrics and trends
- Recovery rate tracking and forecasting
- Control effectiveness scorecards

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Detection Latency | < 500ms |
| False Positive Rate | < 2% |
| Case Retention | 10 years |
| System Uptime | 99.9% |
| Audit Trail Completeness | 100% |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
