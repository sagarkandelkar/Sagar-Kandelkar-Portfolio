export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2>Get In Touch</h2>
          <p>Open to IT BFSI Consultant, BFSI Business Analyst, Digital Banking Consultant, and BFSI Functional Analyst opportunities.</p>
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

          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <a href="mailto:sagarkandelkar389@gmail.com">
              sagarkandelkar389@gmail.com
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--gray-600)' }}>
              Pune, Maharashtra, India
            </span>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Phone</h3>
            <a href="tel:+917276693523">+91 72766 93523</a>
          </div>
        </div>
      </div>
    </section>
  );
}
