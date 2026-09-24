# Insurance Claims — Data Dictionary

## claims.csv

| Field | Type | Description |
|-------|------|-------------|
| claim_id | string | Unique claim identifier |
| policyholder_id | string | Foreign key to policyholder |
| policy_number | string | Insurance policy number |
| claim_date | date | Date claim was registered |
| claim_type | string | Property / Medical / Motor |
| claim_amount | decimal | Claimed amount in INR |
| incident_date | date | Date of incident |
| incident_description | string | Description of incident |
| status | enum | approved / rejected / pending |
| survey_date | date | Date of survey |
| approved_amount | decimal | Approved settlement amount |
| settlement_date | date | Date of settlement |
| settlement_mode | string | NEFT / IMPS |
| tat_days | integer | Turnaround time in days |

## policyholders.csv

| Field | Type | Description |
|-------|------|-------------|
| policyholder_id | string | Unique identifier |
| policyholder_name | string | Full name |
| email | string | Email address |
| phone | string | Mobile number |
| policy_type | string | Home / Health / Motor |
| policy_start_date | date | Policy start |
| policy_end_date | date | Policy end |
| sum_insured | decimal | Coverage amount |
| premium_amount | decimal | Annual premium |
| claims_count | integer | Number of claims filed |
| claims_history | enum | good / average / poor |

## assessments.csv

| Field | Type | Description |
|-------|------|-------------|
| assessment_id | string | Unique assessment record |
| claim_id | string | Foreign key to claim |
| surveyor_name | string | Assigned surveyor |
| survey_date | date | Survey date |
| damage_estimate | decimal | Estimated damage amount |
| depreciation_percent | decimal | Depreciation applied |
| net_payable | decimal | Net payable after depreciation |
| surveyor_remarks | string | Surveyor notes |
| approved_by | string | Approving manager |

---

*All data is synthetic and self-created for portfolio demonstration.*
