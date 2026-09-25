-- Banking Complaint Management Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE complaints (
    complaint_id VARCHAR(20) PRIMARY KEY,
    customer_id VARCHAR(20) NOT NULL,
    category VARCHAR(50) NOT NULL,
    sub_category VARCHAR(100),
    channel VARCHAR(30) NOT NULL,
    date_logged DATE NOT NULL,
    priority VARCHAR(20) NOT NULL,
    status VARCHAR(30) NOT NULL,
    assigned_to VARCHAR(50),
    sla_days INT NOT NULL,
    date_resolved DATE,
    resolution_type VARCHAR(50),
    customer_rating INT CHECK (customer_rating BETWEEN 1 AND 5),
    repeat_complaint VARCHAR(10) NOT NULL
);

CREATE TABLE complaint_categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    avg_resolution_days INT,
    escalation_threshold INT
);

CREATE VIEW v_complaint_summary AS
SELECT
    category,
    COUNT(*) AS total_complaints,
    AVG(EXTRACT(DAY FROM (date_resolved - date_logged))) AS avg_resolution_days,
    SUM(CASE WHEN status = 'Resolved' THEN 1 ELSE 0 END) * 100.0 / COUNT(*) AS resolution_rate,
    AVG(customer_rating) AS avg_rating
FROM complaints
GROUP BY category;

CREATE VIEW v_sla_compliance AS
SELECT
    complaint_id,
    customer_id,
    date_logged,
    date_resolved,
    sla_days,
    EXTRACT(DAY FROM (date_resolved - date_logged)) AS actual_days,
    CASE
        WHEN EXTRACT(DAY FROM (date_resolved - date_logged)) <= sla_days THEN 'Within SLA'
        ELSE 'SLA Breached'
    END AS sla_status
FROM complaints
WHERE status = 'Resolved';
