---
id: frontend-stack
owner: 3MAntas
status: accepted
last_reviewed: 2026-06-30
update_trigger: on-supersession
---

# ADR frontend-stack — Stack frontend y hosting del sitio promocional

## Status

Accepted.

## Context

El sitio es una landing promocional simple para 2–3 productos (mantas de lana
de distintos colores). No hay ecommerce ni autenticacion. La conversion se
centra en un boton de WhatsApp y un mail de contacto. El contenido es
practicamente estatico: hero, productos, contacto, envios.

Requisitos duros:
- Hosting gratuito (GitHub Pages).
- Sin servidor propio ni base de datos.
- Facil de mantener por una persona no-tecnica a futuro (en fotos y texto).
- Buena performance movil (los clientes probablemente lleguen desde el celular).

Las alternativas evaluadas fueron:

| Opcion | Ventajas | Desventajas |
|---|---|---|
| HTML + CSS puro + Tailwind CDN | Cero dependencias, cero build | Dificil de mantener a escala; sin componentes; Tailwind CDN penaliza performance |
| Vite + React | Ecosistema familiar, componentes | Mas overhead de JS del necesario para una landing estatica |
| **Astro** | Cero JS por defecto, componentes, build estatico, deploy GH Pages en una linea | Curva inicial para el stack |
| Next.js (static export) | Conocido, full-featured | Sobre-ingenierado para una landing; build mas complejo |

## Decision

**Astro** como framework de generacion de sitio estatico, con:
- **Tailwind CSS** via integracion oficial de Astro (no CDN — tree-shaking en
  build, CSS optimo en produccion).
- **GitHub Pages** para hosting, con deploy automatico via GitHub Actions
  workflow oficial de Astro.
- **TypeScript** para `.astro` y componentes (opcional pero recomendado por
  Astro por defecto).

Estructura de deploy: `main` branch → GitHub Actions → rama `gh-pages` → sitio
publico. El repositorio puede tener un custom domain en el futuro si se quiere.

Estructura de carpetas del proyecto:

```
src/
  layouts/     — Layout base (head, SEO, fuentes)
  pages/       — index.astro (una sola pagina)
  components/  — Hero, Products, Contact, Shipping
  assets/      — Imagenes optimizadas en build por Astro
public/         — Favicon, og:image, cualquier estatico sin procesar
```

## Consequences

Positivas:
- Build produce HTML puro, cero JS al cliente salvo lo que se agregue
  explicitamente — maxima performance movil.
- GitHub Pages gratis, con HTTPS automatico.
- Astro Image (`<Image />`) optimiza fotos de productos en build (WebP, lazy
  loading) sin configuracion extra.
- Componentes Astro son reutilizables y legibles para mantenimiento futuro.
- El workflow de deploy esta documentado y es reproducible.

Negativas:
- Requiere Node.js en la maquina de desarrollo para hacer el build.
- El deploy automatico requiere que el repositorio este en GitHub (ya lo esta).

Abierto:
- Eleccion de fuentes tipograficas y paleta de colores — se decide al momento
  de implementar el componente Hero con la descripcion provista por el usuario.
- Numero exacto de productos y fotos — se completan en el momento de ejecucion.
