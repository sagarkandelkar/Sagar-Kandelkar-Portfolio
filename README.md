# Sagar Kandelkar - Portfolio

Welcome to my professional portfolio repository. This repository showcases my projects, case studies, and technical work across various domains including BFSI, data engineering, and analytics.

## 📁 Repository Structure

```
Sagar-Kandelkar-Portfolio/
├── 01-bfsi-customer-onboarding/    # BFSI Customer Onboarding Project
│   ├── data/                        # Sample datasets, dictionaries, and SQL schema
│   ├── diagrams/                    # Architecture, ERD, and process flow diagrams
│   └── docs/                        # Project documentation and case studies
└── README.md                        # This file
```

## 🚀 Projects

### 1. BFSI Customer Onboarding
A comprehensive project focused on streamlining and optimizing the customer onboarding process in the Banking, Financial Services, and Insurance sector.

**Key Areas:**
- Customer data management and validation
- KYC (Know Your Customer) process optimization
- Workflow automation
- Compliance and regulatory requirements

**Project Deliverables:**

| Category | Files |
|----------|-------|
| **Data** | `customer_applications.csv` — Sample dataset with 15 applications across channels and statuses |
| **Data Dictionary** | `data_dictionary.md` — Field definitions and data quality notes |
| **SQL Schema** | `schema.sql` — Database table creation scripts from the ERD |
| **Documentation** | `docs/README.md` — Project overview and objectives |
| **Requirements** | `requirements.md` — Functional and non-functional requirements |
| **Gap Analysis** | `gap_analysis.md` — AS-IS vs TO-BE assessment with metrics |
| **Roadmap** | `implementation_roadmap.md` — 4-phase rollout plan with timelines |
| **Process Flow** | `to_be_process_flow.drawio` — Swimlane diagram |
| **Data Model** | `entity_relationship_diagram.drawio` — ERD |
| **Demo Dashboard** | `demo-dashboard.html` — Interactive HTML dashboard with charts |
| **Presentation** | `presentation.html` — Scrollable slide deck for interviews |

**Live Demo:** [Interactive Dashboard](https://sagarkandelkar.github.io/Sagar-Kandelkar-Portfolio/01-bfsi-customer-onboarding/demo-dashboard.html)

---

### 📊 Process Flow (Mermaid)

```mermaid
graph LR
    A[👤 Customer Applies<br/>Web/Mobile/Branch] --> B[🤖 Duplicate Check<br/>PAN/Aadhaar/Phone]
    B --> C[📄 Document Upload<br/>OCR + AI Validation]
    C --> D[🛡️ KYC Verification<br/>UIDAI/NSDL API]
    D --> E[🔍 AML Screening<br/>Sanctions/PEP]
    E --> F{Risk Score}
    F -->|Low Risk| G[✅ Auto Approve]
    F -->|Medium/High| H[👁️ Manual Review]
    G --> I[🏦 Account Setup<br/>Core Banking]
    H --> I
    I --> J[📨 Welcome Kit<br/>Digital + Physical]
    J --> K[🎉 Customer Onboarded]
```

### 🗄️ Data Model (Mermaid ERD)

```mermaid
erDiagram
    CUSTOMER ||--o{ CONTACT : has
    CUSTOMER ||--o{ APPLICATION : submits
    APPLICATION ||--o{ DOCUMENT : contains
    APPLICATION ||--|| RISK_ASSESSMENT : assessed_by
    APPLICATION ||--o{ AUDIT_LOG : tracks

    CUSTOMER {
        uuid customer_id PK
        string first_name
        string last_name
        date date_of_birth
        enum gender
    }
    CONTACT {
        uuid contact_id PK
        uuid customer_id FK
        string email
        string phone
        text address
    }
    APPLICATION {
        string application_id PK
        uuid customer_id FK
        datetime application_date
        enum application_channel
        enum product_type
        decimal annual_income
        string employment_type
        enum onboarding_status
    }
    DOCUMENT {
        uuid document_id PK
        string application_id FK
        enum document_type
        string document_number
        enum verification_status
        datetime uploaded_at
    }
    RISK_ASSESSMENT {
        uuid risk_id PK
        string application_id FK
        int credit_score
        enum aml_risk_score
        enum kyc_status
        enum overall_risk
        datetime assessed_at
    }
    AUDIT_LOG {
        uuid audit_id PK
        string application_id FK
        string action
        string performed_by
        datetime timestamp
    }
```

---

## 🛠️ Tech Stack

- **Data:** SQL, Python, Excel
- **Visualization:** Power BI, Tableau, Draw.io
- **Documentation:** Markdown, Confluence
- **Version Control:** Git, GitHub
- **CI/CD:** GitHub Actions (GitHub Pages deployment)

## 📫 Contact

- **GitHub:** [@sagarkandelkar](https://github.com/sagarkandelkar)
- **LinkedIn:** [Sagar Kandelkar](https://linkedin.com/in/sagarkandelkar)

---

*This portfolio is a work in progress. New projects and updates are added regularly.*
