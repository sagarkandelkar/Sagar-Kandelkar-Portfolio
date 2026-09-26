# Consent Management Matrix

## 1. Overview

This document defines the **granular consent framework** for the Digital Lead Generation Platform. It ensures all customer data collection, profiling, and outreach activities are performed only with documented, revocable consent — aligned with RBI guidelines, TRAI regulations, and GDPR principles.

---

## 2. Consent Categories

| Category | Code | Description | Default State |
|----------|------|-------------|---------------|
| **Essential** | CONS_ESS | Required for service delivery (login, transaction alerts) | Mandatory |
| **Analytics** | CONS_ANA | Anonymous browsing behavior, session recording | Opt-Out |
| **Marketing** | CONS_MKT | Promotional offers, product launches, cross-sell | Opt-In |
| **Profiling** | CONS_PRO | Behavioral scoring, propensity modeling | Opt-In |
| **Third-Party** | CONS_3RD | Data sharing with partner insurers, NBFCs | Opt-In |
| **Callback** | CONS_CBK | Consent for RM to initiate phone call | Opt-In |

---

## 3. Consent Lifecycle

```
User Lands on Website
    │
    ├── First Visit → Cookie Banner (Layer 1)
    │                    ├─ Accept All
    │                    ├─ Reject All (Essential only)
    │                    └─ Manage Preferences (Layer 2)
    │
    ├── User Uses Calculator → "Save calculation? We'll remind you."
    │                            ├─ Yes + Preferred Channel
    │                            └─ No, continue anonymously
    │
    └── Exit Intent → "Get the best rate sent to you."
                        ├─ Enter Email/WhatsApp → CONS_MKT + CONS_CBK captured
                        └─ Close → No data stored
```

---

## 4. Storage Schema

| Field | Type | Description |
|-------|------|-------------|
| `consent_id` | UUID | Unique identifier |
| `customer_id` | VARCHAR | Anonymous ID or known customer ID |
| `consent_type` | ENUM | CONS_ESS / CONS_ANA / CONS_MKT / CONS_PRO / CONS_3RD / CONS_CBK |
| `granted` | BOOLEAN | True / False |
| `channel` | ENUM | WEB / APP / BRANCH / CALL / EMAIL |
| `timestamp_granted` | TIMESTAMP | ISO 8601 |
| `timestamp_withdrawn` | TIMESTAMP | Nullable |
| `ip_address` | VARCHAR | Hashed for audit |
| `consent_version` | VARCHAR | v1.2, v2.0 etc. |

---

## 5. Withdrawal Mechanism

| Method | SLA | Confirmation |
|--------|-----|--------------|
| Preference Center | Instant | On-screen + email |
| Email Unsubscribe | 48 hours | Email confirmation |
| SMS/WhatsApp "STOP" | 24 hours | Auto-reply confirmation |
| Branch Visit | 1 business day | Written acknowledgment |

---

## 6. Compliance Mapping

| Regulation | Requirement | How Addressed |
|------------|-------------|---------------|
| **GDPR Article 6** | Lawful basis for processing | Explicit, granular, documented consent |
| **GDPR Article 7** | Conditions for consent | Clear affirmative action; no pre-ticked boxes |
| **GDPR Article 21** | Right to object | One-click withdrawal via preference center |
| **RBI KYC Master Direction** | Customer data protection | Profiling consent separate from KYC consent |
| **TRAI TCCCPR 2018** | Telemarketing consent | CONS_MKT + CONS_CBK separate; DND scrubbing |

---

## 7. Business Rules

```
RULE 001: IF consent_type = CONS_MKT AND granted = FALSE
          THEN suppress ALL promotional outreach for customer_id

RULE 002: IF consent_type = CONS_PRO AND granted = FALSE
          THEN exclude customer_id from propensity scoring models

RULE 003: IF consent withdrawn via ANY channel
          THEN propagate withdrawal to ALL systems within 24 hours

RULE 004: IF customer_id is MINOR (age < 18)
          THEN default ALL consent_types to FALSE except CONS_ESS
```
