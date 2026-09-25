# Data Dictionary — KYC / AML Compliance

## kyc_records.csv

| Field | Type | Description |
|-------|------|-------------|
| kyc_id | VARCHAR | Unique KYC record identifier |
| customer_id | VARCHAR | Customer reference |
| risk_rating | VARCHAR | Low, Medium, High |
| verification_date | DATE | Last verification |
| next_review_date | DATE | Scheduled refresh |
| screening_status | VARCHAR | Cleared, Flagged, Under Review |
| alert_count | INT | Number of alerts |
| sar_filed | VARCHAR | Yes/No |
| pep_flag | VARCHAR | Yes/No |
| sanctions_flag | VARCHAR | Yes/No |

## suspicious_activity.csv

| Field | Type | Description |
|-------|------|-------------|
| sar_id | VARCHAR | Unique SAR identifier |
| customer_id | VARCHAR | Customer reference |
| alert_date | DATE | Alert generation date |
| activity_type | VARCHAR | Type of suspicious activity |
| amount_inr | DECIMAL | Transaction amount |
| investigation_status | VARCHAR | Open, Closed, Escalated |
| resolution | VARCHAR | Outcome description |
| filing_date | DATE | SAR filing date |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
