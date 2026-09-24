# Retail Analytics — Data Dictionary

## Dataset Overview
This dataset contains synthetic retail data for 20 customers, 25 transactions, 25 products, and 6 marketing campaigns. It is designed for customer segmentation (RFM analysis), sales analytics, churn prediction, and campaign effectiveness studies.

## customers.csv

| Field | Type | Description |
|-------|------|-------------|
| customer_id | VARCHAR(20) | Unique customer identifier (CUST-XXXX) |
| customer_name | VARCHAR(100) | Full name of the customer |
| email | VARCHAR(255) | Contact email |
| phone | VARCHAR(20) | Mobile number (masked/sample) |
| gender | VARCHAR(10) | Male/Female |
| city | VARCHAR(50) | City of residence |
| state | VARCHAR(50) | State of residence |
| registration_date | DATE | Date when customer registered |
| customer_segment | VARCHAR(50) | RFM-based segment (Champions, Loyal, At Risk, etc.) |
| rfm_score | INT | Composite RFM score (1-5 for each dimension, concatenated) |
| recency_days | INT | Days since last purchase |
| frequency | INT | Total number of transactions |
| monetary_total | DECIMAL | Total spend in INR |
| avg_order_value | DECIMAL | Average order value in INR |
| churn_risk_score | VARCHAR(10) | Low/Medium/High risk |
| lifetime_value | DECIMAL | Predicted CLV in INR |
| campaign_responsiveness | VARCHAR(20) | High/Medium/Low responsiveness |

### Customer Segments

| Segment | Description | Count |
|---------|-------------|-------|
| Champions | Best customers — high recency, frequency, monetary | 3 |
| Loyal Customers | Regular purchasers with good value | 3 |
| Potential Loyalists | Recent customers with growth potential | 3 |
| New Customers | Recently acquired, low frequency | 4 |
| At Risk | Previously good customers showing decline | 3 |
| Hibernating | Long absence, low frequency | 2 |
| Cannot Lose Them | High-value but showing churn signals | 3 |

## transactions.csv

| Field | Type | Description |
|-------|------|-------------|
| transaction_id | VARCHAR(20) | Unique transaction identifier (TXN-YYYY-XXXX) |
| customer_id | VARCHAR(20) | FK to customers |
| transaction_date | DATE | Date of purchase |
| product_category | VARCHAR(50) | High-level category |
| product_name | VARCHAR(200) | Product purchased |
| quantity | INT | Units bought |
| unit_price | DECIMAL | Price per unit in INR |
| total_amount | DECIMAL | Total transaction value |
| payment_method | VARCHAR(20) | UPI/Credit Card/Debit Card/COD |
| channel | VARCHAR(20) | Online/Store |
| discount_applied | DECIMAL | Discount percentage (0-1) |
| campaign_code | VARCHAR(20) | FK to campaigns |

## products.csv

| Field | Type | Description |
|-------|------|-------------|
| product_id | VARCHAR(20) | Unique product identifier |
| product_name | VARCHAR(200) | Product name |
| product_category | VARCHAR(50) | Category (Electronics, Apparel, Home, Beauty) |
| sub_category | VARCHAR(50) | Sub-category |
| brand | VARCHAR(50) | Brand name |
| unit_cost | DECIMAL | Cost to company |
| unit_price | DECIMAL | Selling price |
| profit_margin | DECIMAL | Profit margin (0-1) |
| stock_level | INT | Current stock |
| reorder_point | INT | Minimum stock before reorder |
| supplier_rating | DECIMAL | 1-5 rating |

## campaigns.csv

| Field | Type | Description |
|-------|------|-------------|
| campaign_code | VARCHAR(20) | Unique campaign identifier |
| campaign_name | VARCHAR(200) | Campaign name |
| campaign_type | VARCHAR(50) | Seasonal/Product Launch/Acquisition/etc. |
| start_date | DATE | Campaign start |
| end_date | DATE | Campaign end |
| discount_rate | DECIMAL | Discount offered (0-1) |
| target_segment | VARCHAR(50) | Target customer segment |
| channel | VARCHAR(50) | Marketing channel |
| budget_inr | DECIMAL | Campaign budget |
| expected_revenue | DECIMAL | Forecasted revenue |
| actual_revenue | DECIMAL | Actual revenue generated |
| status | VARCHAR(20) | Completed/In Progress/Planned |

---

*Dictionary Version: 1.0 | Created: September 2026*
