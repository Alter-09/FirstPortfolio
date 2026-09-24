# Portfolio Codebase Study

This project is a personal developer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion. The app is intentionally designed as a single-page portfolio with strong visual identity, responsive layout, and clear sections for projects, skills, experience, and contact.

## 1) Project goal

The site works as a professional online presence for Diego León and is optimized for:

- recruiter-friendly presentation
- fast loading and clean UX
- responsive design across devices
- dark, high-contrast visual language
- strong calls to action for GitHub, resume, and project exploration

The implementation is deliberately lightweight and easy to update without a heavy CMS or complex state layer.

---

## 2) Stack and architecture

### Core stack

- Next.js 14.2.15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

### Architectural style

This is a minimal App Router portfolio:

- `app/page.tsx` contains the full landing page and most of the content
- `app/layout.tsx` defines the root HTML shell and metadata
- `app/globals.css` contains the global design system and utilities
- static content is structured as arrays inside the page file for easy editing

This is not a multi-page app with a large state management system; it is a focused marketing site driven by local arrays and client-side animation.

---

## 3) Key files

### `package.json`

Defines the project scripts and dependencies.

Important scripts:

```bash
npm install
npm run dev
npm run build
npm run start
```

Dependencies include:

- `next` for the application framework
- `react` and `react-dom` for rendering
- `framer-motion` for motion effects
- `tailwindcss` for styling
- `lucide-react` for icons
- `clsx` and `tailwind-merge` for future utility patterns

### `app/layout.tsx`

This is the root layout for the app.

Responsibilities:

- sets global metadata
- applies the HTML language and smooth scrolling
- imports the global stylesheet
- wraps all routed pages inside the base document

Important metadata:

- title: `Diego León | Full Stack Developer`
- description: portfolio summary
- metadataBase: points to GitHub placeholder domain

### `app/page.tsx`

This is the main implementation file. It contains:

- profile data object
- project array
- skills array
- experience array
- highlights array
- navigation items
- UI sections for hero, about, projects, skills, experience, and contact

The page is a client component because it uses `framer-motion` and local state.

Important logic:

- `useState` tracks the currently active nav section
- `motion.*` components drive reveal effects and scroll-based transitions
- the page uses a single `HomePage` component with different sections

### `app/globals.css`

Defines the visual system for the portfolio.

Characteristics:

- dark background and paper/ink aesthetic
- custom CSS variables for colors and shadows
- Tailwind base/import layers
- `dot-grid` utility for subtle background texture
- custom `reveal` animation
- reduced-motion support for accessibility

This gives the app its strong identity without requiring heavy design tooling.

### `public/resume.txt`

A simple downloadable resume artifact used in the UI.

It can be replaced with a proper PDF or updated text file to match the user's CV.

### `tailwind.config.ts`

Tailwind configuration used for the app theme and future extension.

### `next.config.mjs`

Core Next.js settings layer.

### `openspec/`

Contains the open specification workflow for planning and change tracking.

This repository uses spec-driven change management, which helps keep the design and implementation updates structured.

---

## 4) Data model and content structure

The portfolio content is intentionally centralized in a few arrays and a single profile object.

### Example pattern

```ts
const profile = {
  name: 'Diego León',
  title: 'Full Stack Developer',
  bio: '...',
  github: 'https://github.com/Alter-09',
  resume: '/resume.txt'
};
```

Then project content is defined as:

```ts
const projects = [
  {
    title: 'Campusbuild',
    summary: '...',
    tags: ['JavaScript', 'Productivity', 'Web App'],
    demo: '...',
    github: '...'
  }
];
```

This pattern makes future personalization easy:

- change the headline and bio
- swap project cards
- update technologies and links
- replace resume content

---

## 5) Component and section flow

The homepage is organized into a few clear blocks:

1. Header / top bar
2. Sidebar navigation
3. Hero section
4. About highlights
5. Projects grid
6. Skills matrix
7. Experience timeline-like cards
8. Contact CTA
9. Footer

The sections are anchored with `id` values such as:

- `home`
- `about`
- `projects`
- `skills`
- `experience`
- `contact`

The nav uses `href="#section"` links and updates the active state via `useState`.

---

## 6) Styling system and UX decisions

### Theme

The portfolio uses a high-contrast, editorial design rooted in:

- dark ink background
- cream/paper panels
- red accent for action blocks
- yellow accent for emphasis
- teal accent for secondary highlights

### Motion strategy

The page uses Framer Motion for:

- entrance fade/slide animations
- section reveals while in view
- subtle hover motion
- clean transitions without visual overload

### Accessibility

The global stylesheet contains reduced-motion fallback rules:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

This ensures users with motion sensitivity get a calmer experience.

---

## 7) How to customize the portfolio

The easiest editing points are:

### Change profile info

Edit the `profile` object in `app/page.tsx`:

- name
- title
- location
- bio
- GitHub URL
- resume URL

### Change projects

Edit the `projects` array in `app/page.tsx`.

Each object includes:

- `title`
- `summary`
- `tags`
- `demo`
- `github`

### Change skills and experience

Update these arrays:

- `skills`
- `experience`
- `highlights`

### Replace resume

Update `/public/resume.txt` or swap it for a real PDF if preferred.

---

## 8) Build and local run workflow

From the project root:

```bash
npm install
npm run dev
```

Then open the local URL in the browser.

To verify production readiness:

```bash
npm run build
```

This confirms the app compiles successfully in production mode.

---

## 9) Important maintenance notes

- This portfolio is intentionally simple and data-driven.
- The main personal content lives in one file: `app/page.tsx`.
- Styling is centralized in `app/globals.css` for consistent visual identity.
- The app is static and lightweight, which is ideal for personal branding.
- If you add more sections, keep them as lightweight component blocks rather than introducing a full state management system.

---

## 10) Recommended next improvements

If you want to evolve the project further, the most logical next steps are:

1. Split the large page into reusable components (`Hero`, `ProjectsSection`, `SkillsSection`, etc.)
2. Move portfolio data to a typed JSON or MD file for cleaner separation
3. Add real project images/screenshots and case study pages
4. Add a contact form with serverless email integration
5. Add SEO metadata and Open Graph preview assets
6. Add automated Lighthouse and accessibility checks in CI

---

## 11) Short reading order

If you want to understand the project quickly, read in this order:

1. `package.json`
2. `app/layout.tsx`
3. `app/page.tsx`
4. `app/globals.css`
5. `public/resume.txt`
6. `openspec/`

That sequence gives a full picture of the app's setup, layout, data, styling, and intent.

---

## 12) Summary

This codebase is a compact, polished personal portfolio built with professional frontend patterns and minimal complexity. It is easy to edit, easy to deploy, and highly suitable for a personal brand site. The project emphasizes clarity, performance, and a distinctive visual style rather than complexity.

The core mental model is simple:

- one page
- structured content arrays
- motion-enabled polish
- performant Tailwind styling
- easy replacement of personal information
