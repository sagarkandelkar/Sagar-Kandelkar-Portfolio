export default function CaseStudies() {
  const caseStudies = [
    { title: 'Customer Onboarding & KYC', status: 'Completed' },
    { title: 'Forex Card Enhancement & Digital Travel Experience', status: 'In Progress' },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
