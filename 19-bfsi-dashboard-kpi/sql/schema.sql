-- BFSI Dashboard KPI Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE kpi_definitions (
    kpi_id VARCHAR(20) PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    metric_name VARCHAR(100) NOT NULL,
    formula TEXT,
    unit VARCHAR(30),
    threshold_red DECIMAL(10,2),
    threshold_amber DECIMAL(10,2),
    owner VARCHAR(50),
    refresh_frequency VARCHAR(20)
);

CREATE TABLE dashboard_usage (
    usage_id SERIAL PRIMARY KEY,
    dashboard_name VARCHAR(100),
    user_role VARCHAR(50),
    access_date DATE,
    views_count INT,
    export_count INT
);

CREATE VIEW v_kpi_summary AS
SELECT
    category,
    COUNT(*) AS kpi_count,
    COUNT(CASE WHEN refresh_frequency = 'Real-time' THEN 1 END) AS realtime_count
FROM kpi_definitions
GROUP BY category;
