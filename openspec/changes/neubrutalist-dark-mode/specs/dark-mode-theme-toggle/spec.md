## ADDED Requirements

### Requirement: Dark Mode Theme Toggle Control
The application SHALL provide a theme toggle button in the header that allows users to switch between Light Mode and Dark Mode.

#### Scenario: User toggles to Dark Mode
- **WHEN** user clicks the theme toggle button in Light Mode
- **THEN** the application transitions the main canvas and component styling to Dark Mode and updates the icon/label state

#### Scenario: User toggles to Light Mode
- **WHEN** user clicks the theme toggle button in Dark Mode
- **THEN** the application transitions the main canvas and component styling back to Light Mode

### Requirement: Theme Persistence
The application SHALL persist the selected theme preference across sessions using `localStorage`.

#### Scenario: Persistence across reloads
- **WHEN** user sets their theme preference to Dark Mode and refreshes the page
- **THEN** the application loads directly into Dark Mode without flashing light theme

#### Scenario: System preference fallback
- **WHEN** no stored theme preference exists in `localStorage`
- **THEN** the application detects the user's OS preference (`prefers-color-scheme: dark`) and sets initial theme accordingly

### Requirement: Neubrutalist Dark Palette Adaptation
The application SHALL adapt all UI elements (backgrounds, cards, text, borders, buttons, and dot-grids) to the neubrutalist dark color scheme while maintaining visual hierarchy and contrast.

#### Scenario: Dark mode surface rendering
- **WHEN** Dark Mode is active
- **THEN** main background displays deep dark charcoal/ink, cards render dark slate/ink surfaces with defined borders, and accent colors (Red, Yellow, Teal) remain punchy and readable
