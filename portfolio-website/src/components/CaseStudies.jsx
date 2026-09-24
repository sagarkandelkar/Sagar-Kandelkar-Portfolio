export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Customer Onboarding & KYC',
      status: 'Completed',
      repo: '01-bfsi-customer-onboarding',
      lifecycle: ['Discovery', 'Application', 'Document Upload', 'KYC Verification', 'AML Screening', 'Account Opening', 'Welcome Kit'],
      themes: ['Digital KYC', 'Video Verification', 'OCR Automation', 'AML Compliance', 'Frictionless UX'],
      desc: 'End-to-end digital onboarding reducing account opening time from 5 days to under 10 minutes with regulatory compliance.',
    },
    {
      title: 'Forex Card Enhancement & Digital Travel Experience',
      status: 'In Progress',
      repo: '04-forex-card-enhancement',
      lifecycle: ['Discovery', 'Application', 'KYC', 'Issuance', 'Activation', 'Currency Loading', 'Spend Abroad', 'Tracking', 'Reload', 'Support', 'Closure'],
      themes: ['Multi-Currency Wallet', 'Rate Lock', 'Real-Time Alerts', 'LRS Tracking', 'Self-Service Controls'],
      desc: 'Complete Forex card lifecycle analysis with ₹4.2 Cr projected annual benefits and 7.7x ROI through digital transformation.',
    },
    {
      title: 'Digital Payments',
      status: 'Completed',
      repo: '05-digital-payments-analysis',
      lifecycle: ['Merchant Onboarding', 'Payment Initiation', 'Authentication', 'Processing', 'Settlement', 'Reconciliation', 'Dispute'],
      themes: ['UPI Integration', 'Real-Time Settlement', 'Fraud Detection', 'Reconciliation Automation', 'Merchant Analytics'],
      desc: 'Payment systems analysis covering UPI, wallets, and cards with settlement optimization and fraud prevention strategies.',
    },
    {
      title: 'Credit Card Customer Journey',
      status: 'Completed',
      repo: '06-credit-card-journey',
      lifecycle: ['Lead Generation', 'Application', 'Credit Bureau Check', 'Risk Assessment', 'Approval', 'Card Issuance', 'Activation', 'Spend', 'Billing', 'Payment', 'Retention'],
      themes: ['Instant Approval', 'Dynamic Limit Management', 'Spend Analytics', 'Rewards Optimization', 'Churn Prevention'],
      desc: 'Full credit card lifecycle from prospecting to retention with digital approval and personalized limit strategies.',
    },
    {
      title: 'Digital Loan Journey',
      status: 'Completed',
      repo: '07-loan-origination-process',
      lifecycle: ['Application', 'Document Upload', 'Credit Appraisal', 'Risk Scoring', 'Sanction', 'Agreement', 'Disbursement', 'Repayment', 'Closure'],
      themes: ['STP Processing', 'Digital Verification', 'API-Based Bureau', 'Auto-Sanction', 'EMI Management'],
      desc: 'Loan origination from digital application to disbursement with straight-through processing and automated credit decisions.',
    },
    {
      title: 'Insurance Claims Processing',
      status: 'Completed',
      repo: '08-insurance-claims-processing',
      lifecycle: ['Intimation', 'Survey', 'Assessment', 'Approval', 'Settlement', 'Disbursal', 'Closure'],
      themes: ['Digital Intimation', 'AI Assessment', 'Fraud Detection', 'Fast-Track Settlement', 'Customer Communication'],
      desc: 'Insurance claims lifecycle analysis with automation opportunities and customer experience improvements.',
    },
    {
      title: 'Retail Analytics & Customer Segmentation',
      status: 'Completed',
      repo: '02-retail-analytics',
      lifecycle: ['Data Collection', 'Cleaning', 'Segmentation', 'Profiling', 'Targeting', 'Campaign', 'Measurement'],
      themes: ['RFM Analysis', 'Cohort Retention', 'Basket Analysis', 'Personalization', 'Churn Prediction'],
      desc: 'Customer segmentation and retail analytics using RFM, cohort analysis, and basket analysis for targeted marketing.',
    },
    {
      title: 'Fraud Detection & Risk Analytics',
      status: 'Completed',
      repo: '03-fraud-detection-risk-analytics',
      lifecycle: ['Transaction Capture', 'Rule Engine', 'ML Scoring', 'Alert Generation', 'Investigation', 'Resolution', 'Reporting'],
      themes: ['Anomaly Detection', 'Behavioral Biometrics', 'Real-Time Scoring', 'Case Management', 'Regulatory Reporting'],
      desc: 'Transaction fraud detection using rule engines and machine learning with real-time alerting and investigation workflows.',
    },
    {
      title: 'Banking Complaint Management',
      status: 'Planned',
      lifecycle: ['Complaint Intake', 'Categorization', 'Triage', 'Investigation', 'Resolution', 'Customer Communication', 'Closure', 'Root Cause Analysis'],
      themes: ['Omnichannel Intake', 'Auto-Categorization', 'SLA Tracking', 'Escalation Matrix', 'Feedback Loop'],
      desc: 'Structured complaint handling from multi-channel intake to resolution with SLA tracking and regulatory compliance.',
    },
    {
      title: 'Bank Account Lifecycle',
      status: 'Planned',
      lifecycle: ['Prospecting', 'Onboarding', 'Activation', 'Usage', 'Up-sell', 'Retention', 'Dormancy', 'Revival', 'Closure'],
      themes: ['360° Customer View', 'Product Cross-Sell', 'Dormancy Prediction', 'Relationship Pricing', 'Exit Interviews'],
      desc: 'Complete account lifecycle management from prospecting through dormancy prevention to structured closure.',
    },
    {
      title: 'Remittance & International Transfers',
      status: 'Planned',
      lifecycle: ['Initiation', 'Compliance Check', 'FX Conversion', 'Intermediary Routing', 'Beneficiary Credit', 'Confirmation', 'Reconciliation'],
      themes: ['Real-Time Tracking', 'SWIFT gpi', 'Compliance Automation', 'FX Optimization', 'Cost Transparency'],
      desc: 'International money transfer analysis covering SWIFT, correspondent banking, and emerging fintech alternatives.',
    },
    {
      title: 'Digital Banking Transformation',
      status: 'Planned',
      lifecycle: ['Strategy', 'Platform Selection', 'Migration', 'Integration', 'Testing', 'Pilot', 'Rollout', 'Optimization'],
      themes: ['Core Modernization', 'API Architecture', 'Cloud Migration', 'Mobile-First', 'Open Banking'],
      desc: 'Legacy-to-digital transformation roadmap for banking platforms with phased migration and risk mitigation.',
    },
    {
      title: 'Branch Operations Improvement',
      status: 'Planned',
      lifecycle: ['Customer Entry', 'Service Request', 'Teller Processing', 'Approval', 'Fulfillment', 'Feedback', 'Reporting'],
      themes: ['Queue Management', 'Staff Optimization', 'Paperless Branch', 'Sales Enablement', 'Cost Reduction'],
      desc: 'Branch efficiency analysis with queue optimization, staff allocation models, and paperless operation strategies.',
    },
    {
      title: 'KYC / AML Compliance Process',
      status: 'Planned',
      lifecycle: ['Customer Identification', 'Verification', 'Risk Rating', 'Ongoing Monitoring', 'Screening', 'Investigation', 'Reporting'],
      themes: ['Perpetual KYC', 'AI Screening', 'Risk-Based Approach', 'RegTech Integration', 'SAR Filing'],
      desc: 'Anti-money laundering and KYC compliance with perpetual monitoring, AI-driven screening, and regulatory reporting.',
    },
    {
      title: 'Fraud Risk Management',
      status: 'Planned',
      lifecycle: ['Threat Identification', 'Control Design', 'Implementation', 'Monitoring', 'Incident Response', 'Recovery', 'Lessons Learned'],
      themes: ['Fraud Triangle', 'Control Framework', 'Red Flag Indicators', 'Whistleblower', 'Forensic Investigation'],
      desc: 'Enterprise fraud risk framework covering prevention, detection, and response across all banking channels.',
    },
    {
      title: 'Credit Risk & Loan Operations',
      status: 'Planned',
      lifecycle: ['Application', 'Bureau Check', 'Income Verification', 'Collateral Assessment', 'Credit Scoring', 'Approval', 'Monitoring', 'NPA Management'],
      themes: ['PD/LGD Modeling', 'Basel Compliance', 'Portfolio Monitoring', 'Early Warning', 'Recovery Strategy'],
      desc: 'Credit risk lifecycle from application scoring to NPA recovery with Basel-compliant risk modeling.',
    },
    {
      title: 'BFSI Process Improvement',
      status: 'Planned',
      lifecycle: ['Process Discovery', 'As-Is Mapping', 'Pain Point Analysis', 'Solution Design', 'To-Be Mapping', 'Implementation', 'Measurement'],
      themes: ['Lean Six Sigma', 'BPMN Modeling', 'Automation Roadmap', 'Change Management', 'ROI Tracking'],
      desc: 'Structured process improvement methodology using Lean Six Sigma and BPMN for banking operations.',
    },
    {
      title: 'BFSI Data Analysis',
      status: 'Planned',
      lifecycle: ['Requirement', 'Data Sourcing', 'Cleaning', 'Exploration', 'Modeling', 'Visualization', 'Insight Delivery', 'Action'],
      themes: ['SQL Analytics', 'Python Pandas', 'Statistical Testing', 'Segmentation', 'Predictive Modeling'],
      desc: 'Data-driven business analysis using SQL, Python, and statistical methods to uncover actionable insights.',
    },
    {
      title: 'BFSI Dashboard & KPI Analysis',
      status: 'Planned',
      lifecycle: ['KPI Definition', 'Metric Design', 'Data Pipeline', 'Visualization', 'Drill-Down', 'Alerting', 'Governance'],
      themes: ['Executive Dashboards', 'Operational Metrics', 'Leading Indicators', 'Self-Service BI', 'Data Governance'],
      desc: 'KPI framework design and dashboard development for executive and operational decision-making.',
    },
    {
      title: 'AI in BFSI',
      status: 'Planned',
      lifecycle: ['Use Case Identification', 'Data Preparation', 'Model Development', 'Validation', 'Deployment', 'Monitoring', 'Retraining'],
      themes: ['Conversational AI', 'Credit Scoring', 'Fraud Detection', 'Process Automation', 'Personalization'],
      desc: 'Artificial intelligence applications in banking from chatbots and credit models to process automation.',
    },
    {
      title: 'BFSI Customer Experience',
      status: 'Planned',
      lifecycle: ['Journey Mapping', 'Voice of Customer', 'Friction Analysis', 'Design Thinking', 'Prototype', 'Test', 'Scale'],
      themes: ['NPS Improvement', 'Journey Orchestration', 'Emotional Mapping', 'Effort Reduction', 'Loyalty Programs'],
      desc: 'Customer experience transformation using journey mapping, design thinking, and continuous feedback loops.',
    },
    {
      title: 'BFSI Product Enhancement',
      status: 'Planned',
      lifecycle: ['Market Research', 'Concept Development', 'Feasibility', 'Design', 'Development', 'Launch', 'Post-Launch Review'],
      themes: ['Competitive Analysis', 'Feature Prioritization', 'MVP Approach', 'Go-to-Market', 'Iteration'],
      desc: 'Product management lifecycle for banking products from market research through iterative enhancement.',
    },
    {
      title: 'Open Banking & API Banking',
      status: 'Planned',
      lifecycle: ['Strategy', 'API Design', 'Security Framework', 'Developer Portal', 'Partner Onboarding', 'Consent Management', 'Monitoring'],
      themes: ['REST APIs', 'OAuth 2.0', 'Consent Architecture', 'Fintech Partnerships', 'Revenue Models'],
      desc: 'Open banking ecosystem design with API strategy, consent management, and fintech partnership models.',
    },
  ];

  return (
    <section id="case-studies" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">BFSI Case Studies</span>
          <h2>More Portfolio Case Studies</h2>
          <p>Structured explorations of BFSI business problems, processes, and solution concepts.</p>
        </div>

        <div className="cs-grid">
          {caseStudies.map((cs) => (
            <div className="cs-card" key={cs.title}>
              <div className="cs-header">
                <div>
                  <h3>{cs.title}</h3>
                  <div className="cs-label">Portfolio Case Study</div>
                </div>
                <span className={`cs-status ${cs.status.toLowerCase().replace(' ', '-')}`}>{cs.status}</span>
              </div>

              <div className="cs-body">
                <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '1rem', lineHeight: 1.6 }}>
                  {cs.desc}
                </p>

                <div className="cs-label">Lifecycle</div>
                <div className="lifecycle">
                  {cs.lifecycle.map((step, i) => (
                    <span key={step}>
                      <span className="lifecycle-step">{step}</span>
                      {i < cs.lifecycle.length - 1 && (
                        <span className="lifecycle-arrow">→</span>
                      )}
                    </span>
                  ))}
                </div>

                <div className="cs-label" style={{ marginTop: '1rem' }}>Themes</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {cs.themes.map((e) => (
                    <span
                      key={e}
                      style={{
                        fontSize: '0.75rem',
                        background: 'var(--gray-100)',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '0.25rem',
                        color: 'var(--gray-600)',
                      }}
                    >
                      {e}
                    </span>
                  ))}
                </div>

                {cs.repo && (
                  <div style={{ marginTop: '1rem' }}>
                    <a
                      href={`https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/${cs.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        color: 'var(--blue-accent)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      View Project →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
