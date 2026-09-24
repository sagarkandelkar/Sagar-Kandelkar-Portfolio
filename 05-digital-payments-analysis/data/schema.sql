-- Digital Payments Process Analysis — PostgreSQL Schema
-- All data is synthetic and self-created for portfolio demonstration

DROP TABLE IF EXISTS payment_failures CASCADE;
DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS merchants CASCADE;
DROP TABLE IF EXISTS customers CASCADE;

-- Customers table
CREATE TABLE customers (
    customer_id VARCHAR(10) PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    preferred_payment_method VARCHAR(20) CHECK (preferred_payment_method IN ('UPI', 'Wallet', 'Card', 'NetBanking')),
    kyc_status VARCHAR(20) CHECK (kyc_status IN ('verified', 'pending')),
    registered_date DATE NOT NULL,
    total_payments_count INTEGER DEFAULT 0,
    total_payments_value DECIMAL(12,2) DEFAULT 0,
    lifetime_value_segment VARCHAR(10) CHECK (lifetime_value_segment IN ('low', 'medium', 'high'))
);

-- Merchants table
CREATE TABLE merchants (
    merchant_id VARCHAR(10) PRIMARY KEY,
    merchant_name VARCHAR(100) NOT NULL,
    merchant_category VARCHAR(50) NOT NULL,
    settlement_type VARCHAR(10) CHECK (settlement_type IN ('T+0', 'T+1', 'T+2')),
    settlement_cycle INTEGER CHECK (settlement_cycle IN (0, 1, 2)),
    avg_daily_volume INTEGER NOT NULL,
    avg_daily_value DECIMAL(12,2) NOT NULL,
    chargeback_rate DECIMAL(5,2) NOT NULL,
    merchant_status VARCHAR(20) CHECK (merchant_status IN ('active', 'under_review', 'suspended'))
);

-- Payments table
CREATE TABLE payments (
    payment_id VARCHAR(10) PRIMARY KEY,
    customer_id VARCHAR(10) REFERENCES customers(customer_id),
    merchant_id VARCHAR(10) REFERENCES merchants(merchant_id),
    payment_date DATE NOT NULL,
    payment_time TIME NOT NULL,
    payment_method VARCHAR(20) CHECK (payment_method IN ('UPI', 'Wallet', 'Card', 'NetBanking')),
    upi_vpa VARCHAR(50),
    amount DECIMAL(12,2) NOT NULL,
    status VARCHAR(10) CHECK (status IN ('success', 'failed')),
    auth_code VARCHAR(20),
    settlement_status VARCHAR(20) CHECK (settlement_status IN ('settled', 'pending')),
    settlement_date DATE,
    failure_reason VARCHAR(100)
);

-- Payment Failures table
CREATE TABLE payment_failures (
    failure_id VARCHAR(10) PRIMARY KEY,
    payment_id VARCHAR(10) REFERENCES payments(payment_id),
    customer_id VARCHAR(10) REFERENCES customers(customer_id),
    payment_method VARCHAR(20),
    failure_reason VARCHAR(100) NOT NULL,
    failure_timestamp TIMESTAMP NOT NULL,
    resolved BOOLEAN DEFAULT FALSE,
    retry_count INTEGER DEFAULT 0
);

-- ============================================
-- ANALYTICAL VIEWS
-- ============================================

-- View: Payment success rate by method
CREATE OR REPLACE VIEW v_payment_success_rate AS
SELECT
    payment_method,
    COUNT(*) AS total_payments,
    SUM(CASE WHEN status = 'success' THEN 1 ELSE 0 END) AS success_count,
    SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) AS failure_count,
    ROUND((SUM(CASE WHEN status = 'success' THEN 1 ELSE 0 END)::NUMERIC / COUNT(*)) * 100, 2) AS success_rate_percent
FROM payments
GROUP BY payment_method;

-- View: Daily payment volume and failure rate
CREATE OR REPLACE VIEW v_daily_payment_summary AS
SELECT
    payment_date,
    COUNT(*) AS total_transactions,
    SUM(CASE WHEN status = 'success' THEN amount ELSE 0 END) AS successful_volume,
    SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) AS failure_count,
    ROUND((SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END)::NUMERIC / COUNT(*)) * 100, 2) AS failure_rate_percent
FROM payments
GROUP BY payment_date
ORDER BY payment_date;

-- View: Merchant performance summary
CREATE OR REPLACE VIEW v_merchant_performance AS
SELECT
    m.merchant_id,
    m.merchant_name,
    m.merchant_category,
    COUNT(p.payment_id) AS total_payments,
    SUM(CASE WHEN p.status = 'success' THEN p.amount ELSE 0 END) AS total_successful_volume,
    ROUND(AVG(CASE WHEN p.status = 'success' THEN p.amount END), 2) AS avg_transaction_value,
    m.chargeback_rate,
    m.merchant_status
FROM merchants m
LEFT JOIN payments p ON m.merchant_id = p.merchant_id
GROUP BY m.merchant_id, m.merchant_name, m.merchant_category, m.chargeback_rate, m.merchant_status;

-- View: Failure analysis by reason
CREATE OR REPLACE VIEW v_failure_analysis AS
SELECT
    failure_reason,
    payment_method,
    COUNT(*) AS failure_count,
    SUM(CASE WHEN resolved = TRUE THEN 1 ELSE 0 END) AS resolved_count,
    ROUND(AVG(retry_count), 2) AS avg_retries
FROM payment_failures
GROUP BY failure_reason, payment_method
ORDER BY failure_count DESC;

-- View: Settlement delays
CREATE OR REPLACE VIEW v_settlement_delays AS
SELECT
    p.payment_id,
    p.payment_date,
    p.settlement_date,
    m.merchant_name,
    m.settlement_type,
    p.amount,
    (p.settlement_date - p.payment_date) AS actual_settlement_days,
    m.settlement_cycle AS expected_settlement_days,
    CASE WHEN (p.settlement_date - p.payment_date) > m.settlement_cycle THEN 'Delayed' ELSE 'On Time' END AS settlement_status_check
FROM payments p
JOIN merchants m ON p.merchant_id = m.merchant_id
WHERE p.status = 'success' AND p.settlement_date IS NOT NULL;
