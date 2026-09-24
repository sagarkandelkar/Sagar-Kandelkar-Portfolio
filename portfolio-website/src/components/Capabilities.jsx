export default function Capabilities() {
  const capabilities = [
    {
      title: 'Business Analysis',
      icon: '📋',
      items: [
        'Requirements Analysis',
        'Business Requirements',
        'Functional Requirements',
        'User Stories',
        'Acceptance Criteria',
        'Gap Analysis',
        'As-Is / To-Be Analysis',
        'Process Mapping',
        'UAT Concepts',
      ],
    },
    {
      title: 'BFSI',
      icon: '🏦',
      items: [
        'Banking Processes',
        'Customer Onboarding',
        'KYC',
        'Digital Banking',
        'Loans',
        'Payments',
        'Cards',
        'Forex Cards',
        'Customer Service',
        'Banking Operations',
      ],
    },
    {
      title: 'Digital Transformation',
      icon: '⚡',
      items: [
        'Process Digitization',
        'Workflow Improvement',
        'Digital Customer Journeys',
        'Automation Concepts',
        'Technology-enabled Process Improvement',
      ],
    },
    {
      title: 'Data & AI',
      icon: '🤖',
      items: [
        'Data-driven analysis',
        'SQL learning/projects',
        'AI business use cases',
        'AI-assisted workflows',
        'Responsible AI concepts',
      ],
    },
  ];

  return (
    <section id="capabilities" className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Capabilities</span>
          <h2>Skills & Knowledge Areas</h2>
          <p>Developing practical expertise across business analysis, BFSI, digital transformation, and data.</p>
        </div>

        <div className="cap-grid">
          {capabilities.map((cap) => (
            <div className="cap-card" key={cap.title}>
              <div className="cap-icon">{cap.icon}</div>
              <h3>{cap.title}</h3>
              <ul>
                {cap.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
