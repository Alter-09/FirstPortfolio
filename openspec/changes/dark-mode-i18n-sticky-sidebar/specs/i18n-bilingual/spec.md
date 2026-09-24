## ADDED Requirements

### Requirement: Full Website Translation (ES / EN)
The system SHALL provide a bilingual translation dictionary covering 100% of visible portfolio content in both Spanish (ES) and English (EN).

#### Scenario: Switching to English
- **WHEN** the user selects "EN" from the language toggle
- **THEN** all headings, navigation items, biography, quick links, metrics, project summaries, skills categories, career entries, contact sections, and footer translate to English immediately.

#### Scenario: Switching to Spanish
- **WHEN** the user selects "ES" from the language toggle
- **THEN** all content across the entire page translates to Spanish immediately.

### Requirement: Language Persistence
The system SHALL store the selected language in `localStorage` and initialize the site with the stored preference or default browser language.

#### Scenario: Preserving language choice across sessions
- **WHEN** a visitor changes the language and reloads or revisits the page
- **THEN** the previously selected language is restored automatically without resetting to default.
