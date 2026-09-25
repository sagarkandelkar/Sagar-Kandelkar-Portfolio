# Data Dictionary — Banking Complaint Management

## complaints.csv

| Field | Type | Description |
|-------|------|-------------|
| complaint_id | VARCHAR | Unique complaint identifier (COMP001–COMP020) |
| customer_id | VARCHAR | Customer reference (CUST001–CUST020) |
| category | VARCHAR | Complaint category: Account Issue, Card Issue, Loan Issue, Digital Banking, Forex |
| sub_category | VARCHAR | Detailed complaint type |
| channel | VARCHAR | Intake channel: Branch, Phone, App, Email, Social |
| date_logged | DATE | Date complaint was registered |
| priority | VARCHAR | Low, Medium, High, Critical |
| status | VARCHAR | Resolved, Pending, Under Investigation |
| assigned_to | VARCHAR | Case officer assigned |
| sla_days | INT | SLA target in days |
| date_resolved | DATE | Resolution date (null if pending) |
| resolution_type | VARCHAR | Refund, Investigation, Technical Fix, Waiver, Replacement, etc. |
| customer_rating | INT | Post-resolution satisfaction (1–5) |
| repeat_complaint | VARCHAR | Yes/No |

## customers.csv

| Field | Type | Description |
|-------|------|-------------|
| customer_id | VARCHAR | Unique customer identifier |
| full_name | VARCHAR | Customer name |
| account_type | VARCHAR | Savings, Current, Salary, NRI |
| relationship_tenure_years | INT | Years with bank |
| total_products | INT | Count of bank products held |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
