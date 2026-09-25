-- BFSI Data Analysis Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE analysis_requests (
    request_id VARCHAR(20) PRIMARY KEY,
    request_type VARCHAR(50) NOT NULL,
    business_unit VARCHAR(50),
    dataset_size_mb INT,
    tools_used VARCHAR(100),
    turnaround_days INT,
    business_value_inr DECIMAL(12,2),
    status VARCHAR(30)
);

CREATE TABLE data_quality_metrics (
    table_name VARCHAR(100) PRIMARY KEY,
    total_records INT,
    completeness_pct DECIMAL(5,2),
    accuracy_pct DECIMAL(5,2),
    freshness_days INT,
    last_checked DATE
);

CREATE VIEW v_analysis_efficiency AS
SELECT
    request_type,
    AVG(turnaround_days) AS avg_turnaround,
    AVG(business_value_inr) AS avg_value,
    COUNT(*) AS request_count
FROM analysis_requests
GROUP BY request_type;
