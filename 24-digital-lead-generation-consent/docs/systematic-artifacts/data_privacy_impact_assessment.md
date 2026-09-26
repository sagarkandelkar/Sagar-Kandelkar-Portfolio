# Data Privacy Impact Assessment (DPIA)

## 1. Purpose

Evaluate privacy risks associated with the **Digital Lead Generation & Consent-Based Outreach Platform**, particularly web tracking, behavioral profiling, and automated decision-making for lead scoring.

---

## 2. Scope

| Component | Data Processed | Risk Level |
|-----------|----------------|------------|
| Web Intent Tracker | Page views, clicks, scroll depth, calculator inputs, IP address | 🔴 High |
| Consent Management Platform | Consent preferences, withdrawal requests, audit logs | 🟡 Medium |
| Customer Data Platform | Unified behavioral + transactional + demographic profile | 🔴 High |
| Lead Scoring Engine | Behavioral scores, propensity ratings, segment assignments | 🟡 Medium |
| Omnichannel Orchestrator | Communication logs, delivery status | 🟢 Low |

---

## 3. Risk Assessment Matrix

| Risk | Likelihood | Impact | Mitigation | Residual Risk |
|------|------------|--------|------------|---------------|
| Unauthorized access to behavioral profiles | Medium | High | Encryption at rest + in transit; RBAC; MFA | Low |
| Re-identification of anonymous users | Medium | High | Hashing + salting of PII; k-anonymity checks | Low |
| Consent fatigue leading to blanket opt-out | High | Medium | Granular consent (not all-or-nothing) | Medium |
| Profiling bias against rural/low-income users | Medium | High | Bias audit quarterly; demographic weight capped at 30% | Low |
| Data retention beyond need | Low | Medium | Auto-purge anonymous data after 90 days | Low |
| Third-party data leakage | Medium | High | API gateway with OAuth 2.0 + mTLS | Low |
| Regulatory enforcement action | Low | Very High | Consent audit trail; DPO oversight | Very Low |

---

## 4. Safeguards Implemented

### Technical
- **Pseudonymization:** Anonymous IDs replace known customer IDs until consent is obtained
- **Encryption:** AES-256 at rest; TLS 1.3 in transit
- **Access Control:** Role-based access (RBAC) with principle of least privilege
- **Audit Logging:** All data access logged with immutable timestamps

### Organizational
- **DPO Appointment:** Dedicated Data Protection Officer for the program
- **Training:** All sales/marketing staff trained on consent requirements
- **Incident Response:** 72-hour breach notification process per IT Act

### Contractual
- **Data Processing Agreements (DPA):** Signed with all CDP, CMP, and CRM vendors
- **Subprocessor List:** Published and kept current

---

## 5. Stakeholder Consultation

| Stakeholder | Consulted On | Outcome |
|-------------|--------------|---------|
| Compliance Team | Regulatory alignment | Approved with 3 conditions |
| Legal Team | Contractual safeguards | DPA templates approved |
| Marketing Team | Consent UX design | Preference for granular vs. layered consent |
| IT Security | Technical controls | MFA + encryption mandated |
| Customer Focus Group | Transparency messaging | Simplified language for consent banners |
| DPO | Overall risk posture | Approved with quarterly review requirement |

---

## 6. Sign-Off

| Role | Name | Status |
|------|------|--------|
| Data Protection Officer | [To be filled] | ⬜ Pending |
| Project Sponsor | [To be filled] | ⬜ Pending |
| Business Analyst | Sagar Kandelkar | ✅ Complete |
| IT Security Lead | [To be filled] | ⬜ Pending |

---

## 7. Review Triggers

This DPIA must be reviewed before:
- Introduction of new data sources (e.g., social media scraping)
- Changes to retention periods
- Expansion to new geographies with different privacy laws
- Deployment of new profiling algorithms
