# Credit Card Customer Journey — Data Dictionary

## applications.csv

| Field | Type | Description |
|-------|------|-------------|
| application_id | string | Unique application identifier (e.g., CCAPP001) |
| customer_id | string | Foreign key to customer |
| application_date | date | Date of application submission |
| product_type | string | Rewards Card / Travel Card / Shopping Card |
| annual_income | integer | Annual income in INR |
| employment_type | string | Salaried / Self-Employed / Freelancer / Business Owner |
| credit_score | integer | CIBIL credit score (300-900) |
| requested_limit | integer | Credit limit requested |
| approved_limit | integer | Credit limit approved (0 if rejected) |
| application_status | enum | approved / rejected |
| approval_date | date | Date of approval/rejection |
| card_delivery_date | date | Date card was delivered |
| activation_date | date | Date card was activated |
| rejection_reason | string | Reason for rejection (null if approved) |

## customers.csv

| Field | Type | Description |
|-------|------|-------------|
| customer_id | string | Unique customer identifier |
| customer_name | string | Full name |
| email | string | Email address |
| phone | string | Mobile number |
| date_of_birth | date | Date of birth |
| gender | string | Male / Female |
| annual_income | integer | Annual income in INR |
| employment_type | string | Employment type |
| credit_score | integer | CIBIL score |
| customer_segment | enum | silver / gold / platinum / prospective |
| onboarding_date | date | Relationship start date |
| active_cards_count | integer | Number of active cards |
| total_credit_limit | integer | Total credit limit across cards |
| total_utilized | integer | Total utilized amount |
| last_payment_date | date | Last bill payment date |
| payment_history | enum | excellent / good / poor |

## transactions.csv

| Field | Type | Description |
|-------|------|-------------|
| transaction_id | string | Unique transaction identifier |
| customer_id | string | Foreign key to customer |
| transaction_date | date | Transaction date |
| transaction_time | time | Transaction time |
| merchant_name | string | Merchant name |
| merchant_category | string | Category (Grocery, Travel, E-commerce, etc.) |
| amount | decimal | Transaction amount in INR |
| payment_method | string | Card / UPI / Wallet |
| transaction_type | enum | POS / Online |
| reward_points_earned | integer | Points earned for this transaction |
| emi_converted | enum | yes / no |

## rewards.csv

| Field | Type | Description |
|-------|------|-------------|
| reward_id | string | Unique reward record identifier |
| customer_id | string | Foreign key to customer |
| transaction_id | string | Foreign key to transaction |
| points_earned | integer | Points earned |
| redemption_date | date | Date of redemption (null if not redeemed) |
| redemption_type | enum | cashback / statement_credit / voucher / null |
| redemption_value_inr | decimal | INR value of redemption |
| points_balance | integer | Running points balance |
| expiry_date | date | Points expiry date |

---

*All data is synthetic and self-created for portfolio demonstration.*
