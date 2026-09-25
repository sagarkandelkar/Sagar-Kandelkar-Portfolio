-- Open Banking API Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE api_catalog (
    api_id VARCHAR(20) PRIMARY KEY,
    api_name VARCHAR(100) NOT NULL,
    endpoint VARCHAR(200),
    method VARCHAR(10),
    category VARCHAR(50),
    avg_latency_ms INT,
    call_volume_monthly INT,
    partner_count INT,
    status VARCHAR(30)
);

CREATE TABLE consent_records (
    consent_id VARCHAR(20) PRIMARY KEY,
    customer_id VARCHAR(20) NOT NULL,
    partner_name VARCHAR(100),
    data_scope VARCHAR(200),
    consent_date DATE,
    expiry_date DATE,
    status VARCHAR(30)
);

CREATE VIEW v_api_performance AS
SELECT
    category,
    COUNT(*) AS api_count,
    AVG(avg_latency_ms) AS avg_latency,
    SUM(call_volume_monthly) AS total_calls
FROM api_catalog
GROUP BY category;
