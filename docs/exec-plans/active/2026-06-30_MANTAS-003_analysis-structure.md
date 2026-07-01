---
status: active
id: MANTAS-003
slug: analysis-structure
covers:
  - docs/analysis/
  - docs/README.md
  - docs/processes/harness.md
  - AGENTS.md
verify: test -d docs/analysis && test -f docs/analysis/README.md && test -f docs/analysis/_template.md && grep -q "docs/analysis" docs/README.md docs/processes/harness.md AGENTS.md
---

# MANTAS-003 — Estructura de analysis para el harness

## Goal

Agregar una carpeta de analysis al repositorio para registrar los pasos, hallazgos y evidencia de trabajo de forma ordenada, y dejarla documentada en el harness para que se use en tareas futuras.

## Plan of Work

1. Crear la carpeta [docs/analysis](../analysis) con una guía de uso y una plantilla reutilizable.
2. Actualizar [docs/processes/harness.md](../processes/harness.md) para incorporar la carpeta de analysis en el flujo de trabajo.
3. Indexar la nueva estructura en [docs/README.md](../README.md).
4. Añadir una referencia breve en [AGENTS.md](../../AGENTS.md) para reforzar el uso del mismo patrón.

## Decision Log

- Decision: Crear una carpeta de analysis dedicada para notas de ejecución y pasos.
  Rationale: permite que las decisiones y el progreso queden registrados dentro del repo, sin depender de la conversación viva.
  Date: 2026-06-30
