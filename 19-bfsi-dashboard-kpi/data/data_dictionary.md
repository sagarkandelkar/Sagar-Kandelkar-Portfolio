# Data Dictionary — BFSI Dashboard & KPI

## kpi_definitions.csv

| Field | Type | Description |
|-------|------|-------------|
| kpi_id | VARCHAR | Unique KPI identifier |
| category | VARCHAR | Financial, Operational, Customer, Risk |
| metric_name | VARCHAR | KPI name |
| formula | TEXT | Calculation logic |
| unit | VARCHAR | %, INR, Count, Days |
| threshold_red | DECIMAL | Alert threshold (red) |
| threshold_amber | DECIMAL | Warning threshold (amber) |
| owner | VARCHAR | Metric owner |
| refresh_frequency | VARCHAR | Real-time, Daily, Weekly, Monthly |

## dashboard_usage.csv

| Field | Type | Description |
|-------|------|-------------|
| usage_id | INT | Unique record |
| dashboard_name | VARCHAR | Dashboard name |
| user_role | VARCHAR | Executive, Manager, Analyst |
| access_date | DATE | Access date |
| views_count | INT | Page views |
| export_count | INT | Exports/downloads |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
