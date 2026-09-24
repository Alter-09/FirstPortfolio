## ADDED Requirements

### Requirement: Merged Projects Showcase
The application SHALL render all 9 projects (5 previous + 4 newly incorporated) with bilingual descriptions, accurate tech tags, and links.

#### Scenario: Displaying all 9 projects
- **WHEN** user navigates to the Projects section
- **THEN** the application renders cards for NeoMetro, RapidExpres, SISTEMA_AEROPUERTO, AMB-exam, MetaNav, MundoFutbol Bot, SmartCity-Fix, MusicStream, and EduSprint

#### Scenario: Language switching across all projects
- **WHEN** user switches language between Spanish and English
- **THEN** all 9 project summaries update dynamically to the corresponding language

### Requirement: Expanded Technical Stack
The application SHALL display the full technical stack encompassing Languages, Automation & AI, Tools & Infrastructure, and Methodologies.

#### Scenario: Viewing technical skills
- **WHEN** user views the Skills section
- **THEN** the application presents categorized tags including PostgreSQL, N8N, Docker, Vector Spaces, Embeddings, DBeaver, and Scrum

### Requirement: Updated Professional Profile & Experience
The application SHALL incorporate professional details (Floridablanca, Santander, Campuslands, Globant formative stage, Praxis C1 English) into the bio, terminal, experience, and highlights.

#### Scenario: Rendering professional experience
- **WHEN** user views the Experience section
- **THEN** cards for Software Developer at MySQL, Campuslands Software & AI Development, and Globant Formative Stage are visible with bilingual roles and descriptions
