<div align="center">
  <img alt="Logo" src="/src/images/logo.png" width="100" />
</div>
<h1 align="center">
  gkassym.netlify.com
</h1>
<p align="center">
  The website <a href="https://gkassym.netlify.com" target="_blank">gkassym.netlify.com</a> built with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/brittanychiang/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/1963b488-7b78-48c9-9e2d-6fb5e47ab3af/deploy-status" alt="Netlify Status" />
  </a>
</p>

![demo](/src/images/demo.png)

# Modern Gatsby Portfolio

This is a modern, high-performance Gatsby portfolio site, fully updated and optimized for 2024+.

## 🚀 Features

- Gatsby v5, React 19, and latest ecosystem
- Modern SEO with Gatsby Head API
- Fast, intersection-observer-powered section preloading/animation
- Scroll-to-top on refresh for a fresh feel
- Yarn as the only package manager
- Linting and Prettier formatting
- Clean, minimal, and robust codebase

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   yarn install
   ```
2. **Start the dev server:**

   ```bash
   yarn dev
   ```

   - Accessible at http://localhost:8000, http://127.0.0.1:8000, and your LAN IP.

3. **Production build:**
   ```bash
   yarn build
   ```
4. **Format code:**
   ```bash
   yarn format
   ```

## 🧹 Best Practices

- Use only Yarn (no npm lockfiles)
- All main sections animate/preload as you scroll
- Images and icons are optimized and square for manifest
- Keep dependencies up to date with `yarn upgrade-interactive --latest`
- Use the Head API for all SEO/meta tags

## ✨ Customization

- Content is in `/content` and `/src/components/sections/`
- Update `/src/config/index.js` for site metadata
- Replace `/src/images/logo.png` with your own square icon

## 📝 Credits

- Based on Brittany Chiang’s and Gapur Kassym’s original portfolio, now fully modernized

---

Enjoy your blazing-fast, modern portfolio!
