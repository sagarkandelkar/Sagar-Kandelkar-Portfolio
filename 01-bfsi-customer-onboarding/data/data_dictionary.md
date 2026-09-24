# BFSI Customer Onboarding - Data Dictionary

## Dataset: customer_applications.csv

### Overview
This dataset contains 15 sample customer onboarding applications representing various channels, products, risk profiles, and statuses. It is designed for analysis, dashboard prototyping, and process improvement demonstrations.

### Field Definitions

| Field Name | Data Type | Description | Example |
|-----------|-----------|-------------|---------|
| application_id | VARCHAR(20) | Unique application identifier with year and sequence | APP-2026-0001 |
| customer_name | VARCHAR(100) | Full name of the applicant | Rahul Sharma |
| date_of_birth | DATE | Applicant's date of birth (DD-MM-YYYY) | 15-03-1985 |
| gender | ENUM | Gender of the applicant | Male / Female |
| email | VARCHAR(255) | Contact email address | rahul.sharma@email.com |
| phone | VARCHAR(20) | 10-digit mobile number | 9876543210 |
| address | TEXT | Residential address | Flat 101, Sunrise Apartments |
| city | VARCHAR(50) | City name | Mumbai |
| state | VARCHAR(50) | State name | Maharashtra |
| pincode | VARCHAR(10) | Postal code | 400001 |
| id_type | ENUM | Type of identity document | PAN / Aadhaar |
| id_number | VARCHAR(20) | Identity document number | ABCDE1234F |
| application_date | DATE | Date of application submission | 2026-09-01 |
| application_channel | ENUM | Submission channel | Digital / Branch |
| product_type | ENUM | Type of product applied for | Savings Account / Current Account / Fixed Deposit / Recurring Deposit |
| annual_income | DECIMAL(15,2) | Annual income in INR | 850000 |
| employment_type | VARCHAR(50) | Employment category | Salaried / Self-Employed / Business Owner / Freelancer |
| kyc_status | ENUM | KYC verification status | Verified / Pending Review |
| aml_risk_score | ENUM | Anti-Money Laundering risk classification | Low / Medium / High |
| credit_score | INT | Credit bureau score (300-900) | 780 |
| onboarding_status | ENUM | Current stage of onboarding | Completed / In Progress / On Hold / Rejected |
| remarks | TEXT | Additional notes or reasons | Address proof pending |

### Sample Data Segmentation

#### By Application Channel
| Channel | Count | Percentage |
|---------|-------|------------|
| Digital | 9 | 60% |
| Branch | 6 | 40% |

#### By Product Type
| Product | Count | Percentage |
|---------|-------|------------|
| Savings Account | 8 | 53% |
| Current Account | 3 | 20% |
| Fixed Deposit | 2 | 13% |
| Recurring Deposit | 2 | 13% |

#### By Onboarding Status
| Status | Count | Percentage |
|--------|-------|------------|
| Completed | 7 | 47% |
| In Progress | 3 | 20% |
| On Hold | 3 | 20% |
| Rejected | 1 | 7% |
| (Pending) | 1 | 6% |

#### By Risk Profile
| AML Risk | Count | Credit Score Range |
|----------|-------|-------------------|
| Low | 9 | 740-810 |
| Medium | 5 | 680-745 |
| High | 1 | 680 |

### Use Cases for Analysis

1. **Conversion Funnel**: Track applications from submission to completion
2. **Channel Performance**: Compare digital vs. branch onboarding efficiency
3. **Risk Distribution**: Analyze credit score and AML risk patterns
4. **SLA Monitoring**: Identify applications exceeding target timelines
5. **Geographic Analysis**: Distribution across cities and states

### Data Quality Notes

- All phone numbers are masked/sample (98765432xx pattern)
- Email addresses are dummy addresses for demonstration
- Income figures are representative but not actual customer data
- PAN and Aadhaar numbers are formatted correctly but are sample data

---

*Dictionary Version: 1.0*
*Created: September 2026*
*Author: Sagar Kandelkar*
