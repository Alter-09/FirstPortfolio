## ADDED Requirements

### Requirement: Display Top 5 Flagship Projects
The portfolio SHALL display the 5 selected flagship projects (`NeoMetro`, `RapidExpres`, `SISTEMA_AEROPUERTO`, `AMB-exam`, and `MetaNav`) within the Projects section.

#### Scenario: Rendering project cards with details
- **WHEN** a visitor navigates to the `#projects` section
- **THEN** exactly 5 distinct project cards are displayed, each containing project title, concise description, relevant tech tags, and links to GitHub repository or live demo.

### Requirement: Interactive Actions for Flagship Projects
The system SHALL provide interactive action buttons for each project card that allow direct navigation to live deployments or GitHub repositories.

#### Scenario: Clicking live demo or repository link
- **WHEN** a visitor clicks on "Live Demo" or "GitHub" for any project
- **THEN** the target URL opens in a new browser tab with secure `rel="noreferrer"` attributes.

### Requirement: Responsive Grid for 5 Projects
The system SHALL render the project cards within a responsive CSS grid layout that adapts seamlessly across mobile, tablet, and wide desktop viewports.

#### Scenario: Viewing on various screens
- **WHEN** viewed on mobile, tablet, or multi-column desktop screen sizes
- **THEN** all 5 project cards wrap cleanly with consistent spacing, neubrutalist card borders, and hover micro-animations.
