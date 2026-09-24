## 1. i18n Translation System

- [x] 1.1 Create full bilingual dictionary (ES and EN) covering all profile data, sections, cards, and labels.
- [x] 1.2 Implement language toggle state with `localStorage` persistence and hydration safety.
- [x] 1.3 Connect all page components and copy to active language dictionary.

## 2. Sticky Sidebar & Scrollspy Navigation

- [x] 2.1 Refactor desktop sidebar layout to be sticky (`md:sticky md:top-[76px] md:h-[calc(100vh-76px)]`).
- [x] 2.2 Implement IntersectionObserver to update active navigation item automatically as user scrolls past sections.

## 3. Dark Mode Palette & Visual Refinements

- [x] 3.1 Refine dark theme CSS tokens in `globals.css` and Tailwind config for optimal contrast and neubrutalist accents.
- [x] 3.2 Add neubrutalist theme / language toggle controls in the header navigation.

## 4. Verification & Testing

- [x] 4.1 Verify language switching across all sections in both Spanish and English.
- [x] 4.2 Verify sticky sidebar behavior across desktop and mobile responsive viewports.
- [x] 4.3 Validate TypeScript types and run Next.js build (`npm run build`).
