export default function FeaturedCaseStudy() {
  const lifecycle = [
    { stage: 'Discovery', icon: '🔍', color: '#3b82f6' },
    { stage: 'Application', icon: '📝', color: '#3b82f6' },
    { stage: 'KYC', icon: '🆔', color: '#8b5cf6' },
    { stage: 'Issuance', icon: '💳', color: '#8b5cf6' },
    { stage: 'Activation', icon: '⚡', color: '#10b981' },
    { stage: 'Loading', icon: '💰', color: '#10b981' },
    { stage: 'Spend', icon: '🌍', color: '#f59e0b' },
    { stage: 'Tracking', icon: '📊', color: '#f59e0b' },
    { stage: 'Reload', icon: '🔁', color: '#ef4444' },
    { stage: 'Support', icon: '🎧', color: '#ef4444' },
    { stage: 'Closure', icon: '🏠', color: '#64748b' },
  ];

  const beforeAfter = [
    {
      metric: 'Card Issuance Time',
      before: '5–7 days',
      after: '< 2 hours',
      improvement: '99% faster',
      icon: '⏱️',
    },
    {
      metric: 'Application Process',
      before: 'Branch visit + Paper form',
      after: '3-minute mobile app',
      improvement: 'Fully digital',
      icon: '📱',
    },
    {
      metric: 'Rate Transparency',
      before: 'Hidden markup',
      after: 'Live rate + lock option',
      improvement: '100% visible',
      icon: '💱',
    },
    {
      metric: 'Balance Visibility',
      before: 'Call helpline',
      after: 'Real-time multi-currency dashboard',
      improvement: 'Always available',
      icon: '👁️',
    },
    {
      metric: 'Repatriation Speed',
      before: '15 days',
      after: '< 3 days',
      improvement: '80% faster',
      icon: '⚡',
    },
    {
      metric: 'Customer Satisfaction',
      before: '3.2 / 5',
      after: '4.5 / 5',
      improvement: '+1.3 points',
      icon: '⭐',
    },
  ];

  const enhancements = [
    { title: 'Mobile-First Management', desc: 'End-to-end Forex card control in app', icon: '📱' },
    { title: 'Multi-Currency Wallet', desc: 'Hold, convert & spend 10 currencies', icon: '💱' },
    { title: 'Transaction Visibility', desc: 'Real-time alerts with merchant details', icon: '🔔' },
    { title: 'Rate Transparency', desc: 'Live rates with 30-min lock option', icon: '📈' },
    { title: 'Digital Card Controls', desc: 'Instant block, unblock & PIN reset', icon: '🛡️' },
    { title: 'Self-Service Disputes', desc: 'In-app dispute with photo evidence', icon: '📎' },
    { title: 'LRS Limit Tracking', desc: 'Automated compliance monitoring', icon: '📋' },
    { title: 'AI Travel Detection', desc: 'Pre-emptive offers from booking data', icon: '🤖' },
  ];

  const deliverables = [
    { label: 'Customer Journey Map', file: 'docs/customer_journey.md', icon: '🗺️' },
    { label: 'Pain Point Analysis', file: 'docs/pain_points_opportunities.md', icon: '🎯' },
    { label: 'Business Impact / ROI', file: 'docs/business_impact.md', icon: '💰' },
    { label: 'Requirements (FR/NFR)', file: 'docs/requirements.md', icon: '📋' },
    { label: 'Gap Analysis (AS-IS/TO-BE)', file: 'docs/gap_analysis.md', icon: '⚡' },
    { label: 'Implementation Roadmap', file: 'docs/implementation_roadmap.md', icon: '🗓️' },
    { label: 'SQL Schema + Views', file: 'sql/schema.sql', icon: '🗄️' },
    { label: 'EDA Notebook', file: 'analysis/eda.ipynb', icon: '📊' },
    { label: 'Interactive Dashboard', file: 'dashboard/forex-dashboard.html', icon: '📈' },
    { label: 'Process Flow Diagram', file: 'docs/README.md', icon: '📐' },
  ];

  return (
    <section id="featured-case" className="section section-alt" style={{ paddingTop: '3rem' }}>
      <div className="section-inner">
        {/* Header */}
        <div className="section-header">
          <span className="section-label">Featured Case Study</span>
          <h2>Forex Card Enhancement & Digital Travel Experience</h2>
          <p style={{ maxWidth: 700 }}>
            A comprehensive analysis of the complete Forex card lifecycle — from digital application and
            multi-currency wallets to real-time tracking and self-service management.
          </p>
        </div>

        {/* Lifecycle Timeline */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="cs-label">Complete Customer Lifecycle</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            {lifecycle.map((step, i) => (
              <div key={step.stage} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.75rem 1rem',
                    background: 'var(--white)',
                    border: `2px solid ${step.color}20`,
                    borderRadius: '0.625rem',
                    minWidth: '90px',
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = step.color;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${step.color}20`;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>{step.icon}</span>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: step.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {step.stage}
                  </span>
                </div>
                {i < lifecycle.length - 1 && (
                  <span style={{ color: 'var(--gray-300)', fontSize: '1rem' }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Before / After Grid */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="cs-label">Transformation Impact — AS-IS vs TO-BE</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1rem',
            }}
          >
            {beforeAfter.map((item) => (
              <div
                key={item.metric}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: '0.75rem',
                  padding: '1.25rem 1.5rem',
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: 'var(--navy-800)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.metric}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: 'var(--danger)',
                        background: '#fef2f2',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '0.25rem',
                        textTransform: 'uppercase',
                      }}
                    >
                      Before
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--gray-600)' }}>{item.before}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        color: 'var(--success)',
                        background: '#ecfdf5',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '0.25rem',
                        textTransform: 'uppercase',
                      }}
                    >
                      After
                    </span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--navy-800)' }}>
                      {item.after}
                    </span>
                  </div>
                  <div
                    style={{
                      marginTop: '0.35rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--blue-accent)',
                      background: 'var(--blue-muted)',
                      padding: '0.25rem 0.625rem',
                      borderRadius: '0.375rem',
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {item.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhancement Themes */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="cs-label">Digital Enhancement Themes</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1rem',
            }}
          >
            {enhancements.map((e) => (
              <div
                key={e.title}
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: '0.75rem',
                  padding: '1.25rem',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--blue-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--gray-200)';
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{e.icon}</div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--navy-800)',
                    marginBottom: '0.35rem',
                  }}
                >
                  {e.title}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--gray-500)', lineHeight: 1.5 }}>
                  {e.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--navy-900), var(--navy-700))',
            borderRadius: '1rem',
            padding: '2.5rem',
            color: 'var(--white)',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '0.5rem',
              }}
            >
              Projected Business Impact
            </div>
            <h3 style={{ color: 'var(--white)', fontSize: '1.5rem', margin: 0 }}>
              ₹4.2 Cr Annual Benefits | 7.7x ROI | 5.5-Month Payback
            </h3>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center',
            }}
          >
            {[
              { label: 'Op. Cost Savings', value: '₹40.5L' },
              { label: 'Revenue Uplift', value: '₹60L' },
              { label: 'Risk Mitigation', value: '₹15L' },
              { label: 'Cust. Experience', value: '₹25L' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'var(--blue-light)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="cs-label">Project Deliverables</span>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '0.875rem',
            }}
          >
            {deliverables.map((d) => (
              <a
                key={d.label}
                href={`https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/04-forex-card-enhancement/${d.file}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--white)',
                  border: '1px solid var(--gray-200)',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.25s ease',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--navy-800)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--blue-accent)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gray-200)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ fontSize: '1.125rem' }}>{d.icon}</span>
                <span>{d.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
