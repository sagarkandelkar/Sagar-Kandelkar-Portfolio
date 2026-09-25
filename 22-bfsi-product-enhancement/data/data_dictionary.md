# Data Dictionary — BFSI Product Enhancement

## product_features.csv

| Field | Type | Description |
|-------|------|-------------|
| feature_id | VARCHAR | Unique feature identifier |
| product_name | VARCHAR | Parent product |
| feature_name | VARCHAR | Feature description |
| priority | VARCHAR | Must, Should, Could |
| development_effort_days | INT | Estimated effort |
| adoption_rate_pct | DECIMAL | % of users adopting |
| satisfaction_score | DECIMAL | User rating (1–5) |
| launch_date | DATE | Release date |
| status | VARCHAR | Planned, In Dev, Live, Retired |

## product_releases.csv

| Field | Type | Description |
|-------|------|-------------|
| release_id | VARCHAR | Unique release identifier |
| product_name | VARCHAR | Product name |
| version | VARCHAR | Version number |
| release_date | DATE | Launch date |
| features_count | INT | Features in release |
| bugs_reported | INT | Post-launch bugs |
| bugs_fixed | INT | Bugs resolved |
| customer_feedback_score | DECIMAL | Avg feedback (1–5) |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
