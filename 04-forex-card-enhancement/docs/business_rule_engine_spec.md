# Business Rule Engine Specification

> **Project:** Forex Card Enhancement
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Author:** Sagar Kandelkar

---

## Rule Engine Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    FOREX CARD PLATFORM                    │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │  BR-001      │  │  BR-002      │  │  BR-003      │  │
│  │  Load Limit  │  │  Spending    │  │  Fraud       │  │
│  │  Validation  │  │  Restriction │  │  Detection   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│  ┌──────────────┐                                        │
│  │  BR-004      │                                        │
│  │  Compliance  │                                        │
│  │  Reporting   │                                        │
│  └──────────────┘                                        │
└─────────────────────────────────────────────────────────┘
```

---

## BR-001: Daily Load Limit Validation

### Rule Statement
> A customer cannot load more than USD 10,000 (or equivalent) in a single day across all forex card transactions.

### Pseudocode
```
IF transaction_type = "LOAD"
THEN
    daily_load_sum = SUM(transaction_amount)
                     WHERE customer_id = current_customer_id
                       AND transaction_date = TODAY
                       AND transaction_type = "LOAD"
                       AND status = "COMPLETED"
    
    IF (daily_load_sum + current_transaction_amount) > 10000
    THEN
        REJECT transaction
        LOG audit_event (reason: "DAILY_LOAD_LIMIT_EXCEEDED")
        NOTIFY customer (channel: SMS + Email)
    ELSE
        APPROVE transaction
    END IF
END IF
```

### Field Catalog
| Field | Type | Source | Description |
|-------|------|--------|-------------|
| customer_id | String | JWT Token | Unique customer identifier |
| transaction_type | Enum | Request | LOAD, WITHDRAW, TRANSFER |
| transaction_amount | Decimal | Request | Amount in USD equivalent |
| transaction_date | Date | System | Date of transaction |
| daily_load_sum | Computed | Aggregation | Sum of today's completed loads |
| status | Enum | System | PENDING, COMPLETED, REJECTED |

### Decision Table

| Condition | Rule 1 | Rule 2 | Rule 3 |
|-----------|--------|--------|--------|
| Transaction type = LOAD | Y | Y | N |
| Daily sum + current ≤ $10K | Y | N | — |
| **Action** | **APPROVE** | **REJECT** | **SKIP RULE** |

---

## BR-002: Spending Restriction by Merchant Category

### Rule Statement
> Forex cards cannot be used for gambling, cryptocurrency, or money transfer services (MCC 7995, 6051, 4829).

### Pseudocode
```
IF transaction_type = "PURCHASE"
THEN
    restricted_mccs = ["7995", "6051", "4829", "6012"]
    
    IF merchant_mcc IN restricted_mccs
    THEN
        REJECT transaction
        LOG audit_event (reason: "RESTRICTED_MCC", merchant_mcc: merchant_mcc)
        NOTIFY customer (channel: SMS)
        FLAG account (risk_score + 10)
    ELSE
        PROCEED to BR-003 (Fraud Detection)
    END IF
END IF
```

### Field Catalog
| Field | Type | Source | Description |
|-------|------|--------|-------------|
| merchant_mcc | String | Payment Gateway | Merchant category code |
| restricted_mccs | Array | Config | Blocked MCC list (admin maintainable) |
| risk_score | Integer | Computed | Cumulative risk score per customer |
| flag_reason | String | System | Why account was flagged |

---

## BR-003: Real-Time Fraud Detection

### Rule Statement
> Trigger fraud alert if: 3+ transactions within 10 minutes OR transaction from 2+ countries within 1 hour OR amount > 3x customer's 90-day average.

### Pseudocode
```
IF transaction_type IN ["PURCHASE", "WITHDRAW", "ONLINE"]
THEN
    // Velocity Check
    tx_count_10min = COUNT(transactions)
                     WHERE customer_id = current_customer_id
                       AND timestamp >= NOW - 10 MINUTES
    
    // Geographic Impossibility Check
    countries_1hour = DISTINCT(country_code)
                      WHERE customer_id = current_customer_id
                        AND timestamp >= NOW - 1 HOUR
    
    // Amount Anomaly Check
    avg_90days = AVG(transaction_amount)
                 WHERE customer_id = current_customer_id
                   AND timestamp >= NOW - 90 DAYS
    
    fraud_score = 0
    
    IF tx_count_10min >= 3
        fraud_score = fraud_score + 40
    END IF
    
    IF COUNT(countries_1hour) >= 2
        fraud_score = fraud_score + 35
    END IF
    
    IF current_transaction_amount > (avg_90days * 3)
        fraud_score = fraud_score + 25
    END IF
    
    IF fraud_score >= 50
        BLOCK transaction
        ALERT fraud_team (priority: HIGH)
        NOTIFY customer (channel: SMS + Push + Email)
        REQUIRE manual review
    ELSE IF fraud_score >= 25
        ALLOW but MONITOR
        LOG enhanced audit
    ELSE
        ALLOW transaction
    END IF
END IF
```

### Decision Tree

```
                    Start
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
   Velocity      Geographic      Amount
   ≥3 tx/10min   ≥2 countries   >3x avg
        │             │             │
        ▼             ▼             ▼
    +40 points    +35 points    +25 points
        │             │             │
        └─────────────┴─────────────┘
                      │
                      ▼
              Fraud Score Sum
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
     Score ≥ 50    Score 25-49   Score < 25
        │             │             │
        ▼             ▼             ▼
    BLOCK +      ALLOW +       ALLOW
    ALERT +      MONITOR        NORMAL
    MANUAL
    REVIEW
```

### Error Handling Matrix

| Scenario | System Response | Customer Notification | Audit Log |
|----------|---------------|----------------------|-----------|
| Fraud score ≥ 50 | Block + hold funds | Immediate SMS + Push | Full trace retained 7 years |
| Fraud score 25–49 | Allow + flag account | Post-tx SMS summary | Enhanced retention |
| API timeout during check | Fallback to block + manual review | SMS: "Under review" | Mark system degradation |
| Data missing for avg calc | Skip amount check, use velocity/geo only | None (silent) | Log data quality issue |

---

## BR-004: Regulatory Compliance Reporting

### Rule Statement
> All forex transactions > USD 2,500 must be reported to RBI within T+1 day via XBRL format.

### Pseudocode
```
IF transaction_amount > 2500
THEN
    compliance_record = {
        transaction_id: UUID(),
        customer_id: current_customer_id,
        amount_usd: transaction_amount,
        amount_inr: transaction_amount * exchange_rate,
        purpose_code: transaction_purpose_code,  // S001-S999
        country_code: destination_country,
        timestamp: NOW,
        reporting_deadline: TOMORROW 17:00 IST
    }
    
    INSERT INTO rbi_reporting_queue (compliance_record)
    
    IF transaction_purpose_code NOT IN valid_purpose_codes
        RAISE compliance_error
        HOLD transaction pending compliance review
    END IF
END IF
```

### Version Control

| Version | Date | Author | Change | Approved By |
|---------|------|--------|--------|-------------|
| 1.0 | 01-Jan-2024 | Sagar Kandelkar | Initial rules | Compliance Head |
| 1.1 | 15-Feb-2024 | Sagar Kandelkar | Added crypto MCC to BR-002 | Risk Officer |
| 1.2 | 03-Mar-2024 | Sagar Kandelkar | Fraud score threshold 40→50 | CRO |
| 1.3 | 20-Mar-2024 | Sagar Kandelkar | Added fallback for API timeout | CTO |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
