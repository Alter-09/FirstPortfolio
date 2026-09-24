## Context

A UX & information architecture audit revealed that several components in the portfolio exhibit duplication:
1. **Action Buttons**: GitHub, Profile Repo, and Email buttons appear in both the Hero Quick Links card and the Contact card.
2. **Header Visual Duplication**: Both a `[D]` logo on the left and a `[DL]` badge on the right appear in the topbar.
3. **Bio and Quotes**: The bio text in Hero, Terminal command output, About cards, and the sticky sidebar quote repeat identical value statements.
4. **Navigation**: 7 menu items when 6 well-organized sections offer clearer information architecture.

## Goals / Non-Goals

**Goals:**
- **Refine Header**: Keep the distinctive `[D]` logo mark, Theme toggle (`Sun`/`Moon`), and Language toggle (`ES`/`EN`), while removing the redundant `[DL]` right badge and clutter.
- **Differentiate Hero Snapshot vs Contact**: Refactor the Hero snapshot to focus on essential developer identity (`$ whoami`, `$ stack`, `$ location`, `$ availability`) and direct CV download + Email, leaving the full social and repository links to the unified Contact section.
- **Harmonize 6-Section Architecture**:
  1. `Home`
  2. `About & Values`
  3. `Projects` (9 projects)
  4. `Skills` (4 categories)
  5. `Career & Education`
  6. `References & Contact`
- **Eliminate Quote Redundancy**: Keep a single punchy mantra in the sticky sidebar footer (`"Code with intent. Ship with craft."`) and maintain distinct mission/vision content in the About section.

**Non-Goals:**
- Deleting any of the 9 projects or altering the neubrutalist color scheme.

## Decisions

1. **Consolidated 6-Anchor Navigation**:
   - *Rationale*: 6 clear sections reduce cognitive load and simplify both desktop sticky sidebar and mobile bottom bar navigation.
2. **Non-duplicative Link Distribution**:
   - *Rationale*: Place CV Download in the Hero snapshot for immediate recruiter access; place full channels (GitHub, Email, Phone, Profile Repo) in the concluding Contact section.
3. **Streamlined Terminal Presentation**:
   - *Rationale*: Present structured key-value developer metrics in the terminal rather than long repeating bio text.

## Risks / Trade-offs

- **[Risk] Broken section scroll anchors** -> *Mitigation*: Ensure all updated section IDs match `navItems` and `navIds` in `IntersectionObserver`.
