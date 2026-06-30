---
owner: 3MAntas
status: living
last_reviewed: 2026-05-29
update_trigger: on-toolchain-change
---

# Developer setup

Local toolchain and the one mechanical sensor for this tool. The skill
scaffolds this as a skeleton — fill in the stack-specific commands.

> Replace each placeholder with the command or path that applies. Delete
> sections that don't apply.

## Toolchain

Current phase (definition):

- Git
- Python 3.9+ (for `scripts/harness/check_plan_coverage.py`)

MVP stack (definido en ADR frontend-stack):

- **Astro** (framework de generacion estatica)
- **Tailwind CSS** via integracion oficial Astro
- **Node.js LTS** + npm (runtime de build)
- **TypeScript** (default de Astro)

## Common commands

Current commands while the repository is in planning mode:

| Purpose | Command |
|---|---|
| Build | `npm run build` |
| Run locally | `npm run dev` |
| Preview build | `npm run preview` |
| Format | `npx prettier --write .` (a definir en plan) |
| Lint | `npx astro check` |

## Plan-coverage check

The one mechanical sensor in this harness. It enforces the hard constraint
"no edits outside the active plan's `covers:`" (`AGENTS.md` § Hard constraints)
at commit time.

The reference implementation ships at
`scripts/harness/check_plan_coverage.py` (stdlib Python ≥ 3.9, no installs).
Wire it as the **last** step of your pre-commit hook:

    python3 scripts/harness/check_plan_coverage.py

What it does (the contract — re-implement in Go/Node if you prefer no Python
in this repo):

- Reads staged added/modified/**deleted** files (`git diff --cached`) — a
  staged delete is an edit outside `covers:` too.
- Always allowed: anything under `docs/` or `scripts/harness/`, the root
  anchors (`AGENTS.md`, `CLAUDE.md`, `ARCHITECTURE.md`, `SECURITY.md`,
  `README.md`), and `.harness-version` — these are docs and harness infra, not
  application source under a plan.
- Every other staged file must be prefix-matched by a `covers:` entry of a
  plan, read from the git **index**: the active plan in
  `docs/exec-plans/active/` or a completed plan at the `docs/exec-plans/` root.
  A trailing `/` covers a directory.
- On an uncovered file: prints remediation and exits non-zero.
- Bypass (skips only this check): `HARNESS_BYPASS="<reason>" git commit ...`

Installing the hook is a project decision; the script ships, the wiring is
yours. A minimal `.git/hooks/pre-commit`:

    #!/usr/bin/env bash
    set -e
    <your format/lint/test commands>
    python3 scripts/harness/check_plan_coverage.py

## Running locally

Requisito: Node.js LTS instalado.

    npm install        # instala dependencias
    npm run dev        # servidor local en http://localhost:4321

## Troubleshooting

- Symptom: pre-commit blocks with uncovered files.
  Root cause: changed a path outside the active plan's `covers:` list.
  Fix: update `covers:`, or move unrelated work to a separate approved plan.
