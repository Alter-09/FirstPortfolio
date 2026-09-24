## Context

The portfolio currently showcases Juan Diego León's initial 5 projects, skills, and base information. `perfil_profesional_diego.md` contains additional verified professional data:
- Full name: Juan Diego León Prada
- Role: Fullstack Junior Developer (Campuslands / Globant formative stage)
- Location: Floridablanca, Santander, Colombia
- 4 additional projects: MundoFutbol Bot, SmartCity-Fix, MusicStream, EduSprint
- Extended technical capabilities: PostgreSQL, N8N, Docker, Vector spaces & embeddings, DBeaver, Scrum/Agile
- Academic background & Peer testimonials (Sebastián Ayala, Santiago Sarmiento)

This information must be seamlessly merged with existing content without overwriting current featured projects (NeoMetro, RapidExpres, SISTEMA_AEROPUERTO, AMB-exam, MetaNav).

## Goals / Non-Goals

**Goals:**
- Present 9 total projects (5 existing + 4 from profile) in the projects grid with clean neubrutalist card styling and bilingual translations.
- Expand skills categories to 4 comprehensive sections:
  1. Full Stack & Languages (Python, JavaScript, HTML5, CSS, TypeScript, MySQL, PostgreSQL)
  2. Automation & AI (N8N, Process Automation, Vector Spaces, Embeddings)
  3. Tools & Infrastructure (Docker, Docker Desktop, DBeaver, Git, GitHub, VS Code)
  4. Methodologies & Soft Skills (Agile/Scrum, Proactivity, Teamwork, C1 English)
- Update profile metadata, terminal output, education/experience cards with Campuslands and Globant formative stage.
- Add testimonials / reputation highlights in the About or Experience sections.

**Non-Goals:**
- Removing any previously existing project or section.
- Breaking existing layout or dark mode compatibility.

## Decisions

1. **Union / Merge Approach for Projects List:**
   - *Rationale*: Maintain high standards by including all 9 projects in `projects` array with typed bilingual summaries (`summary.es` and `summary.en`), accurate tag badges, and working GitHub/demo URLs.

2. **Categorized Skills Grid Structure:**
   - *Rationale*: Reorganize `skills` into 4 distinct areas reflecting both core software engineering and emerging AI/automation capabilities from the profile document.

3. **Enriched Experience & Education Section:**
   - *Rationale*: Combine software developer roles with formal training milestones (Campuslands Técnico en Desarrollo de Software con IA, Globant etapa formativa, and Praxis C1 English certification).

## Risks / Trade-offs

- **[Risk] Large Project List Overcrowding Grid** -> *Mitigation*: Responsive grid layout `md:grid-cols-2 xl:grid-cols-3` handles 9 cards cleanly with consistent heights and hover animations.
