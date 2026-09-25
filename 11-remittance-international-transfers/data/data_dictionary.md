# Data Dictionary — Remittance & International Transfers

## remittances.csv

| Field | Type | Description |
|-------|------|-------------|
| remittance_id | VARCHAR | Unique transfer identifier (REM001–REM025) |
| sender_customer_id | VARCHAR | Sender customer reference |
| beneficiary_name | VARCHAR | Recipient name |
| beneficiary_country | VARCHAR | Destination country |
| send_currency | VARCHAR | INR (always) |
| receive_currency | VARCHAR | USD, GBP, EUR, AED, etc. |
| send_amount | DECIMAL | Amount in INR |
| fx_rate | DECIMAL | Exchange rate applied |
| fees_inr | DECIMAL | Transfer fees in INR |
| total_inr | DECIMAL | Total amount debited |
| status | VARCHAR | Completed, Pending, Failed |
| initiation_date | DATE | Transfer initiation |
| completion_date | DATE | Beneficiary credit date |
| routing_method | VARCHAR | SWIFT_gpi, Correspondent, Internal |
| compliance_status | VARCHAR | Approved, Under_Review, Rejected |

## customers.csv

| Field | Type | Description |
|-------|------|-------------|
| customer_id | VARCHAR | Unique identifier |
| full_name | VARCHAR | Customer name |
| customer_type | VARCHAR | Retail, Business, NRI |
| kyc_status | VARCHAR | Verified, Pending, Expired |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
