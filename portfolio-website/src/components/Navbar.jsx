import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#featured-case', label: 'Featured' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">
          Sagar <span>Kandelkar</span>
        </a>

        <ul className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-external">
          <a href="https://www.linkedin.com/in/sagar-kandelkar-b42b0b209" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/sagarkandelkar" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <><path d="M18 6L6 18M6 6l12 12" /></>
            ) : (
              <><path d="M3 12h18M3 6h18M3 18h18" /></>
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}
