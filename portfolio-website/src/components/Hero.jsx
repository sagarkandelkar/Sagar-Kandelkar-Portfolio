export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          <div style={{ flex: 1, minWidth: '280px' }}>
            <span className="hero-label">Sagar Namdev Kandelkar</span>
            <h1>BFSI Domain Expert | IT + Technology | Aspiring Consultant</h1>
            <p className="hero-subtitle">
              4+ Years at HDFC Bank | BFSI Operations | Payments | AML & Compliance | Transitioning to IT BFSI Consultant
            </p>
            <p className="hero-text">
              Deep hands-on experience in retail banking transactions, fund transfers, FX operations, reconciliation, and customer service. Now building structured BA and IT capabilities to bridge operational expertise with technology-driven transformation as an IT BFSI Consultant.
            </p>
          </div>

          <div
            style={{
              flexShrink: 0,
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <img
              src="/Sagar-Kandelkar-Portfolio/profile-photo.jpg"
              alt="Sagar Kandelkar"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
        </div>

        <div className="hero-buttons">
          <a href="#case-studies" className="btn btn-white">View Portfolio</a>
          <a
            href="https://www.linkedin.com/in/sagar-kandelkar-b42b0b209"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
          >
            Connect on LinkedIn
          </a>
          <a
            href="/Sagar-Kandelkar-Portfolio/resume.pdf"
            className="btn btn-outline"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}
            download
          >
            📄 Download Resume
          </a>
        </div>

        <div className="hero-indicators">
          {['BFSI Domain', 'Process Improvement', 'IT Consulting', 'Data & Compliance'].map((item) => (
            <div className="hero-indicator" key={item}>
              <span className="indicator-dot"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
