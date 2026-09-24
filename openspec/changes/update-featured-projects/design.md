## Context

The portfolio currently renders a static list of 3 legacy project placeholders in `app/page.tsx`. Diego León has developed 5 significant projects hosted under his GitHub profile (`@Alter-09`):
1. **NeoMetro**: Real-time incident reporting and dispatch portal with Leaflet, n8n automation, and AI severity analysis.
2. **RapidExpres**: Express logistics, courier tracking, and order optimization system.
3. **SISTEMA_AEROPUERTO**: Console-based Java enterprise flight, airline, and passenger management system with JSON persistence and clean OOP.
4. **AMB-exam**: Assessment and evaluation engine for technical certifications.
5. **MetaNav**: Neubrutalist daily task and focus organizer with responsive dashboard layout.

## Goals / Non-Goals

**Goals:**
- Present accurate, rich, and up-to-date metadata for all 5 selected flagship projects in the `projects` dataset.
- Maintain consistent neubrutalist visual styling and hover micro-animations across all cards.
- Support direct links to GitHub repositories and live demos where applicable.
- Keep layout clean and balanced across mobile, tablet, and desktop grids.

**Non-Goals:**
- Creating dynamic backend CMS or fetching repos at runtime via GitHub API on client requests (static data keeps load instant and robust).
- Modifying other portfolio sections (terminal, skills, about, career timeline).

## Decisions

- **Static Data in `page.tsx`**: Embed the 5 projects directly in the `projects` array within `app/page.tsx` to maintain fast static site generation (SSG) with Next.js without requiring external API rate-limiting or client-side loading spinners.
- **Card Tagging Strategy**: Use 3 concise tags per project indicating primary language/framework, domain, and architecture style.
- **Fallback Action Buttons**: For projects without separate production URLs (e.g. CLI or backend systems like SISTEMA_AEROPUERTO), point demo/view action directly to GitHub source or documentation.

## Risks / Trade-offs

- **[5 Cards Layout Asymmetry]** → An odd number of cards (5) in a 3-column grid may leave an empty slot on wide screens. *Mitigation:* Ensure responsive grid uses `grid md:grid-cols-2 xl:grid-cols-3` where cards stretch naturally with uniform card heights and clean flex tags.
