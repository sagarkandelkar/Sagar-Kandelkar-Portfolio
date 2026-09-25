-- AI in BFSI Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE ai_use_cases (
    use_case_id VARCHAR(20) PRIMARY KEY,
    use_case_name VARCHAR(100) NOT NULL,
    domain VARCHAR(50),
    model_type VARCHAR(50),
    accuracy_pct DECIMAL(5,2),
    deployment_status VARCHAR(30),
    launch_date DATE,
    annual_roi_inr DECIMAL(12,2)
);

CREATE TABLE model_performance (
    model_id VARCHAR(20) PRIMARY KEY,
    use_case_id VARCHAR(20),
    prediction_date DATE,
    total_predictions INT,
    correct_predictions INT,
    latency_ms INT,
    drift_detected VARCHAR(10)
);

CREATE VIEW v_ai_roi AS
SELECT
    domain,
    COUNT(*) AS use_case_count,
    AVG(accuracy_pct) AS avg_accuracy,
    SUM(annual_roi_inr) AS total_roi
FROM ai_use_cases
WHERE deployment_status = 'Production'
GROUP BY domain;
