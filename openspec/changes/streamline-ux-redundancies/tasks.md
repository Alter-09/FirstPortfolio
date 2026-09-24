# Tasks: streamline-ux-redundancies

## 1. Topbar & Header Cleanup

- [x] 1.1 Remove the `[DL]` badge div from the topbar header right side.

## 2. Navigation Consolidation

- [x] 2.1 Update `navIds` array to 6 items — replace `'testimonials'` and `'contact'` with `'references-contact'`.
- [x] 2.2 Update `navItems` array inside `HomePage` to 6 items — merge items 06 and 07 into one: `{ id: 'references-contact', label: tx.nav.referencesContact, num: '06' }`.
- [x] 2.3 Add `referencesContact` key to both `es.nav` and `en.nav` dictionaries.

## 3. Hero Terminal Refactor

- [x] 3.1 Replace `$ cat perfil.txt` bio block with structured terminal key-value lines: `$ stack`, `$ location`, `$ availability`.
- [x] 3.2 Add `terminalStack` and `terminalAvailability` translation keys to both `es` and `en` dictionaries.

## 4. Quick Snapshot Panel Cleanup

- [x] 4.1 Remove `GitHub Profile` button from Quick Links card.
- [x] 4.2 Remove `Profile Repo` button from Quick Links card.
- [x] 4.3 Update Quick Links card to contain only `Download CV` and `Email` buttons.

## 5. Sidebar Footer Removal

- [x] 5.1 Remove the rotated sidebar footer block (`kitLabel` + `kitQuote`) from the sticky desktop sidebar.

## 6. Section Merge (Testimonials + Contact)

- [x] 6.1 Rename section `id="testimonials"` and `id="contact"` to a single `id="references-contact"` section containing both the testimonial cards grid and the contact CTA block.
- [x] 6.2 Update `IntersectionObserver` hook references: replace `'testimonials'` and `'contact'` with `'references-contact'`.

## 7. Build Verification

- [x] 7.1 Run `npm run build` and confirm zero TypeScript errors and all 4 pages generated.
