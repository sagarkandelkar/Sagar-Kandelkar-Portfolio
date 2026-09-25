# Data Dictionary — BFSI Data Analysis

## analysis_requests.csv

| Field | Type | Description |
|-------|------|-------------|
| request_id | VARCHAR | Unique request identifier |
| request_type | VARCHAR | Ad-hoc, Scheduled, Predictive |
| business_unit | VARCHAR | Retail, Corporate, Risk, Operations |
| dataset_size_mb | INT | Data volume |
| tools_used | VARCHAR | SQL, Python, Excel, Tableau |
| turnaround_days | INT | Days to deliver |
| business_value_inr | DECIMAL | Estimated business impact |
| status | VARCHAR | Completed, In Progress, Cancelled |

## data_quality_metrics.csv

| Field | Type | Description |
|-------|------|-------------|
| table_name | VARCHAR | Database table name |
| total_records | INT | Row count |
| completeness_pct | DECIMAL | % of non-null values |
| accuracy_pct | DECIMAL | % of correct values |
| freshness_days | INT | Days since last update |
| last_checked | DATE | Quality check date |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
