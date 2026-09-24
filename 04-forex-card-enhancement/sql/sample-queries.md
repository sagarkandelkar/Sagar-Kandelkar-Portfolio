# SQL Query Examples — Forex Card Analytics

> **Project:** Forex Card Enhancement
> **Type:** Portfolio Sample Queries — Synthetic Data
> **Analyst:** Sagar Kandelkar

---

## Query 1: Top 5 Customers by LRS Utilization

**Business Question:** Which customers are closest to their LRS limit? We need to proactively reach out before they hit the ceiling.

```sql
SELECT
    c.customer_id,
    c.full_name,
    c.annual_lrs_limit_usd,
    COALESCE(SUM(t.inr_equivalent) / 82.5, 0) AS utilized_usd,
    ROUND(
        (COALESCE(SUM(t.inr_equivalent) / 82.5, 0) / c.annual_lrs_limit_usd) * 100,
        2
    ) AS utilization_pct
FROM forex_customers c
LEFT JOIN forex_transactions t ON c.customer_id = t.customer_id
GROUP BY c.customer_id, c.full_name, c.annual_lrs_limit_usd
ORDER BY utilization_pct DESC
LIMIT 5;
```

**Expected Output:**
| customer_id | full_name | annual_lrs_limit_usd | utilized_usd | utilization_pct |
|------------|-----------|---------------------|-------------|-----------------|

---

## Query 2: Monthly FX Volume by Currency

**Business Question:** What's our monthly FX loading trend by currency? This helps treasury manage currency positions.

```sql
SELECT
    DATE_TRUNC('month', t.txn_date) AS month,
    t.currency_code,
    COUNT(*) AS txn_count,
    SUM(t.inr_equivalent) AS total_inr_volume,
    ROUND(AVG(t.inr_equivalent), 2) AS avg_txn_value
FROM forex_transactions t
WHERE t.txn_type = 'LOAD'
GROUP BY DATE_TRUNC('month', t.txn_date), t.currency_code
ORDER BY month DESC, total_inr_volume DESC;
```

---

## Query 3: Card Status Health Check

**Business Question:** How many active vs blocked vs expired cards do we have? Are blocked cards being reactivated?

```sql
SELECT
    c.card_status,
    COUNT(*) AS card_count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) AS pct_of_total,
    SUM(c.inr_balance) AS total_inr_locked
FROM forex_cards c
GROUP BY c.card_status
ORDER BY card_count DESC;
```

---

## Query 4: Customer Spend Pattern (POS vs ATM vs E-commerce)

**Business Question:** How do customers use their cards? This informs our merchant partnership strategy.

```sql
SELECT
    t.txn_channel,
    COUNT(*) AS txn_count,
    SUM(t.inr_equivalent) AS total_inr,
    ROUND(AVG(t.inr_equivalent), 2) AS avg_txn,
    COUNT(DISTINCT t.customer_id) AS unique_customers
FROM forex_transactions t
WHERE t.txn_type = 'SPEND'
GROUP BY t.txn_channel
ORDER BY total_inr DESC;
```

---

## Query 5: High-Risk Alert — Unusual Country Transactions

**Business Question:** Flag transactions in countries where the customer has never spent before. Potential fraud indicator.

```sql
WITH customer_countries AS (
    SELECT DISTINCT
        customer_id,
        merchant_country
    FROM forex_transactions
    WHERE txn_type = 'SPEND'
),
first_time_country AS (
    SELECT
        t.customer_id,
        t.merchant_country,
        t.txn_date,
        t.inr_equivalent,
        ROW_NUMBER() OVER (
            PARTITION BY t.customer_id, t.merchant_country
            ORDER BY t.txn_date
        ) AS country_visit_rank
    FROM forex_transactions t
    WHERE t.txn_type = 'SPEND'
)
SELECT
    customer_id,
    merchant_country,
    txn_date,
    inr_equivalent,
    'FIRST_TIME_COUNTRY_ALERT' AS alert_type
FROM first_time_country
WHERE country_visit_rank = 1
    AND txn_date >= CURRENT_DATE - INTERVAL '7 days'
ORDER BY txn_date DESC;
```

---

## Query 6: Unused Balance Repatriation Candidates

**Business Question:** Which customers have cards expiring in 60 days with significant unused balances? Proactive outreach needed.

```sql
SELECT
    c.customer_id,
    c.full_name,
    card.card_id,
    card.expiry_date,
    card.inr_balance,
    card.card_status,
    CASE
        WHEN card.expiry_date <= CURRENT_DATE + INTERVAL '60 days'
            AND card.inr_balance > 5000
        THEN 'HIGH PRIORITY'
        WHEN card.expiry_date <= CURRENT_DATE + INTERVAL '90 days'
            AND card.inr_balance > 0
        THEN 'MEDIUM PRIORITY'
        ELSE 'LOW PRIORITY'
    END AS outreach_priority
FROM forex_customers c
JOIN forex_cards card ON c.customer_id = card.customer_id
WHERE card.expiry_date <= CURRENT_DATE + INTERVAL '90 days'
    AND card.card_status IN ('ACTIVE', 'PENDING_ACTIVATION')
ORDER BY outreach_priority, card.inr_balance DESC;
```

---

## Query 7: Exchange Rate Margin Analysis

**Business Question:** What's our FX margin by currency pair? Are we competitive vs market rates?

```sql
SELECT
    f.currency_pair,
    f.rate_date,
    f.buy_rate,
    f.sell_rate,
    ROUND(f.sell_rate - f.buy_rate, 4) AS margin,
    ROUND(((f.sell_rate - f.buy_rate) / f.buy_rate) * 100, 2) AS margin_pct,
    CASE
        WHEN ((f.sell_rate - f.buy_rate) / f.buy_rate) * 100 > 3
        THEN 'REVIEW PRICING'
        ELSE 'COMPETITIVE'
    END AS pricing_status
FROM fx_rates f
WHERE f.rate_date = CURRENT_DATE
ORDER BY margin_pct DESC;
```

---

## Query 8: Customer 360° View

**Business Question:** Give me a complete picture of one customer — their profile, cards, transactions, and LRS status.

```sql
SELECT
    c.customer_id,
    c.full_name,
    c.passport_number,
    c.pan_number,
    c.annual_lrs_limit_usd,
    card.card_id,
    card.card_status,
    card.inr_balance,
    card.expiry_date,
    COUNT(DISTINCT t.txn_id) AS total_txns,
    SUM(CASE WHEN t.txn_type = 'LOAD' THEN t.inr_equivalent ELSE 0 END) AS total_loaded_inr,
    SUM(CASE WHEN t.txn_type = 'SPEND' THEN t.inr_equivalent ELSE 0 END) AS total_spent_inr,
    SUM(CASE WHEN t.txn_type = 'REFUND' THEN t.inr_equivalent ELSE 0 END) AS total_refunded_inr
FROM forex_customers c
LEFT JOIN forex_cards card ON c.customer_id = card.customer_id
LEFT JOIN forex_transactions t ON c.customer_id = t.customer_id
WHERE c.customer_id = 'CUST001'  -- Replace with parameter
GROUP BY c.customer_id, c.full_name, c.passport_number, c.pan_number,
         c.annual_lrs_limit_usd, card.card_id, card.card_status,
         card.inr_balance, card.expiry_date;
```

---

*Portfolio Sample — Synthetic Data | Analyst: Sagar Kandelkar*
