export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2>Get In Touch</h2>
          <p>Open to opportunities in BFSI consulting, business analysis, and digital transformation.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/sagar-kandelkar-b42b0b209"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sagar-kandelkar
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">💻</div>
            <h3>GitHub</h3>
            <a
              href="https://github.com/sagarkandelkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/sagarkandelkar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
