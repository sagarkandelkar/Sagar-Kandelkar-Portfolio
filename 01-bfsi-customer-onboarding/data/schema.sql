-- ============================================================
-- BFSI Customer Onboarding - Database Schema
-- ============================================================
-- Author: Sagar Kandelkar
-- Date: September 2026
-- Description: SQL DDL for the Customer Onboarding system
--              based on the Entity Relationship Diagram
-- ============================================================

-- --------------------------------------------------------
-- 1. Customer Entity
-- --------------------------------------------------------
CREATE TABLE customer (
    customer_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name          VARCHAR(100) NOT NULL,
    last_name           VARCHAR(100) NOT NULL,
    date_of_birth       DATE NOT NULL,
    gender              VARCHAR(10) CHECK (gender IN ('Male', 'Female', 'Other')),
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE customer IS 'Core customer profile entity. One record per unique individual.';
COMMENT ON COLUMN customer.customer_id IS 'System-generated UUID primary key';
COMMENT ON COLUMN customer.gender IS 'Validated against ENUM: Male, Female, Other';

-- --------------------------------------------------------
-- 2. Contact Entity
-- --------------------------------------------------------
CREATE TABLE contact (
    contact_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_id         UUID NOT NULL,
    email               VARCHAR(255) NOT NULL,
    phone               VARCHAR(20) NOT NULL,
    address             TEXT,
    city                VARCHAR(50),
    state               VARCHAR(50),
    pincode             VARCHAR(10),
    is_primary          BOOLEAN DEFAULT TRUE,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_contact_customer
        FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
        ON DELETE CASCADE
);

CREATE INDEX idx_contact_customer ON contact(customer_id);
CREATE INDEX idx_contact_email ON contact(email);
CREATE INDEX idx_contact_phone ON contact(phone);

COMMENT ON TABLE contact IS 'Customer contact details. Supports multiple addresses per customer.';

-- --------------------------------------------------------
-- 3. Application Entity
-- --------------------------------------------------------
CREATE TABLE application (
    application_id      VARCHAR(20) PRIMARY KEY,
    customer_id           UUID NOT NULL,
    application_date      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    application_channel   VARCHAR(20) CHECK (application_channel IN ('Web', 'Mobile', 'Branch')),
    product_type          VARCHAR(50) CHECK (product_type IN ('Savings Account', 'Current Account', 'Fixed Deposit', 'Recurring Deposit')),
    annual_income         DECIMAL(15,2),
    employment_type       VARCHAR(50) CHECK (employment_type IN ('Salaried', 'Self-Employed', 'Business Owner', 'Freelancer')),
    onboarding_status     VARCHAR(20) CHECK (onboarding_status IN ('Submitted', 'In Progress', 'Pending Review', 'On Hold', 'Completed', 'Rejected')),
    remarks               TEXT,
    created_at            TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at            TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_application_customer
        FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
        ON DELETE CASCADE
);

CREATE INDEX idx_application_customer ON application(customer_id);
CREATE INDEX idx_application_status ON application(onboarding_status);
CREATE INDEX idx_application_date ON application(application_date);
CREATE INDEX idx_application_channel ON application(application_channel);

COMMENT ON TABLE application IS 'Customer onboarding application. Central entity tracking the onboarding lifecycle.';
COMMENT ON COLUMN application.application_id IS 'Business key: Format APP-YYYY-XXXX';

-- --------------------------------------------------------
-- 4. Document Entity
-- --------------------------------------------------------
CREATE TABLE document (
    document_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    application_id      VARCHAR(20) NOT NULL,
    document_type       VARCHAR(20) CHECK (document_type IN ('PAN', 'Aadhaar', 'Address Proof', 'Income Proof', 'Photograph')),
    document_number     VARCHAR(50),
    file_path           VARCHAR(500),
    file_size_mb        DECIMAL(5,2),
    mime_type           VARCHAR(50),
    verification_status VARCHAR(20) CHECK (verification_status IN ('Uploaded', 'Pending', 'Verified', 'Rejected')),
    verification_notes  TEXT,
    uploaded_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified_at         TIMESTAMP,

    CONSTRAINT fk_document_application
        FOREIGN KEY (application_id) REFERENCES application(application_id)
        ON DELETE CASCADE
);

CREATE INDEX idx_document_application ON document(application_id);
CREATE INDEX idx_document_type ON document(document_type);
CREATE INDEX idx_document_status ON document(verification_status);

COMMENT ON TABLE document IS 'KYC/AML documents uploaded per application. Links to digital vault storage.';

-- --------------------------------------------------------
-- 5. Risk Assessment Entity
-- --------------------------------------------------------
CREATE TABLE risk_assessment (
    risk_id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    application_id      VARCHAR(20) NOT NULL UNIQUE,
    credit_score        INTEGER CHECK (credit_score BETWEEN 300 AND 900),
    credit_bureau       VARCHAR(20) CHECK (credit_bureau IN ('CIBIL', 'Experian', 'Equifax')),
    aml_risk_score      VARCHAR(10) CHECK (aml_risk_score IN ('Low', 'Medium', 'High')),
    aml_match_details   TEXT,
    kyc_status          VARCHAR(20) CHECK (kyc_status IN ('Pending', 'Verified', 'Rejected')),
    kyc_verified_at     TIMESTAMP,
    overall_risk        VARCHAR(10) CHECK (overall_risk IN ('Low', 'Medium', 'High')),
    risk_factors        JSONB,
    assessed_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    assessed_by         VARCHAR(100),

    CONSTRAINT fk_risk_application
        FOREIGN KEY (application_id) REFERENCES application(application_id)
        ON DELETE CASCADE
);

CREATE INDEX idx_risk_application ON risk_assessment(application_id);
CREATE INDEX idx_risk_overall ON risk_assessment(overall_risk);
CREATE INDEX idx_risk_aml ON risk_assessment(aml_risk_score);

COMMENT ON TABLE risk_assessment IS 'Composite risk view per application. One-to-one with application.';
COMMENT ON COLUMN risk_assessment.risk_factors IS 'JSONB storing individual risk factor scores for explainability';

-- --------------------------------------------------------
-- 6. Audit Log Entity
-- --------------------------------------------------------
CREATE TABLE audit_log (
    audit_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    application_id      VARCHAR(20) NOT NULL,
    action              VARCHAR(100) NOT NULL,
    action_category     VARCHAR(50) CHECK (action_category IN ('Create', 'Update', 'Verify', 'Reject', 'Approve', 'Escalate')),
    performed_by        VARCHAR(100) NOT NULL,
    performed_by_role   VARCHAR(50),
    old_values          JSONB,
    new_values          JSONB,
    ip_address          INET,
    user_agent          TEXT,
    timestamp           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_audit_application
        FOREIGN KEY (application_id) REFERENCES application(application_id)
        ON DELETE CASCADE
);

CREATE INDEX idx_audit_application ON audit_log(application_id);
CREATE INDEX idx_audit_timestamp ON audit_log(timestamp);
CREATE INDEX idx_audit_action ON audit_log(action);

COMMENT ON TABLE audit_log IS 'Immutable audit trail for regulatory compliance and debugging.';

-- --------------------------------------------------------
-- 7. Views for Reporting
-- --------------------------------------------------------

-- Application pipeline view
CREATE VIEW v_application_pipeline AS
SELECT
    a.application_id,
    a.application_date,
    a.application_channel,
    a.product_type,
    a.onboarding_status,
    c.first_name || ' ' || c.last_name AS customer_name,
    co.email,
    co.phone,
    co.city,
    co.state,
    r.credit_score,
    r.aml_risk_score,
    r.kyc_status,
    r.overall_risk,
    a.remarks
FROM application a
JOIN customer c ON a.customer_id = c.customer_id
LEFT JOIN contact co ON c.customer_id = co.customer_id AND co.is_primary = TRUE
LEFT JOIN risk_assessment r ON a.application_id = r.application_id;

-- Compliance summary view
CREATE VIEW v_compliance_summary AS
SELECT
    DATE_TRUNC('month', a.application_date) AS month,
    COUNT(*) AS total_applications,
    COUNT(*) FILTER (WHERE a.onboarding_status = 'Completed') AS completed,
    COUNT(*) FILTER (WHERE a.onboarding_status = 'Rejected') AS rejected,
    COUNT(*) FILTER (WHERE r.kyc_status = 'Verified') AS kyc_verified,
    COUNT(*) FILTER (WHERE r.aml_risk_score = 'High') AS high_risk_count,
    ROUND(AVG(r.credit_score), 0) AS avg_credit_score
FROM application a
LEFT JOIN risk_assessment r ON a.application_id = r.application_id
GROUP BY DATE_TRUNC('month', a.application_date)
ORDER BY month DESC;

-- SLA tracking view (applications pending > 2 days)
CREATE VIEW v_sla_breach AS
SELECT
    a.application_id,
    a.application_date,
    a.onboarding_status,
    EXTRACT(DAY FROM (CURRENT_TIMESTAMP - a.application_date)) AS days_pending,
    c.first_name || ' ' || c.last_name AS customer_name,
    a.remarks
FROM application a
JOIN customer c ON a.customer_id = c.customer_id
WHERE a.onboarding_status NOT IN ('Completed', 'Rejected')
  AND EXTRACT(DAY FROM (CURRENT_TIMESTAMP - a.application_date)) > 2;

-- --------------------------------------------------------
-- 8. Sample Data Insertion
-- --------------------------------------------------------

-- Insert sample customers
INSERT INTO customer (customer_id, first_name, last_name, date_of_birth, gender) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'Rahul', 'Sharma', '1985-03-15', 'Male'),
    ('550e8400-e29b-41d4-a716-446655440002', 'Priya', 'Patel', '1992-07-22', 'Female'),
    ('550e8400-e29b-41d4-a716-446655440003', 'Amit', 'Kumar', '1978-11-10', 'Male'),
    ('550e8400-e29b-41d4-a716-446655440004', 'Sneha', 'Gupta', '1995-05-05', 'Female'),
    ('550e8400-e29b-41d4-a716-446655440005', 'Vikram', 'Reddy', '1980-09-18', 'Male');

-- Insert sample contacts
INSERT INTO contact (customer_id, email, phone, address, city, state, pincode) VALUES
    ('550e8400-e29b-41d4-a716-446655440001', 'rahul.sharma@email.com', '9876543210', 'Flat 101, Sunrise Apartments', 'Mumbai', 'Maharashtra', '400001'),
    ('550e8400-e29b-41d4-a716-446655440002', 'priya.patel@email.com', '9876543211', 'Villa 5, Green Valley', 'Pune', 'Maharashtra', '411001'),
    ('550e8400-e29b-41d4-a716-446655440003', 'amit.kumar@email.com', '9876543212', 'House 12, Sector 45', 'Noida', 'Uttar Pradesh', '201301'),
    ('550e8400-e29b-41d4-a716-446655440004', 'sneha.gupta@email.com', '9876543213', 'Block C, Rose Gardens', 'Bangalore', 'Karnataka', '560001'),
    ('550e8400-e29b-41d4-a716-446655440005', 'vikram.reddy@email.com', '9876543214', 'Plot 78, Hitech City', 'Hyderabad', 'Telangana', '500081');

-- Insert sample applications
INSERT INTO application (application_id, customer_id, application_date, application_channel, product_type, annual_income, employment_type, onboarding_status, remarks) VALUES
    ('APP-2026-0001', '550e8400-e29b-41d4-a716-446655440001', '2026-09-01 10:30:00', 'Web', 'Savings Account', 850000.00, 'Salaried', 'Completed', NULL),
    ('APP-2026-0002', '550e8400-e29b-41d4-a716-446655440002', '2026-09-02 14:15:00', 'Branch', 'Current Account', 1200000.00, 'Self-Employed', 'In Progress', 'Address proof pending'),
    ('APP-2026-0003', '550e8400-e29b-41d4-a716-446655440003', '2026-09-02 09:00:00', 'Web', 'Savings Account', 650000.00, 'Salaried', 'Completed', NULL),
    ('APP-2026-0004', '550e8400-e29b-41d4-a716-446655440004', '2026-09-03 16:45:00', 'Web', 'Fixed Deposit', 450000.00, 'Freelancer', 'On Hold', 'Additional income proof required'),
    ('APP-2026-0005', '550e8400-e29b-41d4-a716-446655440005', '2026-09-03 11:20:00', 'Branch', 'Current Account', 2500000.00, 'Business Owner', 'In Progress', 'Physical verification scheduled');

-- Insert sample risk assessments
INSERT INTO risk_assessment (application_id, credit_score, credit_bureau, aml_risk_score, kyc_status, overall_risk, assessed_by) VALUES
    ('APP-2026-0001', 780, 'CIBIL', 'Low', 'Verified', 'Low', 'system'),
    ('APP-2026-0002', 720, 'CIBIL', 'Medium', 'Verified', 'Medium', 'system'),
    ('APP-2026-0003', 810, 'Experian', 'Low', 'Verified', 'Low', 'system'),
    ('APP-2026-0004', 650, 'CIBIL', 'High', 'Pending', 'High', 'system'),
    ('APP-2026-0005', 745, 'Equifax', 'Medium', 'Verified', 'Medium', 'system');

-- Insert sample documents
INSERT INTO document (application_id, document_type, document_number, verification_status) VALUES
    ('APP-2026-0001', 'PAN', 'ABCDE1234F', 'Verified'),
    ('APP-2026-0001', 'Aadhaar', '123456789012', 'Verified'),
    ('APP-2026-0002', 'PAN', 'FGHIJ5678K', 'Verified'),
    ('APP-2026-0004', 'PAN', 'KLMNO9012P', 'Pending'),
    ('APP-2026-0005', 'PAN', 'PQRST3456U', 'Verified');

-- Insert sample audit logs
INSERT INTO audit_log (application_id, action, action_category, performed_by, performed_by_role) VALUES
    ('APP-2026-0001', 'Application submitted via Web', 'Create', 'rahul.sharma@email.com', 'Customer'),
    ('APP-2026-0001', 'KYC verified via UIDAI API', 'Verify', 'system', 'Automated'),
    ('APP-2026-0001', 'Risk assessed as Low - Auto approved', 'Approve', 'system', 'Automated'),
    ('APP-2026-0001', 'Account activated in Core Banking', 'Update', 'ops_user_001', 'Operations'),
    ('APP-2026-0004', 'Application submitted via Web', 'Create', 'sneha.gupta@email.com', 'Customer'),
    ('APP-2026-0004', 'Flagged for additional income proof', 'Escalate', 'system', 'Automated');

-- --------------------------------------------------------
-- 9. Useful Queries
-- --------------------------------------------------------

-- Q1: Daily application volume
-- SELECT application_date::DATE as day, COUNT(*) as count
-- FROM application
-- GROUP BY application_date::DATE
-- ORDER BY day DESC;

-- Q2: Conversion funnel
-- SELECT onboarding_status, COUNT(*) as count,
--        ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage
-- FROM application
-- GROUP BY onboarding_status;

-- Q3: High-risk applications requiring review
-- SELECT a.application_id, c.first_name || ' ' || c.last_name as customer,
--        r.overall_risk, r.credit_score, a.onboarding_status
-- FROM application a
-- JOIN customer c ON a.customer_id = c.customer_id
-- JOIN risk_assessment r ON a.application_id = r.application_id
-- WHERE r.overall_risk IN ('Medium', 'High')
-- ORDER BY r.credit_score ASC;

-- Q4: Average processing time by channel
-- SELECT application_channel,
--        ROUND(AVG(EXTRACT(EPOCH FROM (updated_at - application_date))/86400), 1) as avg_days
-- FROM application
-- WHERE onboarding_status = 'Completed'
-- GROUP BY application_channel;

-- ============================================================
-- End of Schema
-- ============================================================
