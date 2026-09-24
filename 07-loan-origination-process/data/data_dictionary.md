# Loan Origination — Data Dictionary

## loan_applications.csv

| Field | Type | Description |
|-------|------|-------------|
| application_id | string | Unique application identifier |
| customer_id | string | Foreign key to customer |
| application_date | date | Date of application |
| loan_type | string | Home Loan / Personal Loan / Car Loan / Education Loan |
| loan_amount | decimal | Requested loan amount in INR |
| tenure_months | integer | Loan tenure in months |
| employment_type | string | Salaried / Self-Employed / Freelancer / Business Owner |
| monthly_income | integer | Gross monthly income |
| existing_emi | integer | Existing monthly EMI obligations |
| application_channel | string | Mobile / Web / Branch |
| status | enum | approved / rejected / pending |
| approval_date | date | Date of approval/rejection |
| sanction_amount | decimal | Approved loan amount |
| interest_rate | decimal | Annual interest rate % |
| processing_fee | decimal | Processing fee in INR |

## credit_appraisal.csv

| Field | Type | Description |
|-------|------|-------------|
| appraisal_id | string | Unique appraisal record |
| application_id | string | Foreign key to application |
| customer_id | string | Foreign key to customer |
| credit_score | integer | CIBIL score (300-900) |
| dti_ratio | decimal | Debt-to-Income ratio % |
| ltv_ratio | decimal | Loan-to-Value ratio % (for secured loans) |
| foir_percent | decimal | Fixed Obligation to Income Ratio % |
| bureau_inquiries_6m | integer | Credit bureau inquiries in last 6 months |
| property_valuation | decimal | Property value for secured loans |
| appraisal_status | enum | approved / rejected / pending |
| risk_grade | enum | A / B / C / D |
| rejection_reason | string | Reason for rejection |

## disbursements.csv

| Field | Type | Description |
|-------|------|-------------|
| disbursement_id | string | Unique disbursement record |
| application_id | string | Foreign key to application |
| customer_id | string | Foreign key to customer |
| disbursement_date | date | Date of fund transfer |
| disbursement_amount | decimal | Actual amount disbursed |
| disbursement_mode | string | NEFT / RTGS / IMPS |
| first_emi_date | date | First EMI due date |
| emi_amount | decimal | Monthly EMI in INR |
| loan_account_number | string | Unique loan account |
| status | enum | active / closed / npa |

---

*All data is synthetic and self-created for portfolio demonstration.*
