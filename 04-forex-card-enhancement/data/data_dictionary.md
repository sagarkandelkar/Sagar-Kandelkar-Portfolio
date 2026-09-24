# Forex Card Enhancement Study — Data Dictionary

## forex_customers.csv

| Field | Type | Description |
|-------|------|-------------|
| customer_id | string | Unique customer identifier (e.g., FXC001) |
| customer_name | string | Customer full name |
| email | string | Registered email address |
| phone | string | Mobile number |
| date_of_birth | date | Date of birth (YYYY-MM-DD) |
| pan_number | string | Permanent Account Number |
| passport_number | string | Passport number |
| lrs_limit_usd | integer | Liberalised Remittance Scheme annual limit in USD (default ₹250,000) |
| lrs_used_usd | integer | Amount already utilized under LRS in USD |
| kyc_status | enum | verified / pending |
| onboarding_date | date | Account onboarding date |

## forex_cards.csv

| Field | Type | Description |
|-------|------|-------------|
| card_id | string | Unique card identifier (e.g., FC001) |
| customer_id | string | Foreign key to customer |
| card_number | string | Masked card number |
| issue_date | date | Card issue date |
| expiry_date | date | Card expiry date |
| status | enum | active / blocked / pending_activation / expired |
| total_loaded_inr | decimal | Total INR loaded onto the card |
| total_spent_inr | decimal | Total INR spent via the card |
| current_balance_inr | decimal | Remaining balance in INR |
| currency_wallet_count | integer | Number of active currency wallets |
| primary_currency | string | Primary spending currency |
| last_transaction_date | date | Date of last transaction |
| block_reason | string | Reason for block (null if active) |

## forex_transactions.csv

| Field | Type | Description |
|-------|------|-------------|
| transaction_id | string | Unique transaction identifier |
| card_id | string | Foreign key to card |
| customer_id | string | Foreign key to customer |
| transaction_date | date | Transaction date |
| transaction_time | time | Transaction time |
| merchant_name | string | Merchant or ATM location |
| merchant_country | string | Country where transaction occurred |
| transaction_currency | string | Currency of transaction (USD, GBP, EUR, etc.) |
| transaction_amount | decimal | Amount in transaction currency |
| local_currency_amount | decimal | Equivalent amount in INR |
| exchange_rate | decimal | Applied exchange rate |
| transaction_type | enum | POS / ATM / ecom |
| channel | enum | Card / Online |
| status | enum | approved / declined |

## fx_rates.csv

| Field | Type | Description |
|-------|------|-------------|
| currency_code | string | ISO currency code |
| currency_name | string | Full currency name |
| buy_rate_inr | decimal | Bank's buy rate (INR per unit) |
| sell_rate_inr | decimal | Bank's sell rate (INR per unit) |
| last_updated | date | Rate last updated date |
| markup_percent | decimal | Markup percentage over interbank rate |

---

*All data is synthetic and self-created for portfolio demonstration.*
