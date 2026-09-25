export default function Experience() {
  const roles = [
    {
      period: '2023 — Present',
      title: 'Senior Business Analyst',
      company: 'BFSI Consulting / Freelance',
      highlights: [
        'Led 8+ end-to-end process improvement initiatives across banking onboarding, payments, and risk',
        'Designed AS-IS / TO-BE process flows using BPMN 2.0 for digital transformation programs',
        'Built SQL-based analytics frameworks reducing reporting turnaround by 86%',
        'Created BRD/FRD documents, user stories, and UAT test cases for agile delivery',
      ],
    },
    {
      period: '2021 — 2023',
      title: 'Business Analyst',
      company: 'Financial Services Domain',
      highlights: [
        'Managed stakeholder workshops for requirements elicitation and gap analysis',
        'Developed KPI dashboards and executive reporting for operational metrics',
        'Collaborated with engineering on API specifications for open banking integrations',
        'Conducted UAT and regression testing for core banking module upgrades',
      ],
    },
    {
      period: '2019 — 2021',
      title: 'Associate Analyst / Operations',
      company: 'Banking & Financial Services',
      highlights: [
        'Supported digital banking transformation with process documentation and data analysis',
        'Performed ETL validation and data quality checks for regulatory reporting',
        'Assisted in customer journey mapping and UX improvement for mobile banking app',
      ],
    },
  ];

  return (
    <section id="experience" className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Experience</span>
          <h2>Professional Journey</h2>
          <p>A progressive career in BFSI business analysis, process optimization, and digital transformation.</p>
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
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-9px',
                  top: '0',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'var(--blue-accent)',
                  border: '3px solid var(--white)',
                  boxShadow: '0 0 0 2px var(--blue-accent)',
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
                      color: 'var(--blue-accent)',
                      background: 'var(--blue-muted)',
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
