# Banking Complaint Management — Functional Requirements

## 1. Omnichannel Complaint Intake

### FR-001: Multi-Channel Complaint Registration
- Customer can raise complaints via branch, phone, mobile app, email, and social media
- Unified ticket number generated regardless of channel
- Auto-capture of customer details from existing profile

### FR-002: Intelligent Complaint Categorization
- NLP engine auto-classifies complaints into 25+ categories
- Confidence score displayed for manual override
- Sub-category suggestion based on description keywords

## 2. SLA Management

### FR-003: Dynamic SLA Assignment
- SLA automatically assigned based on category and priority
- Critical complaints: 2 days | High: 5 days | Medium: 7 days | Low: 10 days
- Auto-escalation to supervisor at 80% of SLA elapsed

### FR-004: Real-Time SLA Dashboard
- Operations team views live SLA compliance by category
- Breach alerts sent to managers and compliance team
- Historical SLA performance trends

## 3. Resolution Management

### FR-005: Knowledge-Based Resolution Suggestions
- AI suggests resolution based on similar past complaints
- One-click application of standard resolution templates
- Approval workflow for compensation/refund > ₹10,000

### FR-006: Customer Communication Automation
- Auto-SMS/email at intake, investigation start, and resolution
- Customer self-service portal to track complaint status
- Proactive notification if SLA at risk

## 4. Analytics & Reporting

### FR-007: Root Cause Analysis Dashboard
- Automated categorization of root causes
- Trend analysis by product, branch, and time period
- Predictive alerts for emerging complaint patterns

### FR-008: Customer Satisfaction Tracking
- Post-resolution NPS survey sent automatically
- Satisfaction correlated with resolver and resolution type
- Feedback triggers re-open if rating < 3

## 5. Regulatory Compliance

### FR-009: RBI Ombudsman Integration
- Auto-escalate to Ombudsman if not resolved in 30 days
- Maintain all communication history for regulatory review
- Generate compliance reports for RBI inspections

### FR-010: Complaint Closure Validation
- Mandatory fields before closure: root cause, resolution type, customer confirmation
- Quality check random sampling by QA team
- Audit trail of all status changes

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Intake Response Time | < 3 seconds |
| NLP Accuracy | > 85% |
| Dashboard Refresh | Every 60 seconds |
| Data Retention | 7 years |
| Uptime | 99.5% |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
