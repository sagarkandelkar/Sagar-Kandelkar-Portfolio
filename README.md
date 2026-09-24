# Sagar Kandelkar - Portfolio

Welcome to my professional portfolio repository. This repository showcases my projects, case studies, and technical work across various domains including BFSI, data engineering, and analytics.

## 📁 Repository Structure

```
Sagar-Kandelkar-Portfolio/
├── 01-bfsi-customer-onboarding/    # BFSI Customer Onboarding Project
│   ├── analysis/                    # Python EDA notebooks
│   ├── dashboard/                   # Power BI / Tableau style dashboards
│   ├── data/                        # Sample datasets, dictionaries, and SQL schema
│   ├── diagrams/                    # Architecture, ERD, and process flow diagrams
│   └── docs/                        # Project documentation and case studies
├── 02-retail-analytics/            # Retail Analytics — Customer Segmentation & Sales Optimization
│   ├── analysis/                    # Python EDA notebooks
│   ├── data/                        # Sample datasets, dictionaries, and SQL schema
│   └── docs/                        # Project documentation and requirements
├── 03-fraud-risk-analytics/        # Fraud Detection & Risk Analytics in BFSI
│   ├── analysis/                    # Python EDA notebooks
│   ├── data/                        # Sample datasets, dictionaries, and SQL schema
│   └── docs/                        # Project documentation and requirements
├── .github/workflows/               # CI/CD workflows
│   ├── deploy.yml                   # React + Vite portfolio deployment
│   └── pages.yml                    # Static site deployment (manual)
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
| **SQL Schema** | `schema.sql` — PostgreSQL DDL with tables, views, indexes, and sample data |
| **EDA Notebook** | `analysis/eda.ipynb` — Python Jupyter notebook with full exploratory data analysis |
| **BI Dashboard** | `dashboard/powerbi-style-dashboard.html` — Power BI-style interactive HTML dashboard |
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

### 2. Retail Analytics — Customer Segmentation & Sales Optimization
A data-driven retail analytics project demonstrating customer segmentation (RFM analysis), sales performance tracking, campaign effectiveness, and churn prediction capabilities.

**Key Areas:**
- Customer segmentation using RFM (Recency, Frequency, Monetary) scoring
- Sales trend analysis across categories, channels, and payment methods
- Marketing campaign ROI tracking and optimization
- Churn risk identification and retention strategies
- Inventory and product performance insights

**Project Deliverables:**

| Category | Files |
|----------|-------|
| **Data** | `customers.csv` — 20 customer records with RFM scores and segments |
| **Data** | `transactions.csv` — 25 transaction records across categories and channels |
| **Data** | `products.csv` — 25 product records with margins and stock levels |
| **Data** | `campaigns.csv` — 6 marketing campaigns with budget and revenue data |
| **Data Dictionary** | `data_dictionary.md` — Field definitions for all datasets |
| **SQL Schema** | `schema.sql` — PostgreSQL DDL for customers, products, transactions, campaigns |
| **EDA Notebook** | `analysis/eda.ipynb` — Python notebook with RFM analysis, sales trends, campaign ROI |
| **Documentation** | `docs/README.md` — Project overview and objectives |
| **Requirements** | `requirements.md` — Functional requirements for segmentation, analytics, campaigns |
| **Gap Analysis** | `gap_analysis.md` — AS-IS vs TO-BE assessment with recommendations |
| **Roadmap** | `implementation_roadmap.md` — 3-phase rollout plan |

**Live Demo:** Dashboard coming soon

---

### 3. Fraud Detection & Risk Analytics
A BFSI fraud analytics portfolio case study demonstrating real-time risk scoring, rule-based alerting, and fraud pattern analysis across transaction channels.

**Key Areas:**
- Transaction monitoring and risk scoring (amount, geography, time, velocity)
- Rule-based alert generation and triage
- Fraud pattern analysis (off-hours, geo-anomaly, velocity)
- Alert investigation workflow and audit trail
- Channel risk analysis (Branch, Internet Banking, UPI, Mobile, POS)

**Project Deliverables:**

| Category | Files |
|----------|-------|
| **Data** | `transactions.csv` — 25 synthetic transactions with fraud flags and risk scores |
| **Data** | `alerts.csv` — 7 open fraud alerts with assigned investigators |
| **Data Dictionary** | `data_dictionary.md` — Field definitions for transactions and alerts |
| **SQL Schema** | `schema.sql` — PostgreSQL DDL with tables and 5 analytical views |
| **EDA Notebook** | `analysis/eda.ipynb` — Python notebook with fraud distribution, hourly patterns, channel risk, correlation |
| **Documentation** | `docs/README.md` — Project overview and synthetic data disclaimer |
| **Requirements** | `docs/requirements.md` — Functional and non-functional requirements |
| **Gap Analysis** | `docs/gap_analysis.md` — AS-IS vs TO-BE with metrics and recommendations |
| **Roadmap** | `docs/implementation_roadmap.md` — 3-phase rollout with timeline and budget |

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

- **Data:** SQL, Python (Pandas, NumPy, Matplotlib, Seaborn), Excel
- **Visualization:** Power BI, Tableau, Draw.io, Chart.js
- **Documentation:** Markdown, Confluence
- **Version Control:** Git, GitHub
- **CI/CD:** GitHub Actions (GitHub Pages deployment for React + Vite)

## 📫 Contact

- **GitHub:** [@sagarkandelkar](https://github.com/sagarkandelkar)
- **LinkedIn:** [Sagar Kandelkar](https://linkedin.com/in/sagarkandelkar)

---

*This portfolio is a work in progress. New projects and updates are added regularly.*
