# Architecture Overview

## Sagar Kandelkar — Portfolio Website

This document describes the high-level architecture of the React + Vite portfolio site located in [`portfolio-website/`](portfolio-website/).

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 |
| Build Tool | Vite |
| Language | JavaScript (ES2024) |
| Styling | Custom CSS (no framework) |
| Deployment | GitHub Pages via GitHub Actions |
| SEO | JSON-LD structured data, sitemap.xml, robots.txt |

---

## Directory Structure

```
portfolio-website/
├── public/                     # Static assets (images, favicon)
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Skills.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── BackToTop.jsx
│   │   └── ScrollReveal.jsx    # Intersection Observer scroll animations
│   ├── App.jsx                 # Root component with section layout
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles + responsive breakpoints
├── index.html                  # HTML template with SEO meta tags
├── vite.config.js              # Vite config with base path for GH Pages
└── package.json
```

---

## Key Design Decisions

### 1. Single-Page Application (SPA)
All content lives in one scrollable page. This keeps hosting simple (static files on GitHub Pages) and provides a smooth narrative flow for recruiters.

### 2. Custom CSS Over Framework
No Tailwind or Bootstrap. Custom CSS ensures a unique visual identity and keeps bundle size minimal (~50 KB gzipped).

### 3. Intersection Observer for Animations
`ScrollReveal.jsx` uses the native Intersection Observer API to trigger fade-in animations. No heavy animation libraries required.

### 4. Static Data
All case studies, experience entries, and skills are stored as static JavaScript objects within components. This avoids the need for a backend or API while keeping the site fast and crawlable.

### 5. Responsive First
Mobile breakpoints are defined at 768px and 480px. The layout reflows to a single column on small screens with touch-friendly tap targets.

---

## CI / CD Pipeline

```
Push to main
    │
    ▼
GitHub Actions triggered
    │
    ├── Checkout repo
    ├── Setup Node 20
    ├── npm ci (from portfolio-website/)
    ├── npm run build
    ├── Verify dist/ output
    └── Deploy to GitHub Pages
```

See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for the full workflow.

---

## Performance Targets

- **Lighthouse Performance**: ≥ 90
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: < 100 KB (JS + CSS)

---

## Future Considerations

- Migrate to TypeScript for stronger type safety
- Add Playwright or Cypress for visual regression testing
- Implement dark mode toggle with CSS custom properties and `localStorage`
