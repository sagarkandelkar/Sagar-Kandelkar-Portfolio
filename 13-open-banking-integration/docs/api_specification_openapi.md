# API Specification — OpenAPI 3.0

> **Project:** Open Banking Integration
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Author:** Sagar Kandelkar

---

## API Overview

| Attribute | Value |
|-----------|-------|
| **API Name** | Account Information Service API (AISA) |
| **Version** | 2.0.0 |
| **Protocol** | HTTPS |
| **Base URL** | `https://api.bank.example.com/open-banking/v2` |
| **Authentication** | OAuth 2.0 + mTLS |
| **Spec Standard** | Open Banking Implementation Entity (OBIE) UK + RBI aligned |
| **Rate Limit** | 100 requests/min per TPP |

---

## Endpoints

### 1. Get Account List

Retrieve all accounts a customer has consented to share.

```yaml
GET /accounts
```

**Headers:**
| Header | Value | Required |
|--------|-------|----------|
| Authorization | Bearer `{access_token}` | Yes |
| x-fapi-interaction-id | UUID v4 | Yes |
| x-fapi-auth-date | ISO 8601 timestamp | Yes |
| x-fapi-customer-ip-address | Customer IP | Yes |

**Response 200:**
```json
{
  "Data": {
    "Account": [
      {
        "AccountId": "ACC-1234567890",
        "Status": "Enabled",
        "StatusUpdateDateTime": "2024-01-15T10:30:00Z",
        "Currency": "INR",
        "AccountType": "Personal",
        "AccountSubType": "CurrentAccount",
        "Nickname": "Salary Account",
        "OpeningDate": "2020-03-15",
        "Account": [
          {
            "SchemeName": "IN.AccountNumber",
            "Identification": "123456789012",
            "Name": "Sagar Kandelkar"
          }
        ]
      }
    ]
  },
  "Links": {
    "Self": "https://api.bank.example.com/open-banking/v2/accounts"
  },
  "Meta": {
    "TotalPages": 1,
    "TotalRecords": 1
  }
}
```

---

### 2. Get Account Balances

```yaml
GET /accounts/{AccountId}/balances
```

**Path Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| AccountId | string | Unique account identifier |

**Response 200:**
```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "ACC-1234567890",
        "Amount": {
          "Amount": "84532.75",
          "Currency": "INR"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "InterimAvailable",
        "DateTime": "2024-12-15T09:00:00Z"
      },
      {
        "AccountId": "ACC-1234567890",
        "Amount": {
          "Amount": "80000.00",
          "Currency": "INR"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "OpeningBooked",
        "DateTime": "2024-12-15T00:00:00Z"
      }
    ]
  },
  "Links": { "Self": "..." },
  "Meta": { "LastAvailableDateTime": "2024-12-15T09:00:00Z" }
}
```

---

### 3. Get Account Transactions

```yaml
GET /accounts/{AccountId}/transactions
```

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| fromBookingDateTime | string (ISO 8601) | No | Filter from date |
| toBookingDateTime | string (ISO 8601) | No | Filter to date |

**Response 200 — Transaction Record:**
```json
{
  "TransactionId": "TXN-9876543210",
  "TransactionReference": "UPI/123456789012/ABCD",
  "Status": "Booked",
  "BookingDateTime": "2024-12-14T14:30:00Z",
  "ValueDateTime": "2024-12-14T14:30:00Z",
  "TransactionInformation": "UPI Payment to Zomato",
  "Amount": {
    "Amount": "450.00",
    "Currency": "INR"
  },
  "CreditDebitIndicator": "Debit",
  "MerchantDetails": {
    "MerchantName": "Zomato",
    "MerchantCategoryCode": "5812"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "UPI-P2M",
    "Issuer": "NPCI"
  }
}
```

---

## Error Handling

| HTTP Code | Error Code | Message | Scenario |
|-----------|------------|---------|----------|
| 400 | OB.Field.Invalid | Invalid field value | Malformed AccountId |
| 401 | OB.Unauthorized | Access token expired | Token expired or revoked |
| 403 | OB.Forbidden | Consent not valid | Customer revoked consent |
| 404 | OB.Resource.NotFound | Account not found | AccountId doesn't exist |
| 429 | OB.RateLimit | Rate limit exceeded | > 100 req/min |
| 500 | OB.InternalError | Internal server error | Downstream system failure |

**Error Response Format:**
```json
{
  "Code": "OB.Forbidden",
  "Id": "err-1234567890",
  "Message": "Consent for this account has been revoked by the customer.",
  "Errors": [
    {
      "ErrorCode": "UK.OBIE.Field.Invalid",
      "Message": "ConsentId is no longer active"
    }
  ]
}
```

---

## Consent Flow (OAuth 2.0)

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   Customer  │ ──────▶ │     TPP     │ ──────▶ │   Bank      │
│   (Browser) │ ◀────── │   (Fintech) │ ◀────── │  Auth Server│
└─────────────┘         └─────────────┘         └─────────────┘
       │                       │                       │
       │  1. Select bank       │                       │
       │  2. Redirect to bank  │                       │
       │◀──────────────────────│                       │
       │                       │  3. /authorize        │
       │                       │──────────────────────▶│
       │  4. Login + consent   │                       │
       │◀──────────────────────│                       │
       │  5. Auth code         │                       │
       │──────────────────────▶│                       │
       │                       │  6. /token (auth code)  │
       │                       │──────────────────────▶│
       │                       │◀──────────────────────│
       │                       │  access_token + refresh │
       │                       │                       │
       │                       │  7. API call + token    │
       │                       │──────────────────────▶│
       │                       │◀──────────────────────│
       │                       │  Account data           │
```

---

## Data Dictionary

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| AccountId | string(40) | Unique account identifier | ACC-1234567890 |
| TransactionId | string(40) | Unique transaction identifier | TXN-9876543210 |
| Amount | object | Monetary amount with currency | {"Amount": "450.00", "Currency": "INR"} |
| CreditDebitIndicator | enum | Transaction direction | Credit / Debit |
| Status | enum | Account/transaction status | Enabled / Disabled / Deleted / Booked / Pending |
| MerchantCategoryCode | string(4) | ISO 18245 MCC | 5812 (Restaurants) |

---

## Security Requirements

| Requirement | Standard | Implementation |
|-------------|----------|----------------|
| Transport | TLS 1.2+ | Mandatory HTTPS |
| Authentication | OAuth 2.0 + mTLS | Client cert + token |
| Consent | Explicit opt-in | Customer must approve scope + duration |
| Data retention | Max 90 days | TPP must delete after consent expiry |
| Audit | All API calls logged | 7-year retention |

---

## Version History

| Version | Date | Change | Author |
|---------|------|--------|--------|
| 1.0.0 | 2024-01-01 | Initial spec | Sagar Kandelkar |
| 1.1.0 | 2024-03-15 | Added merchant details | Sagar Kandelkar |
| 2.0.0 | 2024-06-01 | RBI alignment, UPI support | Sagar Kandelkar |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
