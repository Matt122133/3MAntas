---
status: completed
id: MANTAS-001
slug: definicion-mvp-y-stack
covers:
  - docs/
  - README.md
  - ARCHITECTURE.md
  - .github/
verify: test -f docs/decisions/mvp-promotional-site-direction.md && test -f docs/processes/dev-setup.md && test -f docs/README.md
adrs:
  - docs/decisions/mvp-promotional-site-direction.md
---

# MANTAS-001 — Definicion de MVP y stack tecnico

This ExecPlan is a living document, maintained per [`../../PLANS.md`](../../PLANS.md).
Keep `Plan of Work` and `Decision Log` current as work proceeds.

## Goal

Definir de forma trazable como se construira el proyecto web 3MAntas antes de
iniciar desarrollo de producto. Al finalizar, el repositorio debe tener una
ADR de direccion de MVP, arquitectura base actualizada y setup documentado para
pasar a la ejecucion tecnica sin ambiguedades.

## Out of scope

- Implementar codigo de frontend.
- Configurar CI/CD o despliegue real.
- Integrar pasarela de pago.

## Plan of Work

1. Crear la ADR de direccion del MVP con objetivos, alcance y no-alcance.
2. Ajustar `ARCHITECTURE.md` al estado real del repositorio y estructura
   objetivo de la web.
3. Actualizar `docs/processes/dev-setup.md` con comandos reales para la fase
   actual de planificacion y stack objetivo preliminar.
4. Actualizar `README.md` y `docs/README.md` para reflejar el proceso y artefactos
   activos.

## Verify

How to confirm the change works:

    test -f docs/decisions/mvp-promotional-site-direction.md && test -f docs/processes/dev-setup.md && test -f docs/README.md

Expected result: the command exits with code 0 and all referenced documents
exist with updated content.

## Decision Log

- Decision: Crear primero harness y documentacion antes de scaffold tecnico.
  Rationale: evita retrabajo y deja trazabilidad de decisiones desde el inicio.
  Date: 2026-06-30
- Decision: Definir MVP promocional sin ecommerce en la primera iteracion.
  Rationale: reducir complejidad y acelerar salida a produccion.
  Date: 2026-06-30
