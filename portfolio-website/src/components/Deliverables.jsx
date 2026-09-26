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
    { name: 'Data Quality Report', icon: '📉' },
    { name: 'Process Maturity Assessment', icon: '📈' },
    { name: 'Change Impact Matrix', icon: '🔄' },
    { name: 'UAT Defect Log', icon: '🐞' },
    { name: 'RACI Matrix', icon: '🎯' },
    { name: 'Stakeholder Sentiment Tracker', icon: '😊' },
    { name: 'API Specification', icon: '🔌' },
    { name: 'Cost-Benefit Analysis', icon: '💰' },
    { name: 'Executive One-Pager', icon: '🎯' },
    { name: 'Voice of Customer', icon: '🎤' },
    { name: 'Infographic Summaries', icon: '📊' },
  ];

  return (
    <section id="deliverables" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Deliverables</span>
          <h2>Business Analysis Artifacts</h2>
          <p>Building proficiency in producing structured, professional BA deliverables — from standard BRDs to advanced systematic artifacts that mirror real enterprise consulting outputs.</p>
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
