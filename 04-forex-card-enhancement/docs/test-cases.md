# Test Cases — Forex Card Digital Enhancement

> **Project:** Forex Card Enhancement
> **Type:** UAT Test Cases — Synthetic Scenario
> **Analyst:** Sagar Kandelkar

---

## TC-001: Digital Application — Successful Submission

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-001 |
| **Requirement** | FR-001: Online Forex Card Application |
| **Priority** | High |
| **Type** | Positive |

**Preconditions:**
- Customer has existing bank relationship
- Mobile app is installed and logged in
- Customer's KYC is valid

**Test Steps:**
1. Open mobile app → Navigate to Forex Card section
2. Tap "Apply for Forex Card"
3. Verify auto-populated details from existing BP (name, address, PAN)
4. Select primary travel country: "USA"
5. Enter expected travel dates
6. Upload passport photo via camera
7. Tap "Submit Application"

**Expected Result:**
- Application submitted successfully
- Reference number generated (format: FXA-YYYYMMDD-XXXX)
- Status shows "Under Review"
- SMS and push notification sent within 30 seconds
- Application appears in "My Applications" with status tracker

**Actual Result:** |
**Status:** Pass / Fail |
**Tester:** |
**Date:** |

---

## TC-002: Digital Application — Missing Documents

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-002 |
| **Requirement** | FR-001: Online Forex Card Application |
| **Priority** | High |
| **Type** | Negative |

**Preconditions:** Same as TC-001

**Test Steps:**
1. Open mobile app → Navigate to Forex Card section
2. Tap "Apply for Forex Card"
3. Fill all mandatory fields
4. Skip passport upload
5. Tap "Submit Application"

**Expected Result:**
- Submission blocked with validation error
- Error message: "Passport is mandatory for Forex Card application"
- Passport upload field highlighted in red
- Application NOT submitted

---

## TC-003: Video KYC — Successful Completion

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-003 |
| **Requirement** | FR-002: Digital KYC Verification |
| **Priority** | High |
| **Type** | Positive |

**Preconditions:**
- Application submitted (TC-001 completed)
- Customer has stable internet (3G+)
- Valid ID documents uploaded

**Test Steps:**
1. Receive "Complete Video KYC" notification
2. Tap notification → App opens Video KYC screen
3. Allow camera and microphone permissions
4. Show PAN card to camera → OCR captures PAN number
5. Answer liveness detection prompt (blink, turn head)
6. Agent approves KYC
7. Tap "Finish"

**Expected Result:**
- KYC status updates to "Verified" in < 3 minutes
- Push notification: "KYC Verification Complete"
- Card status advances to "Issuance in Progress"
- BP master updated with KYC expiry date (+1 year)

---

## TC-004: Video KYC — Network Failure Mid-Call

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-004 |
| **Requirement** | FR-002: Digital KYC Verification |
| **Priority** | Medium |
| **Type** | Negative |

**Test Steps:**
1. Start Video KYC session
2. During document upload, disconnect network
3. Wait 30 seconds
4. Reconnect network

**Expected Result:**
- App shows "Connection lost. Retrying..."
- After reconnection, resume from last completed step
- No data loss
- Session timeout only after 10 minutes of inactivity

---

## TC-005: Currency Load with Rate Lock

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-005 |
| **Requirement** | FR-003: Currency Load & Conversion |
| **Priority** | High |
| **Type** | Positive |

**Preconditions:**
- Card is active
- INR wallet has sufficient balance
- Customer logged in

**Test Steps:**
1. Tap "Load Currency"
2. Select USD
3. Enter amount: $1,000
4. View live rate: 1 USD = 82.50 INR
5. Tap "Lock Rate for 30 min"
6. Rate locked confirmation shown with countdown timer
7. Tap "Confirm Load"
8. Enter app PIN

**Expected Result:**
- Load processed at locked rate (82.50)
- USD wallet credited: $1,000
- INR wallet debited: ₹82,500
- Transaction receipt generated
- Alert: "USD 1,000 loaded successfully at rate 82.50"

---

## TC-006: Currency Load — Rate Lock Expired

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-006 |
| **Requirement** | FR-003: Currency Load & Conversion |
| **Priority** | Medium |
| **Type** | Negative |

**Test Steps:**
1. Lock rate for 30 minutes
2. Wait 31 minutes (do not confirm)
3. Tap "Confirm Load"

**Expected Result:**
- Error message: "Rate lock expired. Current rate: 82.65 INR/USD"
- Prompt to accept new rate or cancel
- No transaction processed

---

## TC-007: Real-Time Transaction Alert

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-007 |
| **Requirement** | FR-005: Real-Time Transaction Alerts |
| **Priority** | High |
| **Type** | Positive |

**Preconditions:**
- Card is active with USD balance
- Push notifications enabled
- Customer is traveling in USA

**Test Steps:**
1. Customer swipes card at merchant POS in New York
2. Merchant charges: $150.00
3. System processes transaction

**Expected Result:**
- Push notification received in < 5 seconds
- Alert content: "USD 150.00 spent at [Merchant Name], New York. INR equiv: ₹12,375. Remaining USD balance: $850.00"
- Transaction appears in "Recent Transactions" immediately
- Spend categorized as "Shopping"

---

## TC-008: Transaction Alert — Unusual Country

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-008 |
| **Requirement** | FR-005: Real-Time Transaction Alerts |
| **Priority** | Medium |
| **Type** | Negative / Edge |

**Preconditions:**
- Customer typically spends in USA and UK
- Card is active

**Test Steps:**
1. Customer attempts transaction in Thailand (first-time country)
2. Transaction amount: THB 5,000

**Expected Result:**
- Push notification: "Unusual transaction alert: THB 5,000 in Thailand. Was this you?"
- Additional verification required (app PIN or OTP)
- Transaction held in "Pending Verification" for 15 minutes
- If not verified → auto-decline

---

## TC-009: Self-Service Block Card

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-009 |
| **Requirement** | FR-009: Self-Service Card Management |
| **Priority** | High |
| **Type** | Positive |

**Preconditions:**
- Card is active
- Customer logged in

**Test Steps:**
1. Go to "My Cards"
2. Select active Forex card
3. Tap "Temporarily Block"
4. Confirm: "Block this card?"
5. Enter app PIN

**Expected Result:**
- Card status updates to "TEMPORARILY BLOCKED" in < 3 seconds
- All transactions declined with message: "Card blocked by customer"
- Unblock option available immediately
- Email confirmation sent

---

## TC-010: Unblock Card and Immediate Transaction

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-010 |
| **Requirement** | FR-009: Self-Service Card Management |
| **Priority** | High |
| **Type** | Positive |

**Preconditions:**
- Card is temporarily blocked (TC-009)

**Test Steps:**
1. Go to "My Cards" → Select blocked card
2. Tap "Unblock"
3. Enter app PIN
4. Immediately attempt a POS transaction

**Expected Result:**
- Card status updates to "ACTIVE" in < 3 seconds
- Transaction approved successfully
- No delay between unblock and usage

---

## TC-011: LRS Limit Alert at 80%

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-011 |
| **Requirement** | FR-007: LRS Limit Tracking |
| **Priority** | High |
| **Type** | Positive |

**Preconditions:**
- Customer has utilized $200,000 of $250,000 LRS limit
- About to make a transaction that crosses 80%

**Test Steps:**
1. Customer initiates load of $10,000
2. System calculates post-load utilization: ($200,000 + $10,000) / $250,000 = 84%
3. This crosses the 80% threshold

**Expected Result:**
- Before processing load, alert shown: "You will reach 84% of your annual LRS limit ($250,000). Remaining: $40,000."
- Customer must acknowledge to proceed
- Push notification and SMS sent: "LRS Alert: You have used 84% of your annual limit."
- Dashboard updated with red indicator

---

## TC-012: One-Click Balance Repatriation

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-012 |
| **Requirement** | FR-010: Unused Balance Repatriation |
| **Priority** | High |
| **Type** | Positive |

**Preconditions:**
- Card has unused USD balance: $500
- Linked savings account is active
- Customer logged in

**Test Steps:**
1. Go to "My Cards" → Select card
2. Tap "Repatriate Balance"
3. Review summary: "USD 500 will be converted at 82.50 and transferred to A/C XX1234"
4. Tap "Confirm Transfer"
5. Enter app PIN

**Expected Result:**
- USD wallet balance becomes $0
- Savings account credited: ₹41,250 in < 3 days
- Transaction reference: REP-YYYYMMDD-XXXX
- Email confirmation with full trail
- Card marked for closure (optional)

---

## TC-013: Repatriation — No Linked Account

| Field | Detail |
|-------|--------|
| **Test Case ID** | TC-013 |
| **Requirement** | FR-010: Unused Balance Repatriation |
| **Priority** | Medium |
| **Type** | Negative |

**Preconditions:**
- Card has unused balance
- No linked savings account

**Test Steps:**
1. Go to "My Cards" → Select card
2. Tap "Repatriate Balance"

**Expected Result:**
- Message: "Please link a savings account first"
- Redirect to "Link Account" screen
- Repatriation blocked until account linked

---

## Test Summary

| Category | Count |
|----------|-------|
| **Total Test Cases** | 13 |
| **Positive Tests** | 9 |
| **Negative Tests** | 4 |
| **High Priority** | 8 |
| **Medium Priority** | 5 |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
