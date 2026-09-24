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
          <h2>Building Solutions at the Intersection of Business and Technology</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am developing my career at the intersection of BFSI, business analysis, technology and digital
              transformation. My focus is on understanding business problems, translating requirements into structured
              solutions, improving processes and exploring practical applications of data and AI.
            </p>
            <p>
              I am actively building skills in requirements analysis, process mapping, gap analysis, and digital
              transformation strategy — with a strong interest in how technology can solve real banking and financial
              services challenges.
            </p>
            <div className="mt-2">
              <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--navy-800)' }}>Career Focus</h3>
              <div className="focus-grid">
                {['BFSI Consulting', 'Business Analysis', 'Digital Transformation', 'Banking Technology', 'Process Improvement', 'Data & AI'].map((tag) => (
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
