# Design

## Context

El portafolio en `app/page.tsx` está estructurado con una arquitectura basada en constantes tipadas: `profile` para datos personales y de contacto, `projects` para la galería de trabajos, y un diccionario reactivo `t` para soporte bilingüe (ES / EN).

Actualmente, varias tarjetas de proyectos dirigen a la raíz de la cuenta de GitHub en lugar de a sus repositorios individuales, y algunos proyectos corresponden a prototipos desactualizados. Además, el panel de Acciones Rápidas y la tarjeta de contacto final sólo tienen botones para CV, Email y teléfono tradicional, omitiendo enlaces directos a LinkedIn y WhatsApp.

## Goals / Non-Goals

**Goals:**
- Actualizar el objeto `profile` para incluir `linkedin` y `whatsapp` de forma centralizada.
- Reestructurar el arreglo `projects` priorizando los repositorios públicos activos obtenidos directamente de GitHub (`@Alter-09`), descartando prototipos antiguos (`AMB-exam`, `MusicStream`, `EduSprint`).
- Garantizar que cada proyecto enlace a su repositorio específico correspondiente (y demo en vivo cuando aplique).
- Incorporar botones de acceso directo a LinkedIn, WhatsApp y Gmail tanto en el panel de **Acciones Rápidas** del Hero como en el bloque de **Contacto** inferior.
- Mantener estrictamente el diseño neubrutalista existente (bordes negros, sombras duras `shadow-neo`, paleta amarilla/roja/verde azulado/crema).

**Non-Goals:**
- Crear formularios interactivos de contacto con backend o servicios externos (EmailJS, Formspree, etc.).
- Modificar el sistema de navegación por secciones o la paleta visual existente.

## Decisions

### 1. Selección y orden de repositorios públicos destacados
Se seleccionan 9 proyectos reales con código público verificable y relevancia técnica:
1. **GoCampus**: Sistema de gestión operativa web con Java, reserva de espacios, préstamo de periféricos y triaje con IA (`https://github.com/Alter-09/GoCampus`).
2. **RapidExpress**: Sistema backend CLI en Java para automatización de flota, rutas y paquetería logística (`https://github.com/Alter-09/RapidExpress`).
3. **MetaNav**: Organizador de tareas, kanban y hábitos con diseño neubrutalista (Demo: `https://meta-nav.vercel.app` / Repo: `https://github.com/Alter-09/MetaNav`).
4. **NeoMetro (HackatonNeoMetro)**: Portal en tiempo real para Metrolínea con IA, Leaflet y n8n (Demo: `https://hackaton-eta-three.vercel.app` / Repo: `https://github.com/Alter-09/HackatonNeoMetro`).
5. **SISTEMA_AEROPUERTO**: Sistema empresarial en Java POO para administración de vuelos y pasajeros (`https://github.com/Alter-09/SISTEMA_AEROPUERTO`).
6. **SmartCity-Fix**: Sistema inteligente de triaje y priorización de incidentes urbanos con IA (`https://github.com/Alter-09/SmartCity-Fix`).
7. **PYTHON---RAMPUP**: Trayectoria intensiva de 8 semanas de fundamentos a arquitectura en Python (`https://github.com/Alter-09/PYTHON---RAMPUP`).
8. **Campusbuild**: Aplicación web de gestión de proyectos y cronogramas con calendario integrado (`https://github.com/Alter-09/Campusbuild`).
9. **MundoFutbol Bot**: Automatización en n8n + PostgreSQL + Telegram API para suscripciones deportivas.

*Descartados*: `AMB-exam`, `MusicStream` y `EduSprint` (antiguos o sin repositorio activo específico).

### 2. Canales de Contacto Directo
Se actualiza `profile`:
- `email`: `diegoleonp09@gmail.com` -> `mailto:diegoleonp09@gmail.com`
- `whatsapp`: `https://wa.me/573134451805`
- `linkedin`: `https://www.linkedin.com/in/diego-leon-prada` (o perfil personal de Diego)
- `phone`: `+57 313 4451805`

### 3. Iconografía y botones
- En `app/page.tsx`, importar `Linkedin` y `MessageCircle` de `lucide-react`.
- Añadir en Acciones Rápidas botones compactos con estilo neubrutalista:
  - Descargar CV
  - LinkedIn
  - WhatsApp
  - Gmail
- En la tarjeta inferior de contacto, incluir los 5 accesos rápidos: GitHub, Repositorio Perfil, LinkedIn, WhatsApp y Gmail.

## Risks / Trade-offs

- [Enlace a LinkedIn no personalizado aún] → Se configura la URL estándar y se deja en el objeto `profile` para actualización en un solo punto si el slug difiere.
- [Longitud de botones en móviles] → Se utilizan clases responsivas `flex-wrap` con botones compactos para evitar overflow horizontal en pantallas pequeñas.

