---
owner: 3MAntas
status: stable
last_reviewed: 2026-05-29
update_trigger: on-doc-added
---

# Docs Catalog

Entry point for AI context. Read this before any task requiring repo
knowledge. When you add a doc, add a one-line entry to the matching section.

---

## Repo-root anchors

Top-level docs that live at the repo root, not under `docs/`.

- [`/AGENTS.md`](../AGENTS.md) — agent entry point: operating principle, hard
  constraints, phase gates, session bootstrap. `CLAUDE.md` symlinks to it.
- [`/ARCHITECTURE.md`](../ARCHITECTURE.md) — code map: layout, module pattern,
  dependency direction, bootstrap, hotspots.

## Exec plans

Plan-driven work. First-class artifacts — reviewed before any code is written.

- [PLANS.md — ExecPlan specification](PLANS.md) — the contract: required
  sections, `covers:`/`verify:` frontmatter, living-document discipline.
- [Plan template](exec-plans/_template.md) — copy, fill, commit to `active/`.
- `exec-plans/active/` — the plan currently in flight (one at a time).
- [MANTAS-002 — MVP landing: sitio Astro deployado en GitHub Pages](exec-plans/active/2026-06-30_MANTAS-002_mvp-landing-astro.md) — **active** — construye la landing completa: hero, productos (2–3 mantas), contacto WhatsApp/mail, y envios.
- [MANTAS-001 — Definicion de MVP y stack tecnico](exec-plans/2026-06-30_MANTAS-001_definicion-mvp-y-stack.md) — completado 2026-06-30; documentacion base, harness y ADR de direccion del proyecto.

## Decisions

Architecture Decision Records. Explain *why* the system is the way it is.
Identified by `id:` slug; filenames are `<slug>.md`, references are
`ADR <slug>` / `decisions/<slug>.md`. See
[ADR adr-slug-canonical](decisions/adr-slug-canonical.md).

- [ADR harness-design](decisions/harness-design.md) — the lightweight,
  vendor-neutral harness: guides + sensors, phase gates, plans as artifacts.
- [ADR adr-slug-canonical](decisions/adr-slug-canonical.md) — slug-only ADR
  filenames, URLs, and prose references.
- [ADR mvp-promotional-site-direction](decisions/mvp-promotional-site-direction.md) — initial business and product direction for the first website MVP.
- [ADR frontend-stack](decisions/frontend-stack.md) — Astro + Tailwind CSS + GitHub Pages como stack definitivo del MVP.

## Processes

How-we-work: workflow, conventions, setup.

- [Harness — Operating Manual](processes/harness.md) — the four-phase workflow,
  phase gates, session exit, steering loop.
- [Developer setup](processes/dev-setup.md) — toolchain, common commands, the
  plan-coverage check — **fill in for this stack**.

## Tech debt

- [Tech debt tracker](tech-debt-tracker.md) — known hazards and deferred work.
