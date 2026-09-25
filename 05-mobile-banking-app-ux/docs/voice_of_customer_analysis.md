# Voice of Customer (VoC) Thematic Analysis

> **Project:** Mobile Banking App UX Enhancement
> **Type:** Portfolio Case Study — Synthetic Scenario
> **Author:** Sagar Kandelkar

---

## Research Design

| Attribute | Details |
|-----------|---------|
| **Method** | Semi-structured interviews + App store review mining |
| **Sample** | 18 customers + 312 app store reviews |
| **Segments** | Gen Z (18–25), Millennials (26–40), Gen X (41–55) |
| **Personas** | Digital Native, First-Time User, Senior Citizen |
| **Analyst** | Sagar Kandelkar |

---

## Interview Guide (Excerpt)

1. Walk me through the last time you used our mobile banking app.
2. What task took longer than expected?
3. If you could change one thing, what would it be?
4. Have you recommended the app to someone? Why or why not?
5. What would make you use the app more often?

---

## Synthetic Interview Transcripts (Anonymized)

### Respondent R001 — Digital Native, Age 24

> "I mean, the login is fine with fingerprint, but why do I need to enter my debit card PIN for every UPI transfer? My friend's bank app just asks for UPI PIN. Also, the statement download takes like 10 seconds — feels like forever when I'm at a store and need to check if payment went through."

**Themes:** Authentication friction, Performance perception, Contextual urgency

---

### Respondent R007 — First-Time User, Age 34

> "I opened my first account last month. The app asked for my PAN and Aadhaar but didn't tell me what format. I took a photo of my Aadhaar and it got rejected three times before I realized the glare was the problem. No guidance, just 'upload failed.' I almost went to the branch instead."

**Themes:** Onboarding guidance, Error message clarity, Channel fallback anxiety

---

### Respondent R012 — Senior Citizen, Age 62

> "The text is too small. I have to use my reading glasses and even then the light blue on white is hard to read. I called customer care and they told me to 'pinch to zoom' — I'm not comfortable with that. My son helps me sometimes but I want to do it myself. The 'quick pay' button is good though, one tap and done."

**Themes:** Accessibility, Color contrast, Self-service dignity, Simplified flows

---

### Respondent R015 — Millennial, Age 31

> "I like that I can see all my accounts — savings, FD, loan — in one place. But the FD maturity notification came 2 days late! I lost the auto-renewal window and the rate dropped. Also, why can't I set my own categories for expenses? 'Shopping' is too broad — I want 'Groceries' separate from 'Clothes.'"

**Themes:** Notification reliability, Customization, Personal financial management

---

## Thematic Coding Matrix

| Theme | Sub-Themes | Mentions | Sentiment | Priority | Respondent Quotes |
|-------|-----------|----------|-----------|----------|-------------------|
| **Authentication** | PIN fatigue, Biometric inconsistency, Session timeout | 87 | 😠 Negative | P1 | "Why PIN again?", "Face ID works half the time" |
| **Performance** | App load time, Transaction lag, Statement generation | 64 | 😐 Mixed | P1 | "10 seconds feels like forever", "Fine on WiFi, bad on 4G" |
| **Onboarding** | Document clarity, Error guidance, Branch fallback | 53 | 😠 Negative | P1 | "Rejected three times", "No guidance" |
| **Accessibility** | Font size, Color contrast, Screen reader | 41 | 😠 Negative | P2 | "Text too small", "Light blue on white" |
| **Notifications** | Timing, Relevance, Customization | 38 | 😐 Mixed | P2 | "Came 2 days late", "Too many spam alerts" |
| **Personalization** | Expense categories, Goals, Insights | 29 | 😄 Positive | P3 | "Want Groceries separate", "Like spending insights" |
| **Navigation** | Menu depth, Search, Quick actions | 28 | 😐 Mixed | P3 | "Took 4 taps to pay credit card", "Quick pay is good" |

---

## Sentiment Distribution

```
😄 Positive     ████████████ 23%  (Improvements appreciated, loyalty)
😐 Neutral      ████████████████ 31%  (Functional, nothing special)
😠 Negative     ██████████████████████ 46%  (Friction points, churn risk)
```

**NPS Estimate:** +4 (Detractors: 46%, Passives: 31%, Promoters: 23%)

---

## Journey Pain Points

```
Discovery     →  Onboarding    →  First Use     →  Regular Use    →  Advocacy
    │               │               │                │               │
    │           🔴 Doc upload    🟡 Login        🟡 Performance   🟢 Quick pay
    │           🔴 No guidance   🟡 PIN fatigue  🟡 Statements   🔴 No referral
    │           🔴 Rejection      🟡 Navigation   🟢 All accounts  🟢 FD view
```

---

## Thematic Insights → Requirements

| Theme | Insight | Requirement | Impact |
|-------|---------|-------------|--------|
| Authentication | PIN fatigue kills repeat usage | Biometric-only for < ₹10K UPI | +32% daily active users |
| Onboarding | Rejection without guidance = branch visit | Inline image preview + quality check | -28% onboarding drop-off |
| Accessibility | Seniors are a growing segment | WCAG 2.1 AA compliance + font scaling | +18% 55+ user adoption |
| Notifications | Late alerts = missed financial opportunities | Real-time push + smart scheduling | +15% FD renewal rate |
| Personalization | Users want control over categorization | Custom expense tags + budgets | +22% app engagement |

---

## App Store Review Mining — Automated Insights

| Star Rating | Count | Top Complaint | Top Praise |
|-------------|-------|---------------|------------|
| ⭐ 1-star | 47 | "App crashes on payment" | — |
| ⭐⭐ 2-star | 68 | "Too many steps for simple task" | — |
| ⭐⭐⭐ 3-star | 89 | "OK but competitors are better" | "All accounts in one view" |
| ⭐⭐⭐⭐ 4-star | 78 | "Sometimes slow" | "Fingerprint login is fast" |
| ⭐⭐⭐⭐⭐ 5-star | 30 | — | "Quick pay saves time" |

**Average Rating: 2.9 / 5**
**Competitor Benchmark: 4.2 / 5**

---

## Recommendations

| Priority | Action | Owner | Effort | Timeline |
|----------|--------|-------|--------|----------|
| P1 | Implement progressive auth (biometric → PIN only for > ₹10K) | Product + Security | Medium | Sprint 3 |
| P1 | Add inline image preview + auto-crop for KYC docs | UX + Dev | Medium | Sprint 4 |
| P1 | Reduce app cold start from 4.2s to < 2s | Engineering | High | Sprint 5–6 |
| P2 | WCAG 2.1 AA audit + font scaling + high contrast mode | UX + Accessibility | Medium | Sprint 7 |
| P2 | Smart notification engine (time-based, behavior-based) | Data Science | High | Sprint 8–10 |
| P3 | Custom expense categories + monthly budget alerts | Product | Low | Sprint 11 |
| P3 | Referral program with UPI cashback incentive | Marketing | Medium | Sprint 12 |

---

*Portfolio Case Study — Synthetic Scenario | Analyst: Sagar Kandelkar*
