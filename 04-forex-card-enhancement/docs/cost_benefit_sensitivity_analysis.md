# Cost-Benefit Sensitivity Analysis

> **Project:** Forex Card Enhancement
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Author:** Sagar Kandelkar

---

## Base Case Model

| Parameter | Base Value | Source |
|-----------|-----------|--------|
| Forex card user base | 85,000 | Current active cards |
| Average monthly load per user | USD 1,200 | Transaction data |
| Platform fee revenue | 1.5% per transaction | Pricing sheet |
| Cross-sell attach rate | 18% | Current benchmark |
| Customer acquisition cost (CAC) | ₹850 | Marketing data |
| Project investment | ₹4.2 Crores | Business case |

**Base Case NPV (3 years): ₹11.4 Crores**
**Base Case IRR: 134%**
**Payback Period: 8.2 months**

---

## One-Way Sensitivity Analysis

What happens if one variable changes ±20% while others stay fixed?

| Variable | -20% | Base | +20% | NPV Swing | Sensitivity Rank |
|----------|------|------|------|-----------|-----------------|
| **User base** | ₹6.8 Cr | ₹11.4 Cr | ₹16.0 Cr | **±₹4.6 Cr** | 🔴 High |
| **Avg monthly load** | ₹7.1 Cr | ₹11.4 Cr | ₹15.7 Cr | **±₹4.3 Cr** | 🔴 High |
| **Platform fee %** | ₹8.9 Cr | ₹11.4 Cr | ₹13.9 Cr | **±₹2.5 Cr** | 🟡 Medium |
| **Cross-sell rate** | ₹10.2 Cr | ₹11.4 Cr | ₹12.6 Cr | **±₹1.2 Cr** | 🟢 Low |
| **CAC** | ₹11.6 Cr | ₹11.4 Cr | ₹11.2 Cr | **±₹0.2 Cr** | 🟢 Low |

**Key Insight:** NPV is most sensitive to **user base** and **average monthly load** — these are the levers to monitor post-launch.

---

## Two-Way Sensitivity Matrix

NPV (₹ Crores) at different combinations of **User Base** vs **Platform Fee %**:

| | **Fee 1.2%** | **Fee 1.5% (Base)** | **Fee 1.8%** |
|---|---|---|---|
| **Users 68K (-20%)** | ₹4.2 Cr | ₹6.8 Cr | ₹9.4 Cr |
| **Users 85K (Base)** | ₹6.9 Cr | ₹11.4 Cr | ₹15.9 Cr |
| **Users 102K (+20%)** | ₹9.6 Cr | ₹16.0 Cr | ₹22.4 Cr |

**Decision Threshold:** If user base falls below 72K, NPV turns marginal even at 1.8% fee. This triggers a go/no-go checkpoint at Month 3.

---

## Scenario Modeling

| Scenario | Assumptions | NPV | IRR | Probability |
|----------|-------------|-----|-----|-------------|
| 🟢 **Optimistic** | User base +30%, load +25%, fee 1.8%, cross-sell 25% | ₹22.8 Cr | 218% | 20% |
| 🟡 **Base Case** | All parameters at current estimate | ₹11.4 Cr | 134% | 55% |
| 🟠 **Conservative** | User base -10%, load -15%, fee 1.3%, cross-sell 12% | ₹5.6 Cr | 78% | 20% |
| 🔴 **Pessimistic** | User base -30%, load -25%, fee 1.0%, cross-sell 5% | -₹1.2 Cr | Negative | 5% |

**Expected NPV (probability-weighted):** ₹11.8 Crores

---

## Tornado Diagram

```
NPV Sensitivity (₹ Crores, ±20% swing)
─────────────────────────────────────────────────────────────
User Base        ████████████████████████████████████  ±4.6 Cr
Avg Load         ██████████████████████████████████    ±4.3 Cr
Platform Fee %   ████████████████████                  ±2.5 Cr
Cross-sell Rate  ██████████                            ±1.2 Cr
CAC              ██                                    ±0.2 Cr
Investment       ████████████                          ±1.4 Cr
─────────────────────────────────────────────────────────────
                 -5      0      +5      +10     +15   NPV
```

---

## Break-Even Analysis

### User Base Break-Even
At what user base does NPV = 0 (holding other variables constant)?

```
Break-even user base: 42,000 active cards
Current user base:    85,000 active cards
Margin of safety:     101%
```

**Interpretation:** User base can drop by half before the project becomes unviable. Strong safety margin.

### Payback Period Sensitivity

| Scenario | Payback Period |
|----------|----------------|
| Optimistic | 5.4 months |
| Base | 8.2 months |
| Conservative | 13.1 months |
| Pessimistic | Never (NPV < 0) |

---

## Risk-Adjusted Decision Framework

| Risk Factor | Impact on Variable | Mitigation | NPV Adjustment |
|-------------|-------------------|------------|----------------|
| Regulatory cap on forex fees | Platform fee → 1.2% | Diversify revenue (cross-sell, subscription) | -₹2.5 Cr |
| Competitor zero-fee launch | User base -15% | Loyalty program, rate lock guarantee | -₹1.8 Cr |
| RBI restriction on crypto MCC | Load volume -8% | Prepaid utility payments as alternative | -₹0.9 Cr |
| **Risk-Adjusted NPV** | | | **₹6.2 Cr** |

**Even after risk adjustment, project remains strongly viable.**

---

## Monte Carlo Simulation (10,000 iterations)

| Statistic | Value |
|-----------|-------|
| Mean NPV | ₹11.9 Cr |
| Median NPV | ₹11.2 Cr |
| Standard Deviation | ₹4.3 Cr |
| Minimum NPV | -₹2.8 Cr |
| Maximum NPV | ₹31.4 Cr |
| **Probability of NPV > 0** | **94.2%** |
| Probability of NPV > Base | 48.1% |
| Probability of NPV < Conservative | 12.3% |

**Interpretation:** 94.2% chance the project generates positive returns. Very low downside risk.

---

## Recommendation

| Aspect | Finding | Decision |
|--------|---------|----------|
| Base case NPV | ₹11.4 Cr | ✅ Strong positive |
| Risk-adjusted NPV | ₹6.2 Cr | ✅ Still strongly positive |
| Probability of success | 94.2% | ✅ Very high |
| Payback | < 12 months even in conservative | ✅ Acceptable |
| Key risks | User base, load volume | 🟡 Monitor monthly |

**Recommendation: PROCEED with investment. Establish monthly tracking of user base and load volume against base case assumptions.**

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
