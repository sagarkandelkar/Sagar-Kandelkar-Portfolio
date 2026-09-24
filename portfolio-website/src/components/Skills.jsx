export default function Skills() {
  const skillCategories = [
    {
      title: 'Business Analysis',
      skills: ['Requirements Gathering', 'Gap Analysis', 'Process Mapping', 'Stakeholder Management', 'BRD / FRD / PRD', 'User Stories', 'Jira & Confluence'],
    },
    {
      title: 'Data & Analytics',
      skills: ['SQL (PostgreSQL)', 'Python (Pandas)', 'Excel / Google Sheets', 'Data Modeling', 'EDA & Visualization', 'Statistical Analysis'],
    },
    {
      title: 'BFSI Domain',
      skills: ['Customer Onboarding', 'KYC / AML', 'Fraud Detection', 'Digital Payments', 'Credit Cards', 'Forex & Remittance', 'LRS Compliance'],
    },
    {
      title: 'Visualization',
      skills: ['Power BI', 'Tableau', 'Chart.js', 'Matplotlib / Seaborn', 'Draw.io', 'Mermaid Diagrams'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git & GitHub', 'VS Code', 'Jupyter Notebook', 'React + Vite', 'GitHub Actions', 'Markdown'],
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Problem Solving', 'Cross-functional Collaboration', 'Presentation', 'Agile / Scrum', 'Documentation'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Skills</span>
          <h2>Skills & Tools</h2>
          <p>Technical capabilities, domain knowledge, and tools I use to deliver business value.</p>
        </div>

        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skillCategories.map((cat) => (
            <div className="skills-card" key={cat.title} style={{ background: 'var(--white)', borderRadius: '10px', padding: '1.5rem', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '1rem', fontWeight: 600 }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {cat.skills.map((skill) => (
                  <span key={skill} style={{ background: '#e0e7ff', color: '#1e3a8a', padding: '.35rem .75rem', borderRadius: '20px', fontSize: '.8rem', fontWeight: 500 }}>
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
