# Movie Finder

# CINEMÉ — Movie Finder PWA

A cinematic, installable Progressive Web App for discovering movies.
Built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## What it does

CINEMÉ lets you search any movie title and instantly pulls live data from the
OMDB API — posters, release year, cast, director, runtime, awards, box office,
and more. Results appear in a responsive card grid, and clicking any card opens
a detailed modal panel with full movie info.

---

## Tech stack

- **HTML5 / CSS3 / Vanilla JS** — zero frameworks, zero build tools
- **OMDB API** — live movie data (search + detail endpoints)
- **PWA** — Web App Manifest + Service Worker for install and offline support
- **Google Fonts** — Playfair Display + DM Mono for the cinematic typography
- **CSS custom properties** — full theming via variables
- **CSS animations** — staggered card reveals, modal slide-in, hover transitions

---

## Features

- Live movie search via OMDB API
- Responsive card grid with poster images
- Detailed modal with cast, director, awards, box office, and more
- Offline-ready — static assets cached by service worker
- Installable on desktop and mobile (PWA)
- Graceful fallback for missing posters and empty search results
- Closes modal on backdrop click or Escape key
- Keyboard accessible search (Enter key support)

---

## Project structure

```
cineme/
├── index.html          # App shell and markup
├── style.css           # All styles and animations
├── script.js           # App logic and OMDB API calls
├── manifest.json       # PWA manifest (name, icons, theme)
├── sw.js               # Service worker (caching strategy)
└── icons/
    ├── icon-192.png    # PWA icon — 192×192
    └── icon-512.png    # PWA icon — 512×512
```

---

## Getting started

```bash
# Clone the repo
git clone https://github.com/your-username/cineme.git
cd cineme

# Serve locally (PWA requires a server, not file://)
npx serve .
```

Then open `http://localhost:3000` in your browser.
To install as an app, click the install icon in the address bar (Chrome/Edge)
or use "Add to Home Screen" on mobile Safari.

---

## Deployment

Deploy to any static host with HTTPS — PWA features require a secure origin.

Recommended: **Netlify**, **GitHub Pages**, or **Vercel** (all free).

---

## API

Powered by [OMDB API](https://www.omdbapi.com).
Get a free API key at omdbapi.com and replace the key in `script.js`.

---

## License

MIT — free to use, modify, and distribute.
