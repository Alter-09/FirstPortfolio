# Spec Delta

## Purpose

Permite gestionar y visualizar proyectos públicos verificados con enlaces a repositorios y demostraciones en vivo, así como canales directos de contacto profesional (LinkedIn, Gmail y WhatsApp).

## ADDED Requirements

### Requirement: Active public repositories showcase
El sistema SHALL mostrar los proyectos públicos más recientes y destacados del desarrollador, incluyendo títulos, descripciones bilingües concisas, etiquetas de tecnologías utilizadas y enlaces directos a sus repositorios en GitHub.

#### Scenario: User clicks on a project repository link
- **WHEN** el usuario hace clic en el botón o enlace "GitHub" de una tarjeta de proyecto (como GoCampus, RapidExpress o MetaNav)
- **THEN** el sistema abre en una pestaña nueva el repositorio público específico de GitHub correspondiente a dicho proyecto

#### Scenario: User accesses live demo when available
- **WHEN** un proyecto cuenta con despliegue público (como MetaNav o HackatonNeoMetro) y el usuario hace clic en "Demo en vivo"
- **THEN** el sistema abre la URL de producción correspondiente en una pestaña nueva

### Requirement: Direct professional contact channels
El sistema SHALL proveer enlaces directos e interactivos para contacto vía LinkedIn, correo electrónico (Gmail) y mensajería instantánea (WhatsApp), integrados en los bloques de interfaz existentes.

#### Scenario: User clicks LinkedIn contact link
- **WHEN** el usuario hace clic en la acción o enlace de LinkedIn
- **THEN** el navegador abre el perfil profesional de LinkedIn en una nueva pestaña

#### Scenario: User clicks WhatsApp contact link
- **WHEN** el usuario hace clic en la opción de WhatsApp
- **THEN** el navegador abre la interfaz de WhatsApp (`https://wa.me/573134451805`) para iniciar una conversación directa

#### Scenario: User clicks Gmail contact link
- **WHEN** el usuario hace clic en el enlace de correo
- **THEN** el navegador ejecuta el cliente de correo predeterminado configurado hacia la dirección `diegoleonp09@gmail.com`

