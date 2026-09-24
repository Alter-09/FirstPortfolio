## Context

The current portfolio UI features high-contrast neubrutalism with a dark-framed app shell (dark ink `#171717` topbar and sidebar) around a light paper (`#f1eee7`) main content canvas with cream (`#fffdf7`) cards. The user wants a dark mode option adhering strictly to the same neubrutalist color palette (Ink `#171717`, Red `#c30f1f`, Yellow `#f4c430`, Teal `#137c78`, Cream `#fffdf7`), transforming the main canvas and components into high-contrast dark surfaces for comfortable low-light viewing.

## Goals / Non-Goals

**Goals:**
- Provide an intuitive dark mode toggle button in the header alongside the language switcher.
- Invert canvas colors smoothly:
  - Main area background: light paper (`#f1eee7`) -> dark ink charcoal (`#141413`).
  - Cards: light cream (`#fffdf7`) -> dark ink surface (`#1e1d1a` / `#171717`) with distinct borders (`#302d29` or `#4a463f`).
  - Headings & text: dark ink (`#171717` / `#625d56`) -> crisp cream & muted warm grey (`#fffdf7` / `#b8b3ab`).
  - Accent colors (Red `#c30f1f`, Yellow `#f4c430`, Teal `#137c78`) retained for strong branding and visual punch.
- Store theme preference in `localStorage` (`'theme' = 'dark' | 'light'`) with fallback to OS preference (`window.matchMedia('(prefers-color-scheme: dark)')`).
- Zero layout shift and zero hydration flash on load.

**Non-Goals:**
- Redesigning layouts or adding multi-theme customizations beyond Light and Dark modes.

## Decisions

1. **Theme State in Client Component (`app/page.tsx`) with Root Class Toggle:**
   - *Rationale*: Storing `theme` state (`'light'` | `'dark'`) and applying a `dark` CSS class to the root container allows immediate styling without heavy external libraries.
   - *Alternative Considered*: `next-themes` library. Declined to avoid unnecessary dependencies and keep bundle size lean.

2. **Tailwind Dark Mode Classes & CSS Variables:**
   - *Rationale*: Utilizing Tailwind's `dark:` variant or dynamic theme classes ensures seamless switching across background grids, cards, typography, and borders.

3. **High-Contrast Neubrutalist Dark Aesthetic:**
   - *Rationale*: Instead of a washed-out dark grey, dark mode uses deep ink backgrounds with warm tinted surfaces (`#1e1d1a`), 2-3px solid borders (`#3a3732`), and vivid yellow/red/teal badges and buttons for authentic neubrutalism.

## Risks / Trade-offs

- **[Risk] Hydration Flash / FOUC** -> *Mitigation*: Initialize theme state safely inside `useEffect` or with inline script support to ensure server and client match initial hydration.
- **[Risk] Readability of subtle text on dark backgrounds** -> *Mitigation*: Ensure all secondary text tokens have at least 4.5:1 WCAG contrast ratio against dark backgrounds.
