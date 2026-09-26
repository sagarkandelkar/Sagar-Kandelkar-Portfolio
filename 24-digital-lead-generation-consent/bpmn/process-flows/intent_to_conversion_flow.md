# BPMN Process Flow: Intent-to-Conversion

## Process: From Anonymous Visitor to Consented Lead to Customer

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        LANE: WEBSITE / DIGITAL CHANNEL                       │
│                                                                              │
│  ┌──────────┐     ┌──────────────┐     ┌─────────────┐                     │
│  │ Anonymous│     │ Browse Product│     │  Interact   │                     │
│  │ Visitor  │────▶│    Page       │────▶│ (Calculator,│                    │
│  │ Arrives  │     │               │     │  Download)  │                    │
│  └──────────┘     └──────────────┘     └──────┬──────┘                     │
│                                               │                              │
│                                               ▼                              │
│                                         ┌─────────────┐                     │
│                                         │  Exit Intent │                    │
│                                         │  Detected?   │                    │
│                                         └──────┬──────┘                     │
│                                                │                             │
│                                         ┌──────┴──────┐                    │
│                                         │ YES          │ NO                  │
│                                         ▼              ▼                     │
│                                  ┌──────────┐   ┌──────────┐               │
│                                  │ Show Soft│   │ Continue  │               │
│                                  │ Capture  │   │ Tracking  │               │
│                                  │ Prompt   │   │           │               │
│                                  └────┬─────┘   └───────────┘               │
│                                       │                                     │
├───────────────────────────────────────┼─────────────────────────────────────┤
│                        LANE: CONSENT MANAGEMENT                              │
│                                       │                                     │
│                                  ┌────┴────┐                                │
│                                  │ First   │                                │
│                                  │ Visit?  │                                │
│                                  └────┬────┘                                │
│                                  ┌────┴──────┐                             │
│                                  │ YES        │ NO                          │
│                                  ▼            ▼                             │
│                           ┌──────────┐  ┌──────────┐                        │
│                           │ Display │  │ Skip    │                        │
│                           │ Consent │  │ Banner  │                        │
│                           │ Banner  │  │         │                        │
│                           └────┬────┘  └─────────┘                        │
│                                │                                            │
│                           ┌────┴──────┐                                     │
│                           │ User      │                                     │
│                           │ Selects   │                                     │
│                           │ Preferences                                    │
│                           └────┬──────┘                                     │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ Capture Granular│                              │
│                           │ Consent (6 cats)│                              │
│                           └────┬──────────┘                                │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ Store Consent  │                                │
│                           │ with Timestamp │                                │
│                           │ + Version +    │                                │
│                           │ Proof          │                                │
│                           └────┬──────────┘                                │
│                                │                                            │
├────────────────────────────────┼────────────────────────────────────────────┤
│                        LANE: LEAD SCORING ENGINE                             │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ Receive Events │                               │
│                           │ + Consent Data │                               │
│                           └────┬──────────┘                                │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ Calculate      │                                │
│                           │ Composite Score│                                │
│                           │ (Behavioral +  │                                │
│                           │ Demographic +  │                                │
│                           │ Propensity)    │                                │
│                           └────┬──────────┘                                │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ Assign Tier    │                                │
│                           │ (Hot/Warm/    │                                │
│                           │  Cold/Frozen)  │                                │
│                           └────┬──────────┘                                │
│                                │                                            │
├────────────────────────────────┼────────────────────────────────────────────┤
│                        LANE: CRM / SALES                                     │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ Push to CRM    │                                │
│                           │ with Score +   │                                │
│                           │ Consent Flags  │                                │
│                           └────┬──────────┘                                │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ Deduplicate    │                                │
│                           │ against Existing│                               │
│                           │ Customer Master │                               │
│                           └────┬──────────┘                                │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ Route to       │                                │
│                           │ Assigned RM    │                                │
│                           └────┬──────────┘                                │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ SLA Alert      │                                │
│                           │ (Hot: 2hrs,    │                                │
│                           │  Warm: 24hrs)  │                                │
│                           └────┬──────────┘                                │
│                                │                                            │
├────────────────────────────────┼────────────────────────────────────────────┤
│                        LANE: OMNICHANNEL ORCHESTRATOR                      │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ Check Consent  │                                │
│                           │ for Channel +  │                                │
│                           │ Purpose        │                                │
│                           └────┬──────────┘                                │
│                                │                                            │
│                           ┌────┴──────────┐                                │
│                           │ Consent Valid? │                                │
│                           └────┬──────────┘                                │
│                           ┌────┴──────┐                                    │
│                           │ YES        │ NO                                 │
│                           ▼            ▼                                    │
│                    ┌──────────┐   ┌──────────┐                            │
│                    │ Send     │   │ Suppress │                            │
│                    │ Personalized│   │ Outreach │                            │
│                    │ Message  │   │ Log Compliance│                         │
│                    └────┬─────┘   └──────────┘                            │
│                         │                                                   │
│                    ┌────┴──────────┐                                        │
│                    │ Track        │                                        │
│                    │ Delivery,    │                                        │
│                    │ Open, Click, │                                        │
│                    │ Response     │                                        │
│                    └────┬──────────┘                                        │
│                         │                                                   │
│                    ┌────┴──────────┐                                        │
│                    │ Customer       │                                        │
│                    │ Responds?      │                                        │
│                    └────┬──────────┘                                        │
│                    ┌────┴──────┐                                            │
│                    │ YES        │ NO                                         │
│                    ▼            ▼                                            │
│             ┌──────────┐   ┌──────────┐                                    │
│             │ Update   │   │ Trigger  │                                    │
│             │ Status = │   │ Follow-up│                                    │
│             │ ENGAGED  │   │ (Drip)   │                                    │
│             └────┬─────┘   └──────────┘                                    │
│                  │                                                          │
│             ┌────┴──────────┐                                              │
│             │ RM Initiates  │                                              │
│             │ Application   │                                              │
│             │ Process       │                                              │
│             └────┬──────────┘                                              │
│                  │                                                          │
│             ┌────┴──────────┐                                              │
│             │ Status =       │                                              │
│             │ CONVERTED      │                                              │
│             └─────────────────┘                                              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Key Decision Points

| Gateway | Condition | True Path | False Path |
|---------|-----------|-----------|------------|
| G1: Exit Intent? | Mouse leaving viewport / fast scroll-up | Show capture prompt | Continue tracking |
| G2: First Visit? | No prior consent record | Show consent banner | Skip banner |
| G3: Consent Valid? | CONS_MKT=TRUE AND CONS_CBK=TRUE AND not withdrawn | Send outreach | Suppress and log |
| G4: Customer Responds? | Reply/click/application started | Update to ENGAGED | Trigger follow-up |

---

## SLA Timers

| Tier | Timer | Escalation |
|------|-------|------------|
| Hot | 2 hours | Alert to Sales Manager |
| Warm | 24 hours | Alert to Sales Manager |
| Cold | 72 hours | Auto-move to nurture drip |
| Frozen | N/A | No direct outreach |
