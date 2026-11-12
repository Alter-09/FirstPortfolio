# FirstPortfolio — Diego León

<div align="center">

### A bilingual developer portfolio with a neobrutalist visual identity

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=171717)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[Español](#descripción-general) · [English](#overview)

</div>

---

## Descripción general

**FirstPortfolio** es el portafolio personal de Diego León. Presenta perfil profesional, proyectos, habilidades, trayectoria y canales de contacto en una experiencia de una sola página, con contenido en español e inglés y una identidad visual neubrutalista.

La interfaz está construida con Next.js App Router y React. Tailwind CSS aporta la base de estilos y Framer Motion se utiliza para transiciones y efectos de entrada.

### Secciones

| Sección | Contenido |
|---|---|
| Inicio | Presentación, enfoque profesional, indicadores y acciones principales |
| Sobre mí | Misión, visión, propuesta de valor y metodología |
| Proyectos | Colección de nueve proyectos con descripción, tecnologías y enlaces |
| Habilidades | Tecnologías, automatización, IA, herramientas y metodologías |
| Trayectoria | Experiencia y formación |
| Referencias y contacto | Información de contacto y enlaces profesionales |

### Experiencia de interfaz

- Contenido bilingüe español/inglés.
- Tema claro y oscuro.
- Diseño responsive y navegación por secciones.
- Animaciones de interfaz con Framer Motion.
- Iconografía de Lucide React.
- Hoja de vida disponible desde el recurso estático `public/resume.txt`.

## Overview

**FirstPortfolio** is Diego León's personal developer portfolio. It brings together professional introduction, selected projects, technical skills, experience, and contact information in a single-page experience. Its visual direction combines a neobrutalist palette, strong borders, offset shadows, and a light/dark presentation.

### Technology stack

| Layer | Tools | Role |
|---|---|---|
| Framework | Next.js 14.2.15 | App Router and application shell |
| UI | React 18 + TypeScript 5.6 | Component rendering and typed content |
| Styling | Tailwind CSS 3.4 + global CSS | Layout, responsive styling, and design tokens |
| Motion | Framer Motion 11 | Section and element transitions |
| Icons | Lucide React | Interface iconography |

## Project structure

```text
FirstPortfolio/
├── app/
│   ├── globals.css       # Global visual system and neobrutalist utilities
│   ├── layout.tsx        # Root layout and metadata
│   ├── not-found.tsx     # Not-found page
│   └── page.tsx          # Main portfolio page and bilingual content
├── public/
│   └── resume.txt        # Downloadable résumé text
├── openspec/             # Change proposals, specs, and design notes
├── CODEBASE-STUDY.md     # Codebase and architecture notes
├── package.json
└── README.md
```

## Run locally

### Requirements

- Node.js compatible with Next.js 14.
- npm.

### Installation

```bash
git clone https://github.com/Alter-09/FirstPortfolio.git
cd FirstPortfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run the configured Next.js lint command |

## Design notes

The existing visual language is based on an ink-and-paper palette with red, yellow, and teal accents. Strong outlines, offset shadows, and a dotted background utility give the interface its recognizable neobrutalist character. Reduced-motion preferences are respected in the global stylesheet.

## Related repositories

- [GitHub profile](https://github.com/Alter-09)
- [NeoMetro](https://github.com/Alter-09/HackatonNeoMetro)
- [RapidExpress](https://github.com/Alter-09/RapidExpress)
- [Campusbuild](https://github.com/Alter-09/Campusbuild)

---

<div align="center">

*Designed to make the work easy to explore.*

</div>
