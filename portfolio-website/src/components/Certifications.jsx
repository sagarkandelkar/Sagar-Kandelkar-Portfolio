export default function Certifications() {
  const certs = [
    { name: 'MS-CIT', org: 'Maharashtra State Certificate in Information Technology', status: 'Completed', icon: '💻' },
    { name: 'Financial Accounting with Tally', org: 'Tally, Tally Prime & GST', status: 'Completed', icon: '📒' },
    { name: 'IRDAI Certification', org: 'Insurance Regulatory', status: 'In Progress', icon: '🛡️' },
    { name: 'Business Analysis Fundamentals', org: 'Self-directed learning', status: 'In Progress', icon: '📊' },
    { name: 'Power BI Data Analyst', org: 'Microsoft', status: 'Planned', icon: '📈' },
    { name: 'BFSI Domain Certification', org: 'NISM / RBI aligned', status: 'Planned', icon: '🏦' },
  ];

  const completedCount = certs.filter((c) => c.status === 'Completed').length;

  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Certifications</span>
          <h2>Certifications & Learning Path</h2>
          <p>
            {completedCount} completed and {certs.length - completedCount} in progress. Building credentials
            alongside hands-on BA skill development.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {certs.map((c) => (
            <div
              key={c.name}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--gray-200)',
                borderRadius: '0.75rem',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem',
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
                  width: '44px',
                  height: '44px',
                  borderRadius: '0.5rem',
                  background: 'var(--blue-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.25rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--navy-800)',
                      lineHeight: 1.3,
                    }}
                  >
                    {c.name}
                  </span>
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '0.25rem',
                      background:
                        c.status === 'Completed'
                          ? '#d1fae5'
                          : c.status === 'In Progress'
                          ? '#fef3c7'
                          : 'var(--gray-100)',
                      color:
                        c.status === 'Completed'
                          ? '#065f46'
                          : c.status === 'In Progress'
                          ? '#92400e'
                          : 'var(--gray-500)',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                  >
                    {c.status}
                  </span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--gray-500)' }}>{c.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
