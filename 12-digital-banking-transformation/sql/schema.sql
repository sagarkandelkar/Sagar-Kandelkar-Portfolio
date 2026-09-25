-- Digital Banking Transformation Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE transformation_metrics (
    metric_id SERIAL PRIMARY KEY,
    phase VARCHAR(50) NOT NULL,
    metric_name VARCHAR(100) NOT NULL,
    baseline_value VARCHAR(50),
    target_value VARCHAR(50),
    actual_value VARCHAR(50),
    status VARCHAR(30),
    measurement_date DATE
);

CREATE TABLE legacy_systems (
    system_id VARCHAR(20) PRIMARY KEY,
    system_name VARCHAR(100) NOT NULL,
    system_type VARCHAR(50),
    criticality VARCHAR(20),
    migration_status VARCHAR(30),
    retirement_date DATE,
    replacement_system VARCHAR(100)
);

CREATE VIEW v_migration_progress AS
SELECT
    migration_status,
    COUNT(*) AS system_count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) AS pct_complete
FROM legacy_systems
GROUP BY migration_status;
