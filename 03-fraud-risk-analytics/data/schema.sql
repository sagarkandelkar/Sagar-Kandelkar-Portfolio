-- ============================================================
-- Fraud Detection & Risk Analytics — Database Schema
-- ============================================================

CREATE TABLE fraud_transactions (
    transaction_id VARCHAR(20) PRIMARY KEY,
    customer_id VARCHAR(20) NOT NULL,
    transaction_date DATE,
    transaction_time TIME,
    channel VARCHAR(20),
    transaction_type VARCHAR(50),
    amount_inr DECIMAL(12,2),
    merchant_category VARCHAR(50),
    merchant_name VARCHAR(100),
    payment_method VARCHAR(20),
    device_type VARCHAR(20),
    location_city VARCHAR(50),
    location_country VARCHAR(50),
    ip_address VARCHAR(50),
    is_international VARCHAR(3),
    is_recurring VARCHAR(3),
    risk_score VARCHAR(10),
    alert_triggered VARCHAR(3),
    alert_reason TEXT,
    actual_fraud_flag INT
);

CREATE TABLE fraud_alerts (
    alert_id VARCHAR(20) PRIMARY KEY,
    transaction_id VARCHAR(20) NOT NULL,
    customer_id VARCHAR(20) NOT NULL,
    alert_date DATE,
    alert_time TIME,
    severity VARCHAR(10),
    alert_type VARCHAR(50),
    alert_reason TEXT,
    investigation_status VARCHAR(20),
    assigned_to VARCHAR(100),
    investigation_notes TEXT,
    resolved_date DATE,
    resolution_outcome VARCHAR(50),
    FOREIGN KEY (transaction_id) REFERENCES fraud_transactions(transaction_id)
);

-- Views

CREATE VIEW v_high_risk_transactions AS
SELECT
    transaction_id,
    customer_id,
    transaction_date,
    transaction_time,
    amount_inr,
    location_country,
    risk_score,
    alert_triggered,
    actual_fraud_flag
FROM fraud_transactions
WHERE risk_score = 'High'
ORDER BY amount_inr DESC;

CREATE VIEW v_fraud_pattern_summary AS
SELECT
    location_country,
    COUNT(*) AS total_transactions,
    SUM(actual_fraud_flag) AS fraud_count,
    ROUND(SUM(actual_fraud_flag) * 100.0 / COUNT(*), 2) AS fraud_rate_percent,
    AVG(amount_inr) AS avg_amount,
    MAX(amount_inr) AS max_amount
FROM fraud_transactions
GROUP BY location_country
ORDER BY fraud_count DESC;

CREATE VIEW v_alert_status AS
SELECT
    a.alert_id,
    a.severity,
    a.alert_type,
    a.investigation_status,
    t.amount_inr,
    t.location_country,
    t.actual_fraud_flag
FROM fraud_alerts a
JOIN fraud_transactions t ON a.transaction_id = t.transaction_id
ORDER BY a.severity DESC, t.amount_inr DESC;

CREATE VIEW v_hourly_fraud_pattern AS
SELECT
    EXTRACT(HOUR FROM transaction_time) AS transaction_hour,
    COUNT(*) AS total_transactions,
    SUM(actual_fraud_flag) AS fraud_count,
    ROUND(SUM(actual_fraud_flag) * 100.0 / COUNT(*), 2) AS fraud_rate_percent
FROM fraud_transactions
GROUP BY EXTRACT(HOUR FROM transaction_time)
ORDER BY transaction_hour;

CREATE VIEW v_channel_risk AS
SELECT
    channel,
    COUNT(*) AS transactions,
    SUM(actual_fraud_flag) AS fraud_count,
    ROUND(SUM(actual_fraud_flag) * 100.0 / COUNT(*), 2) AS fraud_rate_percent,
    AVG(amount_inr) AS avg_amount
FROM fraud_transactions
GROUP BY channel
ORDER BY fraud_count DESC;
