-- Forex Card Enhancement Study — PostgreSQL Schema
-- All data is synthetic and self-created for portfolio demonstration

-- Drop tables if they exist
DROP TABLE IF EXISTS forex_transactions CASCADE;
DROP TABLE IF EXISTS forex_cards CASCADE;
DROP TABLE IF EXISTS fx_rates CASCADE;
DROP TABLE IF EXISTS forex_customers CASCADE;

-- Customers table
CREATE TABLE forex_customers (
    customer_id VARCHAR(10) PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    date_of_birth DATE NOT NULL,
    pan_number VARCHAR(10) UNIQUE NOT NULL,
    passport_number VARCHAR(10) UNIQUE NOT NULL,
    lrs_limit_usd INTEGER DEFAULT 250000,
    lrs_used_usd INTEGER DEFAULT 0,
    kyc_status VARCHAR(20) CHECK (kyc_status IN ('verified', 'pending')),
    onboarding_date DATE NOT NULL
);

-- FX Rates table
CREATE TABLE fx_rates (
    currency_code VARCHAR(3) PRIMARY KEY,
    currency_name VARCHAR(50) NOT NULL,
    buy_rate_inr DECIMAL(10,4) NOT NULL,
    sell_rate_inr DECIMAL(10,4) NOT NULL,
    last_updated DATE NOT NULL,
    markup_percent DECIMAL(5,2) NOT NULL
);

-- Forex Cards table
CREATE TABLE forex_cards (
    card_id VARCHAR(10) PRIMARY KEY,
    customer_id VARCHAR(10) REFERENCES forex_customers(customer_id),
    card_number VARCHAR(20) NOT NULL,
    issue_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    status VARCHAR(20) CHECK (status IN ('active', 'blocked', 'pending_activation', 'expired')),
    total_loaded_inr DECIMAL(12,2) DEFAULT 0,
    total_spent_inr DECIMAL(12,2) DEFAULT 0,
    current_balance_inr DECIMAL(12,2) DEFAULT 0,
    currency_wallet_count INTEGER DEFAULT 1,
    primary_currency VARCHAR(3),
    last_transaction_date DATE,
    block_reason VARCHAR(100)
);

-- Forex Transactions table
CREATE TABLE forex_transactions (
    transaction_id VARCHAR(10) PRIMARY KEY,
    card_id VARCHAR(10) REFERENCES forex_cards(card_id),
    customer_id VARCHAR(10) REFERENCES forex_customers(customer_id),
    transaction_date DATE NOT NULL,
    transaction_time TIME NOT NULL,
    merchant_name VARCHAR(100) NOT NULL,
    merchant_country VARCHAR(50) NOT NULL,
    transaction_currency VARCHAR(3) NOT NULL,
    transaction_amount DECIMAL(12,2) NOT NULL,
    local_currency_amount DECIMAL(12,2) NOT NULL,
    exchange_rate DECIMAL(10,4) NOT NULL,
    transaction_type VARCHAR(10) CHECK (transaction_type IN ('POS', 'ATM', 'ecom')),
    channel VARCHAR(10) CHECK (channel IN ('Card', 'Online')),
    status VARCHAR(10) CHECK (status IN ('approved', 'declined'))
);

-- ============================================
-- ANALYTICAL VIEWS
-- ============================================

-- View: Customer LRS utilization
CREATE OR REPLACE VIEW v_customer_lrs_utilization AS
SELECT
    c.customer_id,
    c.customer_name,
    c.lrs_limit_usd,
    c.lrs_used_usd,
    ROUND((c.lrs_used_usd::NUMERIC / c.lrs_limit_usd) * 100, 2) AS utilization_percent,
    c.lrs_limit_usd - c.lrs_used_usd AS remaining_limit_usd,
    c.kyc_status
FROM forex_customers c;

-- View: Card activity summary
CREATE OR REPLACE VIEW v_card_activity_summary AS
SELECT
    fc.card_id,
    fc.customer_id,
    fc.status,
    fc.total_loaded_inr,
    fc.total_spent_inr,
    fc.current_balance_inr,
    ROUND((fc.total_spent_inr / NULLIF(fc.total_loaded_inr, 0)) * 100, 2) AS spend_rate_percent,
    fc.currency_wallet_count,
    fc.primary_currency,
    fc.block_reason
FROM forex_cards fc;

-- View: Transaction volume by currency and country
CREATE OR REPLACE VIEW v_transaction_volume_by_currency AS
SELECT
    transaction_currency,
    merchant_country,
    COUNT(*) AS transaction_count,
    SUM(transaction_amount) AS total_amount_foreign,
    SUM(local_currency_amount) AS total_amount_inr,
    ROUND(AVG(exchange_rate), 4) AS avg_exchange_rate
FROM forex_transactions
GROUP BY transaction_currency, merchant_country;

-- View: Monthly transaction trends
CREATE OR REPLACE VIEW v_monthly_transaction_trends AS
SELECT
    DATE_TRUNC('month', transaction_date)::DATE AS month,
    COUNT(*) AS transaction_count,
    SUM(local_currency_amount) AS total_inr_volume,
    COUNT(DISTINCT customer_id) AS active_customers,
    COUNT(DISTINCT merchant_country) AS countries_visited
FROM forex_transactions
GROUP BY DATE_TRUNC('month', transaction_date)
ORDER BY month;

-- View: ATM vs POS vs ecom split
CREATE OR REPLACE VIEW v_channel_transaction_split AS
SELECT
    transaction_type,
    channel,
    COUNT(*) AS transaction_count,
    SUM(local_currency_amount) AS total_inr_volume,
    ROUND(AVG(local_currency_amount), 2) AS avg_transaction_inr
FROM forex_transactions
GROUP BY transaction_type, channel;

-- View: High value transactions (above 50,000 INR)
CREATE OR REPLACE VIEW v_high_value_transactions AS
SELECT
    t.*,
    c.customer_name
FROM forex_transactions t
JOIN forex_customers c ON t.customer_id = c.customer_id
WHERE t.local_currency_amount > 50000
ORDER BY t.local_currency_amount DESC;
