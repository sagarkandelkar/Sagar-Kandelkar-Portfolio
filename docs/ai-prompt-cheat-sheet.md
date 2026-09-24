# AI Prompt Cheat Sheet — Learn SAP as a BFSI BA

> Use these prompts with Claude, ChatGPT, or any AI assistant to master SAP concepts without coding.

---

## 🎯 Concept Understanding

### Explain Any SAP Concept
```
Explain SAP [CONCEPT] like I'm a banking business analyst with zero SAP background. 
Use a [LOAN / PAYMENT / FOREX / CREDIT CARD] example. Keep it under 200 words.
```

**Example:**
```
Explain SAP Business Partner (BP) like I'm a banking BA. Use a customer opening 
a savings account example. Keep it under 200 words.
```

### Compare SAP to Non-SAP
```
How does SAP handle [PROCESS] compared to a custom-built banking system? 
What are the pros and cons from a BA perspective?
```

---

## 🔄 Process Mapping

### Map Your Project to SAP
```
I analyzed a [PROJECT NAME] in banking with these stages: [LIST STAGES]. 
Map this to the equivalent SAP modules, transactions, and data objects. 
Highlight any gaps between my process and standard SAP.
```

**Example:**
```
I analyzed a Forex Card Enhancement project with stages: 
Application → KYC → Card Issuance → Currency Loading → Spend → Closure.
Map this to equivalent SAP modules and transactions. Show gaps.
```

### Create Fit-Gap Analysis
```
For this requirement: "[YOUR REQUIREMENT]"
Is this standard SAP functionality in [SAP MODULE] or does it need customization? 
Provide SAP standard alternatives if available.
```

---

## 📝 Requirements Writing

### Convert to SAP Format
```
Convert this business requirement into SAP functional requirement format:
"[YOUR REQUIREMENT]"

Include: SAP Module, Transaction Code, Configuration Object, Business Rule, 
Screen/Field reference.
```

### Draft SAP Test Cases
```
From this SAP requirement: "[REQUIREMENT]"
Generate 3 positive test cases and 2 negative test cases for UAT.
```

---

## 🎤 Interview Preparation

### Mock Interview — Technical
```
Act as a hiring manager for a SAP Banking Business Analyst role at [BANK NAME]. 
Ask me 5 technical questions about SAP [MODULE]. After each answer, give me 
a score (1-10) and feedback on how to improve.
```

### Mock Interview — Scenario-Based
```
Give me a scenario: "The business wants [FEATURE] but SAP standard doesn't 
support it." Walk me through how I'd analyze this as a BA. Then critique my approach.
```

### Translate Business to SAP
```
The business user says: "[BUSINESS STATEMENT]" 
How would I translate this into SAP language for the technical team?
```

---

## 📋 Document Generation

### Generate BRD Section
```
Write a Business Requirements Document section for: [FEATURE]
Context: We're implementing this in SAP [MODULE] for a [BANK TYPE].

Include:
1. Requirement ID and description
2. SAP Module / Transaction
3. Business rules
4. Acceptance criteria (5 bullet points)
5. Assumptions
```

### Create Process Flow Narrative
```
Write a step-by-step process flow narrative for [PROCESS] in SAP [MODULE]. 
For each step, identify: who does it, which SAP screen/transaction, 
what data is entered, and what decision is made.
```

---

## 🔍 Deep Dive Topics

### Understand Configuration vs Customization
```
For this requirement: "[REQUIREMENT]"
Is this SAP configuration (IMG) or ABAP customization? 
Explain the difference and why it matters for project timelines and costs.
```

### Integration Architecture
```
Explain how SAP [MODULE A] talks to SAP [MODULE B] in a banking context. 
What are the integration points, data flows, and potential failure points?
```

### Data Migration
```
We're migrating [DATA TYPE] from a legacy system to SAP [MODULE]. 
What are the key data migration considerations for a BA? 
Create a sample mapping template.
```

---

## 📚 Weekly Learning Checklist

Use these prompts in order, one per day:

| Day | Prompt Type | Goal |
|-----|-----------|------|
| 1 | Concept Understanding | Learn 1 new SAP module |
| 2 | Process Mapping | Map 1 of your projects to SAP |
| 3 | Requirements Writing | Convert 3 requirements to SAP format |
| 4 | Document Generation | Generate 1 BRD section |
| 5 | Mock Interview | Practice 5 Q&A |
| 6 | Deep Dive | Explore configuration vs customization |
| 7 | Review | Ask AI to quiz you on the week's learning |

---

## 💡 Pro Tips for Using AI Effectively

1. **Always provide context** — Mention you're a BA, not a developer
2. **Ask for banking examples** — Makes abstract SAP concepts concrete
3. **Request critique** — "What's wrong with this requirement?"
4. **Build iteratively** — Start simple, then ask AI to add detail
5. **Save good outputs** — Create your own SAP glossary from AI responses

---

*Portfolio Reference | Analyst: Sagar Kandelkar*
