# Fraud Detection — Data Dictionary

## Dataset Overview
This synthetic dataset is designed for learning fraud detection concepts in BFSI. It contains 25 transactions, 7 alerts, and represents realistic patterns for anomaly detection study.

## transactions.csv

| Field | Type | Description |
|-------|------|-------------|
| transaction_id | VARCHAR(20) | Unique transaction identifier |
| customer_id | VARCHAR(20) | FK to customer (synthetic) |
| transaction_date | DATE | Date of transaction |
| transaction_time | TIME | Time of transaction |
| channel | VARCHAR(20) | Mobile App / Net Banking / POS / ATM |
| transaction_type | VARCHAR(50) | UPI / IMPS / NEFT / RTGS / Card / Cash |
| amount_inr | DECIMAL | Transaction amount in INR |
| merchant_category | VARCHAR(50) | Merchant category |
| merchant_name | VARCHAR(100) | Merchant name |
| payment_method | VARCHAR(20) | UPI / Debit Card / Credit Card / IMPS / NEFT / RTGS |
| device_type | VARCHAR(20) | Mobile / Laptop / POS / ATM |
| location_city | VARCHAR(50) | Transaction city |
| location_country | VARCHAR(50) | Transaction country |
| ip_address | VARCHAR(50) | IP address (synthetic) |
| is_international | VARCHAR(3) | Yes/No |
| is_recurring | VARCHAR(3) | Yes/No |
| risk_score | VARCHAR(10) | Low / Medium / High |
| alert_triggered | VARCHAR(3) | Yes/No |
| alert_reason | TEXT | Combined risk flags |
| actual_fraud_flag | INT | 0 = Genuine, 1 = Fraud (ground truth for learning) |

## alerts.csv

| Field | Type | Description |
|-------|------|-------------|
| alert_id | VARCHAR(20) | Unique alert identifier |
| transaction_id | VARCHAR(20) | FK to triggering transaction |
| customer_id | VARCHAR(20) | FK to customer |
| alert_date | DATE | Alert generation date |
| alert_time | TIME | Alert generation time |
| severity | VARCHAR(10) | Low / Medium / High |
| alert_type | VARCHAR(50) | Classification of alert |
| alert_reason | TEXT | Detailed reason |
| investigation_status | VARCHAR(20) | Open / In Progress / Resolved |
| assigned_to | VARCHAR(100) | Investigator name |
| investigation_notes | TEXT | Notes |
| resolved_date | DATE | Resolution date |
| resolution_outcome | VARCHAR(50) | Fraud Confirmed / False Positive / Genuine |

## Risk Indicators Used

| Indicator | Description |
|-----------|-------------|
| International | Transaction outside India |
| High Amount | Above ₹50,000 threshold |
| Off Hours | Transaction between 12 AM — 6 AM |
| Velocity | Multiple high-value international transactions within 7 days |

---

*Version: 1.0 | Created: September 2026*
