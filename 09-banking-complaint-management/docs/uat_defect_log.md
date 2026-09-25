# UAT Defect Log

> **Project:** Banking Complaint Management
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Author:** Sagar Kandelkar

---

## Defect Log Summary

| Metric | Value |
|--------|-------|
| Total Defects Logged | 47 |
| Open | 3 |
| Fixed & Verified | 41 |
| Deferred | 2 |
| Rejected | 1 |
| Defect Density | 3.9 defects per requirement |
| Critical Defects | 4 |
| High Defects | 12 |
| Medium Defects | 22 |
| Low Defects | 9 |

---

## Defect Detail Log

### Critical Defects (Blockers)

| ID | Severity | Priority | Module | Title | Steps to Reproduce | Expected | Actual | Status | Raised By | Fixed By | Date Raised | Date Fixed |
|----|----------|----------|--------|-------|-------------------|----------|--------|--------|-----------|----------|-------------|------------|
| DEF-001 | 🔴 Critical | P1 | Complaint Intake | Customer unable to submit complaint via mobile app | 1. Open app 2. Click "Raise Complaint" 3. Enter description 4. Tap Submit | Complaint saved, ticket number generated | App crashes with error code 500 | ✅ Fixed | UAT Team | Dev Lead | 15-Sep | 16-Sep |
| DEF-002 | 🔴 Critical | P1 | SLA Tracking | SLA timer not pausing during customer wait | 1. Log complaint 2. Assign to agent 3. Mark "Waiting for customer" | SLA timer pauses at wait timestamp | Timer continues, shows negative SLA | ✅ Fixed | Ops Manager | Backend Dev | 16-Sep | 17-Sep |
| DEF-003 | 🔴 Critical | P1 | Auto-Categorization | High-priority complaints categorized as low | 1. Submit complaint with keywords "fraud", "unauthorized" 2. Check auto-category | Category = "High Priority / Fraud" | Category = "General Query" | ✅ Fixed | QA Lead | ML Engineer | 18-Sep | 20-Sep |
| DEF-004 | 🔴 Critical | P1 | Escalation Matrix | Supervisor not notified at 80% SLA breach | 1. Log complaint with 2-day SLA 2. Let time reach 80% (38.4 hours) | Supervisor receives SMS + email alert | No alert sent | ✅ Fixed | Branch Head | Backend Dev | 19-Sep | 20-Sep |

### High Defects

| ID | Severity | Priority | Module | Title | Status |
|----|----------|----------|--------|-------|--------|
| DEF-005 | 🟠 High | P2 | Dashboard | Complaint resolution TAT shows incorrect average | ✅ Fixed |
| DEF-006 | 🟠 High | P2 | Omnichannel | Social media complaints not syncing to unified queue | ✅ Fixed |
| DEF-007 | 🟠 High | P2 | Customer Communication | Proactive SMS sent in English only (no Hindi/Marathi) | ✅ Fixed |
| DEF-008 | 🟠 High | P2 | Auto-Categorization | NLP model fails on abbreviated complaint text (SMS-style) | ✅ Fixed |
| DEF-009 | 🟠 High | P2 | SLA Tracking | Weekends/holidays not excluded from SLA calculation | ✅ Fixed |
| DEF-010 | 🟠 High | P2 | Reporting | Root cause analysis report missing trend charts | ✅ Fixed |
| DEF-011 | 🟠 High | P2 | Mobile App | Push notification not received on Android 13+ | ✅ Fixed |
| DEF-012 | 🟠 High | P2 | Integration | CRM sync failing for complaints > 500 chars | ✅ Fixed |
| DEF-013 | 🟠 High | P2 | Dashboard | Export to Excel truncates description at 255 chars | ✅ Fixed |
| DEF-014 | 🟠 High | P2 | Customer Communication | Email template broken on Outlook desktop | ✅ Fixed |
| DEF-015 | 🟠 High | P2 | Omnichannel | Branch kiosk complaint shows wrong branch code | ✅ Fixed |
| DEF-016 | 🟠 High | P2 | SLA Tracking | Bulk re-assignment does not reset SLA timer | ✅ Fixed |

### Medium Defects

| ID | Severity | Priority | Module | Title | Status |
|----|----------|----------|--------|-------|--------|
| DEF-017 | 🟡 Medium | P3 | Intake | Character counter in description field missing | ✅ Fixed |
| DEF-018 | 🟡 Medium | P3 | UI | Complaint ID not copyable on mobile | ✅ Fixed |
| DEF-019 | 🟡 Medium | P3 | Dashboard | Filter reset button clears date range only partially | ✅ Fixed |
| DEF-020 | 🟡 Medium | P3 | Reporting | PDF export has overlapping text on page 2+ | ✅ Fixed |
| DEF-021 | 🟡 Medium | P3 | Auto-Categorization | "Netbanking" and "net banking" treated as different categories | ✅ Fixed |
| DEF-022 | 🟡 Medium | P3 | Mobile | App refresh required to see updated complaint status | ✅ Fixed |
| DEF-023 | 🟡 Medium | P3 | Escalation | Escalation reason dropdown not searchable | ✅ Fixed |
| DEF-024 | 🟡 Medium | P3 | SLA | SLA breached indicator color not accessible (red-green) | ✅ Fixed |
| DEF-025 | 🟡 Medium | P3 | Communication | SMS delivery receipt not shown in audit trail | ✅ Fixed |
| DEF-026 | 🟡 Medium | P3 | Dashboard | "My Complaints" view slow for users with > 50 tickets | ✅ Fixed |
| DEF-027 | 🟡 Medium | P3 | Intake | File upload accepts .exe files (security risk) | ✅ Fixed |
| DEF-028 | 🟡 Medium | P3 | UI | Scroll position lost after submitting filter | ✅ Fixed |
| DEF-029 | 🟡 Medium | P3 | Integration | Customer profile not auto-populated from CRM for guest users | ✅ Fixed |
| DEF-030 | 🟡 Medium | P3 | Reporting | Daily complaint summary email sent at midnight UTC (not IST) | ✅ Fixed |
| DEF-031 | 🟡 Medium | P3 | Categorization | Sub-category dropdown not filtered by main category | ✅ Fixed |
| DEF-032 | 🟡 Medium | P3 | Mobile | Biometric login not available on iOS | ✅ Fixed |
| DEF-033 | 🟡 Medium | P3 | Escalation | Escalation to level-3 requires manual email (no auto-routing) | ✅ Fixed |
| DEF-034 | 🟡 Medium | P3 | Communication | Customer reply to closed ticket reopens without agent notification | ✅ Fixed |
| DEF-035 | 🟡 Medium | P3 | Dashboard | Color legend missing on complaint status pie chart | ✅ Fixed |
| DEF-036 | 🟡 Medium | P3 | Intake | Duplicate complaint detection only checks last 7 days | ✅ Fixed |
| DEF-037 | 🟡 Medium | P3 | UI | Tooltip on "First Contact Resolution" metric missing | ✅ Fixed |
| DEF-038 | 🟡 Medium | P3 | Reporting | Complaint closure reason "Other" not broken down | ✅ Fixed |

### Low Defects (Cosmetic / Enhancement)

| ID | Severity | Priority | Module | Title | Status |
|----|----------|----------|--------|-------|--------|
| DEF-039 | 🟢 Low | P4 | UI | Button hover state inconsistent across modules | ✅ Fixed |
| DEF-040 | 🟢 Low | P4 | Dashboard | Loading spinner off-center on 1366x768 screens | ✅ Fixed |
| DEF-041 | 🟢 Low | P4 | Mobile | Splash screen logo pixelated on tablets | ✅ Fixed |
| DEF-042 | 🟢 Low | P4 | Communication | Email footer has wrong year (© 2024 instead of 2025) | ✅ Fixed |
| DEF-043 | 🟢 Low | P4 | Intake | Success message animation too fast (0.2s → should be 0.5s) | ✅ Fixed |
| DEF-044 | 🟢 Low | P4 | UI | Breadcrumb separator uses > instead of → | ✅ Fixed |
| DEF-045 | 🟢 Low | P4 | Dashboard | Sort icons not visible in dark mode | ✅ Fixed |
| DEF-046 | 🟢 Low | P4 | Mobile | Keyboard pushes input field out of view on small screens | ✅ Fixed |
| DEF-047 | 🟢 Low | P4 | Reporting | PDF filename not timestamped | ✅ Fixed |

---

## Deferred Defects (Post-Go-Live)

| ID | Severity | Module | Title | Rationale |
|----|----------|--------|-------|-----------|
| DEF-048 | 🟡 Medium | Auto-Categorization | Multi-language complaint categorization (Hindi, Marathi) | Requires NLP model retraining. Planned for Phase 2. |
| DEF-049 | 🟡 Medium | Integration | WhatsApp Business API integration for complaint intake | Vendor contract pending. Planned for Phase 2. |

---

## Defect Trend

```
Week 1:  ████████████████████ 18 defects
Week 2:  ██████████████ 14 defects
Week 3:  ████████ 8 defects
Week 4:  ████ 4 defects
Week 5:  ██ 2 defects (open)
```

**Defect Resolution Rate:** 87% (41/47) — above 80% threshold for Go-Live.

---

## UAT Sign-Off Criteria

| Criteria | Threshold | Actual | Status |
|----------|-----------|--------|--------|
| Critical defects open | 0 | 0 | ✅ Pass |
| High defects open | ≤ 2 | 0 | ✅ Pass |
| Test cases executed | 100% | 100% | ✅ Pass |
| Test cases passed | ≥ 95% | 97.3% | ✅ Pass |
| Regression tests passed | 100% | 100% | ✅ Pass |
| Business approval | Yes | Yes | ✅ Pass |

**UAT Status: APPROVED FOR GO-LIVE**

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
