## Why

An audit of the current web application revealed several functional and informational redundancies:
1. **Duplicated Profile & Action Links**: GitHub, Profile Repo, and Email buttons are duplicated between the Hero Quick Links card and the Contact section.
2. **Topbar Visual Clutter**: The header has redundant initials marks (`[D]` logo on the left and `[DL]` badge on the right), and date pill competing with action toggles.
3. **Overlapping Bio & Value Proposition**: Bio text, Terminal `$ cat perfil.txt` output, About highlight cards, and the sidebar footer quote repeatedly restate identical value proposition formulas and career goals.
4. **Navigation Clutter**: Navigation has grown to 7 items with overlapping sections.

Streamlining these elements will make the portfolio cleaner, more cohesive, faster to scan, and significantly more professional.

## What Changes

- **Topbar Cleanup**:
  - Remove redundant `[DL]` badge from the right side of the header.
  - Retain the clean `[D]` logo mark, `Theme Toggle (Sun/Moon)`, `Language Toggle (ES/EN)`, and date indicator.
- **Hero & Terminal Consolidation**:
  - Refocus the Hero Terminal to present a clean, concise technical developer identity (`$ whoami`, `$ stack`, `$ location`, `$ availability`).
  - Transform the Hero Quick Links card into a focused **"Quick Actions / Snapshot"** panel (Download CV, GitHub, Email) without clashing with the full Contact section.
- **Section & Navigation Harmonization**:
  - Consolidate navigation into 6 clean, distinct anchors:
    1. `01 Home`
    2. `02 About & Values` (integrating Mission, Vision, and Value Proposition)
    3. `03 Projects` (the 9 projects grid)
    4. `04 Skills` (4 clear technical categories)
    5. `05 Career & Education` (Campuslands, Globant, MySQL, Praxis)
    6. `06 References & Contact` (combining peer recommendations with contact action channels)
- **Eliminate Quote Duplications**:
  - Remove duplicate quotes between the sticky sidebar footer and About cards, ensuring each section provides distinct value.

## Capabilities

### New Capabilities
- `ux-streamline-audit`: Streamlined portfolio architecture eliminating duplicate buttons, redundant branding marks, overlapping biographical text, and consolidated 6-item navigation.

### Modified Capabilities
<!-- None -->

## Impact

- `app/page.tsx`: Consolidated state, layout, navigation array (6 items), cleaned terminal data, unified Contact & References section, and refined header bar.
- `app/globals.css`: Maintains existing neubrutalist tokens and dark/light modes.
