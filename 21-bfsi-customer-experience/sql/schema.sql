-- BFSI Customer Experience Schema
-- Portfolio Case Study -- Synthetic Data

CREATE TABLE customer_journeys (
    journey_id VARCHAR(20) PRIMARY KEY,
    customer_id VARCHAR(20) NOT NULL,
    touchpoint VARCHAR(100) NOT NULL,
    channel VARCHAR(30),
    emotion_score INT CHECK (emotion_score BETWEEN 1 AND 10),
    effort_score INT CHECK (effort_score BETWEEN 1 AND 10),
    satisfaction DECIMAL(3,2),
    journey_date DATE
);

CREATE TABLE nps_tracking (
    month_id VARCHAR(10) PRIMARY KEY,
    survey_date DATE,
    promoters INT,
    passives INT,
    detractors INT,
    nps_score INT,
    response_rate_pct DECIMAL(5,2)
);

CREATE VIEW v_nps_trend AS
SELECT
    month_id,
    nps_score,
    ROUND(promoters * 100.0 / (promoters + passives + detractors), 2) AS promoter_pct,
    ROUND(detractors * 100.0 / (promoters + passives + detractors), 2) AS detractor_pct
FROM nps_tracking
ORDER BY month_id;
