# Contributing

## Working Agreement

Fresh Design System is shared infrastructure. Every change should make both humans and
agents more reliable.

The default runtime for UI work is the Expo playground. Treat Expo development builds
as the serious mobile baseline and desktop web as the fast secondary validation surface.

## Design And Implementation Flow

1. Use Pencil boards to align on major foundations, extracted product patterns, and
   shared component anatomy.
2. Track those boards in
   [`design/board-index.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/board-index.md).
3. Move approved patterns into code with
   [`design/handoff-checklist.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/handoff-checklist.md)
   as the gate.
4. Keep code authoritative for tokens, components, manifests, docs, and stories.

## Before You Add A New Pattern

1. Check whether the pattern already exists in `@fresh-ds/ui`.
2. Check whether there is an approved component board covering the anatomy.
3. If not, check whether a reusable composition with `@fresh-ds/ui-core` is enough.
4. If the need will repeat across products or is approved as canonical, add a shared
   component instead of shipping local screen markup.
5. If it is still product-specific, keep it in product code and build it from shared
   layers.

## Component Checklist

Every new component must include:

- typed props
- explicit variants
- semantic token usage only
- light and dark mode support
- mobile-first behavior with desktop web support
- accessibility defaults and states
- examples
- stories
- tests
- manifest JSON

## Documentation Checklist

- Update the closest guide in `/docs` when conventions change.
- Update `packages/codex-rules` when agent guidance changes.
- Keep README-level onboarding accurate for engineers joining the repo.
- Update the design board index or handoff checklist when the approved workflow
  changes.

## Development Commands

```bash
npm install
npm run dev
npm run dev:starter:web
npm run lint
npm run typecheck
npm run test
npm run build
```

Use focused commands when iterating on a specific surface:

```bash
npm run dev:starter
npm run dev:starter:web
npm run dev:drugbook
npm run native:playground
```
