export default function Projects() {
  const projects = [
    {
      title: 'BFSI Customer Onboarding',
      desc: 'End-to-end analysis of customer onboarding processes, KYC workflows, and digital transformation opportunities in banking.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/01-bfsi-customer-onboarding',
    },
    {
      title: 'Retail Analytics — Customer Segmentation',
      desc: 'RFM-based customer segmentation, sales performance analysis, campaign ROI tracking, and churn prediction for retail.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/02-retail-analytics',
    },
    {
      title: 'Fraud Detection & Risk Analytics',
      desc: 'BFSI fraud analytics with real-time risk scoring, rule-based alerting, and fraud pattern analysis across transaction channels.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/03-fraud-risk-analytics',
    },
    {
      title: 'BFSI Data Analysis & Dashboard',
      desc: 'Exploratory data analysis and interactive dashboard design for BFSI application pipeline metrics.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/01-bfsi-customer-onboarding',
    },
    {
      title: 'SQL BFSI Schema Design',
      desc: 'Relational database design for customer onboarding with tables, views, and sample data.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/01-bfsi-customer-onboarding/data',
    },
    {
      title: 'Retail Sales Optimization',
      desc: 'Sales trend analysis, product performance ranking, and inventory optimization recommendations.',
      status: 'completed',
      repo: 'https://github.com/sagarkandelkar/Sagar-Kandelkar-Portfolio/tree/main/02-retail-analytics',
    },
    {
      title: 'Forex Card Enhancement Study',
      desc: 'Portfolio case study exploring the complete Forex card lifecycle and digital enhancement opportunities.',
      status: 'in-progress',
      repo: null,
    },
    {
      title: 'Digital Payments Process Analysis',
      desc: 'Analysis of digital payment flows, customer journeys, and process improvement opportunities.',
      status: 'planned',
      repo: null,
    },
    {
      title: 'Credit Card Customer Journey Mapping',
      desc: 'End-to-end mapping of credit card customer journeys from application to usage.',
      status: 'planned',
      repo: null,
    },
  ];

  return (
    <section id="projects" className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Projects</span>
          <h2>Project Work</h2>
          <p>Learning projects, portfolio case studies, and practical explorations.</p>
        </div>

        <div className="proj-grid">
          {projects.map((proj) => (
            <div className="proj-card" key={proj.title}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className={`proj-tag ${proj.status}`}>
                  {proj.status === 'completed' ? 'View on GitHub' : proj.status === 'in-progress' ? 'In Progress' : 'Coming soon'}
                </span>
                {proj.repo && (
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8125rem', fontWeight: 600 }}
                  >
                    Open →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
