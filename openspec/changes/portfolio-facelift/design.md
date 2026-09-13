## Context

The current portfolio needs a "facelift" to achieve a more premium, modern aesthetic inspired by the "MetaNav" project. This involves adopting a dark mode theme with red accents, modern typography, and an "app shell" layout structure.

## Goals / Non-Goals

**Goals:**
- Implement a global dark theme using CSS variables for colors (backgrounds, texts, accents like `#c30f1f`).
- Standardize typography using a modern sans-serif font.
- Refactor the main layout to use a sidebar/topbar "app shell" structure.
- Add interactive micro-animations (e.g., hover effects on buttons and links).

**Non-Goals:**
- Changing the underlying content, text, or data of the portfolio.
- Introducing heavy new frameworks if the project is vanilla (or changing the existing framework).
- Backend or API changes.

## Decisions

- **CSS Variables for Theming**: We will use CSS custom properties in `index.css` (e.g., `--bg-color`, `--accent-color`) to manage the dark theme consistently across the application.
  - *Alternative*: Hardcoding colors in classes, which is harder to maintain and update later.
- **App Shell Layout**: We will implement a responsive `app-shell` consisting of a sidebar (for navigation) and a main content area. On mobile, the sidebar might collapse into a topbar or hamburger menu.
  - *Alternative*: Keeping the current layout, which might not feel as "premium" or structured as MetaNav.

## Risks / Trade-offs

- [Risk] Layout changes might break existing responsive designs. → Mitigation: Test thoroughly on mobile and tablet viewports, ensuring the new app-shell adapts correctly.
- [Risk] Dark theme contrast issues. → Mitigation: Use accessible shades of gray for text against dark backgrounds to ensure readability.
