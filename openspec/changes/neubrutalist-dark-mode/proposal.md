## Why

Currently, the portfolio's main content area uses a light paper background (`#f1eee7`) with light cream cards (`#fffdf7`), while only the frame (header/footer/sidebar) uses dark ink. Users requested a dedicated dark mode option utilizing the same signature neubrutalist palette (Ink `#171717`, Red `#c30f1f`, Yellow `#f4c430`, Teal `#137c78`), making prolonged reading and nighttime viewing more comfortable and immersive while maintaining high contrast.

## What Changes

- Add a dark mode toggle button (Sun / Moon icon) to the header navigation next to the language switcher.
- Implement theme state management with `localStorage` persistence (storing `'light'` | `'dark'`) and system preference detection (`prefers-color-scheme`).
- Update `app/globals.css` and `tailwind.config.ts` to support `.dark` class mode or CSS custom variable themes where:
  - Background paper turns to deep charcoal / dark ink (`#121212` / `#1c1b19`).
  - Cards transition from light cream to dark slate/ink surfaces with hard neubrutalist borders (`#302d29` / `#f4c430`).
  - Text colors adapt from dark ink (`#171717`) to crisp off-white/cream (`#fffdf7` / `#f1eee7`).
  - Accent colors (Red, Yellow, Teal) remain vibrant and high-contrast.
- Update `app/page.tsx` elements to apply theme-responsive classes without layout shift or hydration mismatch.

## Capabilities

### New Capabilities
- `dark-mode-theme-toggle`: Theme state controller with localStorage persistence, system preference detection, and dark/light UI surface palette adaptations across all sections.

### Modified Capabilities
<!-- None -->

## Impact

- `app/globals.css`: Dark mode CSS custom properties and dot-grid contrast adjustments.
- `tailwind.config.ts`: `darkMode: 'class'` configuration if applicable.
- `app/page.tsx`: Theme state toggle component in the header and dark mode styling classes across sections.
- Dependencies: Uses existing `lucide-react` icons (`Sun`, `Moon`) without adding new external packages.
