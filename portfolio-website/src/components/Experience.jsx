export default function Experience() {
  const roles = [
    {
      period: 'August 2022 — Present',
      title: 'Customer Care Executive',
      company: 'HDFC Bank — Pune, Maharashtra',
      highlights: [
        'Handle day-to-day retail banking operations: transactions, fund transfers, fixed deposits, DD/MC issuance, account closures, salary uploads',
        'Process cash receipts & payments, cash balancing, cash bundling, and teller-box operations per established banking procedures',
        'Support cheque and clearing operations: cheque processing, returned-cheque records, and cheque-drop-box monitoring',
        'Handle retail foreign exchange transactions with required documentation and operational procedures',
        'Monitor high-value and high-frequency transactions; support transaction-related exception handling',
        'Support AML-related activities and transaction monitoring in accordance with internal banking procedures',
        'Monitor suspense-account activities and support reconciliation and resolution of operational items',
        'Handle customer queries, complaints, and transaction-related issues; coordinate with branch stakeholders for resolution',
        'Generate and follow up on leads for banking products: savings accounts, credit cards, mutual funds, insurance, RBI Bonds, FX products',
      ],
    },
    {
      period: 'Career Development',
      title: 'Business Analysis & IT-BFSI Upskilling',
      company: 'Self-Directed Learning',
      highlights: [
        'Building BA capabilities: requirements gathering, process mapping, BRD/FRD documentation, user stories, acceptance criteria',
        'Learning process analysis, gap analysis, AS-IS / TO-BE mapping, and UAT concepts',
        'Exploring banking technology, digital banking, FinTech concepts, and digital transformation in BFSI',
        'Building SQL analytics skills and data visualization competencies for BA deliverables',
        'Creating 23 end-to-end portfolio case studies with synthetic data to demonstrate structured BA thinking',
      ],
    },
  ];

  return (
    <section id="experience" className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2>Professional Journey</h2>
          <p>4+ years in retail banking operations at HDFC Bank, now transitioning into BFSI Business Analysis.</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {roles.map((role, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                paddingLeft: '2rem',
                paddingBottom: i < roles.length - 1 ? '2.5rem' : '0',
                borderLeft: '2px solid var(--gray-200)',
                marginLeft: '0.5rem',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '-9px',
                  top: '0',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: i === 0 ? 'var(--blue-accent)' : 'var(--success)',
                  border: '3px solid var(--white)',
                  boxShadow: `0 0 0 2px ${i === 0 ? 'var(--blue-accent)' : 'var(--success)'}`,
                }}
              />

              <div
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--blue-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--gray-200)';
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.125rem', color: 'var(--navy-800)', marginBottom: '0.25rem' }}>
                      {role.title}
                    </h3>
                    <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)', fontWeight: 500 }}>
                      {role.company}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: i === 0 ? 'var(--blue-accent)' : 'var(--success)',
                      background: i === 0 ? 'var(--blue-muted)' : '#d1fae5',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {role.period}
                  </span>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {role.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--gray-600)',
                        lineHeight: 1.6,
                        paddingLeft: '1.25rem',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: '0',
                          top: '0.45rem',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--blue-accent)',
                        }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
