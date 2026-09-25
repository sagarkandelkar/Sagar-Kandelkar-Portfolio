# Data Dictionary — BFSI Customer Experience

## customer_journeys.csv

| Field | Type | Description |
|-------|------|-------------|
| journey_id | VARCHAR | Unique journey record |
| customer_id | VARCHAR | Customer reference |
| touchpoint | VARCHAR | Specific interaction point |
| channel | VARCHAR | Branch, App, Phone, Web |
| emotion_score | INT | 1–10 emotional rating |
| effort_score | INT | 1–10 effort rating |
| satisfaction | DECIMAL | Overall satisfaction (1–5) |
| journey_date | DATE | Interaction date |

## nps_tracking.csv

| Field | Type | Description |
|-------|------|-------------|
| month_id | VARCHAR | YYYY-MM format |
| survey_date | DATE | Survey period |
| promoters | INT | 9–10 score count |
| passives | INT | 7–8 score count |
| detractors | INT | 0–6 score count |
| nps_score | INT | Net Promoter Score |
| response_rate_pct | DECIMAL | % of customers responded |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
