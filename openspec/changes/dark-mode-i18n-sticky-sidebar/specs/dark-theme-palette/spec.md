## ADDED Requirements

### Requirement: Neubrutalist Dark Mode Palette
The system SHALL provide a cohesive dark mode palette featuring deep charcoal/ink foundations, muted paper surface cards, high-contrast text layers, and vibrant accent colors (red, yellow, teal).

#### Scenario: Visual presentation in dark mode
- **WHEN** the portfolio is loaded
- **THEN** backgrounds render with deep ink/charcoal tones, panels render with high-contrast borders and shadows, and accent highlights stand out clearly.

### Requirement: Theme Toggle Support
The system SHALL provide a toggle mechanism to switch between high-contrast Dark Mode and Light/Paper Mode, saving the user's preference in `localStorage`.

#### Scenario: Switching theme
- **WHEN** the user clicks the theme toggle button in the header
- **THEN** the entire portfolio theme switches instantly and the selection persists on page reloads.
