## ADDED Requirements

### Requirement: Persistent Sticky Desktop Sidebar
The desktop navigation sidebar SHALL remain fixed / sticky within the viewport as the user scrolls through the main portfolio content.

#### Scenario: Scrolling through portfolio sections
- **WHEN** the user scrolls down the page on desktop viewports (>= 768px)
- **THEN** the sidebar stays fixed in view below the topbar, allowing immediate access to navigation links without needing to scroll back to the top.

### Requirement: Active Section Tracking (Scrollspy)
The sidebar SHALL visually highlight the current active section as the user scrolls past each section threshold.

#### Scenario: Highlighting active nav item
- **WHEN** a section occupies the primary viewport area
- **THEN** the corresponding navigation link in the sticky sidebar receives the active highlight style.
