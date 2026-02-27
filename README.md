# Pushly APP — Dev Quick Reference

## Start the dev server

```bash
cd "Site-files PROD/Pushly APP"
npm run dev
```

Opens at **http://localhost:3000**

---

## Stop the server

In the terminal where it's running: **Ctrl + C**

If you closed the terminal and it's still running:

```bash
# Find and kill the process on port 3000
lsof -i :3000
kill <PID>
```

Or kill all Vite instances at once:

```bash
pkill -f vite
```

---

## Check if it's running

```bash
lsof -i :3000
```

- Output with a `node` process → **running**
- No output → **not running**

---

## Why am I seeing localhost:3001?

If port 3000 is already taken (e.g. you started `npm run dev` twice), Vite automatically picks the next free port (3001, 3002, ...). Kill the duplicate with `pkill -f vite`, then restart once.

---

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the build locally:

```bash
npm run preview
```

---

## Project structure

```
src/
  pages/       → Home, About, Solutions, GetStarted, PrivacyPolicy, TermsConditions
  components/  → Navbar, Footer, Layout
  index.css    → Global styles & animations
  main.tsx     → App entry point
```

> **Source of truth for content:** Static HTML files in `Site-files PROD/` (index.html, about.html, solutions.html, etc.)
