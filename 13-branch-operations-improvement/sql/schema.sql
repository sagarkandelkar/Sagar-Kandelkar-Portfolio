-- Branch Operations Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE branch_operations (
    branch_id VARCHAR(20) PRIMARY KEY,
    branch_name VARCHAR(100) NOT NULL,
    city VARCHAR(50),
    staff_count INT,
    daily_transactions INT,
    avg_wait_time_minutes INT,
    paper_usage_sheets INT,
    cross_sell_attempts INT,
    cross_sell_success INT,
    customer_satisfaction DECIMAL(3,2),
    operational_cost_inr DECIMAL(12,2)
);

CREATE VIEW v_branch_efficiency AS
SELECT
    branch_id,
    branch_name,
    avg_wait_time_minutes,
    paper_usage_sheets,
    ROUND(cross_sell_success * 100.0 / NULLIF(cross_sell_attempts, 0), 2) AS cross_sell_rate,
    customer_satisfaction,
    ROUND(operational_cost_inr / daily_transactions, 2) AS cost_per_txn
FROM branch_operations;
