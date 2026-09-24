## Why

To enhance visual ergonomics and international accessibility, the portfolio needs a comprehensive dark mode color palette refinement, full bilingual support (Spanish ↔ English translation toggle for all site content), and a persistent, sticky desktop sidebar navigation that stays in view as visitors scroll through the portfolio.

## What Changes

- **Dark Mode Color Palette Adaptation**: Refine CSS variables in `app/globals.css` and Tailwind configuration to support a deep, high-contrast dark theme (ink/charcoal surfaces, crisp dark paper, vibrant neon red/yellow/teal accents, high contrast text tokens) with a theme toggle.
- **Full Web Bilingual Translation (i18n)**: Implement a complete language toggle (ES / EN) in the topbar or sidebar, translating all UI text, biography, project summaries, skills categories, career timelines, contact cards, and navigation items dynamically with persistence in `localStorage`.
- **Sticky Desktop Sidebar**: Refactor the desktop navigation sidebar to remain fixed/sticky (`sticky top-[76px] h-[calc(100vh-76px)]`) so navigation links are always immediately accessible regardless of scroll position, while preserving responsive mobile menu behavior.

## Capabilities

### New Capabilities
- `dark-theme-palette`: Dark mode palette tokens, high contrast surfaces, and theme switcher support.
- `i18n-bilingual`: Dynamic full-site translation dictionary (ES / EN) with toggle button and persistent language preference.
- `sticky-sidebar`: Fixed/sticky desktop sidebar layout with active scrollspy/intersection observation.

### Modified Capabilities

## Impact

- `app/globals.css`: Additional dark theme CSS variables and contrast tokens.
- `tailwind.config.ts`: Extended color tokens for dark surfaces and text.
- `app/page.tsx`: Translation dictionaries, active language state, theme state, and sticky sidebar layout classes.
