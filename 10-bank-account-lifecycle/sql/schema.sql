-- Bank Account Lifecycle Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE accounts (
    account_id VARCHAR(20) PRIMARY KEY,
    customer_id VARCHAR(20) NOT NULL,
    account_type VARCHAR(30) NOT NULL,
    opening_date DATE NOT NULL,
    activation_date DATE,
    last_transaction_date DATE,
    status VARCHAR(30) NOT NULL,
    products_count INT DEFAULT 1,
    dormancy_flag VARCHAR(10),
    dormancy_days INT DEFAULT 0,
    monthly_avg_balance DECIMAL(12,2),
    churn_risk_score VARCHAR(20)
);

CREATE VIEW v_dormancy_analysis AS
SELECT
    status,
    COUNT(*) AS account_count,
    AVG(monthly_avg_balance) AS avg_balance,
    SUM(CASE WHEN dormancy_flag = 'Yes' THEN 1 ELSE 0 END) AS dormant_count
FROM accounts
GROUP BY status;

CREATE VIEW v_lifecycle_revenue AS
SELECT
    account_type,
    AVG(products_count) AS avg_products,
    SUM(monthly_avg_balance) AS total_balance,
    COUNT(CASE WHEN churn_risk_score = 'High' THEN 1 END) AS high_risk_count
FROM accounts
GROUP BY account_type;
