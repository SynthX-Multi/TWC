# TWC
TWC is a clean shortcut hub built with Next.js. It includes a responsive home page, a searchable shortcuts page, and a polished light/dark interface with animated visuals.

## Features
- Home page with a short description and branded landing view
- Searchable shortcuts dashboard
- Responsive layout for desktop, tablet, and phone
- Light and dark theme toggle
- Fast, glass-style UI with animation
- Easy-to-edit shortcut data files

## Project structure
- `app/page.js` — home page
- `app/shortcuts/page.js` — shortcuts dashboard
- `components/` — reusable UI pieces
- `data/shortcuts.js` — add or edit shortcuts here

## Add more shortcuts
Open `data/shortcuts.js` and add another item to `publicShortcuts`. Each shortcut supports:
- `name`
- `url`
- `description`
- `icon`
- `accent`

## Run locally
```bash
npm install
npm run dev
```

## Deploy
The repository includes configuration for Vercel, Netlify, and Render. The app is built with the Next.js App Router, so the same codebase works across those platforms.
