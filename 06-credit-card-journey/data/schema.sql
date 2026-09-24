-- Credit Card Customer Journey — PostgreSQL Schema
-- All data is synthetic and self-created for portfolio demonstration

DROP TABLE IF EXISTS rewards CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;
DROP TABLE IF EXISTS applications CASCADE;
DROP TABLE IF EXISTS customers CASCADE;

-- Customers table
CREATE TABLE customers (
    customer_id VARCHAR(10) PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10) CHECK (gender IN ('Male', 'Female')),
    annual_income INTEGER NOT NULL,
    employment_type VARCHAR(50) NOT NULL,
    credit_score INTEGER CHECK (credit_score BETWEEN 300 AND 900),
    customer_segment VARCHAR(20) CHECK (customer_segment IN ('silver', 'gold', 'platinum', 'prospective')),
    onboarding_date DATE NOT NULL,
    active_cards_count INTEGER DEFAULT 0,
    total_credit_limit INTEGER DEFAULT 0,
    total_utilized INTEGER DEFAULT 0,
    last_payment_date DATE,
    payment_history VARCHAR(20) CHECK (payment_history IN ('excellent', 'good', 'poor'))
);

-- Applications table
CREATE TABLE applications (
    application_id VARCHAR(10) PRIMARY KEY,
    customer_id VARCHAR(10) REFERENCES customers(customer_id),
    application_date DATE NOT NULL,
    product_type VARCHAR(50) CHECK (product_type IN ('Rewards Card', 'Travel Card', 'Shopping Card')),
    annual_income INTEGER NOT NULL,
    employment_type VARCHAR(50) NOT NULL,
    credit_score INTEGER NOT NULL,
    requested_limit INTEGER NOT NULL,
    approved_limit INTEGER DEFAULT 0,
    application_status VARCHAR(20) CHECK (application_status IN ('approved', 'rejected')),
    approval_date DATE,
    card_delivery_date DATE,
    activation_date DATE,
    rejection_reason VARCHAR(100)
);

-- Transactions table
CREATE TABLE transactions (
    transaction_id VARCHAR(10) PRIMARY KEY,
    customer_id VARCHAR(10) REFERENCES customers(customer_id),
    transaction_date DATE NOT NULL,
    transaction_time TIME NOT NULL,
    merchant_name VARCHAR(100) NOT NULL,
    merchant_category VARCHAR(50) NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    payment_method VARCHAR(20),
    transaction_type VARCHAR(20) CHECK (transaction_type IN ('POS', 'Online')),
    reward_points_earned INTEGER DEFAULT 0,
    emi_converted VARCHAR(10) CHECK (emi_converted IN ('yes', 'no'))
);

-- Rewards table
CREATE TABLE rewards (
    reward_id VARCHAR(10) PRIMARY KEY,
    customer_id VARCHAR(10) REFERENCES customers(customer_id),
    transaction_id VARCHAR(10) REFERENCES transactions(transaction_id),
    points_earned INTEGER NOT NULL,
    redemption_date DATE,
    redemption_type VARCHAR(50) CHECK (redemption_type IN ('cashback', 'statement_credit', 'voucher')),
    redemption_value_inr DECIMAL(12,2) DEFAULT 0,
    points_balance INTEGER NOT NULL,
    expiry_date DATE NOT NULL
);

-- ============================================
-- ANALYTICAL VIEWS
-- ============================================

-- View: Application funnel
CREATE OR REPLACE VIEW v_application_funnel AS
SELECT
    COUNT(*) AS total_applications,
    SUM(CASE WHEN application_status = 'approved' THEN 1 ELSE 0 END) AS approved_count,
    SUM(CASE WHEN application_status = 'rejected' THEN 1 ELSE 0 END) AS rejected_count,
    SUM(CASE WHEN activation_date IS NOT NULL THEN 1 ELSE 0 END) AS activated_count,
    ROUND((SUM(CASE WHEN application_status = 'approved' THEN 1 ELSE 0 END)::NUMERIC / COUNT(*)) * 100, 2) AS approval_rate_percent,
    ROUND((SUM(CASE WHEN activation_date IS NOT NULL THEN 1 ELSE 0 END)::NUMERIC / NULLIF(SUM(CASE WHEN application_status = 'approved' THEN 1 ELSE 0 END), 0)) * 100, 2) AS activation_rate_percent
FROM applications;

-- View: Customer segment distribution
CREATE OR REPLACE VIEW v_customer_segments AS
SELECT
    customer_segment,
    COUNT(*) AS customer_count,
    AVG(total_credit_limit) AS avg_credit_limit,
    AVG(total_utilized) AS avg_utilized,
    ROUND((AVG(total_utilized::NUMERIC) / NULLIF(AVG(total_credit_limit), 0)) * 100, 2) AS avg_utilization_percent
FROM customers
GROUP BY customer_segment;

-- View: Spend by merchant category
CREATE OR REPLACE VIEW v_spend_by_category AS
SELECT
    merchant_category,
    COUNT(*) AS transaction_count,
    SUM(amount) AS total_spend,
    ROUND(AVG(amount), 2) AS avg_transaction_value,
    SUM(reward_points_earned) AS total_points_earned
FROM transactions
GROUP BY merchant_category
ORDER BY total_spend DESC;

-- View: Monthly spend trend
CREATE OR REPLACE VIEW v_monthly_spend_trend AS
SELECT
    DATE_TRUNC('month', transaction_date)::DATE AS month,
    COUNT(*) AS transaction_count,
    SUM(amount) AS total_spend,
    COUNT(DISTINCT customer_id) AS active_customers
FROM transactions
GROUP BY DATE_TRUNC('month', transaction_date)
ORDER BY month;

-- View: Rewards utilization
CREATE OR REPLACE VIEW v_rewards_utilization AS
SELECT
    c.customer_id,
    c.customer_name,
    c.customer_segment,
    SUM(r.points_earned) AS total_points_earned,
    SUM(CASE WHEN r.redemption_date IS NOT NULL THEN r.points_earned ELSE 0 END) AS points_redeemed,
    SUM(r.redemption_value_inr) AS total_redemption_value,
    MAX(r.points_balance) AS current_points_balance
FROM customers c
LEFT JOIN rewards r ON c.customer_id = r.customer_id
GROUP BY c.customer_id, c.customer_name, c.customer_segment;

-- View: High-value customers
CREATE OR REPLACE VIEW v_high_value_customers AS
SELECT
    c.customer_id,
    c.customer_name,
    c.customer_segment,
    c.credit_score,
    COUNT(t.transaction_id) AS transaction_count,
    SUM(t.amount) AS total_spend,
    AVG(t.amount) AS avg_transaction_value
FROM customers c
JOIN transactions t ON c.customer_id = t.customer_id
GROUP BY c.customer_id, c.customer_name, c.customer_segment, c.credit_score
HAVING SUM(t.amount) > 20000
ORDER BY total_spend DESC;
