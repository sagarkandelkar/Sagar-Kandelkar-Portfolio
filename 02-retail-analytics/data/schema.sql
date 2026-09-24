-- ============================================================
-- Retail Analytics — Customer Segmentation & Sales Optimization
-- Database Schema
-- ============================================================

-- 1. Customers Table
CREATE TABLE customers (
    customer_id VARCHAR(20) PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    gender VARCHAR(10),
    city VARCHAR(50),
    state VARCHAR(50),
    registration_date DATE NOT NULL,
    customer_segment VARCHAR(50),
    rfm_score INT,
    recency_days INT,
    frequency INT,
    monetary_total DECIMAL(12,2),
    avg_order_value DECIMAL(10,2),
    churn_risk_score VARCHAR(10),
    lifetime_value DECIMAL(12,2),
    campaign_responsiveness VARCHAR(20)
);

-- 2. Products Table
CREATE TABLE products (
    product_id VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(200) NOT NULL,
    product_category VARCHAR(50),
    sub_category VARCHAR(50),
    brand VARCHAR(50),
    unit_cost DECIMAL(10,2),
    unit_price DECIMAL(10,2),
    profit_margin DECIMAL(4,3),
    stock_level INT,
    reorder_point INT,
    supplier_rating DECIMAL(2,1)
);

-- 3. Transactions Table
CREATE TABLE transactions (
    transaction_id VARCHAR(20) PRIMARY KEY,
    customer_id VARCHAR(20) NOT NULL,
    transaction_date DATE NOT NULL,
    product_category VARCHAR(50),
    product_name VARCHAR(200),
    quantity INT,
    unit_price DECIMAL(10,2),
    total_amount DECIMAL(12,2),
    payment_method VARCHAR(20),
    channel VARCHAR(20),
    discount_applied DECIMAL(4,3),
    campaign_code VARCHAR(20),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- 4. Campaigns Table
CREATE TABLE campaigns (
    campaign_code VARCHAR(20) PRIMARY KEY,
    campaign_name VARCHAR(200) NOT NULL,
    campaign_type VARCHAR(50),
    start_date DATE,
    end_date DATE,
    discount_rate DECIMAL(4,3),
    target_segment VARCHAR(50),
    channel VARCHAR(50),
    budget_inr DECIMAL(12,2),
    expected_revenue DECIMAL(12,2),
    actual_revenue DECIMAL(12,2),
    status VARCHAR(20)
);

-- Views

CREATE VIEW v_customer_rfm AS
SELECT
    customer_id,
    customer_name,
    customer_segment,
    rfm_score,
    recency_days,
    frequency,
    monetary_total,
    churn_risk_score,
    lifetime_value
FROM customers
ORDER BY rfm_score DESC;

CREATE VIEW v_sales_summary AS
SELECT
    DATE_TRUNC('month', transaction_date) AS month,
    COUNT(*) AS total_transactions,
    SUM(total_amount) AS total_revenue,
    AVG(total_amount) AS avg_transaction_value,
    COUNT(DISTINCT customer_id) AS unique_customers
FROM transactions
GROUP BY DATE_TRUNC('month', transaction_date)
ORDER BY month DESC;

CREATE VIEW v_product_performance AS
SELECT
    p.product_id,
    p.product_name,
    p.product_category,
    p.profit_margin,
    COUNT(t.transaction_id) AS units_sold,
    SUM(t.total_amount) AS total_revenue,
    AVG(t.quantity) AS avg_quantity_per_transaction
FROM products p
LEFT JOIN transactions t ON p.product_name = t.product_name
GROUP BY p.product_id, p.product_name, p.product_category, p.profit_margin
ORDER BY total_revenue DESC;

CREATE VIEW v_campaign_effectiveness AS
SELECT
    c.campaign_code,
    c.campaign_name,
    c.campaign_type,
    c.budget_inr,
    c.actual_revenue,
    ROUND((c.actual_revenue - c.budget_inr) / c.budget_inr * 100, 2) AS roi_percent,
    c.status
FROM campaigns c
ORDER BY roi_percent DESC;

CREATE VIEW v_churn_risk_customers AS
SELECT
    customer_id,
    customer_name,
    email,
    city,
    customer_segment,
    recency_days,
    frequency,
    monetary_total,
    churn_risk_score
FROM customers
WHERE churn_risk_score = 'High'
ORDER BY monetary_total DESC;
