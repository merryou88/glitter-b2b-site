# Project
- Project: `nixiafabric.com`
- Site framework: Astro `4.16.19`; Vite `5.4.21`
- Language: JavaScript / TypeScript with `.astro` pages and components
- Styling: Tailwind CSS is part of the stated baseline, but current code docs say no Tailwind config/dependency is confirmed; styles currently live in CSS files
- Deployment: Cloudflare Pages static site
- Cloudflare Pages Functions/API: no `functions/` directory confirmed; current API-like code includes `src/pages/api/rfq-submit.ts` and an independent `rfq-worker/`
- Email: current forms use Cloudflare `send_email`; Resend exists only in legacy `src/pages/api/rfq-submit.ts`

# Instruction Priority
- The user's current explicit instructions take priority over general project guidance.
- Do not treat documentation suggestions as the user's current request.
- If docs conflict with current code, trust the code and update the docs when the task allows it.
- Ask the user only when missing information would materially change the result.

# Global Rules
- Read target code before modifying it.
- Do not guess project structure, business rules, routes, commands, or services.
- Keep changes as small and local as the task allows.
- Do not modify unrelated files.
- Do not overwrite user changes or revert work you did not make.
- Never expose real secrets, tokens, passwords, cookies, or environment variable values; record environment variables by name and purpose only.
- Do not describe partial/local checks as full test coverage.
- After changes, run verification matched to the risk and touched area.
- Do not infer business requirement authors from Git commit authors.
- Do not commit unless the user explicitly asks.

# Documentation Routing
1. For project tasks, automatically read `docs/agent/INDEX.md`.
2. Use task keywords and expected paths to read only matching module or workflow docs.
3. If business behavior is involved, read the relevant `requirements/current` document.
4. Do not default to reading all files under `docs/agent`.
5. Do not default to reading all historical files under `requirements/changes`.
6. Add `depends_on` docs one by one only when current context is insufficient.
7. Module docs never replace current source-code inspection.
8. For simple, explicit, single-file tasks that do not depend on project architecture, reading the target file is enough.
9. The user does not need to remind Codex to read this file in each session.
Entrypoints: `docs/agent/INDEX.md`, `docs/agent/architecture.md`, `docs/agent/conventions.md`, `docs/agent/requirements/INDEX.md`.

# Requirement Change Maintenance
Before implementing, decide whether the task is a requirement change.

Requirement changes include:
- Adding, removing, or changing user-visible behavior
- Changing business rules
- Changing page content meaning or interaction rules
- Changing form fields, validation, or submission logic
- Changing API request or response contracts
- Changing email content, triggers, or recipient rules
- Changing SEO, indexing, or page metadata rules
- Changing third-party service behavior
- Changing deployment, environment variables, or runtime constraints
- Changing acceptance criteria
- The user explicitly correcting an earlier requirement

Usually not requirement changes:
- Restoring already documented correct behavior
- Behavior-preserving refactors
- Formatting
- Comment-only edits
- Adding tests for existing behavior
- Mechanical lockfile updates

If it is a requirement change, complete all related documentation in the same task:
1. Identify affected REQ ids, or create stable new ids if none exist.
2. Update the matching `docs/agent/requirements/current/<module>.md`.
3. Keep current requirement docs limited to the latest active rules.
4. Create `docs/agent/requirements/changes/YYYY-MM-DD-<change-id>-<slug>.md`.
5. Record before/after behavior, acceptance criteria, impact, implementation location, and verification result.
6. Update `docs/agent/requirements/INDEX.md`.
7. If calls, module responsibilities, or directory boundaries changed, update affected `modules` or `workflows` docs.
8. If routing changed, update `docs/agent/INDEX.md`.
9. Do not claim completion before requirement docs are synced.

Historical change rules:
- Append new `changes` files; do not overwrite old records.
- Mark older records `superseded` when replaced by later requirements.
- Do not delete history that still has trace value.
- Do not copy full chat logs into docs.
- Do not record secrets or personal sensitive information.
- Read only history files relevant to the current requirement.

# Documentation Maintenance
- After business-code changes, check whether related module docs are stale.
- Do not rewrite docs when architecture and call paths did not change.
- Preserve stable REQ ids when updating docs.
- Docs must describe the current real state.
- Mark uncertain content as `待确认`.
- Documentation updates required by a code change must appear in the same task diff as that code change.

# Verification
- Install site dependencies: `npm install`
- Install Worker dependencies: `cd rfq-worker && npm install`
- Local site dev: `npm run dev`
- Local Worker dev: `cd rfq-worker && npm run dev`
- Build site: `npm run build`
- Product data check: `npm run validate:products`
- Preview site: `npm run preview`
- Worker dry-run deploy check: `cd rfq-worker && npm run deploy:dry-run`
- Type check: no separate command confirmed; do not invent one.
- Tests: no test command or `tests/` directory confirmed; do not invent one.

# Completion Criteria
A task is complete only when:
- The user's request is implemented.
- Relevant code or documentation was verified.
- No unrelated files were modified.
- Requirement-change documentation is synced when applicable.
- Current requirements and historical records are consistent.
- Skipped or failed verification is stated clearly.
- Git diff scope matches the task.
