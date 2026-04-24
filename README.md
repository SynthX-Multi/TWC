# TWC v2.1.2
TWC is a clean shortcut hub built with Next.js. It includes a polished home page, a searchable shortcuts dashboard, a study guide page, and a customizable light and dark interface.

## Features
- Home page with a branded landing view
- Searchable shortcuts dashboard
- Study guide page with a structured revision plan
- Responsive layout for desktop, iPad, and phone
- Light and dark mode
- Accent color settings
- Toggle placement settings for the theme switch
- Easy-to-edit shortcut and study guide data files

## Project structure
- `app/page.js` — home page
- `app/shortcuts/page.js` — shortcuts dashboard
- `app/study-guide/page.js` — study guide
- `app/settings/page.js` — settings page
- `components/` — reusable UI pieces
- `data/shortcuts.js` — add or edit shortcuts here
- `data/studyGuide.js` — update the study guide

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
