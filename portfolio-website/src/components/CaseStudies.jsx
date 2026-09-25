import { useState, useMemo } from 'react';

export default function CaseStudies() {
  const [activeDomain, setActiveDomain] = useState('All');
  const [activeStatus, setActiveStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const caseStudies = [
    {
      title: 'Customer Onboarding & KYC',
      status: 'Completed',
      repo: '01-bfsi-customer-onboarding',
      domain: 'Banking',
      lifecycle: ['Discovery', 'Application', 'Document Upload', 'KYC Verification', 'AML Screening', 'Account Opening', 'Welcome Kit'],
      themes: ['Digital KYC', 'Video Verification', 'OCR Automation', 'AML Compliance', 'Frictionless UX'],
      desc: 'End-to-end digital onboarding reducing account opening time from 5 days to under 10 minutes with full regulatory compliance.',
      impact: [
        { metric: 'Account Opening Time', before: '5 days', after: '10 minutes', improvement: '99% faster' },
        { metric: 'KYC Completion', before: 'Branch visit', after: 'Video KYC + OCR', improvement: 'Fully digital' },
        { metric: 'Drop-off Rate', before: '35%', after: '12%', improvement: '65% reduction' },
      ],
      color: '#2563eb',
    },
    {
      title: 'Forex Card Enhancement & Digital Travel Experience',
      status: 'In Progress',
      repo: '04-forex-card-enhancement',
      domain: 'Payments',
      lifecycle: ['Discovery', 'Application', 'KYC', 'Issuance', 'Activation', 'Currency Loading', 'Spend Abroad', 'Tracking', 'Reload', 'Support', 'Closure'],
      themes: ['Multi-Currency Wallet', 'Rate Lock', 'Real-Time Alerts', 'LRS Tracking', 'Self-Service Controls'],
      desc: 'Complete Forex card lifecycle analysis with ₹4.2 Cr projected annual benefits and 7.7x ROI through digital transformation.',
      impact: [
        { metric: 'Card Issuance Time', before: '5–7 days', after: '< 2 hours', improvement: '99% faster' },
        { metric: 'Rate Transparency', before: 'Hidden markup', after: 'Live rate + lock', improvement: '100% visible' },
        { metric: 'Customer Satisfaction', before: '3.2 / 5', after: '4.5 / 5', improvement: '+1.3 points' },
      ],
      color: '#2563eb',
    },
    {
      title: 'Digital Payments',
      status: 'Completed',
      repo: '05-digital-payments-analysis',
      domain: 'Payments',
      lifecycle: ['Merchant Onboarding', 'Payment Initiation', 'Authentication', 'Processing', 'Settlement', 'Reconciliation', 'Dispute'],
      themes: ['UPI Integration', 'Real-Time Settlement', 'Fraud Detection', 'Reconciliation Automation', 'Merchant Analytics'],
      desc: 'Payment systems analysis covering UPI, wallets, and cards with settlement optimization and fraud prevention strategies.',
      impact: [
        { metric: 'Settlement Time', before: 'T+2 days', after: 'T+0 same day', improvement: 'Instant' },
        { metric: 'Reconciliation', before: 'Manual matching', after: 'Auto-match 95%', improvement: 'Fully automated' },
        { metric: 'Dispute Resolution', before: '15 days', after: '3 days', improvement: '80% faster' },
      ],
      color: '#10b981',
    },
    {
      title: 'Credit Card Customer Journey',
      status: 'Completed',
      repo: '06-credit-card-journey',
      domain: 'Lending',
      lifecycle: ['Lead Generation', 'Application', 'Credit Bureau Check', 'Risk Assessment', 'Approval', 'Card Issuance', 'Activation', 'Spend', 'Billing', 'Payment', 'Retention'],
      themes: ['Instant Approval', 'Dynamic Limit Management', 'Spend Analytics', 'Rewards Optimization', 'Churn Prevention'],
      desc: 'Full credit card lifecycle from prospecting to retention with digital approval and personalized limit strategies.',
      impact: [
        { metric: 'Approval Time', before: '7 days', after: '< 5 minutes', improvement: 'Instant' },
        { metric: 'Activation Rate', before: '55%', after: '82%', improvement: '+27 points' },
        { metric: 'Churn Rate', before: '18%', after: '9%', improvement: '50% reduction' },
      ],
      color: '#8b5cf6',
    },
    {
      title: 'Digital Loan Journey',
      status: 'Completed',
      repo: '07-loan-origination-process',
      domain: 'Lending',
      lifecycle: ['Application', 'Document Upload', 'Credit Appraisal', 'Risk Scoring', 'Sanction', 'Agreement', 'Disbursement', 'Repayment', 'Closure'],
      themes: ['STP Processing', 'Digital Verification', 'API-Based Bureau', 'Auto-Sanction', 'EMI Management'],
      desc: 'Loan origination from digital application to disbursement with straight-through processing and automated credit decisions.',
      impact: [
        { metric: 'Sanction Time', before: '10 days', after: '24 hours', improvement: '90% faster' },
        { metric: 'STP Rate', before: '5%', after: '65%', improvement: '12x improvement' },
        { metric: 'Cost Per Loan', before: '₹4,500', after: '₹1,200', improvement: '73% lower' },
      ],
      color: '#f59e0b',
    },
    {
      title: 'Insurance Claims Processing',
      status: 'Completed',
      repo: '08-insurance-claims-processing',
      domain: 'Insurance',
      lifecycle: ['Intimation', 'Survey', 'Assessment', 'Approval', 'Settlement', 'Disbursal', 'Closure'],
      themes: ['Digital Intimation', 'AI Assessment', 'Fraud Detection', 'Fast-Track Settlement', 'Customer Communication'],
      desc: 'Insurance claims lifecycle analysis with automation opportunities and customer experience improvements.',
      impact: [
        { metric: 'Settlement TAT', before: '21 days', after: '3 days', improvement: '86% faster' },
        { metric: 'Survey Assignment', before: '48 hours', after: '2 hours', improvement: 'Auto-assign' },
        { metric: 'Customer NPS', before: '28', after: '52', improvement: '+24 points' },
      ],
      color: '#ef4444',
    },
    {
      title: 'Retail Analytics & Customer Segmentation',
      status: 'Completed',
      repo: '02-retail-analytics',
      domain: 'Retail',
      lifecycle: ['Data Collection', 'Cleaning', 'Segmentation', 'Profiling', 'Targeting', 'Campaign', 'Measurement'],
      themes: ['RFM Analysis', 'Cohort Retention', 'Basket Analysis', 'Personalization', 'Churn Prediction'],
      desc: 'Customer segmentation and retail analytics using RFM, cohort analysis, and basket analysis for targeted marketing.',
      impact: [
        { metric: 'Campaign ROI', before: '3.2x', after: '6.8x', improvement: '2.1x better' },
        { metric: 'Customer Retention', before: '42%', after: '61%', improvement: '+19 points' },
        { metric: 'Data Prep Time', before: '3 days', after: '4 hours', improvement: '94% faster' },
      ],
      color: '#ec4899',
    },
    {
      title: 'Fraud Detection & Risk Analytics',
      status: 'Completed',
      repo: '03-fraud-risk-analytics',
      domain: 'Risk',
      lifecycle: ['Transaction Capture', 'Rule Engine', 'ML Scoring', 'Alert Generation', 'Investigation', 'Resolution', 'Reporting'],
      themes: ['Anomaly Detection', 'Behavioral Biometrics', 'Real-Time Scoring', 'Case Management', 'Regulatory Reporting'],
      desc: 'Transaction fraud detection using rule engines and machine learning with real-time alerting and investigation workflows.',
      impact: [
        { metric: 'Fraud Detection', before: '65%', after: '94%', improvement: '+29 points' },
        { metric: 'False Positives', before: '12%', after: '3%', improvement: '75% reduction' },
        { metric: 'Alert Response', before: '4 hours', after: '5 minutes', improvement: '98% faster' },
      ],
      color: '#dc2626',
    },
    {
      title: 'Banking Complaint Management',
      status: 'Planned',
      repo: '09-banking-complaint-management',
      domain: 'Banking',
      lifecycle: ['Complaint Intake', 'Categorization', 'Triage', 'Investigation', 'Resolution', 'Customer Communication', 'Closure', 'Root Cause Analysis'],
      themes: ['Omnichannel Intake', 'Auto-Categorization', 'SLA Tracking', 'Escalation Matrix', 'Feedback Loop'],
      desc: 'Structured complaint handling from multi-channel intake to resolution with SLA tracking and regulatory compliance.',
      impact: [
        { metric: 'Resolution TAT', before: '12 days', after: '2 days', improvement: '83% faster' },
        { metric: 'First Contact Resolution', before: '35%', after: '72%', improvement: '2x better' },
        { metric: 'Repeat Complaints', before: '28%', after: '8%', improvement: '71% reduction' },
      ],
      color: '#64748b',
    },
    {
      title: 'Bank Account Lifecycle',
      status: 'Planned',
      repo: '10-bank-account-lifecycle',
      domain: 'Banking',
      lifecycle: ['Prospecting', 'Onboarding', 'Activation', 'Usage', 'Up-sell', 'Retention', 'Dormancy', 'Revival', 'Closure'],
      themes: ['360° Customer View', 'Product Cross-Sell', 'Dormancy Prediction', 'Relationship Pricing', 'Exit Interviews'],
      desc: 'Complete account lifecycle management from prospecting through dormancy prevention to structured closure.',
      impact: [
        { metric: 'Dormancy Rate', before: '22%', after: '9%', improvement: '59% reduction' },
        { metric: 'Product per Customer', before: '2.1', after: '3.8', improvement: '+1.7 products' },
        { metric: 'Lifecycle Revenue', before: '₹12K', after: '₹21K', improvement: '+75%' },
      ],
      color: '#64748b',
    },
    {
      title: 'Remittance & International Transfers',
      status: 'Planned',
      repo: '11-remittance-international-transfers',
      domain: 'Payments',
      lifecycle: ['Initiation', 'Compliance Check', 'FX Conversion', 'Intermediary Routing', 'Beneficiary Credit', 'Confirmation', 'Reconciliation'],
      themes: ['Real-Time Tracking', 'SWIFT gpi', 'Compliance Automation', 'FX Optimization', 'Cost Transparency'],
      desc: 'International money transfer analysis covering SWIFT, correspondent banking, and emerging fintech alternatives.',
      impact: [
        { metric: 'Transfer Time', before: '3–5 days', after: '< 24 hours', improvement: '90% faster' },
        { metric: 'FX Margin', before: '3.5%', after: '1.2%', improvement: '66% cheaper' },
        { metric: 'Tracking Visibility', before: 'Opaque', after: 'Real-time', improvement: 'End-to-end' },
      ],
      color: '#64748b',
    },
    {
      title: 'Digital Banking Transformation',
      status: 'Planned',
      repo: '12-digital-banking-transformation',
      domain: 'Banking',
      lifecycle: ['Strategy', 'Platform Selection', 'Migration', 'Integration', 'Testing', 'Pilot', 'Rollout', 'Optimization'],
      themes: ['Core Modernization', 'API Architecture', 'Cloud Migration', 'Mobile-First', 'Open Banking'],
      desc: 'Legacy-to-digital transformation roadmap for banking platforms with phased migration and risk mitigation.',
      impact: [
        { metric: 'Digital Adoption', before: '25%', after: '75%', improvement: '3x increase' },
        { metric: 'IT Cost', before: '₹45 Cr', after: '₹28 Cr', improvement: '38% lower' },
        { metric: 'Release Cycle', before: '6 months', after: '2 weeks', improvement: 'Agile delivery' },
      ],
      color: '#64748b',
    },
    {
      title: 'Branch Operations Improvement',
      status: 'Planned',
      repo: '13-branch-operations-improvement',
      domain: 'Banking',
      lifecycle: ['Customer Entry', 'Service Request', 'Teller Processing', 'Approval', 'Fulfillment', 'Feedback', 'Reporting'],
      themes: ['Queue Management', 'Staff Optimization', 'Paperless Branch', 'Sales Enablement', 'Cost Reduction'],
      desc: 'Branch efficiency analysis with queue optimization, staff allocation models, and paperless operation strategies.',
      impact: [
        { metric: 'Wait Time', before: '25 minutes', after: '5 minutes', improvement: '80% faster' },
        { metric: 'Paper Usage', before: '500 sheets/day', after: '20 sheets/day', improvement: '96% reduction' },
        { metric: 'Cross-Sell Rate', before: '8%', after: '22%', improvement: '2.8x better' },
      ],
      color: '#64748b',
    },
    {
      title: 'KYC / AML Compliance Process',
      status: 'Planned',
      repo: '14-kyc-aml-compliance',
      domain: 'Compliance',
      lifecycle: ['Customer Identification', 'Verification', 'Risk Rating', 'Ongoing Monitoring', 'Screening', 'Investigation', 'Reporting'],
      themes: ['Perpetual KYC', 'AI Screening', 'Risk-Based Approach', 'RegTech Integration', 'SAR Filing'],
      desc: 'Anti-money laundering and KYC compliance with perpetual monitoring, AI-driven screening, and regulatory reporting.',
      impact: [
        { metric: 'KYC Refresh Cycle', before: '3 years', after: 'Continuous', improvement: 'Perpetual' },
        { metric: 'False Alerts', before: '85%', after: '30%', improvement: '65% reduction' },
        { metric: 'SAR Filing Time', before: '5 days', after: '4 hours', improvement: '95% faster' },
      ],
      color: '#64748b',
    },
    {
      title: 'Fraud Risk Management',
      status: 'Planned',
      repo: '15-fraud-risk-management',
      domain: 'Risk',
      lifecycle: ['Threat Identification', 'Control Design', 'Implementation', 'Monitoring', 'Incident Response', 'Recovery', 'Lessons Learned'],
      themes: ['Fraud Triangle', 'Control Framework', 'Red Flag Indicators', 'Whistleblower', 'Forensic Investigation'],
      desc: 'Enterprise fraud risk framework covering prevention, detection, and response across all banking channels.',
      impact: [
        { metric: 'Fraud Losses', before: '₹8 Cr', after: '₹1.5 Cr', improvement: '81% reduction' },
        { metric: 'Detection Speed', before: '30 days', after: 'Real-time', improvement: 'Instant' },
        { metric: 'Recovery Rate', before: '12%', after: '45%', improvement: '3.8x better' },
      ],
      color: '#64748b',
    },
    {
      title: 'Credit Risk & Loan Operations',
      status: 'Planned',
      repo: '16-credit-risk-loan-operations',
      domain: 'Lending',
      lifecycle: ['Application', 'Bureau Check', 'Income Verification', 'Collateral Assessment', 'Credit Scoring', 'Approval', 'Monitoring', 'NPA Management'],
      themes: ['PD/LGD Modeling', 'Basel Compliance', 'Portfolio Monitoring', 'Early Warning', 'Recovery Strategy'],
      desc: 'Credit risk lifecycle from application scoring to NPA recovery with Basel-compliant risk modeling.',
      impact: [
        { metric: 'NPA Ratio', before: '4.2%', after: '1.8%', improvement: '57% reduction' },
        { metric: 'Provisioning Accuracy', before: '72%', after: '94%', improvement: '+22 points' },
        { metric: 'Recovery Time', before: '18 months', after: '8 months', improvement: '56% faster' },
      ],
      color: '#64748b',
    },
    {
      title: 'BFSI Process Improvement',
      status: 'Planned',
      repo: '17-bfsi-process-improvement',
      domain: 'Banking',
      lifecycle: ['Process Discovery', 'As-Is Mapping', 'Pain Point Analysis', 'Solution Design', 'To-Be Mapping', 'Implementation', 'Measurement'],
      themes: ['Lean Six Sigma', 'BPMN Modeling', 'Automation Roadmap', 'Change Management', 'ROI Tracking'],
      desc: 'Structured process improvement methodology using Lean Six Sigma and BPMN for banking operations.',
      impact: [
        { metric: 'Process Cycle Time', before: 'Baseline', after: '-40%', improvement: 'Lean optimized' },
        { metric: 'Error Rate', before: '8%', after: '1.5%', improvement: '81% reduction' },
        { metric: 'Employee Satisfaction', before: '3.4/5', after: '4.2/5', improvement: '+0.8 points' },
      ],
      color: '#64748b',
    },
    {
      title: 'BFSI Data Analysis',
      status: 'Planned',
      repo: '18-bfsi-data-analysis',
      domain: 'Analytics',
      lifecycle: ['Requirement', 'Data Sourcing', 'Cleaning', 'Exploration', 'Modeling', 'Visualization', 'Insight Delivery', 'Action'],
      themes: ['SQL Analytics', 'Python Pandas', 'Statistical Testing', 'Segmentation', 'Predictive Modeling'],
      desc: 'Data-driven business analysis using SQL, Python, and statistical methods to uncover actionable insights.',
      impact: [
        { metric: 'Analysis Turnaround', before: '2 weeks', after: '2 days', improvement: '86% faster' },
        { metric: 'Insight Accuracy', before: 'Manual guess', after: 'Data-backed', improvement: 'Evidence-based' },
        { metric: 'Decision Speed', before: 'Monthly', after: 'Real-time', improvement: 'Continuous' },
      ],
      color: '#64748b',
    },
    {
      title: 'BFSI Dashboard & KPI Analysis',
      status: 'Planned',
      repo: '19-bfsi-dashboard-kpi',
      domain: 'Analytics',
      lifecycle: ['KPI Definition', 'Metric Design', 'Data Pipeline', 'Visualization', 'Drill-Down', 'Alerting', 'Governance'],
      themes: ['Executive Dashboards', 'Operational Metrics', 'Leading Indicators', 'Self-Service BI', 'Data Governance'],
      desc: 'KPI framework design and dashboard development for executive and operational decision-making.',
      impact: [
        { metric: 'Report Generation', before: 'Manual Excel', after: 'Auto refresh', improvement: 'Zero touch' },
        { metric: 'Decision Latency', before: 'End of month', after: 'Real-time', improvement: 'Instant' },
        { metric: 'KPI Coverage', before: '12 metrics', after: '60+ metrics', improvement: '5x more' },
      ],
      color: '#64748b',
    },
    {
      title: 'AI in BFSI',
      status: 'Planned',
      repo: '20-ai-in-bfsi',
      domain: 'Technology',
      lifecycle: ['Use Case Identification', 'Data Preparation', 'Model Development', 'Validation', 'Deployment', 'Monitoring', 'Retraining'],
      themes: ['Conversational AI', 'Credit Scoring', 'Fraud Detection', 'Process Automation', 'Personalization'],
      desc: 'Artificial intelligence applications in banking from chatbots and credit models to process automation.',
      impact: [
        { metric: 'Query Handling', before: '100% human', after: '70% AI', improvement: 'Automation' },
        { metric: 'Credit Decision', before: '3 days', after: '5 minutes', improvement: 'Instant' },
        { metric: 'Personalization', before: 'Segment', after: 'Individual', improvement: '1:1 targeting' },
      ],
      color: '#64748b',
    },
    {
      title: 'BFSI Customer Experience',
      status: 'Planned',
      repo: '21-bfsi-customer-experience',
      domain: 'CX',
      lifecycle: ['Journey Mapping', 'Voice of Customer', 'Friction Analysis', 'Design Thinking', 'Prototype', 'Test', 'Scale'],
      themes: ['NPS Improvement', 'Journey Orchestration', 'Emotional Mapping', 'Effort Reduction', 'Loyalty Programs'],
      desc: 'Customer experience transformation using journey mapping, design thinking, and continuous feedback loops.',
      impact: [
        { metric: 'Customer Effort', before: 'High', after: 'Low', improvement: 'Frictionless' },
        { metric: 'NPS Score', before: '32', after: '58', improvement: '+26 points' },
        { metric: 'Digital Adoption', before: '35%', after: '78%', improvement: '2.2x increase' },
      ],
      color: '#64748b',
    },
    {
      title: 'BFSI Product Enhancement',
      status: 'Planned',
      repo: '22-bfsi-product-enhancement',
      domain: 'Product',
      lifecycle: ['Market Research', 'Concept Development', 'Feasibility', 'Design', 'Development', 'Launch', 'Post-Launch Review'],
      themes: ['Competitive Analysis', 'Feature Prioritization', 'MVP Approach', 'Go-to-Market', 'Iteration'],
      desc: 'Product management lifecycle for banking products from market research through iterative enhancement.',
      impact: [
        { metric: 'Time to Market', before: '18 months', after: '4 months', improvement: '78% faster' },
        { metric: 'Feature Success', before: '30% adopted', after: '72% adopted', improvement: '2.4x better' },
        { metric: 'Customer Feedback Loop', before: 'Annual', after: 'Continuous', improvement: 'Always-on' },
      ],
      color: '#64748b',
    },
    {
      title: 'Open Banking & API Banking',
      status: 'Planned',
      repo: '23-open-banking-api',
      domain: 'Technology',
      lifecycle: ['Strategy', 'API Design', 'Security Framework', 'Developer Portal', 'Partner Onboarding', 'Consent Management', 'Monitoring'],
      themes: ['REST APIs', 'OAuth 2.0', 'Consent Architecture', 'Fintech Partnerships', 'Revenue Models'],
      desc: 'Open banking ecosystem design with API strategy, consent management, and fintech partnership models.',
      impact: [
        { metric: 'API Response Time', before: 'N/A', after: '< 200ms', improvement: 'Performant' },
        { metric: 'Partner Onboarding', before: '6 months', after: '2 weeks', improvement: '12x faster' },
        { metric: 'New Revenue Stream', before: 'None', after: '₹5 Cr/year', improvement: 'New channel' },
      ],
      color: '#64748b',
    },
  ];

  const domains = useMemo(() => {
    const map = new Map();
    map.set('All', caseStudies.length);
    caseStudies.forEach((cs) => {
      map.set(cs.domain, (map.get(cs.domain) || 0) + 1);
    });
    return Array.from(map.entries()).map(([label, count]) => ({ label, count }));
  }, [caseStudies]);

  const statuses = useMemo(() => {
    const map = new Map();
    map.set('All', caseStudies.length);
    caseStudies.forEach((cs) => {
      map.set(cs.status, (map.get(cs.status) || 0) + 1);
    });
    return Array.from(map.entries()).map(([label, count]) => ({ label, count }));
  }, [caseStudies]);

  const filtered = useMemo(() => {
    return caseStudies.filter((cs) => {
      const matchDomain = activeDomain === 'All' || cs.domain === activeDomain;
      const matchStatus = activeStatus === 'All' || cs.status === activeStatus;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        cs.title.toLowerCase().includes(q) ||
        cs.desc.toLowerCase().includes(q) ||
        cs.themes.some((t) => t.toLowerCase().includes(q)) ||
        cs.domain.toLowerCase().includes(q);
      return matchDomain && matchStatus && matchSearch;
    });
  }, [caseStudies, activeDomain, activeStatus, searchQuery]);

  const completedCount = caseStudies.filter((c) => c.status === 'Completed' || c.status === 'In Progress').length;

  return (
    <section id="case-studies" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">BFSI Case Studies</span>
          <h2>Portfolio Case Studies</h2>
          <p>
            {completedCount} completed and {caseStudies.length - completedCount} planned structured explorations of BFSI
            business problems, processes, and solution concepts.
          </p>
        </div>

        {/* Search & Filters */}
        <div style={{ maxWidth: '800px', margin: '0 auto 2.5rem' }}>
          {/* Search */}
          <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Search case studies by title, theme, or domain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                borderRadius: '0.5rem',
                border: '1.5px solid var(--gray-300)',
                fontSize: '0.9375rem',
                fontFamily: 'var(--font)',
                color: 'var(--gray-700)',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--blue-accent)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--gray-300)')}
            />
            <span
              style={{
                position: 'absolute',
                left: '0.875rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--gray-400)',
                fontSize: '1rem',
              }}
            >
              🔍
            </span>
          </div>

          {/* Domain filters */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              marginBottom: '0.75rem',
            }}
          >
            {domains.map((f) => (
              <FilterChip
                key={f.label}
                label={f.label}
                count={f.count}
                active={activeDomain === f.label}
                onClick={() => setActiveDomain(f.label)}
              />
            ))}
          </div>

          {/* Status filters */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
            }}
          >
            {statuses.map((f) => (
              <FilterChip
                key={f.label}
                label={f.label}
                count={f.count}
                active={activeStatus === f.label}
                onClick={() => setActiveStatus(f.label)}
              />
            ))}
          </div>

          {filtered.length < caseStudies.length && (
            <div
              style={{
                textAlign: 'center',
                marginTop: '0.75rem',
                fontSize: '0.8125rem',
                color: 'var(--gray-500)',
              }}
            >
              Showing {filtered.length} of {caseStudies.length} case studies
              <button
                onClick={() => {
                  setActiveDomain('All');
                  setActiveStatus('All');
                  setSearchQuery('');
                }}
                style={{
                  marginLeft: '0.5rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--blue-accent)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.8125rem',
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filtered.map((cs) => (
            <CaseStudyCard key={cs.title} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterChip({ label, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.4rem 0.9rem',
        borderRadius: '9999px',
        border: '1.5px solid',
        borderColor: active ? 'var(--blue-accent)' : 'var(--gray-300)',
        background: active ? 'var(--blue-accent)' : 'var(--white)',
        color: active ? 'var(--white)' : 'var(--gray-600)',
        fontSize: '0.8125rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        fontFamily: 'var(--font)',
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.borderColor = 'var(--blue-accent)';
          e.currentTarget.style.color = 'var(--blue-accent)';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.borderColor = 'var(--gray-300)';
          e.currentTarget.style.color = 'var(--gray-600)';
        }
      }}
    >
      {label}
      <span style={{ marginLeft: '0.35rem', fontSize: '0.75rem', opacity: 0.7 }}>({count})</span>
    </button>
  );
}

function CaseStudyCard({ cs }) {
  return (
    <div
      style={{
        background: 'var(--white)',
        border: '1px solid var(--gray-200)',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        transition: 'all 0.25s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = cs.color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--gray-200)';
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--gray-100)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1rem', color: 'var(--navy-800)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
            {cs.title}
          </h3>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.6875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--gray-400)',
            }}
          >
            <span>{cs.domain}</span>
            <span style={{ color: 'var(--gray-300)' }}>•</span>
            <span>Portfolio Case Study</span>
          </div>
        </div>
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.6875rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: '0.25rem 0.625rem',
            borderRadius: '9999px',
            background:
              cs.status === 'Completed'
                ? '#d1fae5'
                : cs.status === 'In Progress'
                ? '#fef3c7'
                : 'var(--gray-100)',
            color:
              cs.status === 'Completed'
                ? '#065f46'
                : cs.status === 'In Progress'
                ? '#92400e'
                : 'var(--gray-600)',
            flexShrink: 0,
          }}
        >
          {cs.status}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Description */}
        <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          {cs.desc}
        </p>

        {/* Lifecycle */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div
            style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--gray-400)',
              marginBottom: '0.5rem',
            }}
          >
            Lifecycle
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {cs.lifecycle.map((step, i) => (
              <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--gray-600)',
                    background: 'var(--gray-50)',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '0.25rem',
                  }}
                >
                  {step}
                </span>
                {i < cs.lifecycle.length - 1 && (
                  <span style={{ color: 'var(--gray-300)', fontSize: '0.7rem' }}>→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div
          style={{
            background: 'var(--gray-50)',
            borderRadius: '0.5rem',
            padding: '1rem',
            marginBottom: '1.25rem',
          }}
        >
          <div
            style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--gray-400)',
              marginBottom: '0.75rem',
            }}
          >
            Transformation Impact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {cs.impact.map((item) => (
              <div key={item.metric} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--navy-800)' }}>
                    {item.metric}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--gray-400)', textDecoration: 'line-through' }}>
                      {item.before}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: cs.color, fontWeight: 700 }}>
                      {item.after}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--success)',
                    background: '#ecfdf5',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '0.25rem',
                    flexShrink: 0,
                  }}
                >
                  {item.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Themes */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div
            style={{
              fontSize: '0.6875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--gray-400)',
              marginBottom: '0.5rem',
            }}
          >
            Enhancement Themes
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {cs.themes.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: '0.75rem',
                  background: `${cs.color}10`,
                  color: cs.color,
                  padding: '0.3rem 0.7rem',
                  borderRadius: '0.25rem',
                  fontWeight: 600,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Link */}
        <div style={{ marginTop: 'auto' }}>
          {cs.repo ? (
            <a
              href={`https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/${cs.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--blue-accent)',
                textDecoration: 'none',
                padding: '0.5rem 0',
              }}
            >
              View Full Case Study →
            </a>
          ) : (
            <span
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'var(--gray-400)',
                padding: '0.5rem 0',
              }}
            >
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
