export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <span className="hero-label">Sagar Namdev Kandelkar</span>
        <h1>Turning Business Problems into Practical Solutions</h1>
        <p className="hero-subtitle">BFSI | Business Analysis | Digital Transformation | AI & Data</p>
        <p className="hero-text">
          Building practical capabilities across BFSI, business analysis, digital transformation, data, and AI.
        </p>

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
        </div>

        <div className="hero-indicators">
          {['Business Analysis', 'BFSI Processes', 'Process Improvement', 'Data & AI'].map((item) => (
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
