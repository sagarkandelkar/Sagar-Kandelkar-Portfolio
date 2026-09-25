# Changelog

All notable changes to this portfolio repository are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- 15 new BFSI portfolio case studies (09–23) with standard `docs/`, `data/`, `sql/`, `dashboard/` structure
- `Experience` section with interactive career timeline on portfolio website
- `ScrollReveal` component for scroll-triggered fade-in animations
- `BackToTop` floating button for improved long-page UX
- Searchable case study grid with domain and status filter chips
- JSON-LD structured data for Google Search rich snippets
- `robots.txt`, `sitemap.xml`, and `404.html` SPA fallback for GitHub Pages
- Print-friendly CSS styles for recruiters
- MIT License and `CONTRIBUTING.md`
- GitHub issue templates (bug report, feature request) and pull request template
- Resume download button in Hero section
- Enhanced Certifications grid with status badges

### Changed
- `.gitignore` now tracks `package-lock.json` for reliable CI/CD (`npm ci`)
- `Projects` filter counts are now dynamically computed
- `README.md` updated with local dev instructions and expanded feature list
- `CaseStudies` cards now display domain label alongside status

### Fixed
- Navbar link labels shortened for better mobile fit

## [1.0.0] — 2025-09-24

### Added
- Initial portfolio website (React 19 + Vite) with 8 featured case studies
- Complete project grid with domain filtering
- Business analysis artifacts showcase (BRD, FRD, User Stories, etc.)
- SAP BA mastery resources (roadmap, BRD sample, AI prompts)
- GitHub Actions CI/CD for automated GitHub Pages deployment
- Standard case study folder structure documented in README

---

> **Note:** Dates use ISO 8601 format (YYYY-MM-DD).
