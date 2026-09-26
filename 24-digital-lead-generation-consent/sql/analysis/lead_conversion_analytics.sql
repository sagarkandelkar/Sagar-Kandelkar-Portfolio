-- ============================================================
-- Lead Conversion Analytics
-- Purpose: Analytical queries for Digital Lead Generation Platform
-- Author: Sagar Kandelkar
-- ============================================================

-- ------------------------------------------------------------
-- 1. Daily Lead Funnel Performance
-- ------------------------------------------------------------
WITH daily_metrics AS (
    SELECT
        DATE_TRUNC('day', l.captured_at) AS date,
        COUNT(DISTINCT l.lead_id) FILTER (WHERE l.status IN ('CAPTURED','SCORED','ROUTED','CONTACTED','ENGAGED','APPLIED')) AS total_leads,
        COUNT(DISTINCT l.lead_id) FILTER (WHERE l.status IN ('SCORED','ROUTED','CONTACTED','ENGAGED','APPLIED')) AS scored_leads,
        COUNT(DISTINCT l.lead_id) FILTER (WHERE l.status IN ('CONTACTED','ENGAGED','APPLIED')) AS contacted_leads,
        COUNT(DISTINCT l.lead_id) FILTER (WHERE l.status = 'APPLIED') AS converted_leads
    FROM leads l
    WHERE l.is_test = FALSE
      AND l.captured_at >= CURRENT_DATE - INTERVAL '30 days'
    GROUP BY DATE_TRUNC('day', l.captured_at)
)
SELECT
    date,
    total_leads,
    scored_leads,
    contacted_leads,
    converted_leads,
    ROUND(100.0 * scored_leads / NULLIF(total_leads, 0), 2) AS scoring_rate_pct,
    ROUND(100.0 * contacted_leads / NULLIF(scored_leads, 0), 2) AS contact_rate_pct,
    ROUND(100.0 * converted_leads / NULLIF(contacted_leads, 0), 2) AS conversion_rate_pct,
    ROUND(100.0 * converted_leads / NULLIF(total_leads, 0), 2) AS overall_conversion_pct
FROM daily_metrics
ORDER BY date DESC;

-- ------------------------------------------------------------
-- 2. Lead Score Distribution by Tier
-- ------------------------------------------------------------
SELECT
    ls.tier,
    COUNT(*) AS lead_count,
    ROUND(AVG(ls.composite_score), 1) AS avg_composite,
    ROUND(AVG(ls.behavioral_score), 1) AS avg_behavioral,
    ROUND(AVG(ls.demographic_score), 1) AS avg_demographic,
    ROUND(AVG(ls.propensity_score), 1) AS avg_propensity,
    MIN(ls.composite_score) AS min_score,
    MAX(ls.composite_score) AS max_score
FROM lead_scores ls
JOIN leads l ON ls.lead_id = l.lead_id
WHERE l.is_test = FALSE
GROUP BY ls.tier
ORDER BY avg_composite DESC;

-- ------------------------------------------------------------
-- 3. Consent Opt-In Rates by Category
-- ------------------------------------------------------------
SELECT
    cl.consent_type,
    COUNT(DISTINCT cl.anonymous_id) AS total_prompted,
    COUNT(DISTINCT cl.anonymous_id) FILTER (WHERE cl.granted = TRUE) AS opt_in_count,
    COUNT(DISTINCT cl.anonymous_id) FILTER (WHERE cl.granted = FALSE) AS opt_out_count,
    COUNT(DISTINCT cl.anonymous_id) FILTER (WHERE cl.timestamp_withdrawn IS NOT NULL) AS withdrew_count,
    ROUND(100.0 * COUNT(DISTINCT cl.anonymous_id) FILTER (WHERE cl.granted = TRUE)
          / NULLIF(COUNT(DISTINCT cl.anonymous_id), 0), 2) AS opt_in_rate_pct
FROM consent_log cl
WHERE cl.timestamp_granted >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY cl.consent_type
ORDER BY opt_in_rate_pct DESC;

-- ------------------------------------------------------------
-- 4. Outreach Performance by Channel
-- ------------------------------------------------------------
SELECT
    o.channel,
    COUNT(*) AS total_sent,
    COUNT(*) FILTER (WHERE o.status = 'DELIVERED') AS delivered,
    COUNT(*) FILTER (WHERE o.opened_at IS NOT NULL) AS opened,
    COUNT(*) FILTER (WHERE o.clicked_at IS NOT NULL) AS clicked,
    COUNT(*) FILTER (WHERE o.responded_at IS NOT NULL) AS responded,
    ROUND(100.0 * COUNT(*) FILTER (WHERE o.delivered_at IS NOT NULL) / NULLIF(COUNT(*), 0), 2) AS delivery_rate,
    ROUND(100.0 * COUNT(*) FILTER (WHERE o.opened_at IS NOT NULL) / NULLIF(COUNT(*), 0), 2) AS open_rate,
    ROUND(100.0 * COUNT(*) FILTER (WHERE o.clicked_at IS NOT NULL) / NULLIF(COUNT(*), 0), 2) AS ctr,
    ROUND(100.0 * COUNT(*) FILTER (WHERE o.responded_at IS NOT NULL) / NULLIF(COUNT(*), 0), 2) AS response_rate
FROM outreach_attempts o
WHERE o.sent_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY o.channel
ORDER BY response_rate DESC;

-- ------------------------------------------------------------
-- 5. Hot Lead Pipeline (Actionable for Sales Managers)
-- ------------------------------------------------------------
SELECT
    l.lead_id,
    l.anonymous_id,
    l.product_interest,
    l.preferred_channel,
    l.captured_at,
    ls.composite_score,
    ls.tier,
    ls.calculated_at,
    CASE
        WHEN ls.tier = 'HOT' AND AGE(NOW(), l.captured_at) < INTERVAL '2 hours' THEN 'WITHIN_SLA'
        WHEN ls.tier = 'HOT' AND AGE(NOW(), l.captured_at) >= INTERVAL '2 hours' THEN 'SLA_BREACH'
        WHEN ls.tier = 'WARM' AND AGE(NOW(), l.captured_at) < INTERVAL '24 hours' THEN 'WITHIN_SLA'
        WHEN ls.tier = 'WARM' AND AGE(NOW(), l.captured_at) >= INTERVAL '24 hours' THEN 'SLA_BREACH'
        ELSE 'N/A'
    END AS sla_status
FROM leads l
JOIN lead_scores ls ON l.lead_id = ls.lead_id
WHERE l.status IN ('CAPTURED', 'SCORED', 'ROUTED')
  AND l.is_test = FALSE
  AND ls.calculated_at = (
      SELECT MAX(calculated_at)
      FROM lead_scores ls2
      WHERE ls2.lead_id = l.lead_id
  )
ORDER BY ls.composite_score DESC, l.captured_at ASC
LIMIT 100;

-- ------------------------------------------------------------
-- 6. Product-Level Conversion Attribution
-- ------------------------------------------------------------
SELECT
    l.product_interest,
    COUNT(DISTINCT l.lead_id) AS total_leads,
    COUNT(DISTINCT l.lead_id) FILTER (WHERE ls.tier = 'HOT') AS hot_leads,
    COUNT(DISTINCT l.lead_id) FILTER (WHERE l.status = 'APPLIED') AS conversions,
    ROUND(AVG(ls.composite_score), 1) AS avg_score,
    ROUND(100.0 * COUNT(DISTINCT l.lead_id) FILTER (WHERE l.status = 'APPLIED')
          / NULLIF(COUNT(DISTINCT l.lead_id), 0), 2) AS conversion_rate_pct
FROM leads l
LEFT JOIN lead_scores ls ON l.lead_id = ls.lead_id
WHERE l.is_test = FALSE
  AND l.captured_at >= CURRENT_DATE - INTERVAL '90 days'
GROUP BY l.product_interest
ORDER BY conversion_rate_pct DESC;
