export default function Deliverables() {
  const artifacts = [
    { name: 'BRD', icon: '📄' },
    { name: 'Functional Requirements', icon: '📝' },
    { name: 'User Stories', icon: '👤' },
    { name: 'Acceptance Criteria', icon: '✅' },
    { name: 'Process Maps', icon: '🗺️' },
    { name: 'As-Is / To-Be', icon: '⚡' },
    { name: 'Gap Analysis', icon: '🔍' },
    { name: 'Business Rules', icon: '📋' },
    { name: 'UAT Test Cases', icon: '🧪' },
    { name: 'Requirements Traceability Matrix', icon: '🔗' },
    { name: 'Stakeholder Analysis', icon: '👥' },
    { name: 'Risk Register', icon: '⚠️' },
    { name: 'KPI Framework', icon: '📊' },
  ];

  return (
    <section id="deliverables" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Deliverables</span>
          <h2>Business Analysis Artifacts</h2>
          <p>Building proficiency in producing structured, professional BA deliverables.</p>
        </div>

        <div className="deliv-grid">
          {artifacts.map((a) => (
            <div className="deliv-item" key={a.name}>
              <span className="deliv-icon">{a.icon}</span>
              {a.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
