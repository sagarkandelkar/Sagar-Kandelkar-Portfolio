export default function CaseStudies() {
  const caseStudies = [
    { title: 'Customer Onboarding & KYC', status: 'Completed' },
    { title: 'Forex Card Enhancement & Digital Travel Experience', status: 'In Progress', featured: true },
    { title: 'Digital Payments', status: 'Planned' },
    { title: 'Credit Card Customer Journey', status: 'Planned' },
    { title: 'Digital Loan Journey', status: 'Planned' },
    { title: 'Banking Complaint Management', status: 'Planned' },
    { title: 'Bank Account Lifecycle', status: 'Planned' },
    { title: 'Remittance & International Transfers', status: 'Planned' },
    { title: 'Digital Banking Transformation', status: 'Planned' },
    { title: 'Branch Operations Improvement', status: 'Planned' },
    { title: 'KYC / AML Compliance Process', status: 'Planned' },
    { title: 'Fraud Risk Management', status: 'Planned' },
    { title: 'Credit Risk & Loan Operations', status: 'Planned' },
    { title: 'BFSI Process Improvement', status: 'Planned' },
    { title: 'BFSI Data Analysis', status: 'Planned' },
    { title: 'BFSI Dashboard & KPI Analysis', status: 'Planned' },
    { title: 'AI in BFSI', status: 'Planned' },
    { title: 'BFSI Customer Experience', status: 'Planned' },
    { title: 'BFSI Product Enhancement', status: 'Planned' },
    { title: 'Open Banking & API Banking', status: 'Planned' },
  ];

  const lifecycle = [
    'Product Discovery', 'Application', 'KYC', 'Verification', 'Card Issuance',
    'Activation', 'Currency Loading', 'International Transaction', 'Balance Tracking',
    'Reload', 'Dispute', 'Refund', 'Support', 'Closure',
  ];

  const enhancements = [
    'Mobile-first management', 'Multi-currency experience', 'Transaction visibility',
    'Exchange-rate transparency', 'Digital card controls', 'Block/unblock',
    'Reload improvements', 'Notifications', 'Self-service dispute management', 'Customer support integration',
  ];

  return (
    <section id="case-studies" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">BFSI Case Studies</span>
          <h2>Portfolio Case Studies</h2>
          <p>Structured explorations of BFSI business problems, processes, and solution concepts.</p>
        </div>

        <div className="cs-grid">
          {caseStudies.map((cs) => (
            <div className={`cs-card ${cs.featured ? 'featured' : ''}`} key={cs.title}>
              <div className="cs-header">
                <div>
                  <h3>{cs.title}</h3>
                  <div className="cs-label">Portfolio Case Study</div>
                </div>
                <span className={`cs-status ${cs.status.toLowerCase().replace(' ', '-')}`}>{cs.status}</span>
              </div>

              {cs.featured && (
                <div className="cs-body">
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '1rem' }}>
                    Portfolio Case Study — Synthetic Scenario. Exploring the complete lifecycle of a Forex card product
                    from discovery through closure, with a focus on digital enhancement opportunities.
                  </p>

                  <div className="cs-label">Lifecycle</div>
                  <div className="lifecycle">
                    {lifecycle.map((step, i) => (
                      <span key={step}>
                        <span className="lifecycle-step">{step}</span>
                        {i < lifecycle.length - 1 && (
                          <span className="lifecycle-arrow">→</span>
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="cs-label" style={{ marginTop: '1rem' }}>Enhancement Themes</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {enhancements.map((e) => (
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
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
