# Data Dictionary — Open Banking & API

## api_catalog.csv

| Field | Type | Description |
|-------|------|-------------|
| api_id | VARCHAR | Unique API identifier |
| api_name | VARCHAR | API name |
| endpoint | VARCHAR | API URL path |
| method | VARCHAR | GET, POST, PUT, DELETE |
| category | VARCHAR | Accounts, Payments, KYC, etc. |
| avg_latency_ms | INT | Average response time |
| call_volume_monthly | INT | Monthly API calls |
| partner_count | INT | Integrating partners |
| status | VARCHAR | Active, Deprecated, Planned |

## consent_records.csv

| Field | Type | Description |
|-------|------|-------------|
| consent_id | VARCHAR | Unique consent record |
| customer_id | VARCHAR | Customer reference |
| partner_name | VARCHAR | Fintech partner |
| data_scope | VARCHAR | Shared data fields |
| consent_date | DATE | Grant date |
| expiry_date | DATE | Consent expiry |
| status | VARCHAR | Active, Revoked, Expired |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
