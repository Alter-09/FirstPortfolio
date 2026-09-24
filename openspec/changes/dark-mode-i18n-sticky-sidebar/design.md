## Context

The portfolio currently utilizes a neubrutalist layout inspired by MetaNav with English copy and a dark ink outer shell. To make the portfolio accessible to both local (Spanish-speaking) and international (English-speaking) recruiters, improve usability during long scroll sessions, and provide enhanced contrast modes, we need:
1. Complete bilingual localization (Spanish ↔ English).
2. Refined dark mode palette and contrast tokens with optional theme toggling.
3. Sticky desktop sidebar that stays anchored in the viewport while the content area scrolls.

## Goals / Non-Goals

**Goals:**
- Implement a typed translation dictionary `translations` supporting `{ es: {...}, en: {...} }` covering every string in the portfolio.
- Provide a clean, neubrutalist language toggle button (`[ ES | EN ]`) in the topbar or sidebar.
- Persist language preference in `localStorage`.
- Style the desktop sidebar with `md:sticky md:top-[76px] md:h-[calc(100vh-76px)]` and `overflow-y-auto` so it stays anchored during scrolling.
- Refine dark mode tokens in `app/globals.css` and `tailwind.config.ts` for maximum contrast and eye comfort.
- Add IntersectionObserver (Scrollspy) to update the active navigation link as the user scrolls.

**Non-Goals:**
- Using heavy third-party i18n libraries like `next-intl` or `i18next` that add runtime weight for a single-page portfolio (a lightweight native React state dictionary is cleaner, faster, and zero-dependency).
- Creating multi-page routes (`/es`, `/en`).

## Decisions

- **Zero-Dependency React i18n State**: Implement client-side translation using a structured typed dictionary in `app/page.tsx` or a dedicated `lib/translations.ts` helper. This ensures instant language switching with zero page reloads or bundle bloat.
- **Sticky Sidebar Positioning**: Set sidebar container with `md:sticky md:top-[76px]` within a flex/grid shell where the main content scrolls naturally, giving users constant navigation context.
- **Neubrutalist Language & Theme Toggles**: Design the controls matching MetaNav's hard borders and bold uppercase typography (`neo-shadow-sm`, yellow/teal/red accents).

## Risks / Trade-offs

- **[Hydration Mismatch with LocalStorage]** → Reading `localStorage` during initial server render could cause hydration mismatch. *Mitigation:* Initialize state with a safe default ('es' or 'en') and synchronize from `localStorage` within a `useEffect` hook upon mount.
- **[Content Length Differences]** → Spanish text is typically ~20-30% longer than English. *Mitigation:* Ensure flex containers, cards, and grid items use `min-h` and flexible wrapping rather than fixed pixel heights.
