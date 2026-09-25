# Process Maturity Assessment

> **Project:** Core Banking System Migration
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Author:** Sagar Kandelkar
> **Framework:** CMMI-inspired 5-Level Maturity Model adapted for BFSI

---

## Maturity Model Overview

| Level | Name | Characteristics | Typical State in BFSI |
|-------|------|-----------------|----------------------|
| **1** | Initial | Ad-hoc, reactive, hero-dependent | Manual processes, tribal knowledge |
| **2** | Managed | Documented, repeatable, basic tracking | SOPs exist, Excel trackers |
| **3** | Defined | Standardized across org, integrated | Enterprise tools, cross-functional alignment |
| **4** | Quantitatively Managed | Metrics-driven, predictive | Dashboards, SLAs, proactive alerts |
| **5** | Optimizing | Continuous improvement, innovation | AI-assisted, self-healing, benchmarked |

---

## Current vs Target Maturity by Process Area

| Process Area | Current (Level) | Target (Level) | Gap | Priority | Effort |
|--------------|-----------------|----------------|-----|----------|--------|
| **Requirements Management** | 2 — Managed | 4 — Quantitative | +2 | P1 | High |
| **Change Management** | 2 — Managed | 3 — Defined | +1 | P2 | Medium |
| **Testing & QA** | 3 — Defined | 4 — Quantitative | +1 | P1 | Medium |
| **Release Management** | 2 — Managed | 4 — Quantitative | +2 | P1 | High |
| **Incident Management** | 3 — Defined | 4 — Quantitative | +1 | P2 | Medium |
| **Data Governance** | 1 — Initial | 3 — Defined | +2 | P1 | High |
| **Stakeholder Communication** | 2 — Managed | 3 — Defined | +1 | P3 | Low |
| **Risk Management** | 2 — Managed | 3 — Defined | +1 | P2 | Medium |

---

## Detailed Assessment

### 1. Requirements Management

| Capability | Current State | Evidence | Target State |
|------------|--------------|----------|--------------|
| Requirements documentation | Excel sheets + emails | 47% reqs have no version history | Centralized ALM (Jira ADO) |
| Traceability | Manual cross-reference | RTM updated monthly, often stale | Real-time traceability |
| Change control | Ad-hoc approval | 30% changes post-UAT | Structured CCB process |
| Impact analysis | Spreadsheet-based | 2-day average analysis time | Automated impact scoring |

**Current Level: 2 — Managed**
**Target Level: 4 — Quantitatively Managed**

**Gap Closure Actions:**
1. Deploy Jira + Confluence for requirements lifecycle (Week 1–4)
2. Implement automated RTM generation from Jira links (Week 5–6)
3. Define CCB charter with SLA < 24 hours (Week 3)
4. Build impact analysis template with pre-scored components (Week 7)

---

### 2. Data Governance

| Capability | Current State | Evidence | Target State |
|------------|--------------|----------|--------------|
| Data ownership | No named owners | 23 systems have no DPO | Data stewards assigned per domain |
| Data quality monitoring | Monthly batch reports | Issues found 30+ days late | Real-time quality dashboards |
| Data lineage | Manual documentation | 60% lineage outdated | Automated lineage tracking |
| Master data management | None | 18K duplicate customers | MDM golden record deployed |

**Current Level: 1 — Initial**
**Target Level: 3 — Defined**

**Gap Closure Actions:**
1. Appoint data stewards for Customer, Product, Transaction domains (Week 1–2)
2. Deploy data quality monitoring (Great Expectations / Monte Carlo) (Week 4–8)
3. Implement MDM for customer deduplication (Week 6–12)
4. Document critical data lineage in Collibra (Week 8–10)

---

### 3. Release Management

| Capability | Current State | Evidence | Target State |
|------------|--------------|----------|--------------|
| Release planning | Ad-hoc, monthly | 40% releases delayed | Bi-weekly cadence, predictable |
| Environment management | Shared dev/test | Environment conflicts weekly | Dedicated environments per squad |
| Rollback capability | Manual DB restore | 4-hour average rollback | One-click rollback, < 15 min |
| Deployment automation | Partial scripts | 60% manual steps remain | Fully automated CI/CD |

**Current Level: 2 — Managed**
**Target Level: 4 — Quantitatively Managed**

**Gap Closure Actions:**
1. Implement GitOps with ArgoCD (Week 4–8)
2. Containerize all microservices (Week 6–12)
3. Build blue-green deployment pipeline (Week 10–14)
4. Define release readiness checklist with automated gates (Week 3)

---

## Maturity Progression Roadmap

```
Month 1:  ════════════════════════════════════════════════════
          Baseline assessment complete, tool procurement

Month 2:  ████████████████████████████████████████████████░░░░
          Deploy Jira/ADO, appoint data stewards

Month 3:  ████████████████████████████████████████████████████░░
          CCB charter, release readiness gates, MDM start

Month 4:  ██████████████████████████████████████████████████████
          Automated RTM, data quality monitoring live

Month 5:  ██████████████████████████████████████████████████████
          CI/CD pipeline, environment standardization

Month 6:  ██████████████████████████████████████████████████████
          Blue-green deployments, MDM Phase 1 complete
          
          Target: 3 of 8 process areas at Level 3+
```

---

## Scoring Rubric

| Level | Score Range | Definition |
|-------|-------------|------------|
| 1 — Initial | 0.0 – 1.4 | Process unpredictable, poorly controlled |
| 2 — Managed | 1.5 – 2.4 | Process characterized for projects, reactive |
| 3 — Defined | 2.5 – 3.4 | Process standardized across organization |
| 4 — Quantitative | 3.5 – 4.4 | Process measured and controlled |
| 5 — Optimizing | 4.5 – 5.0 | Focus on continuous improvement |

**Current Overall Maturity: 2.1 (Managed)**
**Target Overall Maturity: 3.5 (Quantitative)**
**Gap: +1.4 levels**

---

## Business Case for Maturity Investment

| Benefit Area | Current Cost (Annual) | Target Cost (Annual) | Savings |
|--------------|----------------------|---------------------|---------|
| Production defects (rework) | ₹4.2 Cr | ₹1.8 Cr | ₹2.4 Cr |
| Delayed releases (opportunity cost) | ₹3.1 Cr | ₹1.2 Cr | ₹1.9 Cr |
| Manual data reconciliation | ₹1.8 Cr | ₹0.6 Cr | ₹1.2 Cr |
| Compliance penalties | ₹0.9 Cr | ₹0.2 Cr | ₹0.7 Cr |
| **Total** | **₹10.0 Cr** | **₹3.8 Cr** | **₹6.2 Cr** |

**Investment Required:** ₹3.5 Cr (tools + training + consulting)
**Payback Period:** 6.8 months

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
