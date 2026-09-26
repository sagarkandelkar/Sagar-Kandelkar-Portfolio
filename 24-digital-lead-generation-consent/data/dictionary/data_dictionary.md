# Data Dictionary
## Digital Lead Generation & Consent Management Platform

---

## Table: `customers`

| Column | Data Type | Nullable | Description | Example |
|--------|-----------|----------|-------------|---------|
| customer_id | UUID | No | Primary key | `550e8400-e29b-41d4-a716-446655440000` |
| phone | VARCHAR(15) | No | Unique mobile number | `+917276693523` |
| email | VARCHAR(255) | Yes | Unique email | `sagar.kandelkar@example.com` |
| first_name | VARCHAR(100) | Yes | First name | `Sagar` |
| last_name | VARCHAR(100) | Yes | Last name | `Kandelkar` |
| date_of_birth | DATE | Yes | DOB | `1995-03-15` |
| gender | CHAR(1) | Yes | M/F/O | `M` |
| income_bracket | VARCHAR(20) | Yes | Income range | `8-15LPA` |
| employment_type | VARCHAR(30) | Yes | Employment class | `SALARIED_MNC` |
| city | VARCHAR(100) | Yes | City | `Pune` |
| state | VARCHAR(100) | Yes | State | `Maharashtra` |
| tier | CHAR(2) | Yes | City tier | `T1` |
| existing_customer | BOOLEAN | No | Has relationship? | `TRUE` |
| created_at | TIMESTAMP | No | Creation time | `2025-09-26 10:00:00` |
| updated_at | TIMESTAMP | No | Last update | `2025-09-26 10:00:00` |

---

## Table: `leads`

| Column | Data Type | Nullable | Description | Example |
|--------|-----------|----------|-------------|---------|
| lead_id | UUID | No | Primary key | `660e8400-e29b-41d4-a716-446655440001` |
| anonymous_id | VARCHAR(50) | No | Anonymous tracking ID | `anon_a1b2c3d4e5f6` |
| customer_id | UUID | Yes | FK to customers | `550e8400...` |
| source_url | TEXT | Yes | Landing page URL | `https://bank.com/personal-loan` |
| landing_page | VARCHAR(255) | Yes | Page name | `/personal-loan` |
| product_interest | VARCHAR(50) | Yes | Product category | `PERSONAL_LOAN` |
| calculator_input | JSONB | Yes | Calculator params | `{"loan_amount": 500000}` |
| preferred_channel | VARCHAR(20) | Yes | Outreach preference | `WHATSAPP` |
| status | VARCHAR(20) | No | Lifecycle status | `SCORED` |
| captured_at | TIMESTAMP | No | Capture timestamp | `2025-09-26 10:30:00` |
| scored_at | TIMESTAMP | Yes | Scoring timestamp | `2025-09-26 10:30:15` |
| contacted_at | TIMESTAMP | Yes | First outreach | `2025-09-26 11:15:00` |
| converted_at | TIMESTAMP | Yes | Application timestamp | `2025-09-26 14:00:00` |
| is_test | BOOLEAN | No | Test data flag | `FALSE` |

---

## Table: `web_sessions`

| Column | Data Type | Nullable | Description | Example |
|--------|-----------|----------|-------------|---------|
| session_id | UUID | No | Primary key | `770e8400-e29b-41d4-a716-446655440002` |
| anonymous_id | VARCHAR(50) | No | Anonymous visitor ID | `anon_a1b2c3d4e5f6` |
| lead_id | UUID | Yes | FK to leads | `660e8400...` |
| ip_hash | VARCHAR(64) | Yes | Hashed IP | `a3f5...` |
| user_agent_hash | VARCHAR(64) | Yes | Hashed user agent | `b7e2...` |
| referrer_url | TEXT | Yes | Traffic source | `https://google.com` |
| landing_page | VARCHAR(255) | Yes | First page | `/personal-loan` |
| device_type | VARCHAR(20) | Yes | Device | `MOBILE` |
| browser | VARCHAR(50) | Yes | Browser | `Chrome` |
| os | VARCHAR(50) | Yes | OS | `Android` |
| session_start | TIMESTAMP | No | Start time | `2025-09-26 10:25:00` |
| session_end | TIMESTAMP | Yes | End time | `2025-09-26 10:35:00` |
| duration_seconds | INT | No | Session length | `600` |
| page_views | INT | No | Pages viewed | `5` |
| bounced | BOOLEAN | No | Single-page session? | `FALSE` |

---

## Table: `web_events`

| Column | Data Type | Nullable | Description | Example |
|--------|-----------|----------|-------------|---------|
| event_id | UUID | No | Primary key | `880e8400-e29b-41d4-a716-446655440003` |
| session_id | UUID | No | FK to web_sessions | `770e8400...` |
| anonymous_id | VARCHAR(50) | No | Anonymous ID | `anon_a1b2c3d4e5f6` |
| event_type | VARCHAR(30) | No | Event class | `CALCULATOR_USE` |
| event_timestamp | TIMESTAMP | No | Event time | `2025-09-26 10:28:00` |
| page_url | TEXT | Yes | Page URL | `https://bank.com/personal-loan` |
| element_id | VARCHAR(100) | Yes | HTML element | `emi_calculator_form` |
| payload | JSONB | Yes | Event data | `{"amount": 500000}` |
| points | INT | No | Scoring points | `15` |

---

## Table: `lead_scores`

| Column | Data Type | Nullable | Description | Example |
|--------|-----------|----------|-------------|---------|
| score_id | UUID | No | Primary key | `990e8400-e29b-41d4-a716-446655440004` |
| lead_id | UUID | No | FK to leads | `660e8400...` |
| composite_score | INT | No | Final score (0–100) | `81` |
| behavioral_score | INT | No | Engagement score | `70` |
| demographic_score | INT | No | Profile score | `85` |
| propensity_score | INT | No | Predictive score | `90` |
| tier | VARCHAR(10) | No | Priority class | `HOT` |
| score_version | VARCHAR(10) | No | Model version | `v2.1` |
| calculated_at | TIMESTAMP | No | Calculation time | `2025-09-26 10:30:15` |
| model_version | VARCHAR(20) | Yes | ML model version | `propensity_v1.3` |

---

## Table: `consent_log`

| Column | Data Type | Nullable | Description | Example |
|--------|-----------|----------|-------------|---------|
| consent_id | UUID | No | Primary key | `aa0e8400-e29b-41d4-a716-446655440005` |
| lead_id | UUID | Yes | FK to leads | `660e8400...` |
| anonymous_id | VARCHAR(50) | No | Anonymous ID | `anon_a1b2c3d4e5f6` |
| consent_type | VARCHAR(20) | No | Consent category | `CONS_MKT` |
| granted | BOOLEAN | No | Consent granted? | `TRUE` |
| channel | VARCHAR(20) | Yes | Capture channel | `WEB` |
| timestamp_granted | TIMESTAMP | No | Grant time | `2025-09-26 10:30:00` |
| timestamp_withdrawn | TIMESTAMP | Yes | Withdrawal time | `NULL` |
| ip_hash | VARCHAR(64) | Yes | Hashed IP | `a3f5...` |
| user_agent_hash | VARCHAR(64) | Yes | Hashed UA | `b7e2...` |
| consent_version | VARCHAR(10) | No | Framework version | `v1.0` |
| proof_reference | VARCHAR(255) | Yes | Screenshot link | `/proofs/consent_001.png` |
| withdrawal_reason | TEXT | Yes | Reason | `Too frequent messages` |

---

## Table: `outreach_attempts`

| Column | Data Type | Nullable | Description | Example |
|--------|-----------|----------|-------------|---------|
| attempt_id | UUID | No | Primary key | `bb0e8400-e29b-41d4-a716-446655440006` |
| lead_id | UUID | No | FK to leads | `660e8400...` |
| channel | VARCHAR(20) | No | Channel | `WHATSAPP` |
| message_template | VARCHAR(100) | Yes | Template name | `hot_pl_personalized_v2` |
| personalized_content | JSONB | Yes | Merge fields | `{"name": "Sagar"}` |
| sent_at | TIMESTAMP | No | Send time | `2025-09-26 11:15:00` |
| delivered_at | TIMESTAMP | Yes | Delivery time | `2025-09-26 11:15:05` |
| opened_at | TIMESTAMP | Yes | Open time | `2025-09-26 11:20:00` |
| clicked_at | TIMESTAMP | Yes | Click time | `2025-09-26 11:22:00` |
| responded_at | TIMESTAMP | Yes | Reply time | `2025-09-26 11:25:00` |
| status | VARCHAR(20) | No | Delivery status | `RESPONDED` |
| rm_id | VARCHAR(50) | Yes | RM identifier | `RM_PUNE_042` |
| notes | TEXT | Yes | Notes | `Customer interested` |

---

## Enumerations

### `product_interest`
- `PERSONAL_LOAN`
- `HOME_LOAN`
- `CREDIT_CARD`
- `INSURANCE_LIFE`
- `INSURANCE_HEALTH`
- `FIXED_DEPOSIT`
- `MUTUAL_FUND`

### `consent_type`
- `CONS_ESS` — Essential
- `CONS_ANA` — Analytics
- `CONS_MKT` — Marketing
- `CONS_PRO` — Profiling
- `CONS_3RD` — Third-Party
- `CONS_CBK` — Callback

### `tier`
- `HOT` — 80–100
- `WARM` — 60–79
- `COLD` — 40–59
- `FROZEN` — 0–39

### `status` (lead lifecycle)
- `CAPTURED`
- `SCORED`
- `ROUTED`
- `CONTACTED`
- `ENGAGED`
- `APPLIED`
- `DISQUALIFIED`
