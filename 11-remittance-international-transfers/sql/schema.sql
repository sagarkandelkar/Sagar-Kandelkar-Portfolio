-- Remittance Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE remittances (
    remittance_id VARCHAR(20) PRIMARY KEY,
    sender_customer_id VARCHAR(20) NOT NULL,
    beneficiary_name VARCHAR(100) NOT NULL,
    beneficiary_country VARCHAR(50) NOT NULL,
    send_currency VARCHAR(10) NOT NULL,
    receive_currency VARCHAR(10) NOT NULL,
    send_amount DECIMAL(12,2) NOT NULL,
    fx_rate DECIMAL(10,4) NOT NULL,
    fees_inr DECIMAL(12,2) NOT NULL,
    total_inr DECIMAL(12,2) NOT NULL,
    status VARCHAR(30) NOT NULL,
    initiation_date DATE NOT NULL,
    completion_date DATE,
    routing_method VARCHAR(50),
    compliance_status VARCHAR(30)
);

CREATE VIEW v_remittance_volume AS
SELECT
    beneficiary_country,
    COUNT(*) AS txn_count,
    SUM(send_amount) AS total_volume_inr,
    AVG(fees_inr) AS avg_fee,
    AVG(EXTRACT(DAY FROM (completion_date - initiation_date))) AS avg_tat_days
FROM remittances
WHERE status = 'Completed'
GROUP BY beneficiary_country;

CREATE VIEW v_fx_margin AS
SELECT
    receive_currency,
    AVG(fx_rate) AS avg_rate,
    AVG(fees_inr * 100.0 / total_inr) AS fee_pct
FROM remittances
GROUP BY receive_currency;
