# Data Quality Assessment Report

> **Project:** Retail Banking Analytics
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Author:** Sagar Kandelkar

---

## Executive Summary

| Metric | Score | Status |
|--------|-------|--------|
| **Overall Data Quality Score** | **78.4 / 100** | 🟡 Acceptable |
| Completeness | 82% | 🟡 |
| Accuracy | 91% | 🟢 |
| Consistency | 71% | 🟡 |
| Timeliness | 88% | 🟢 |
| Uniqueness | 64% | 🔴 |
| Validity | 79% | 🟡 |

**Recommendation:** Address uniqueness (duplicate customers) and consistency (branch code standards) before deploying customer segmentation models.

---

## Data Profiling Results

### Dataset: `customer_master` (1.2M records)

| Field | Type | Nulls | Null % | Min | Max | Distinct | Most Common Value |
|-------|------|-------|--------|-----|-----|----------|-------------------|
| customer_id | VARCHAR | 0 | 0% | C000001 | C1200000 | 1,200,000 | Unique |
| first_name | VARCHAR | 2,400 | 0.2% | — | — | 89,450 | "Rajesh" (4,200) |
| last_name | VARCHAR | 1,800 | 0.15% | — | — | 156,200 | "Patel" (3,100) |
| date_of_birth | DATE | 12,000 | 1.0% | 1924-01-01 | 2006-12-31 | 18,250 | 1990-05-15 |
| pan_number | VARCHAR | 8,400 | 0.7% | — | — | 1,191,600 | — |
| mobile_number | VARCHAR | 4,200 | 0.35% | — | — | 1,195,800 | +91-98XXXX |
| email | VARCHAR | 156,000 | 13% | — | — | 1,044,000 | — |
| branch_code | VARCHAR | 0 | 0% | — | — | 450 | "BR-MUM-001" |
| account_opening_date | DATE | 0 | 0% | 1995-01-01 | 2024-12-31 | 10,950 | — |
| customer_segment | ENUM | 24,000 | 2.0% | — | — | 5 | "Retail" (680K) |

---

## Data Quality Dimensions — Detailed Analysis

### 1. Completeness (82%)

| Field | Missing | Impact | Root Cause | Remediation |
|-------|---------|--------|------------|-------------|
| email | 156,000 (13%) | Marketing campaigns can't reach | Older accounts opened before email mandate | Bulk email collection drive |
| customer_segment | 24,000 (2%) | Segmentation model fails | Migration issue from legacy system | Backfill via transaction behavior |
| date_of_birth | 12,000 (1%) | Age-based products blocked | Data entry skipped | KYC re-verification |
| pan_number | 8,400 (0.7%) | Tax reporting non-compliant | Non-resident accounts | Exclude from PAN-mandatory reports |

**Completeness Score:** 82% — Target: 95%

---

### 2. Accuracy (91%)

| Check | Sample Size | Errors | Error Rate | Severity |
|-------|-------------|--------|------------|----------|
| PAN format validation (ABCDE1234F) | 100,000 | 1,200 | 1.2% | Medium |
| Mobile number length (10 digits) | 100,000 | 340 | 0.34% | Low |
| Email format validation | 100,000 | 2,100 | 2.1% | Medium |
| DOB > account opening date | 100,000 | 85 | 0.085% | High |
| Branch code exists in master | 100,000 | 0 | 0% | — |

**Accuracy Score:** 91% — Target: 98%

---

### 3. Consistency (71%)

| Issue | Example | Records Affected | Fix Strategy |
|-------|---------|------------------|--------------|
| Branch code format variations | "BR-MUM-001" vs "MUM001" vs "Mumbai-01" | 45,000 | Standardize to "BR-XXX-NNN" |
| Customer name casing | "rajesh" vs "RAJESH" vs "Rajesh" | 120,000 | Uppercase standardization |
| Date formats | "DD/MM/YYYY" vs "YYYY-MM-DD" | 8,000 | ISO 8601 enforcement |
| Mobile prefix | "+91-" vs "91-" vs "0" vs none | 89,000 | Strip and reformat to +91-XXXXXXXXXX |
| Segment values | "Retail" vs "retail" vs "R" | 12,000 | Controlled vocabulary |

**Consistency Score:** 71% — Target: 90%

---

### 4. Timeliness (88%)

| Table | Last Updated | Expected Frequency | Status |
|-------|--------------|---------------------|--------|
| customer_master | 2024-12-15 | Daily | ✅ Current |
| transaction_log | 2024-12-15 | Real-time | ✅ Current |
| product_holdings | 2024-12-10 | Daily | ⚠️ 5 days stale |
| risk_rating | 2024-11-28 | Weekly | 🔴 17 days stale |
| campaign_responses | 2024-12-01 | Daily | 🔴 14 days stale |

**Timeliness Score:** 88% — Target: 95%

---

### 5. Uniqueness (64%) 🔴 CRITICAL

| Issue | Duplicate Count | Root Cause | Business Impact |
|-------|---------------|------------|-----------------|
| Same customer, multiple IDs | 18,000 pairs | Re-opened account after closure | Single view of customer broken |
| Same mobile, different IDs | 34,000 pairs | Joint account holders counted as separate | Contact frequency exceeded |
| Same PAN, different IDs | 12,000 pairs | System migration created duplicates | Regulatory reporting inflated |

**Uniqueness Score:** 64% — Target: 99%

**Resolution Plan:**
1. Match on PAN → Merge records (primary: oldest account)
2. Match on mobile + DOB → Manual review queue
3. Deploy MDM (Master Data Management) golden record

---

### 6. Validity (79%)

| Rule | Violations | Violation Rate | Action |
|------|------------|----------------|--------|
| DOB must be ≥ 18 years ago | 2,400 minors | 0.2% | Flag for guardian verification |
| PAN must be alphanumeric 10 chars | 8,400 malformed | 0.7% | Reject + request correction |
| Email domain must be valid | 24,000 invalid | 2% | Soft bounce + re-request |
| Account opening date ≤ today | 0 | 0% | ✅ Pass |
| Customer segment in allowed values | 12,000 unknown | 1% | Map via transaction behavior |

**Validity Score:** 79% — Target: 95%

---

## Data Quality Dashboard — Summary

```
Dimension       Score    Target    Gap     Priority
───────────────────────────────────────────────────
Completeness    ████░░░░░  82%     95%    -13%     P2
Accuracy        ████████░░ 91%     98%     -7%     P3
Consistency     ████▓░░░░░ 71%     90%    -19%     P1
Timeliness      ███████▓░░ 88%     95%     -7%     P3
Uniqueness      ███▓░░░░░░ 64%     99%    -35%     P1 🔴
Validity        █████▓░░░░ 79%     95%    -16%     P2
───────────────────────────────────────────────────
OVERALL         █████▓░░░░ 78.4%   90%    -11.6%
```

---

## Remediation Roadmap

| Priority | Action | Owner | Effort | Timeline | Impact |
|----------|--------|-------|--------|----------|--------|
| P1 | Deploy MDM for customer deduplication | Data Architect | 6 weeks | Jan–Feb | +35% uniqueness |
| P1 | Standardize branch code master | Data Steward | 2 weeks | Jan | +19% consistency |
| P2 | Bulk email collection campaign | Marketing Ops | 4 weeks | Jan–Feb | +13% completeness |
| P2 | Controlled vocab for customer_segment | BA | 1 week | Jan | +16% validity |
| P3 | PAN validation at source | IT Dev | 2 weeks | Feb | +7% accuracy |
| P3 | Refresh risk_rating pipeline | Data Engineer | 1 week | Jan | +7% timeliness |

---

## SQL Data Quality Check Queries

### Duplicate Customer Detection
```sql
SELECT pan_number, COUNT(DISTINCT customer_id) AS id_count,
       STRING_AGG(customer_id, ', ') AS customer_ids
FROM customer_master
WHERE pan_number IS NOT NULL
GROUP BY pan_number
HAVING COUNT(DISTINCT customer_id) > 1
ORDER BY id_count DESC;
```

### Completeness Score by Field
```sql
SELECT 
    'email' AS field,
    ROUND(100.0 * COUNT(*) FILTER (WHERE email IS NOT NULL) / COUNT(*), 2) AS completeness_pct
FROM customer_master
UNION ALL
SELECT 'customer_segment', 
    ROUND(100.0 * COUNT(*) FILTER (WHERE customer_segment IS NOT NULL) / COUNT(*), 2)
FROM customer_master;
```

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
