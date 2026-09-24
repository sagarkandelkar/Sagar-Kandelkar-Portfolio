-- Loan Origination Process — PostgreSQL Schema
-- All data is synthetic and self-created for portfolio demonstration

DROP TABLE IF EXISTS disbursements CASCADE;
DROP TABLE IF EXISTS credit_appraisal CASCADE;
DROP TABLE IF EXISTS loan_applications CASCADE;

CREATE TABLE loan_applications (
    application_id VARCHAR(10) PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    application_date DATE NOT NULL,
    loan_type VARCHAR(50) CHECK (loan_type IN ('Home Loan', 'Personal Loan', 'Car Loan', 'Education Loan')),
    loan_amount DECIMAL(12,2) NOT NULL,
    tenure_months INTEGER NOT NULL,
    employment_type VARCHAR(50) NOT NULL,
    monthly_income INTEGER NOT NULL,
    existing_emi INTEGER DEFAULT 0,
    application_channel VARCHAR(20) CHECK (application_channel IN ('Mobile', 'Web', 'Branch')),
    status VARCHAR(20) CHECK (status IN ('approved', 'rejected', 'pending')),
    approval_date DATE,
    sanction_amount DECIMAL(12,2) DEFAULT 0,
    interest_rate DECIMAL(5,2),
    processing_fee DECIMAL(12,2)
);

CREATE TABLE credit_appraisal (
    appraisal_id VARCHAR(10) PRIMARY KEY,
    application_id VARCHAR(10) REFERENCES loan_applications(application_id),
    customer_id VARCHAR(10) NOT NULL,
    credit_score INTEGER CHECK (credit_score BETWEEN 300 AND 900),
    dti_ratio DECIMAL(5,2),
    ltv_ratio DECIMAL(5,2),
    foir_percent DECIMAL(5,2),
    bureau_inquiries_6m INTEGER,
    property_valuation DECIMAL(12,2),
    appraisal_status VARCHAR(20) CHECK (appraisal_status IN ('approved', 'rejected', 'pending')),
    risk_grade VARCHAR(5) CHECK (risk_grade IN ('A', 'B', 'C', 'D')),
    rejection_reason VARCHAR(100)
);

CREATE TABLE disbursements (
    disbursement_id VARCHAR(10) PRIMARY KEY,
    application_id VARCHAR(10) REFERENCES loan_applications(application_id),
    customer_id VARCHAR(10) NOT NULL,
    disbursement_date DATE,
    disbursement_amount DECIMAL(12,2),
    disbursement_mode VARCHAR(20) CHECK (disbursement_mode IN ('NEFT', 'RTGS', 'IMPS')),
    first_emi_date DATE,
    emi_amount DECIMAL(12,2),
    loan_account_number VARCHAR(20) UNIQUE,
    status VARCHAR(20) CHECK (status IN ('active', 'closed', 'npa'))
);

-- Views
CREATE OR REPLACE VIEW v_approval_funnel AS
SELECT
    COUNT(*) AS total_applications,
    SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) AS approved,
    SUM(CASE WHEN status = 'rejected' THEN 1 ELSE 0 END) AS rejected,
    SUM(CASE WHEN status = 'pending' THEN 1 ELSE 0 END) AS pending,
    ROUND((SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END)::NUMERIC / COUNT(*)) * 100, 2) AS approval_rate_percent
FROM loan_applications;

CREATE OR REPLACE VIEW v_risk_analysis AS
SELECT
    ca.risk_grade,
    COUNT(*) AS count,
    AVG(ca.credit_score) AS avg_credit_score,
    AVG(ca.dti_ratio) AS avg_dti,
    SUM(CASE WHEN ca.appraisal_status = 'approved' THEN 1 ELSE 0 END) AS approved_count
FROM credit_appraisal ca
GROUP BY ca.risk_grade;

CREATE OR REPLACE VIEW v_loan_type_performance AS
SELECT
    la.loan_type,
    COUNT(*) AS total_apps,
    SUM(CASE WHEN la.status = 'approved' THEN 1 ELSE 0 END) AS approved,
    AVG(la.sanction_amount) AS avg_sanction,
    AVG(la.interest_rate) AS avg_interest
FROM loan_applications la
GROUP BY la.loan_type;

CREATE OR REPLACE VIEW v_channel_trends AS
SELECT
    application_channel,
    COUNT(*) AS total,
    SUM(CASE WHEN status = 'approved' THEN 1 ELSE 0 END) AS approved,
    ROUND(AVG(la.loan_amount), 2) AS avg_amount
FROM loan_applications la
GROUP BY application_channel;

CREATE OR REPLACE VIEW v_disbursement_summary AS
SELECT
    d.disbursement_mode,
    COUNT(*) AS count,
    SUM(d.disbursement_amount) AS total_disbursed,
    AVG(d.emi_amount) AS avg_emi
FROM disbursements d
GROUP BY d.disbursement_mode;
