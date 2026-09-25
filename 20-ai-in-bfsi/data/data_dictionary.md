# Data Dictionary — AI in BFSI

## ai_use_cases.csv

| Field | Type | Description |
|-------|------|-------------|
| use_case_id | VARCHAR | Unique identifier |
| use_case_name | VARCHAR | AI application name |
| domain | VARCHAR | Customer Service, Credit, Fraud, Ops |
| model_type | VARCHAR | NLP, Classification, Regression, Clustering |
| accuracy_pct | DECIMAL | Model accuracy |
| deployment_status | VARCHAR | Development, Pilot, Production, Retired |
| launch_date | DATE | Go-live date |
| annual_roi_inr | DECIMAL | Annual return |

## model_performance.csv

| Field | Type | Description |
|-------|------|-------------|
| model_id | VARCHAR | Unique identifier |
| use_case_id | VARCHAR | Parent use case |
| prediction_date | DATE | Monitoring date |
| total_predictions | INT | Predictions made |
| correct_predictions | INT | Accurate predictions |
| latency_ms | INT | Response time |
| drift_detected | VARCHAR | Yes/No |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
