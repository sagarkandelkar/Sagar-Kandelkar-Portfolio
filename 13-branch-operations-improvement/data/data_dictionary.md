# Data Dictionary — Branch Operations Improvement

## branch_operations.csv

| Field | Type | Description |
|-------|------|-------------|
| branch_id | VARCHAR | Unique branch identifier |
| branch_name | VARCHAR | Branch name |
| city | VARCHAR | Location |
| staff_count | INT | Number of employees |
| daily_transactions | INT | Avg daily transaction volume |
| avg_wait_time_minutes | INT | Average customer wait time |
| paper_usage_sheets | INT | Daily paper consumption |
| cross_sell_attempts | INT | Daily cross-sell offers |
| cross_sell_success | INT | Daily successful cross-sells |
| customer_satisfaction | DECIMAL | Avg rating (1–5) |
| operational_cost_inr | DECIMAL | Monthly operational cost |

## customer_feedback.csv

| Field | Type | Description |
|-------|------|-------------|
| feedback_id | VARCHAR | Unique identifier |
| branch_id | VARCHAR | Branch reference |
| feedback_date | DATE | Date of feedback |
| satisfaction_score | INT | 1–5 rating |
| wait_time_rating | INT | 1–5 rating |
| staff_knowledge_rating | INT | 1–5 rating |
| would_recommend | VARCHAR | Yes/No |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
