import { useState, useMemo } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'BFSI Customer Onboarding',
      desc: 'End-to-end digital onboarding with KYC, AML screening, and risk-based approval workflows. Reduces account opening from 5 days to under 10 minutes.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/01-bfsi-customer-onboarding',
      domain: 'Banking',
      tags: ['KYC', 'AML', 'Digital Onboarding'],
    },
    {
      title: 'Retail Analytics & Customer Segmentation',
      desc: 'RFM analysis, cohort retention, and basket analysis for targeted marketing. Customer segmentation using Python Pandas and statistical clustering.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/02-retail-analytics',
      domain: 'Retail',
      tags: ['RFM', 'Cohort Analysis', 'Python'],
    },
    {
      title: 'Fraud Detection & Risk Analytics',
      desc: 'Transaction fraud detection using rule engines and ML scoring. Real-time alerting, behavioral biometrics, and regulatory reporting frameworks.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/03-fraud-risk-analytics',
      domain: 'Risk',
      tags: ['ML Scoring', 'Anomaly Detection', 'Compliance'],
    },
    {
      title: 'Forex Card Enhancement & Digital Travel Experience',
      desc: 'Complete Forex card lifecycle with multi-currency wallets, real-time rate transparency, and self-service management. ₹4.2 Cr projected benefits.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/04-forex-card-enhancement',
      domain: 'Payments',
      tags: ['Multi-Currency', 'LRS Tracking', 'Self-Service'],
    },
    {
      title: 'Digital Payments Process Analysis',
      desc: 'UPI, card, and wallet payment flows with settlement optimization. Failure analysis, reconciliation automation, and merchant analytics.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/05-digital-payments-analysis',
      domain: 'Payments',
      tags: ['UPI', 'Settlement', 'Reconciliation'],
    },
    {
      title: 'Credit Card Customer Journey',
      desc: 'Full credit card lifecycle from application to retention. Instant approval, dynamic limits, spend analytics, and churn prevention strategies.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/06-credit-card-journey',
      domain: 'Lending',
      tags: ['Customer Journey', 'Rewards', 'Churn'],
    },
    {
      title: 'Loan Origination Process Analysis',
      desc: 'Digital lending from application to disbursement with STP processing. Credit appraisal, risk scoring, and automated sanction workflows.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/07-loan-origination-process',
      domain: 'Lending',
      tags: ['STP', 'Credit Scoring', 'Disbursement'],
    },
    {
      title: 'Insurance Claims Processing Analysis',
      desc: 'Claims lifecycle from intimation to settlement with automation opportunities. Digital survey, AI assessment, and fast-track settlement.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/08-insurance-claims-processing',
      domain: 'Insurance',
      tags: ['Claims Automation', 'TAT', 'Fraud'],
    },
    {
      title: 'Banking Complaint Management',
      desc: 'Structured complaint handling from multi-channel intake to resolution with SLA tracking and regulatory compliance.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/09-banking-complaint-management',
      domain: 'Banking',
      tags: ['SLA Tracking', 'NPS', 'Root Cause'],
    },
    {
      title: 'Bank Account Lifecycle',
      desc: 'Complete account lifecycle management from prospecting through dormancy prevention to structured closure.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/10-bank-account-lifecycle',
      domain: 'Banking',
      tags: ['Retention', 'Cross-Sell', 'Dormancy'],
    },
    {
      title: 'Remittance & International Transfers',
      desc: 'International money transfer analysis covering SWIFT, correspondent banking, and emerging fintech alternatives.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/11-remittance-international-transfers',
      domain: 'Payments',
      tags: ['SWIFT', 'FX', 'Cross-Border'],
    },
    {
      title: 'Digital Banking Transformation',
      desc: 'Legacy-to-digital transformation roadmap for banking platforms with phased migration and risk mitigation.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/12-digital-banking-transformation',
      domain: 'Banking',
      tags: ['Core Modernization', 'Cloud', 'API'],
    },
    {
      title: 'KYC / AML Compliance Process',
      desc: 'Anti-money laundering and KYC compliance with perpetual monitoring, AI-driven screening, and regulatory reporting.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/14-kyc-aml-compliance',
      domain: 'Compliance',
      tags: ['RegTech', 'Screening', 'SAR'],
    },
    {
      title: 'Open Banking & API Banking',
      desc: 'Open banking ecosystem design with API strategy, consent management, and fintech partnership models.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/23-open-banking-api',
      domain: 'Technology',
      tags: ['API Strategy', 'OAuth', 'PSD2'],
    },
  ];

  const filters = useMemo(() => {
    const map = new Map();
    map.set('All', projects.length);
    projects.forEach((p) => {
      map.set(p.domain, (map.get(p.domain) || 0) + 1);
    });
    return Array.from(map.entries()).map(([label, count]) => ({ label, count }));
  }, [projects]);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.domain === activeFilter);

  return (
    <section id="projects" className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2>Portfolio Projects</h2>
          <p>Complete case studies with requirements, data models, SQL schemas, EDA, and interactive dashboards.</p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}
        >
          {filters.map((f) => (
            <button
              key={f.label}
              onClick={() => setActiveFilter(f.label)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: '1.5px solid',
                borderColor: activeFilter === f.label ? 'var(--blue-accent)' : 'var(--gray-300)',
                background: activeFilter === f.label ? 'var(--blue-accent)' : 'var(--white)',
                color: activeFilter === f.label ? 'var(--white)' : 'var(--gray-600)',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== f.label) {
                  e.currentTarget.style.borderColor = 'var(--blue-accent)';
                  e.currentTarget.style.color = 'var(--blue-accent)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== f.label) {
                  e.currentTarget.style.borderColor = 'var(--gray-300)';
                  e.currentTarget.style.color = 'var(--gray-600)';
                }
              }}
            >
              {f.label}
              <span
                style={{
                  marginLeft: '0.35rem',
                  fontSize: '0.75rem',
                  opacity: 0.7,
                }}
              >
                ({f.count})
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="proj-grid">
          {filteredProjects.map((proj) => (
            <div className="proj-card" key={proj.title}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '0.25rem',
                    background: 'var(--blue-muted)',
                    color: 'var(--blue-accent)',
                  }}
                >
                  {proj.domain}
                </span>
                <span className={`proj-tag ${proj.status}`}>{proj.status}</span>
              </div>

              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.6875rem',
                      background: 'var(--gray-100)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '0.25rem',
                      color: 'var(--gray-600)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={proj.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  fontSize: '0.8125rem',
                  padding: '0.5rem 1rem',
                  width: '100%',
                }}
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
