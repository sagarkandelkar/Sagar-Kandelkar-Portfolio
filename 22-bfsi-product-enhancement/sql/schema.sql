-- BFSI Product Enhancement Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE product_features (
    feature_id VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    feature_name VARCHAR(100) NOT NULL,
    priority VARCHAR(20),
    development_effort_days INT,
    adoption_rate_pct DECIMAL(5,2),
    satisfaction_score DECIMAL(3,2),
    launch_date DATE,
    status VARCHAR(30)
);

CREATE TABLE product_releases (
    release_id VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(100),
    version VARCHAR(20),
    release_date DATE,
    features_count INT,
    bugs_reported INT,
    bugs_fixed INT,
    customer_feedback_score DECIMAL(3,2)
);

CREATE VIEW v_feature_success AS
SELECT
    product_name,
    AVG(adoption_rate_pct) AS avg_adoption,
    AVG(satisfaction_score) AS avg_satisfaction,
    COUNT(CASE WHEN status = 'Live' THEN 1 END) AS live_features
FROM product_features
GROUP BY product_name;
