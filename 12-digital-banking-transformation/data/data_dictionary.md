# Data Dictionary — Digital Banking Transformation

## transformation_metrics.csv

| Field | Type | Description |
|-------|------|-------------|
| metric_id | INT | Unique identifier |
| phase | VARCHAR | Strategy, Migration, Integration, Testing, Rollout |
| metric_name | VARCHAR | Name of tracking metric |
| baseline_value | VARCHAR | Starting measurement |
| target_value | VARCHAR | Goal measurement |
| actual_value | VARCHAR | Current measurement |
| status | VARCHAR | On Track, At Risk, Delayed |
| measurement_date | DATE | Date of measurement |

## legacy_systems.csv

| Field | Type | Description |
|-------|------|-------------|
| system_id | VARCHAR | Unique identifier |
| system_name | VARCHAR | Legacy system name |
| system_type | VARCHAR | Core Banking, CRM, Reporting, etc. |
| criticality | VARCHAR | High, Medium, Low |
| migration_status | VARCHAR | Planned, In Progress, Completed, Retired |
| retirement_date | DATE | Target retirement |
| replacement_system | VARCHAR | New system name |

---

*Portfolio Case Study — Synthetic Data | Analyst: Sagar Kandelkar*
