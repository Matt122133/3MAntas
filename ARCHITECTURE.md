---
owner: 3MAntas
status: living
last_reviewed: 2026-05-29
update_trigger: on-module-change
---

# Architecture

Top-level map of this tool. The single source of truth for how the code is
organised; read it before writing code you might later have to unwind.

For agent guidance and the workflow, see [`AGENTS.md`](AGENTS.md) and
[`docs/processes/harness.md`](docs/processes/harness.md).

> Fill each section below. Delete the prompts once filled. Keep this file
> current — outdated architecture docs mislead agents more than missing ones.

## Overview

3MAntas is a promotional web project for a handmade blanket business. The
repository is currently in definition mode: the harness and process docs are
already active, while the product implementation (frontend, content model, and
deployment setup) will be built in the next execution plan. The final surface
will be a public marketing website focused on catalog display, trust signals,
and contact/conversion channels.

## Top-level layout

Current structure:

```
.
|- AGENTS.md
|- CLAUDE.md
|- ARCHITECTURE.md
|- README.md
|- .harness-version
|- .github/
|- docs/
`- scripts/harness/
```

Planned product structure (MVP — Astro):

```
.
|- src/
|   |- assets/products/    # Fotos de mantas (optimizadas por Astro en build)
|   |- components/         # Hero, Products, Contact, Shipping, Footer
|   |- layouts/            # Layout base (head, SEO, fuentes)
|   `- pages/              # index.astro (landing unica)
|- public/                 # Favicon, og:image, estaticos sin procesar
|- astro.config.mjs
|- tailwind.config.mjs
|- tsconfig.json
|- package.json
|- .github/workflows/      # deploy.yml (build → GitHub Pages)
|- docs/                   # Plans, ADRs, process, debt tracking
`- scripts/harness/        # Plan-coverage sensor
```

## Module pattern

La pagina unica (`src/pages/index.astro`) importa componentes Astro en orden.
Cada componente es una seccion del sitio y vive en `src/components/<Nombre>.astro`.
No hay logica de estado: todo es HTML estatico con estilos Tailwind.

Los datos de productos se definen como un array de objetos en
`src/components/Products.astro`. Para agregar o cambiar un producto: editar ese
array y colocar la foto en `src/assets/products/`.

## Dependency direction

Astro pages → components → (assets, public). Los componentes son independientes
entre si; no se importan unos a otros. El layout es el unico que envuelve todo.
No hay estado compartido en el MVP.

## Entry point and bootstrap

Astro genera HTML estatico en build (`npm run build`). No hay proceso de
servidor ni bootstrap en runtime. La secuencia de build es:

1. Astro lee `src/pages/index.astro`.
2. Resuelve e incrusta todos los componentes.
3. Procesa imagenes en `src/assets/` (convierte a WebP, genera srcset).
4. Compila y purga Tailwind CSS.
5. Emite `dist/` con HTML + CSS + imagenes optimizadas.
6. GitHub Actions sube `dist/` a GitHub Pages.

## Current hotspots

Una vez implementado, los archivos clave seran:

- `src/pages/index.astro` — ensamblado completo de la pagina.
- `src/components/Products.astro` — los datos de los productos viven aca.
- `src/components/Contact.astro` — numero de WhatsApp y mail.
- `astro.config.mjs` — URL del sitio (critico para GitHub Pages).
- `.github/workflows/deploy.yml` — pipeline de deploy.

## Adding a new module

1. Incluir el path en `covers:` del plan activo antes de crear el archivo.
2. Crear `src/components/<Nombre>.astro`.
3. Importarlo en `src/pages/index.astro` en la posicion correcta.
4. Si agrega una nueva seccion de contenido, actualizar `docs/README.md`.
5. Escribir un ADR si la nueva seccion introduce una dependencia externa nueva
   (ej. un servicio de formularios, un mapa embebido).
