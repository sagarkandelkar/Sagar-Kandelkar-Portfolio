export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-name">Sagar Kandelkar</div>
        <div className="footer-tagline">
          BFSI Operations &rarr; Business Analysis | HDFC Bank Experience | Pune, India
        </div>

        <div className="footer-links">
          <a href="https://www.linkedin.com/in/sagar-kandelkar-b42b0b209" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/sagarkandelkar" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:sagarkandelkar389@gmail.com">Email</a>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Sagar Kandelkar. Portfolio built with React + Vite.
        </div>
      </div>
    </footer>
  );
}
