export default function About() {
  const steps = [
    'Understand',
    'Analyze',
    'Define',
    'Improve',
    'Validate',
    'Deliver',
  ];

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">About</span>
          <h2>Banking Operations Expert Transitioning to Business Analysis</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I bring <strong>4+ years of hands-on experience at HDFC Bank</strong> in retail banking operations — processing
              transactions, managing fund transfers, handling FX operations, monitoring AML compliance, and resolving
              customer issues at the branch level. This ground-level banking knowledge is the foundation for my
              transition into <strong>Business Analysis</strong>.
            </p>
            <p>
              Having lived the operational pain points — manual reconciliation, lengthy complaint resolution, fragmented
              customer data, and regulatory compliance overhead — I now approach BA with <strong>practical domain credibility</strong>.
              I understand what works, what breaks, and what technology can fix in banking.
            </p>
            <p>
              I hold a <strong>B.Sc. in Microbiology</strong> (Pune University, 2018), have published a research paper in an
              international journal, and won a national conference model presentation prize — demonstrating analytical
              rigour and structured thinking that translate directly into BA work.
            </p>
            <div className="mt-2">
              <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--navy-800)' }}>Career Focus</h3>
              <div className="focus-grid">
                {[
                  'BFSI Business Analysis',
                  'Banking Operations → Digital',
                  'Process Improvement',
                  'Payments & FX',
                  'AML & Compliance',
                  'Data Analytics',
                ].map((tag) => (
                  <span className="focus-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '1.25rem', color: 'var(--navy-800)' }}>My Approach</h3>
            <div className="framework">
              {steps.map((step, i) => (
                <div key={step}>
                  <div className="framework-step">
                    <span className="framework-number">{i + 1}</span>
                    {step}
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{ textAlign: 'center', padding: '0.25rem 0', color: 'var(--blue-accent)' }}>↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
