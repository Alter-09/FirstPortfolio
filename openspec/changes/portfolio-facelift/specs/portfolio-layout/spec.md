## MODIFIED Requirements

### Requirement: Main Application Layout
The system SHALL organize the main interface using an "app-shell" pattern, consisting of a persistent navigation area (sidebar on desktop, topbar/menu on mobile) and a dynamic main content area.

#### Scenario: User navigates on desktop
- **WHEN** the user views the application on a desktop screen
- **THEN** a persistent sidebar is visible on the left for navigation, and the main content is displayed on the right.

#### Scenario: User navigates on mobile
- **WHEN** the user views the application on a mobile screen
- **THEN** the navigation adapts to a mobile-friendly format (e.g., bottom bar or top hamburger menu) to maximize content space.
