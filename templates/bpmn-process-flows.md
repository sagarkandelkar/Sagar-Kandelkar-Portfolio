# BPMN Process Flows — All Completed Projects

> **Format:** Text-based BPMN notation with swimlanes, gateways, and events
> **Type:** Portfolio Reference — Synthetic Scenario
> **Analyst:** Sagar Kandelkar

---

## Project 1: BFSI Customer Onboarding

```
[Start: Customer visits channel] → {Gateway: Channel?}
    │─[Branch]──→ [Fill application] → [Submit documents] → [Manual data entry]
    │─[Web]─────→ [Online form] → [Upload documents] → [Auto-capture]
    │─[Mobile]──→ [App form] → [Camera upload + OCR] → [Auto-capture]
                  │
                  ↓
    {Gateway: Existing customer?}
    │─[Yes]──→ [Auto-fill from master]
    │─[No]───→ [Create new BP record]
               │
               ↓
    [KYC Verification] → {Gateway: Mode?}
        │─[In-Person]──→ [Branch KYC]
        │─[Video KYC]──→ [Schedule call] → [Complete V-KYC] → [Upload selfie]
        │─[Aadhaar OTP]→ [Verify via UIDAI]
                          │
                          ↓
    [AML Screening] → {Gateway: Risk?}
        │─[High Risk]──→ [Enhanced Due Diligence] → [Compliance approval]
        │─[Low Risk]───→ [Auto-approve]
                         │
                         ↓
    [Account Opening] → [Generate account number] → [Set up net banking]
        │
        ↓
    {Gateway: Welcome kit?}
    │─[Digital]──→ [Email welcome kit] → [Push activation guide]
    │─[Physical]─→ [Print kit] → [Courier dispatch]
                   │
                   ↓
    [Customer Onboarded] → [End]
```

**Swimlanes:** Customer | Branch Staff | KYC Team | Compliance | Operations | IT System

---

## Project 2: Retail Analytics

```
[Start: Data collection trigger] → [Extract POS + CRM + Web data]
    │
    ↓
[Data Cleaning] → {Gateway: Quality check?}
    │─[Pass]──→ [Standardize formats] → [Remove duplicates]
    │─[Fail]──→ [Flag exceptions] → [Manual review] → [Re-extract]
                  │
                  ↓
    [Customer Segmentation] → {Parallel Gateway}
        │─[RFM Analysis]────→ [Score Recency, Frequency, Monetary]
        │─[Cohort Analysis]─→ [Group by acquisition month]
        │─[Cluster Analysis]→ [K-means behavioral clustering]
                              │
                              ↓
    [Generate Profiles] → [Assign persona labels]
        │
        ↓
    {Gateway: Target segment?}
    │─[Champions]──→ [VIP retention program]
    │─[At-Risk]────→ [Win-back campaign]
    │─[New]────────→ [Onboarding nurture]
    │─[Hibernating]→ [Re-activation offer]
                     │
                     ↓
    [Campaign Design] → [A/B test content] → [Launch campaign]
        │
        ↓
    [Measure Results] → {Gateway: Meet KPI?}
        │─[Yes]──→ [Scale campaign]
        │─[No]───→ [Iterate creative] → [Re-launch]
                   │
                   ↓
    [Report to Stakeholders] → [End]
```

**Swimlanes:** Data Engineer | Data Analyst | Marketing Manager | Business

---

## Project 3: Fraud Detection

```
[Start: Transaction captured] → [Apply rule engine]
    │
    ↓
    {Gateway: Rule triggered?}
    │─[Yes]──→ [Block transaction] → [Alert generation] → [Case creation]
    │─[No]───→ [ML scoring model]
               │
               ↓
    [Behavioral analysis] → [Velocity check] → [Device fingerprint]
        │
        ↓
    {Gateway: Risk score > threshold?}
    │─[Yes]──→ [Step-up authentication] → {Gateway: Auth passed?}
    │              │─[Yes]──→ [Allow with monitoring]
    │              │─[No]───→ [Block + Alert]
    │─[No]───→ [Allow transaction]
               │
               ↓
    [Log for model retraining] → [End]
```

**Swimlanes:** Transaction System | Rule Engine | ML Model | Fraud Analyst | Customer

---

## Project 4: Forex Card Enhancement

```
[Start: Travel planning] → {Gateway: Intent detected?}
    │─[Yes]──→ [Push pre-approved offer] → [Customer views comparison]
    │─[No]───→ [Customer browses products]
               │
               ↓
    [Apply for Forex Card] → {Gateway: Existing customer?}
        │─[Yes]──→ [Auto-fill from BP]
        │─[No]───→ [Enter details + Upload documents]
                   │
                   ↓
    [KYC Verification] → {Gateway: Mode?}
        │─[Video KYC]──→ [Complete in app]
        │─[Branch]─────→ [Visit branch]
        │─[Aadhaar OTP]→ [Instant verify]
                          │
                          ↓
    {Gateway: Approved?}
    │─[Yes]──→ [Issue virtual card instantly] → [Dispatch physical card]
    │─[No]───→ [Notify reason] → [End]
               │
               ↓
    [Activate Card] → [Set PIN]
        │
        ↓
    [Load Currency] → {Gateway: How many currencies?}
        │─[Single]──→ [Select currency] → [See live rate] → [Optional: Lock rate]
        │─[Multiple]→ [Select up to 10] → [Auto-convert at POS enabled]
                      │
                      ↓
    [Travel & Spend] → [POS / ATM / E-commerce]
        │
        ↓
    [Real-time Alerts] → [Categorized spend tracking]
        │
        ↓
    {Gateway: Need more funds?}
    │─[Yes]──→ [In-app reload] → [Back to Travel]
    │─[No]───→ [Continue spending]
               │
               ↓
    {Gateway: Trip complete?}
    │─[Yes]──→ [View unused balance] → {Gateway: Repatriate?}
    │              │─[Yes]──→ [One-click transfer] → [End]
    │              │─[No]───→ [Card expires] → [Auto-repatriation reminder]
    │─[No]───→ [Card reported lost] → [Instant block] → [Digital replacement]
               │
               ↓
    [End]
```

**Swimlanes:** Customer | Mobile App | KYC System | Card Management | FX Engine

---

## Project 5: Digital Payments

```
[Start: Payment initiation] → {Gateway: Payment method?}
    │─[UPI]──────→ [Scan QR / Enter VPA] → [Enter UPI PIN]
    │─[Card]─────→ [Select saved card] → [Enter CVV + OTP]
    │─[Wallet]───→ [Select wallet] → [Confirm balance]
    │─[NetBanking]→ [Select bank] → [Bank login]
                   │
                   ↓
    [Payment Gateway] → [Route to NPCI / Switch]
        │
        ↓
    {Gateway: Auth passed?}
    │─[Yes]──→ [Debit payer] → [Credit payee] → [Generate UTR]
    │─[No]───→ [Return error] → {Gateway: Retry?}
    │              │─[Yes]──→ [Back to Auth]
    │              │─[No]───→ [End: Failed]
               │
               ↓
    [Notification to both parties]
        │
        ↓
    {Gateway: Merchant settlement?}
    │─[T+0]──→ [Immediate credit]
    │─[T+1]──→ [Next day settlement]
               │
               ↓
    [Reconciliation] → {Gateway: Match?}
        │─[Yes]──→ [Mark settled]
        │─[No]───→ [Flag exception] → [Investigate]
                   │
                   ↓
    [End: Success]
```

**Swimlanes:** Customer | Merchant | Payment Gateway | NPCI / Switch | Bank Core | Settlement

---

## Project 6: Credit Card Journey

```
[Start: Prospect identified] → {Gateway: Pre-qualified?}
    │─[Yes]──→ [Push pre-approved offer] → [One-click apply]
    │─[No]───→ [Lead capture] → [Marketing nurture]
               │
               ↓
    [Application] → {Gateway: Channel?}
        │─[Web]────→ [Fill form] → [Upload documents]
        │─[Branch]─→ [Relationship manager assists]
        │─[Mobile]─→ [App form + camera upload]
                   │
                   ↓
    [Credit Bureau Check] → [CIBIL + Experian pull]
        │
        ↓
    [Risk Scoring] → {Gateway: Score > threshold?}
        │─[Yes]──→ [Auto-approve within limit]
        │─[No]───→ [Manual underwriting] → {Gateway: Approved?}
        │              │─[Yes]──→ [Approve with conditions]
        │              │─[No]───→ [Decline with reason]
                   │
                   ↓
    [Card Production] → [Personalize] → [Dispatch]
        │
        ↓
    [Activation] → [Set PIN] → [First transaction]
        │
        ↓
    [Ongoing Usage] → {Gateway: Spend pattern?}
        │─[Regular]──→ [Rewards accrue] → [Redemption]
        │─[Inactive]─→ [Re-engagement campaign]
        │─[High risk]→ [Limit review]
                     │
                     ↓
    [Monthly Billing] → [Generate statement] → [Payment due]
        │
        ↓
    {Gateway: Payment received?}
    │─[Full]──→ [Rewards +1] → [Next cycle]
    │─[Partial]→ [Interest accrues] → [Reminder]
    │─[None]──→ [Late fee] → [Dunning] → {Gateway: Recovery?}
    │              │─[Yes]──→ [Payment plan]
    │              │─[No]───→ [NPA classification]
               │
               ↓
    [End]
```

**Swimlanes:** Customer | Sales | Credit Team | Operations | Collections

---

## Project 7: Loan Origination

```
[Start: Loan inquiry] → {Gateway: Eligible?}
    │─[Yes]──→ [Pre-approved offer] → [Express apply]
    │─[Maybe]→ [Eligibility calculator] → [Apply]
    │─[No]───→ [Explain reason] → [Alternative products] → [End]
               │
               ↓
    [Application] → [Upload KYC + Income docs]
        │
        ↓
    {Gateway: Digital or Branch?}
    │─[Digital]──→ [OCR extraction] → [Auto-populate]
    │─[Branch]───→ [Manual entry by staff]
                   │
                   ↓
    [Credit Appraisal] → [CIBIL check] → [Income verification] → [Property valuation (if secured)]
        │
        ↓
    [Risk Grading] → {Gateway: Grade?}
        │─[A/B]──→ [Auto-sanction within policy]
        │─[C]────→ [Senior approval]
        │─[D/E]──→ [Decline / Counter-offer]
                   │
                   ↓
    [Sanction] → [Generate sanction letter] → [Customer acceptance]
        │
        ↓
    {Gateway: Accepted?}
    │─[Yes]──→ [Agreement execution] → [E-sign / Physical]
    │─[No]───→ [Withdraw] → [End]
               │
               ↓
    [Disbursement] → [Verify collateral (if any)] → [Initiate transfer]
        │
        ↓
    [EMI Schedule] → [Auto-debit setup] → [First EMI reminder]
        │
        ↓
    [Ongoing Monitoring] → {Gateway: Performance?}
        │─[Regular]──→ [Auto-renewal options]
        │─[Delayed]──→ [Early warning] → [Restructure]
        │─[Default]──→ [NPA] → [Recovery action]
                     │
                     ↓
    [Closure] → {Gateway: Pre-closure?}
        │─[Yes]──→ [Calculate foreclosure] → [Pay + Close]
        │─[No]───→ [Last EMI] → [NOC issued]
                   │
                   ↓
    [End]
```

**Swimlanes:** Customer | Sales | Credit | Risk | Operations | Collections

---

## Project 8: Insurance Claims

```
[Start: Loss event] → [Claim intimation]
    │
    ↓
    {Gateway: Channel?}
    │─[App]────→ [Upload photos] → [AI damage assessment]
    │─[Phone]──→ [Call center logs] → [Schedule survey]
    │─[Branch]─→ [Fill form] → [Document attach]
               │
               ↓
    [Surveyor Assignment] → {Gateway: Claim type?}
        │─[Motor]────→ [Physical inspection] → [Damage report]
        │─[Health]───→ [Hospital verification] → [Treatment review]
        │─[Property]─→ [Site visit] → [Loss assessment]
        │─[Travel]───→ [Document verification] → [Trip confirmation]
                          │
                          ↓
    [Assessment] → [Policy validation] → [Coverage check] → [Depreciation calc]
        │
        ↓
    {Gateway: Fraud indicators?}
    │─[Yes]──→ [Investigation] → {Gateway: Confirmed?}
    │              │─[Yes]──→ [Repudiate] → [End]
    │              │─[No]───→ [Proceed to settlement]
    │─[No]───→ [Proceed to settlement]
               │
               ↓
    [Settlement Calculation] → [Deductible] → [Depreciation] → [Net payable]
        │
        ↓
    {Gateway: Approval required?}
    │─[Auto]──→ [Auto-approve within limit]
    │─[Manual]→ [Approver review] → {Gateway: Approved?}
    │              │─[Yes]──→ [Proceed]
    │              │─[No]───→ [Reassess / Negotiate]
               │
               ↓
    [Disbursal] → [Payment to beneficiary] → [Send discharge voucher]
        │
        ↓
    [Closure] → [Update policy records] → [Feedback survey]
        │
        ↓
    [End]
```

**Swimlanes:** Policyholder | Claims Intake | Surveyor | Claims Assessor | Fraud Team | Finance

---

*Portfolio Reference — Synthetic Scenario | Analyst: Sagar Kandelkar*
