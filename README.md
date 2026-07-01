# 3MAntas

Sitio web promocional para un emprendimiento de mantas.

## Estado actual

Este repositorio parte en fase de definicion con un harness ligero para
trabajar con IA de forma trazable:

- Decisiones en `docs/decisions/` (ADR).
- Planes ejecutables en `docs/exec-plans/active/`.
- Proceso operativo en `docs/processes/harness.md`.

## Objetivo

Construir una pagina moderna, clara y movil-first que permita:

- Mostrar productos (mantas) con fotos y descripciones.
- Generar confianza (historia, calidad, testimonios).
- Capturar contactos y conversiones (WhatsApp/formulario).

## Desarrollo

- `npm install`
- `npm run dev`
- `npm run build`

## Deploy

El sitio esta pensado para publicarse en GitHub Pages mediante el workflow de
GitHub Actions en `.github/workflows/deploy.yml`.