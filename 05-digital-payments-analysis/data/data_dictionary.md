# Digital Payments Process Analysis — Data Dictionary

## customers.csv

| Field | Type | Description |
|-------|------|-------------|
| customer_id | string | Unique customer identifier (e.g., DPC001) |
| customer_name | string | Customer full name |
| email | string | Registered email |
| phone | string | Mobile number |
| preferred_payment_method | string | UPI / Wallet / Card / NetBanking |
| kyc_status | enum | verified / pending |
| registered_date | date | Account registration date |
| total_payments_count | integer | Lifetime payment count |
| total_payments_value | decimal | Lifetime payment value in INR |
| lifetime_value_segment | enum | low / medium / high |

## merchants.csv

| Field | Type | Description |
|-------|------|-------------|
| merchant_id | string | Unique merchant identifier (e.g., DPM001) |
| merchant_name | string | Merchant business name |
| merchant_category | string | E-commerce / Food Delivery / Grocery / Travel / Retail / Healthcare / Entertainment / Fashion / Transport |
| settlement_type | string | T+0 or T+1 or T+2 |
| settlement_cycle | integer | Days to settle (0, 1, 2) |
| avg_daily_volume | integer | Average daily transaction count |
| avg_daily_value | decimal | Average daily transaction value |
| chargeback_rate | decimal | Chargeback percentage |
| merchant_status | enum | active / under_review / suspended |

## payments.csv

| Field | Type | Description |
|-------|------|-------------|
| payment_id | string | Unique payment identifier |
| customer_id | string | Foreign key to customer |
| merchant_id | string | Foreign key to merchant |
| payment_date | date | Payment date |
| payment_time | time | Payment time |
| payment_method | string | UPI / Wallet / Card / NetBanking |
| upi_vpa | string | UPI Virtual Payment Address (null for non-UPI) |
| amount | decimal | Transaction amount in INR |
| status | enum | success / failed |
| auth_code | string | Authorization code (null if failed) |
| settlement_status | enum | settled / pending |
| settlement_date | date | Settlement date (null if pending) |
| failure_reason | string | Reason for failure (null if success) |

## payment_failures.csv

| Field | Type | Description |
|-------|------|-------------|
| failure_id | string | Unique failure record identifier |
| payment_id | string | Foreign key to payment |
| customer_id | string | Foreign key to customer |
| payment_method | string | Payment method used |
| failure_reason | string | Detailed failure reason |
| failure_timestamp | datetime | Exact failure timestamp |
| resolved | boolean | Whether issue was resolved |
| retry_count | integer | Number of retry attempts |

---

*All data is synthetic and self-created for portfolio demonstration.*
