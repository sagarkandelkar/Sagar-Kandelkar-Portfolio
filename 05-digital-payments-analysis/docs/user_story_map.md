# User Story Map — Digital Payments Process Optimization

> **Project:** Digital Payments Analysis — UPI, Wallets, Cards
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Framework:** Agile User Story Mapping (Jeff Patton)

---

## Backbone (High-Level Activities)

```
[INITIATE] → [AUTHENTICATE] → [PROCESS] → [SETTLE] → [RECONCILE] → [DISPUTE]
```

---

## User Story Map

### Activity: INITIATE

**User Task:** Start a payment

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Customer | pay via UPI QR scan | I can pay at any merchant instantly | Must | QR scan < 2 sec, UPI PIN entry, confirmation |
| Customer | pay via saved card (tokenized) | I don't enter card details every time | Must | Token stored securely, CVV + OTP for auth |
| Customer | schedule recurring payments | I don't miss EMIs or subscriptions | Should | Schedule monthly, edit/cancel anytime |
| Customer | split a bill with friends | we can share expenses easily | Could | Send payment link, track who paid |
| Merchant | generate dynamic QR for each transaction | payment matches exact amount | Must | QR includes amount, merchant ID, txn reference |

---

### Activity: AUTHENTICATE

**User Task:** Verify and authorize payment

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Customer | authenticate with UPI PIN | only I can authorize my payments | Must | 4-6 digit PIN, 3 wrong attempts = lock |
| Customer | receive OTP for high-value transactions | I get an extra security layer | Must | OTP for transactions > ₹5,000 |
| Customer | approve payment via biometric | I pay faster at POS | Should | Fingerprint / Face ID integration |
| Bank | detect suspicious patterns before auth | fraud is prevented | Must | Velocity check, geo-location anomaly, device fingerprint |

---

### Activity: PROCESS

**User Task:** Route and execute payment

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Customer | see real-time payment status | I know if my payment succeeded | Must | Status updates: Initiated → Processing → Success/Failed |
| Customer | receive instant success/failure notification | I'm immediately informed | Must | Push notification in < 3 seconds |
| Bank | route UPI through NPCI switch | payment reaches the right bank | Must | 99.9% routing accuracy |
| Bank | handle failed payments gracefully | customer knows next steps | Must | Clear error code, retry option, refund trigger |

---

### Activity: SETTLE

**User Task:** Move funds between parties

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Merchant | receive T+0 settlement for UPI | my cash flow isn't blocked | Must | Credit to merchant account same day |
| Merchant | view settlement breakdown | I reconcile with my sales | Must | Report shows: gross amount, MDR, net amount, UTR |
| Customer | see debit in my account immediately | my balance is always accurate | Must | Account debited in < 5 seconds |
| Bank | auto-reconcile settlements | manual work is reduced | Should | Auto-match with NPCI settlement file |

---

### Activity: RECONCILE

**User Task:** Match transactions with settlements

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Merchant | download daily reconciliation report | I can verify all settlements | Must | CSV format: txn ID, amount, status, settlement UTR |
| Merchant | see unmatched transactions | I can investigate exceptions | Must | Highlight txns with no settlement after T+1 |
| Operations team | run automated reconciliation | errors are caught early | Must | 95% auto-match rate, exceptions flagged |
| Finance team | view monthly settlement summary | they can close books | Should | Dashboard with total volume, success rate, MDR |

---

### Activity: DISPUTE

**User Task:** Resolve failed or disputed payments

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Customer | raise a failed payment complaint | I get my money back | Must | Complaint raised in < 2 minutes with txn reference |
| Customer | track complaint status | I know when to expect resolution | Must | Status: Raised → Under Review → Resolved |
| Merchant | dispute a chargeback | my revenue is protected | Should | Evidence upload, dispute response within 7 days |
| Operations | auto-escalate unresolved disputes | SLA compliance is maintained | Must | Auto-escalate after T+5 days |

---

## Release Planning

### Release 1: Core Payment Flow (Sprint 1–4)
**Goal:** UPI, card, and wallet payments work end-to-end

- INITIATE: UPI QR, saved cards, dynamic merchant QR
- AUTHENTICATE: UPI PIN, OTP for high-value
- PROCESS: Real-time status, instant notifications

---

### Release 2: Merchant Experience (Sprint 5–8)
**Goal:** Merchants can accept, track, and reconcile payments

- SETTLE: T+0 settlement, settlement reports
- RECONCILE: Auto-reconciliation, exception reports

---

### Release 3: Dispute & Analytics (Sprint 9–12)
**Goal:** Complete dispute management and payment analytics

- DISPUTE: Complaint portal, auto-escalation
- INITIATE: Recurring payments, bill split (stretch goals)

---

## Definition of Done

- [ ] Story meets INVEST criteria
- [ ] Acceptance criteria verified in UAT
- [ ] Security review completed
- [ ] NPCI compliance check passed
- [ ] Documentation updated

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
