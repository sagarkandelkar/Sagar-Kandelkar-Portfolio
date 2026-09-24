-- Insurance Claims Processing — PostgreSQL Schema
-- All data is synthetic and self-created for portfolio demonstration

DROP TABLE IF EXISTS assessments CASCADE;
DROP TABLE IF EXISTS claims CASCADE;
DROP TABLE IF EXISTS policyholders CASCADE;

CREATE TABLE policyholders (
    policyholder_id VARCHAR(10) PRIMARY KEY,
    policyholder_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    policy_type VARCHAR(20) CHECK (policy_type IN ('Home', 'Health', 'Motor')),
    policy_start_date DATE NOT NULL,
    policy_end_date DATE NOT NULL,
    sum_insured DECIMAL(12,2) NOT NULL,
    premium_amount DECIMAL(12,2) NOT NULL,
    claims_count INTEGER DEFAULT 0,
    claims_history VARCHAR(20) CHECK (claims_history IN ('good', 'average', 'poor'))
);

CREATE TABLE claims (
    claim_id VARCHAR(10) PRIMARY KEY,
    policyholder_id VARCHAR(10) REFERENCES policyholders(policyholder_id),
    policy_number VARCHAR(20) NOT NULL,
    claim_date DATE NOT NULL,
    claim_type VARCHAR(20) CHECK (claim_type IN ('Property', 'Medical', 'Motor')),
    claim_amount DECIMAL(12,2) NOT NULL,
    incident_date DATE NOT NULL,
    incident_description VARCHAR(200) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('approved', 'rejected', 'pending')),
    survey_date DATE,
    approved_amount DECIMAL(12,2) DEFAULT 0,
    settlement_date DATE,
    settlement_mode VARCHAR(20) CHECK (settlement_mode IN ('NEFT', 'IMPS')),
    tat_days INTEGER
);

CREATE TABLE assessments (
    assessment_id VARCHAR(10) PRIMARY KEY,
    claim_id VARCHAR(10) REFERENCES claims(claim_id),
    surveyor_name VARCHAR(100) NOT NULL,
    survey_date DATE NOT NULL,
    damage_estimate DECIMAL(12,2) NOT NULL,
    depreciation_percent DECIMAL(5,2) NOT NULL,
    net_payable DECIMAL(12,2) NOT NULL,
    surveyor_remarks VARCHAR(200),
    approved_by VARCHAR(100)
);

-- Views
CREATE OR REPLACE VIEW v_claim_status_summary AS
SELECT
    status,
    COUNT(*) AS count,
    SUM(claim_amount) AS total_claimed,
    SUM(approved_amount) AS total_approved,
    AVG(tat_days) AS avg_tat
FROM claims
GROUP BY status;

CREATE OR REPLACE VIEW v_claim_type_analysis AS
SELECT
    claim_type,
    COUNT(*) AS total_claims,
    AVG(claim_amount) AS avg_claim_amount,
    AVG(approved_amount) AS avg_approved,
    AVG(tat_days) AS avg_tat
FROM claims
GROUP BY claim_type;

CREATE OR REPLACE VIEW v_tat_trend AS
SELECT
    DATE_TRUNC('month', claim_date)::DATE AS month,
    COUNT(*) AS claim_count,
    AVG(tat_days) AS avg_tat,
    AVG(approved_amount) AS avg_settlement
FROM claims
WHERE status = 'approved'
GROUP BY DATE_TRUNC('month', claim_date);

CREATE OR REPLACE VIEW v_depreciation_analysis AS
SELECT
    c.claim_id,
    c.claim_type,
    a.damage_estimate,
    a.depreciation_percent,
    a.net_payable,
    ROUND(((a.damage_estimate - a.net_payable) / a.damage_estimate) * 100, 2) AS actual_depreciation_pct
FROM claims c
JOIN assessments a ON c.claim_id = a.claim_id;
