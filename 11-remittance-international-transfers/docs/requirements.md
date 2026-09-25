# Remittance & International Transfers — Functional Requirements

## 1. Real-Time Tracking

### FR-001: SWIFT gpi Integration
- Display real-time payment status across all correspondent banks
- Show timestamp at each intermediary stage
- Estimated delivery time updated dynamically

### FR-002: Customer Notification System
- Push notification at each milestone (sent, in transit, received)
- SMS fallback for non-app users
- Email confirmation with tracking link

## 2. FX & Cost Transparency

### FR-003: Live Rate Display with Lock Option
- Display live mid-market rate with bank margin breakdown
- Option to lock rate for 30 minutes
- Historical rate chart for last 30 days

### FR-004: Total Cost Calculator
- Show all-in cost: principal + FX margin + fees + correspondent charges
- Compare with competitor rates
- Save quote for later execution

## 3. Compliance Automation

### FR-005: Auto AML Screening
- Real-time sanctions and PEP screening
- Risk-based documentation requirements
- Auto-hold for high-risk countries

### FR-006: Purpose Code Validation
- Validate LRS purpose code against transaction amount
- Auto-flag if annual LRS limit exceeded
- Generate LRS utilization certificate

## 4. Settlement & Reconciliation

### FR-007: T+0 Settlement for Partners
- Instant credit for partner bank accounts
- Auto-reconciliation with NOSTRO statements
- Exception report for unmatched items

### FR-008: Bulk Remittance Processing
- Upload Excel for bulk transfers
- Template validation before submission
- Consolidated status report

## 5. Self-Service Management

### FR-009: Saved Beneficiary Profiles
- Store frequently used beneficiaries
- One-click repeat transfers
- Beneficiary verification status indicator

### FR-010: Remittance History & Analytics
- 7-year transaction history with search
- Annual remittance summary for tax filing
- Spend analysis by country and purpose

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Transfer Initiation | < 30 seconds |
| Tracking Update Latency | < 5 minutes |
| FX Rate Refresh | Every 60 seconds |
| Uptime | 99.9% |
| Data Retention | 7 years |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
