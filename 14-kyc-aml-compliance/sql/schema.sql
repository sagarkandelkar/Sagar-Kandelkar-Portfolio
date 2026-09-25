-- KYC / AML Compliance Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE kyc_records (
    kyc_id VARCHAR(20) PRIMARY KEY,
    customer_id VARCHAR(20) NOT NULL,
    risk_rating VARCHAR(20) NOT NULL,
    verification_date DATE,
    next_review_date DATE,
    screening_status VARCHAR(30),
    alert_count INT DEFAULT 0,
    sar_filed VARCHAR(10),
    pep_flag VARCHAR(10),
    sanctions_flag VARCHAR(10)
);

CREATE TABLE suspicious_activity (
    sar_id VARCHAR(20) PRIMARY KEY,
    customer_id VARCHAR(20) NOT NULL,
    alert_date DATE NOT NULL,
    activity_type VARCHAR(100),
    amount_inr DECIMAL(12,2),
    investigation_status VARCHAR(30),
    resolution VARCHAR(100),
    filing_date DATE
);

CREATE VIEW v_risk_distribution AS
SELECT
    risk_rating,
    COUNT(*) AS customer_count,
    SUM(CASE WHEN alert_count > 0 THEN 1 ELSE 0 END) AS alerted_count
FROM kyc_records
GROUP BY risk_rating;
