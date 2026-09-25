# RACI Matrix

> **Project:** Banking Complaint Management System
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Author:** Sagar Kandelkar

---

## RACI Legend

| Letter | Meaning | Definition |
|--------|---------|------------|
| **R** — Responsible | Does the work | The person who completes the task |
| **A** — Accountable | Owns the outcome | The one answerable for success/failure |
| **C** — Consulted | Provides input | Two-way communication before decision |
| **I** — Informed | Kept updated | One-way notification after decision |

---

## Key Activities RACI

### 1. Project Initiation

| Activity | Sponsor | PM | BA | Dev Lead | QA Lead | Ops Head | Compliance |
|----------|---------|-----|-----|----------|---------|----------|------------|
| Define project scope | C | R | R | C | I | I | I |
| Approve business case | A | R | C | I | I | C | I |
| Identify stakeholders | I | R/A | C | I | I | C | C |
| Secure budget | A | R | I | I | I | I | I |
| Charter sign-off | A | R | C | C | I | C | I |

---

### 2. Requirements Phase

| Activity | Sponsor | PM | BA | Dev Lead | QA Lead | Ops Head | Compliance |
|----------|---------|-----|-----|----------|---------|----------|------------|
| Conduct stakeholder interviews | I | C | **R/A** | I | I | C | I |
| Document AS-IS process | I | C | **R/A** | I | I | C | I |
| Define TO-BE requirements | I | C | **R/A** | C | C | C | C |
| Prioritize requirements (MoSCoW) | C | C | **R** | C | C | C | **A** |
| Regulatory compliance review | I | C | C | I | I | I | **R/A** |
| Requirements sign-off | A | C | **R** | C | C | C | C |
| Create RTM | I | C | **R/A** | C | C | I | I |

---

### 3. Design Phase

| Activity | Sponsor | PM | BA | Dev Lead | QA Lead | Ops Head | Compliance |
|----------|---------|-----|-----|----------|---------|----------|------------|
| Solution architecture | I | C | C | **R/A** | I | I | C |
| UI/UX wireframes | I | C | **R** | C | I | C | I |
| Database design | I | I | C | **R/A** | I | I | C |
| API specification | I | C | **R** | **R** | I | I | C |
| Security design review | I | C | C | C | C | I | **R/A** |
| Design sign-off | A | C | C | **R** | C | I | C |

---

### 4. Build Phase

| Activity | Sponsor | PM | BA | Dev Lead | QA Lead | Ops Head | Compliance |
|----------|---------|-----|-----|----------|---------|----------|------------|
| Sprint planning | I | **R/A** | C | **R** | C | I | I |
| User story refinement | I | C | **R/A** | C | C | I | I |
| Daily standup | I | **R/A** | C | **R** | C | I | I |
| Code development | I | I | C | **R** | I | I | I |
| Unit testing | I | I | I | **R/A** | C | I | I |
| Business rule implementation | I | I | **R** | **R** | I | I | C |
| Sprint demo | I | **R** | **R** | **R** | C | C | I |
| Sprint retrospective | I | **R/A** | C | **R** | C | I | I |

---

### 5. Testing Phase

| Activity | Sponsor | PM | BA | Dev Lead | QA Lead | Ops Head | Compliance |
|----------|---------|-----|-----|----------|---------|----------|------------|
| Test strategy | I | C | C | C | **R/A** | I | C |
| Test case design | I | C | **R** | C | **R/A** | I | I |
| Test data preparation | I | C | C | C | **R** | I | I |
| SIT execution | I | I | C | **R** | **R/A** | I | I |
| UAT planning | I | C | **R** | C | C | **A** | I |
| UAT execution | I | C | **R** | C | **R** | **A** | I |
| Defect logging | I | C | C | C | **R/A** | I | I |
| Defect triage | I | **R** | **R** | **R** | **R** | I | I |
| UAT sign-off | A | C | **R** | C | C | **R** | I |

---

### 6. Deployment & Rollout

| Activity | Sponsor | PM | BA | Dev Lead | QA Lead | Ops Head | Compliance |
|----------|---------|-----|-----|----------|---------|----------|------------|
| Release planning | I | **R/A** | C | **R** | C | C | I |
| Deployment execution | I | C | I | **R** | C | C | I |
| Go/No-Go decision | A | **R** | C | C | C | C | C |
| Hypercare support | I | **R** | **R** | **R** | **R** | C | I |
| Training delivery | I | C | **R** | I | I | **A** | I |
| Communication to branches | I | C | **R** | I | I | **A** | I |
| Post-go-live review | C | **R/A** | **R** | C | C | C | I |

---

### 7. Governance & Risk

| Activity | Sponsor | PM | BA | Dev Lead | QA Lead | Ops Head | Compliance |
|----------|---------|-----|-----|----------|---------|----------|------------|
| Steering committee meeting | A | **R** | C | I | I | I | I |
| Risk identification | C | **R** | **R** | C | C | C | C |
| Risk mitigation action | I | **R** | C | C | C | C | C |
| Change request assessment | C | **R** | **R** | C | C | I | I |
| Compliance audit | I | C | C | C | I | I | **R/A** |
| Status reporting | I | **R/A** | I | I | I | I | I |

---

## Persona Workload Analysis

| Role | R Count | A Count | C Count | I Count | Total Touchpoints |
|------|---------|---------|---------|---------|-------------------|
| **PM** | 7 | 8 | 6 | 0 | **21** |
| **BA** | 8 | 4 | 9 | 0 | **21** |
| **Dev Lead** | 5 | 3 | 4 | 0 | **12** |
| **QA Lead** | 4 | 3 | 4 | 0 | **11** |
| **Ops Head** | 2 | 2 | 6 | 0 | **10** |
| **Sponsor** | 0 | 6 | 3 | 0 | **9** |
| **Compliance** | 1 | 2 | 5 | 0 | **8** |

**Observation:** PM and BA are the most engaged roles. Compliance is primarily consultative, as expected for a non-regulatory-change project.

---

## RACI Health Checks

| Check | Status | Finding |
|-------|--------|---------|
| Every activity has exactly one "A" | ✅ Pass | No gaps, no overlaps |
| No activity has all "I" | ✅ Pass | All activities have at least R or C |
| "R" and "A" are often different | ✅ Pass | Separation of doing and owning |
| No "R" without "A" nearby | ✅ Pass | Accountability follows responsibility |
| Sponsor is "A" for budget/decisions | ✅ Pass | Escalation path clear |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
