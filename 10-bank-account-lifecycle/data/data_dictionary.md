# Data Dictionary — Bank Account Lifecycle

## accounts.csv

| Field | Type | Description |
|-------|------|-------------|
| account_id | VARCHAR | Unique account identifier (ACC001–ACC025) |
| customer_id | VARCHAR | Customer reference |
| account_type | VARCHAR | Savings, Current, Salary, NRI, Fixed Deposit |
| opening_date | DATE | Account opening date |
| activation_date | DATE | First transaction date |
| last_transaction_date | DATE | Most recent transaction |
| status | VARCHAR | Active, Dormant, Closed |
| products_count | INT | Number of products held |
| dormancy_flag | VARCHAR | Yes/No |
| dormancy_days | INT | Days since last transaction |
| monthly_avg_balance | DECIMAL | Average monthly balance (INR) |
| churn_risk_score | VARCHAR | Low, Medium, High |

## customers.csv

| Field | Type | Description |
|-------|------|-------------|
| customer_id | VARCHAR | Unique identifier |
| full_name | VARCHAR | Customer name |
| segment | VARCHAR | Retail, Premium, Corporate |
| acquisition_channel | VARCHAR | Branch, Digital, Referral |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
