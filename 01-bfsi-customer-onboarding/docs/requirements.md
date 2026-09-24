# BFSI Customer Onboarding - Functional Requirements

## 1. Application Intake

### FR-001: Multi-Channel Application Submission
- **Description**: The system shall support application submission via digital (web/mobile) and physical (branch) channels.
- **Priority**: High
- **Acceptance Criteria**:
  - Web portal accepts applications 24/7
  - Mobile app supports offline form filling with sync capability
  - Branch officers can create applications on behalf of customers
  - All channels feed into a unified queue

### FR-002: Duplicate Detection
- **Description**: The system shall detect potential duplicate applications based on PAN, Aadhaar, or phone number.
- **Priority**: High
- **Acceptance Criteria**:
  - Real-time duplicate check during form submission
  - Flag for manual review if match probability > 80%
  - Audit log of all duplicate detection events

## 2. Document Management

### FR-003: Digital Document Upload
- **Description**: Customers shall be able to upload identity, address, and income proof documents digitally.
- **Priority**: High
- **Acceptance Criteria**:
  - Supports PDF, JPG, PNG formats
  - Maximum file size: 5MB per document
  - Automatic virus scanning on upload
  - OCR extraction for data auto-fill

### FR-004: Document Verification Workflow
- **Description**: The system shall route documents through a verification workflow based on document type and risk profile.
- **Priority**: High
- **Acceptance Criteria**:
  - Automated validation for document authenticity markers
  - Manual verification queue for flagged documents
  - SLA tracking for verification steps
  - Rejection reasons captured with audit trail

## 3. KYC/AML Compliance

### FR-005: KYC Validation
- **Description**: The system shall perform KYC validation against government databases (UIDAI, NSDL, etc.).
- **Priority**: Critical
- **Acceptance Criteria**:
  - Real-time Aadhaar/PAN verification
  - Biometric consent capture where required
  - KYC status updated within 30 seconds
  - Failed KYC triggers manual review workflow

### FR-006: AML Screening
- **Description**: The system shall screen applicants against watchlists (PEP, sanctions, adverse media).
- **Priority**: Critical
- **Acceptance Criteria**:
  - Screening against UN, OFAC, and local sanctions lists
  - PEP database matching with fuzzy logic
  - Risk scoring based on match confidence
  - High-risk cases escalated to compliance team

## 4. Risk Assessment

### FR-007: Credit Score Integration
- **Description**: The system shall fetch and store credit scores from authorized credit bureaus (CIBIL, Experian, Equifax).
- **Priority**: High
- **Acceptance Criteria**:
  - Credit score fetched with customer consent
  - Score cached for 30 days
  - Multiple bureau support
  - Score displayed in unified customer view

### FR-008: Risk Scoring Engine
- **Description**: An automated risk scoring engine shall classify applications as Low, Medium, or High risk.
- **Priority**: Medium
- **Acceptance Criteria**:
  - Score based on credit score, income, employment type, and AML results
  - Configurable scoring rules
  - Score explainability for each factor
  - Auto-approval for Low risk, manual review for Medium/High

## 5. Account Setup

### FR-009: Account Configuration
- **Description**: Upon approval, the system shall automatically configure the selected product/account type.
- **Priority**: High
- **Acceptance Criteria**:
  - Account number generation per branch/series rules
  - Debit card/cheque book request initiation
  - Welcome email/SMS triggered
  - Initial funding option enabled

### FR-010: Welcome Kit Generation
- **Description**: The system shall generate and dispatch a welcome kit with account details and terms.
- **Priority**: Medium
- **Acceptance Criteria**:
  - Digital welcome kit sent via email immediately
  - Physical kit dispatched within 2 business days
  - Tracking number assigned for physical delivery
  - Kit contents configurable by product type

## 6. Reporting & Dashboards

### FR-011: Operations Dashboard
- **Description**: A real-time dashboard shall display application pipeline, bottlenecks, and SLA compliance.
- **Priority**: Medium
- **Acceptance Criteria**:
  - Refresh interval <= 5 minutes
  - Drill-down by channel, product, region
  - SLA breach alerts
  - Export to Excel/PDF

### FR-012: Compliance Reports
- **Description**: The system shall generate regulatory reports for KYC/AML activities.
- **Priority**: High
- **Acceptance Criteria**:
  - Monthly KYC compliance summary
  - AML screening report with match details
  - Rejected applications report with reasons
  - Report generation time < 2 minutes

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| System Availability | 99.9% uptime |
| Response Time | < 3 seconds for page loads |
| Concurrent Users | Support 10,000 simultaneous users |
| Data Retention | 7 years as per RBI guidelines |
| Security | End-to-end encryption, PCI-DSS compliant |
| Audit Trail | Immutable logs for all transactions |

---

*Document Version: 1.0*
*Author: Sagar Kandelkar*
*Date: September 2026*
