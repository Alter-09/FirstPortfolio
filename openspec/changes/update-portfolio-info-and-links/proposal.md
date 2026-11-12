# Proposal

## Why

El portafolio actual contiene varios proyectos con enlaces genéricos a la raíz de GitHub (`https://github.com/Alter-09`), proyectos prototipo antiguos o desactualizados, y carece de enlaces directos integrados a los principales canales de contacto profesional (LinkedIn y WhatsApp directo, además de Gmail). 

Actualizar esta información con los repositorios públicos reales más recientes (como `GoCampus`, `RapidExpress`, `PYTHON---RAMPUP`, `Campusbuild`, etc.) y habilitar enlaces directos a LinkedIn, Gmail y WhatsApp fortalece la credibilidad técnica y facilita el contacto inmediato por parte de reclutadores y colaboradores sin alterar el diseño visual existente.

## What Changes

- **Actualización y priorización de proyectos públicos**:
  - Reemplazar proyectos antiguos o redundantes por los repositorios públicos reales más recientes de GitHub (`@Alter-09`).
  - Añadir descripciones precisas, tags tecnológicos reales y enlaces directos a sus respectivos repositorios (`GoCampus`, `RapidExpress`, `MetaNav`, `HackatonNeoMetro`, `SISTEMA_AEROPUERTO`, `SmartCity-Fix`, `PYTHON---RAMPUP`, `Campusbuild`, etc.).
  - Actualizar contadores y textos en español e inglés acordes a la lista final de proyectos.
- **Líneas directas de contacto (LinkedIn, Gmail, WhatsApp)**:
  - Añadir enlace directo a LinkedIn en los canales de contacto y acciones rápidas.
  - Asegurar enlace directo de correo (`mailto:diegoleonp09@gmail.com`).
  - Añadir enlace directo a WhatsApp (`https://wa.me/573134451805`) con icono o botón interactivo neubrutalista.
  - Actualizar tanto el bloque de "Acciones Rápidas" en el Hero como la tarjeta "Referencias & Contacto" al final de la página.
- **Preservación estética**:
  - Usar exclusivamente los componentes y estilos visuales neubrutalistas ya existentes (paleta cromática, bordes marcados, sombras `shadow-neo` y microinteracciones).

## Capabilities

### New Capabilities
- `portfolio-content`: Gestión y visualización de proyectos públicos verificados, descripciones bilingües y canales de contacto directo (LinkedIn, Gmail, WhatsApp).

### Modified Capabilities
*(Ninguna; no existían especificaciones previas en `openspec/specs/`)*

## Impact

- `app/page.tsx`: Actualización del objeto `profile`, el arreglo `projects`, los diccionarios de traducción `t.es` y `t.en`, el panel de Quick Actions y la sección de contacto.
- `public/resume.txt`: Actualización opcional de referencias y enlaces de contacto directo.
- Dependencias: Sin nuevas dependencias de terceros; se reutilizan iconos de `lucide-react` (como `Linkedin` / `MessageCircle` o `Phone`).

