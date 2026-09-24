# Portfolio Website (React + Vite)

This directory is reserved for the React + Vite portfolio website.

## Setup Instructions

1. **Create your React + Vite app here:**
   ```bash
   cd portfolio-website
   npm create vite@latest . -- --template react
   npm install
   ```

2. **Configure `vite.config.js` for GitHub Pages:**
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     base: '/Sagar-Kandelkar-Portfolio/',
     plugins: [react()],
   })
   ```

3. **Build locally to verify:**
   ```bash
   npm run build
   ```

4. **Push to GitHub** — the `.github/workflows/deploy.yml` will automatically:
   - Build the app on every push to `main`
   - Deploy the `dist/` folder to GitHub Pages

## GitHub Pages Configuration

- Go to **Settings > Pages > Source** and select **GitHub Actions**
- The workflow at `.github/workflows/deploy.yml` handles the rest

## Important Notes

- **Do NOT** use absolute paths (`/assets/...`) in your code
- Vite's `base` config ensures all assets use the correct subpath
- The workflow only triggers when files in `portfolio-website/` change
- Other project folders (`01-bfsi-customer-onboarding/`) are NOT affected

## Expected File Structure

```
portfolio-website/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js   ← Must include base: '/Sagar-Kandelkar-Portfolio/'
└── README.md
```

---

*This placeholder was created by Sagar Kandelkar's portfolio setup.*
