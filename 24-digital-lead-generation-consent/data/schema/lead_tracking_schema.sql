-- ============================================================
-- Schema: Digital Lead Generation & Consent Management Platform
-- Database: PostgreSQL 15+
-- Author: Sagar Kandelkar — Business Analyst
-- ============================================================

DROP TABLE IF EXISTS consent_log CASCADE;
DROP TABLE IF EXISTS outreach_attempts CASCADE;
DROP TABLE IF EXISTS lead_scores CASCADE;
DROP TABLE IF EXISTS web_events CASCADE;
DROP TABLE IF EXISTS web_sessions CASCADE;
DROP TABLE IF EXISTS leads CASCADE;
DROP TABLE IF EXISTS customers CASCADE;

-- ============================================================
-- 1. CUSTOMERS (Known customer master)
-- ============================================================
CREATE TABLE customers (
    customer_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone               VARCHAR(15) UNIQUE NOT NULL,
    email               VARCHAR(255) UNIQUE,
    first_name          VARCHAR(100),
    last_name           VARCHAR(100),
    date_of_birth       DATE,
    gender              CHAR(1) CHECK (gender IN ('M', 'F', 'O')),
    income_bracket      VARCHAR(20) CHECK (income_bracket IN ('<3LPA', '3-5LPA', '5-8LPA', '8-15LPA', '>15LPA')),
    employment_type     VARCHAR(30) CHECK (employment_type IN ('SALARIED_MNC', 'SALARIED_PRIVATE', 'SELF_EMPLOYED', 'STUDENT', 'RETIRED')),
    city                VARCHAR(100),
    state               VARCHAR(100),
    tier                CHAR(2) CHECK (tier IN ('T1', 'T2', 'T3')),
    existing_customer   BOOLEAN DEFAULT FALSE,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_customers_phone ON customers(phone);
CREATE INDEX idx_customers_email ON customers(email);

-- ============================================================
-- 2. LEADS (Captured intent signals)
-- ============================================================
CREATE TABLE leads (
    lead_id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    anonymous_id        VARCHAR(50) UNIQUE NOT NULL,
    customer_id         UUID REFERENCES customers(customer_id),
    source_url          TEXT,
    landing_page        VARCHAR(255),
    product_interest    VARCHAR(50) CHECK (product_interest IN ('PERSONAL_LOAN', 'HOME_LOAN', 'CREDIT_CARD', 'INSURANCE_LIFE', 'INSURANCE_HEALTH', 'FIXED_DEPOSIT', 'MUTUAL_FUND')),
    calculator_input    JSONB,
    preferred_channel   VARCHAR(20) CHECK (preferred_channel IN ('WHATSAPP', 'EMAIL', 'SMS', 'PHONE')),
    status              VARCHAR(20) DEFAULT 'CAPTURED' CHECK (status IN ('CAPTURED', 'SCORED', 'ROUTED', 'CONTACTED', 'ENGAGED', 'APPLIED', 'DISQUALIFIED')),
    captured_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    scored_at           TIMESTAMP,
    contacted_at        TIMESTAMP,
    converted_at        TIMESTAMP,
    is_test             BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_leads_anonymous_id ON leads(anonymous_id);
CREATE INDEX idx_leads_customer_id ON leads(customer_id);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_product ON leads(product_interest);
CREATE INDEX idx_leads_captured_at ON leads(captured_at);

-- ============================================================
-- 3. WEB_SESSIONS
-- ============================================================
CREATE TABLE web_sessions (
    session_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    anonymous_id        VARCHAR(50) NOT NULL,
    lead_id             UUID REFERENCES leads(lead_id),
    ip_hash             VARCHAR(64),
    user_agent_hash     VARCHAR(64),
    referrer_url        TEXT,
    landing_page        VARCHAR(255),
    device_type         VARCHAR(20) CHECK (device_type IN ('DESKTOP', 'MOBILE', 'TABLET')),
    browser             VARCHAR(50),
    os                  VARCHAR(50),
    session_start       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    session_end         TIMESTAMP,
    duration_seconds    INT DEFAULT 0,
    page_views          INT DEFAULT 0,
    bounced             BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_web_sessions_anonymous ON web_sessions(anonymous_id);
CREATE INDEX idx_web_sessions_lead ON web_sessions(lead_id);

-- ============================================================
-- 4. WEB_EVENTS
-- ============================================================
CREATE TABLE web_events (
    event_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id          UUID NOT NULL REFERENCES web_sessions(session_id),
    anonymous_id        VARCHAR(50) NOT NULL,
    event_type          VARCHAR(30) NOT NULL CHECK (event_type IN ('PAGE_VIEW', 'SCROLL_DEPTH', 'TIME_ON_PAGE', 'CALCULATOR_USE', 'EXIT_INTENT', 'CTA_CLICK', 'FORM_START', 'FORM_ABANDON', 'DOCUMENT_DOWNLOAD', 'COMPARISON_TOOL')),
    event_timestamp     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    page_url            TEXT,
    element_id          VARCHAR(100),
    payload             JSONB,
    points              INT DEFAULT 0
);

CREATE INDEX idx_web_events_session ON web_events(session_id);
CREATE INDEX idx_web_events_type ON web_events(event_type);

-- ============================================================
-- 5. LEAD_SCORES
-- ============================================================
CREATE TABLE lead_scores (
    score_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id             UUID NOT NULL REFERENCES leads(lead_id),
    composite_score     INT CHECK (composite_score BETWEEN 0 AND 100),
    behavioral_score    INT CHECK (behavioral_score BETWEEN 0 AND 100),
    demographic_score   INT CHECK (demographic_score BETWEEN 0 AND 100),
    propensity_score    INT CHECK (propensity_score BETWEEN 0 AND 100),
    tier                VARCHAR(10) CHECK (tier IN ('HOT', 'WARM', 'COLD', 'FROZEN')),
    score_version       VARCHAR(10) DEFAULT 'v1.0',
    calculated_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    model_version       VARCHAR(20)
);

CREATE INDEX idx_lead_scores_lead ON lead_scores(lead_id);
CREATE INDEX idx_lead_scores_tier ON lead_scores(tier);
CREATE INDEX idx_lead_scores_composite ON lead_scores(composite_score);

-- ============================================================
-- 6. CONSENT_LOG
-- ============================================================
CREATE TABLE consent_log (
    consent_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id             UUID REFERENCES leads(lead_id),
    anonymous_id        VARCHAR(50) NOT NULL,
    consent_type        VARCHAR(20) NOT NULL CHECK (consent_type IN ('CONS_ESS', 'CONS_ANA', 'CONS_MKT', 'CONS_PRO', 'CONS_3RD', 'CONS_CBK')),
    granted             BOOLEAN NOT NULL,
    channel             VARCHAR(20) CHECK (channel IN ('WEB', 'APP', 'BRANCH', 'CALL', 'EMAIL')),
    timestamp_granted   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    timestamp_withdrawn TIMESTAMP,
    ip_hash             VARCHAR(64),
    user_agent_hash     VARCHAR(64),
    consent_version     VARCHAR(10) DEFAULT 'v1.0',
    proof_reference     VARCHAR(255),
    withdrawal_reason   TEXT
);

CREATE INDEX idx_consent_lead ON consent_log(lead_id);
CREATE INDEX idx_consent_type ON consent_log(consent_type);
CREATE INDEX idx_consent_granted ON consent_log(granted);

-- ============================================================
-- 7. OUTREACH_ATTEMPTS
-- ============================================================
CREATE TABLE outreach_attempts (
    attempt_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    lead_id             UUID NOT NULL REFERENCES leads(lead_id),
    channel             VARCHAR(20) NOT NULL CHECK (channel IN ('WHATSAPP', 'EMAIL', 'SMS', 'PHONE')),
    message_template    VARCHAR(100),
    personalized_content JSONB,
    sent_at             TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    delivered_at        TIMESTAMP,
    opened_at           TIMESTAMP,
    clicked_at          TIMESTAMP,
    responded_at        TIMESTAMP,
    status              VARCHAR(20) DEFAULT 'SENT' CHECK (status IN ('SENT', 'DELIVERED', 'OPENED', 'CLICKED', 'RESPONDED', 'BOUNCED', 'FAILED')),
    rm_id               VARCHAR(50),
    notes               TEXT
);

CREATE INDEX idx_outreach_lead ON outreach_attempts(lead_id);
CREATE INDEX idx_outreach_channel ON outreach_attempts(channel);
CREATE INDEX idx_outreach_status ON outreach_attempts(status);

-- ============================================================
-- 8. TRIGGER: Auto-update lead status on score insert
-- ============================================================
CREATE OR REPLACE FUNCTION update_lead_status_on_score()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE leads
    SET status = 'SCORED',
        scored_at = NEW.calculated_at
    WHERE lead_id = NEW.lead_id
      AND status = 'CAPTURED';
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_lead_status
AFTER INSERT ON lead_scores
FOR EACH ROW
EXECUTE FUNCTION update_lead_status_on_score();

-- ============================================================
-- 9. TRIGGER: Auto-update lead status on outreach contact
-- ============================================================
CREATE OR REPLACE FUNCTION update_lead_status_on_contact()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE leads
    SET status = 'CONTACTED',
        contacted_at = NEW.sent_at
    WHERE lead_id = NEW.lead_id
      AND status IN ('CAPTURED', 'SCORED', 'ROUTED');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_update_lead_on_contact
AFTER INSERT ON outreach_attempts
FOR EACH ROW
EXECUTE FUNCTION update_lead_status_on_contact();
