export default function Skills() {
  const skillCategories = [
    {
      title: 'Banking Operations',
      skills: [
        'Retail Banking',
        'Transaction Processing',
        'Fund Transfers',
        'Fixed Deposits',
        'Cash Operations',
        'Cheque / Clearing',
        'FX Transactions',
        'Reconciliation',
        'Suspense Monitoring',
      ],
    },
    {
      title: 'Compliance & Risk',
      skills: [
        'AML Monitoring',
        'Transaction Monitoring',
        'KYC Procedures',
        'Operational Controls',
        'Exception Handling',
        'Regulatory Reporting',
        'Documentation',
      ],
    },
    {
      title: 'Business Analysis',
      skills: [
        'Requirements Gathering',
        'Process Mapping',
        'AS-IS / TO-BE',
        'Gap Analysis',
        'BRD / FRD',
        'User Stories',
        'Acceptance Criteria',
        'UAT Concepts',
      ],
    },
    {
      title: 'Data & Analytics',
      skills: [
        'SQL (PostgreSQL)',
        'Python (Pandas)',
        'Excel / Google Sheets',
        'Data Modeling',
        'EDA & Visualization',
        'Statistical Analysis',
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Tally / Tally Prime',
        'GST Compliance',
        'Git & GitHub',
        'VS Code',
        'Jupyter Notebook',
        'React + Vite',
        'Markdown',
      ],
    },
    {
      title: 'Soft Skills',
      skills: [
        'Customer Service',
        'Stakeholder Coordination',
        'Complaint Resolution',
        'Problem Solving',
        'Cross-functional Collaboration',
        'Documentation',
        'Research & Analysis',
      ],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2>Skills & Tools</h2>
          <p>
            Deep banking operations expertise combined with emerging business analysis, data, and technology
            capabilities.
          </p>
        </div>

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map((cat) => (
            <div
              className="skills-card"
              key={cat.title}
              style={{
                background: 'var(--white)',
                borderRadius: '10px',
                padding: '1.5rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                border: '1px solid var(--gray-200)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                e.currentTarget.style.borderColor = 'var(--blue-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = 'var(--gray-200)';
              }}
            >
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--navy-800)' }}>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: '#e0e7ff',
                      color: '#1e3a8a',
                      padding: '.35rem .75rem',
                      borderRadius: '20px',
                      fontSize: '.8rem',
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
