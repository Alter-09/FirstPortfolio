## Why

The portfolio's featured projects section currently displays outdated/generic project references that do not reflect Diego León's most relevant and comprehensive projects on GitHub. Updating this section to showcase the top 5 flagship projects (NeoMetro, RapidExpres, SISTEMA_AEROPUERTO, AMB-exam, and MetaNav) highlights full-stack capabilities, AI-assisted workflows, clean Java architecture, and distinct UI design.

## What Changes

- Update the project showcase data in `app/page.tsx` with detailed information for 5 projects:
  - **NeoMetro**: Smart real-time incident reporting system with AI classification, interactive maps (Leaflet), and n8n orchestration.
  - **RapidExpres**: Logistics and express parcel management platform with route and order tracking.
  - **SISTEMA_AEROPUERTO**: Layered Java OOP flight, passenger, and airport management system with JSON persistence.
  - **AMB-exam**: Technical assessment and evaluation platform for skill verification.
  - **MetaNav**: Neubrutalist task organizer and personal workflow dashboard.
- Ensure all project cards include accurate descriptions, key technology tags, live demo links (where available), and direct GitHub repository links.
- Update project grid responsive styles to cleanly support 5 project cards in both mobile and multi-column desktop views.

## Capabilities

### New Capabilities
- `featured-projects`: Defines the requirements and data structure for displaying the updated 5 flagship projects with tags, GitHub links, and live demos.

### Modified Capabilities

## Impact

- `app/page.tsx`: Updated `projects` data array and project cards layout.
- No breaking changes or external dependencies added.
