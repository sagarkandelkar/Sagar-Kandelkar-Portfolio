# User Story Map — Forex Card Digital Enhancement

> **Project:** Forex Card Enhancement & Digital Travel Experience
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Framework:** Agile User Story Mapping (Jeff Patton)

---

## Backbone (High-Level Activities)

These are the **user activities** that represent the complete user journey:

```
[DISCOVER] → [APPLY] → [VERIFY] → [MANAGE] → [SPEND] → [TRACK] → [SUPPORT] → [CLOSE]
```

---

## User Story Map

### Activity: DISCOVER

**User Task:** Learn about Forex Card options

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Prospective traveler | compare Forex card features online | I can choose the best product for my trip | Must | Feature comparison table with rates, currencies, fees |
| Prospective traveler | use a travel cost calculator | I know how much to load in each currency | Must | Calculator shows 5+ currencies with live rates |
| Existing customer | receive a pre-approved Forex offer | I get started faster | Should | Offer triggered by travel intent detection |

---

### Activity: APPLY

**User Task:** Complete Forex card application

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Customer | apply via mobile app in under 3 minutes | I don't need to visit a branch | Must | Application has < 5 screens, auto-save progress |
| Customer | auto-fill from my existing bank profile | I don't re-enter personal details | Must | Pre-fills name, address, KYC status from BP |
| Customer | upload passport and PAN via camera | I don't need photocopies | Must | OCR auto-captures document numbers |
| Customer | track my application status in real-time | I know when to expect my card | Must | Status updates at each stage with ETA |

---

### Activity: VERIFY

**User Task:** Complete KYC verification

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Customer | complete Video KYC from home | I avoid a second branch visit | Must | 3-minute video call, works on 3G+ |
| Customer | receive instant KYC approval | I get my card faster | Must | Decision in < 30 minutes during business hours |
| Compliance Officer | see auto-flagged risk indicators | I can quickly identify exceptions | Must | Flags: expired ID, address mismatch, duplicate application |

---

### Activity: MANAGE

**User Task:** Load, convert, and control my card

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Cardholder | see real-time exchange rates before loading | I make informed conversion decisions | Must | Rate refreshes every 60 seconds with markup transparency |
| Cardholder | lock a favorable rate for 30 minutes | I avoid rate fluctuation during load | Should | Lock button visible, countdown timer shown |
| Cardholder | load up to 10 currencies in one wallet | I carry one card for multi-country trips | Must | Currency selector shows 10 currencies with live rates |
| Cardholder | move funds between currency wallets | I optimize my balances | Should | Transfer completes in < 5 seconds |
| Cardholder | temporarily block my card | I feel secure if I misplace it | Must | Block/unblock toggles in < 3 seconds |
| Cardholder | reset my PIN via OTP | I don't call customer care | Must | OTP arrives in < 30 seconds |

---

### Activity: SPEND

**User Task:** Use card internationally

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Cardholder | pay at POS abroad | my transaction is processed instantly | Must | POS auth in < 3 seconds |
| Cardholder | auto-convert from another wallet if currency insufficient | my transaction doesn't decline | Should | Auto-convert notification shown before completion |
| Cardholder | withdraw cash from ATMs | I have local currency access | Must | ATM locator shows fee-free partner ATMs |

---

### Activity: TRACK

**User Task:** Monitor spending and limits

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Cardholder | receive instant transaction alerts | I know exactly what I spent | Must | Alert in < 5 seconds with INR equivalent |
| Cardholder | see auto-categorized spends | I track my travel budget | Should | Categories: hotel, food, shopping, transport, ATM |
| Cardholder | set daily spending limits | I control my budget | Should | Limit configurable per currency |
| Cardholder | view my remaining LRS limit | I stay compliant with RBI | Must | Limit updates after every transaction |
| Cardholder | receive alert at 80% LRS utilization | I don't accidentally breach | Should | Push + SMS alert with current usage |

---

### Activity: SUPPORT

**User Task:** Resolve issues and get help

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Cardholder | report a lost card and get instant digital replacement | I continue spending immediately | Must | Digital card active in < 2 minutes |
| Cardholder | raise a dispute with photo evidence | I can contest incorrect charges | Should | Upload receipt photo, track dispute status |
| Cardholder | chat with support in-app | I get help without calling | Could | Response in < 2 minutes during hours |

---

### Activity: CLOSE

**User Task:** Repatriate balance and close card

| As a... | I want to... | So that... | Priority | Acceptance Criteria |
|---------|-------------|------------|----------|---------------------|
| Cardholder | transfer unused balance to savings with one click | my money isn't locked | Must | Transfer completes in < 3 days |
| Cardholder | receive expiry reminder 30 days before | I don't forget to repatriate | Should | SMS + app notification with one-click action |
| Cardholder | download complete transaction history | I have records for tax/filing | Must | PDF export with 7-year history |

---

## Release Planning

### Release 1: Digital Foundation (Sprint 1–4)
**Goal:** Customers can apply, verify, and activate digitally

**Stories Included:**
- DISCOVER: Feature comparison, cost calculator
- APPLY: Mobile application, auto-fill, document upload, status tracking
- VERIFY: Video KYC, instant approval
- MANAGE: Real-time rates, single-currency load, block/unblock

---

### Release 2: Multi-Currency & Intelligence (Sprint 5–8)
**Goal:** Full multi-currency experience with spending insights

**Stories Included:**
- MANAGE: Multi-currency wallet, rate lock, wallet transfer
- SPEND: Auto-convert, ATM locator
- TRACK: Instant alerts, auto-categorization, budget limits, LRS tracking

---

### Release 3: Self-Service & Support (Sprint 9–12)
**Goal:** Complete self-service lifecycle with proactive support

**Stories Included:**
- SUPPORT: Lost card replacement, dispute management, in-app chat
- CLOSE: One-click repatriation, expiry reminders, transaction export

---

## Definition of Done

- [ ] Story meets INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable)
- [ ] Acceptance criteria are met
- [ ] Code reviewed and merged
- [ ] Unit tests pass
- [ ] UAT completed with business sign-off
- [ ] Documentation updated

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
