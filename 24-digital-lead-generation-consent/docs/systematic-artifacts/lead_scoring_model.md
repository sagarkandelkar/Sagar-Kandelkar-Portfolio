# Lead Scoring Model

## 1. Objective

Assign a **composite lead score (0–100)** to every captured intent signal so sales and marketing teams can prioritize outreach and maximize conversion rates.

---

## 2. Scoring Dimensions

| Dimension | Weight | Description |
|-----------|--------|-------------|
| **Behavioral Score** | 50% | Web/app engagement depth |
| **Demographic Score** | 30% | Profile quality and ideal customer match |
| **Propensity Score** | 20% | Likelihood to purchase based on historical patterns |

**Composite Score = (Behavioral × 0.50) + (Demographic × 0.30) + (Propensity × 0.20)**

---

## 3. Behavioral Score (0–100)

| Signal | Points | Condition |
|--------|--------|-----------|
| Page View | +5 | Any product page visit |
| Calculator Use | +15 | Used EMI/ROI calculator |
| Time on Page | +10 | > 3 minutes |
| Scroll Depth | +10 | Scrolled > 75% |
| Return Visit | +20 | Returned within 7 days |
| Form Start | +15 | Started application form |
| Document Download | +20 | Downloaded product brochure |
| Comparison Tool | +25 | Used competitor comparison |
| **Negative Signals** | | |
| Bounce (<10 sec) | −10 | Immediate exit |
| Mobile Only | −5 | Never visited desktop |

---

## 4. Demographic Score (0–100)

| Attribute | Weight | Scoring Logic |
|-----------|--------|---------------|
| **Age** | 20% | 28–45 = 100; 25–27 or 46–50 = 70; <25 or >50 = 40 |
| **Income Bracket** | 30% | >₹8LPA = 100; ₹5–8LPA = 70; ₹3–5LPA = 40; <₹3LPA = 20 |
| **Location Tier** | 15% | Tier 1 metro = 100; Tier 2 = 70; Tier 3 = 40 |
| **Employment Type** | 20% | Salaried MNC = 100; Salaried Pvt = 80; Self-employed = 50; Student = 20 |
| **Existing Relationship** | 15% | Existing account holder = 100; New prospect = 50 |

---

## 5. Propensity Score (0–100)

Based on historical conversion patterns:

| Segment | Base Rate | Score |
|---------|-----------|-------|
| Personal Loan + Salaried + Metro | 18% | 100 |
| Home Loan + Self-employed | 8% | 45 |
| Credit Card + First-jobber | 12% | 65 |
| Insurance + Family > 40 yrs | 15% | 80 |
| Gold Loan + Rural | 22% | 100 |
| Used comparison tool + returned 2x | 35% | 100 |

---

## 6. Lead Tiers

| Tier | Composite Score | Action |
|------|-----------------|--------|
| 🔥 **Hot** | 80–100 | Immediate callback by RM within 2 hours |
| 🌡️ **Warm** | 60–79 | WhatsApp nurture + callback within 24h |
| ❄️ **Cold** | 40–59 | Email drip campaign + retargeting ads |
| 🧊 **Frozen** | <40 | Lookalike audience only; no direct outreach |

---

## 7. Sample Calculation

**User:** Salaried IT professional, 32 years, Bangalore, ₹12LPA, first-time visitor

| Signal | Points |
|--------|--------|
| Used EMI calculator | +15 |
| Time on page >3 min | +10 |
| Scrolled >75% | +10 |
| Downloaded brochure | +20 |
| **Behavioral Raw** | **55** |

| Attribute | Score | Weighted |
|-----------|-------|----------|
| Age 32 | 100 | ×0.20 = 20 |
| Income ₹12LPA | 100 | ×0.30 = 30 |
| Tier 1 metro | 100 | ×0.15 = 15 |
| Salaried MNC | 100 | ×0.20 = 20 |
| New prospect | 50 | ×0.15 = 7.5 |
| **Demographic Raw** | **92.5** | |

| Segment | Score |
|---------|-------|
| Personal Loan | 100 |
| **Propensity Raw** | **100** |

**Composite = (55 × 0.50) + (92.5 × 0.30) + (100 × 0.20) = 27.5 + 27.75 + 20 = 75.25**

**Tier: 🌡️ Warm → Callback within 24 hours**
