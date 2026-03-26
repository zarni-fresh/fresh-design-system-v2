# Fresh Design System

Fresh Design System is a React Native and TypeScript monorepo for the canonical UI
contract that Fresh products and AI agents should follow by default.

## Quick Start

```bash
git clone git@github.com:zarni-fresh/fresh-design-system-v2.git
cd fresh-design-system
npm install
npm run dev                    # Expo playground (mobile)
npm run dev:playground:web     # Desktop web
```

---

This repository exists to keep branded UI authority in code, not scattered across
screens, screenshots, or visual tooling. It combines tokens, primitives, branded
components, manifests, docs, and agent rules into one source of truth that can be
shared across engineering and code generation workflows.

The working model is now explicit:

- A design canvas is the visual review and alignment surface for major design
  decisions. Pencil is the preferred default, but the canvas can be user-specified.
- Code is still the source of truth for tokens, components, manifests, stories, tests,
  and agent rules.
- Shared UI should move from approved design boards into code deliberately, not by
  screenshot matching or one-off product implementation.

The current expansion roadmap tracks the official shadcn catalog as a target taxonomy
while reinterpreting components natively for React Native and Expo. See
[`docs/shadcn-taxonomy.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/shadcn-taxonomy.md)
for the full matrix and rollout plan.
Strict shadcn parity and the new prototype lane are documented in
[`docs/prototype-architecture.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/prototype-architecture.md).
The package-boundary and migration discipline informed by recent prototype learnings is
documented in
[`docs/primitive-boundary-strategy.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/primitive-boundary-strategy.md).

The visual baseline is documented separately in
[`docs/visual-recipe.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/visual-recipe.md)
so future work preserves the same neutral, crisp, `new-york`-inspired character.

The cross-functional workflow is documented in
[`docs/design-workflow.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/design-workflow.md)
and the active board registry lives in
[`design/board-index.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/board-index.md).
The first engineering-facing promotion backlog lives in
[`docs/component-promotion-roadmap.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/component-promotion-roadmap.md).
The team onboarding path lives in
[`docs/vibe-coding-playbook.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/vibe-coding-playbook.md)
and
[`docs/canonical-agent-prompt.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/canonical-agent-prompt.md).
The universal starting prompt lives in
[`docs/starting-prompt-playbook.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/starting-prompt-playbook.md).
The plain-English onboarding guide lives in
[`docs/how-to-use-fresh.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/how-to-use-fresh.md).
There is also a worked example using Drugbook in
[`docs/drugbook-simulation.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/drugbook-simulation.md).

The official baseline is Expo. The primary working environment is
`apps/expo-playground`, with Expo development builds as the serious mobile baseline and
desktop web support for fast review.

## Why This Exists

- Product teams need one reliable source of truth for visual language, component APIs,
  and interaction defaults.
- AI-assisted UI generation needs machine-readable contracts, examples, and rules to
  stay on brand without improvising.
- React Native teams need native-first primitives and components instead of a web-port
  abstraction that leaks DOM assumptions.
- Teams need one implementation model that works for mobile devices and desktop web
  without changing the source of truth.

## Monorepo Structure

```text
apps/
  expo-playground/     Main Expo playground for dev builds and desktop web review
  expo-starter/        Team starter app for new Fresh-based app work
  storybook-native/    Lightweight Storybook scaffold for focused component review
packages/
  shadcn-reference/    Strict shadcn parity specs, mappings, and adaptation rules
  recipes/             Higher-level prototype blocks and polished composition recipes
  tokens/              Raw and semantic tokens, plus NativeWind preset helpers
  ui-core/             Native primitives, theming, utility helpers, and variants
  ui/                  Branded components, examples, stories, tests, manifests
  codex-rules/         Agent-readable rules, recipes, and anti-patterns
docs/                  Principles, usage, accessibility, content, migration
design/                Pencil board index, handoff checklist, companion exports
```

## Final Architecture Baseline

- Expo is the official baseline.
- Expo development builds are the serious mobile development workflow.
- The system is mobile-first, but must also work on desktop web.
- NativeWind is the styling ergonomics layer.
- Tokens stay brand-neutral and placeholder-friendly until product branding lands.
- Storybook is intentionally light at day one.
- `apps/expo-playground` is the main runtime for engineering and agent validation.
- Pencil is the preferred visual review surface for major design work.
- Pencil never becomes the source of truth; approved decisions must be codified.

## Package Responsibilities

### `@fresh-ds/tokens`

- Owns all raw values for color, spacing, radius, typography, elevation, and motion
- Exposes semantic themes for light and dark mode
- Provides the only approved place for visual values to live

### `@fresh-ds/ui-core`

- Provides React Native primitives such as `Box`, `Text`, `Stack`, `Pressable`, and
  `Icon`
- Supplies the shared `cn` helper, variant utilities, and theme access
- Keeps native building blocks composable and token-aware

### `@fresh-ds/ui`

- Provides branded components such as `Button`, `TextField`, `Card`, and `Badge`
- Ships stories, tests, examples, and manifest JSON files alongside the code
- Acts as the default component surface for product UIs and code generation

### `@fresh-ds/codex-rules`

- Captures generation rules, repeatable screen recipes, and anti-patterns
- Gives coding agents a local rulebook to follow before inventing new UI

### `@fresh-ds/shadcn-reference`

- Holds typed shadcn parity specs and adaptation rules
- Provides a strict reference contract without importing web-only runtime code

### `@fresh-ds/recipes`

- Provides the prototype lane for polished higher-level blocks
- Gives PMs, designers, and engineers a better prompting surface than raw components
- Bridges approved design patterns into reusable screen-level code

## Design Workflow

1. Explore or align visually in Pencil for foundations, product extractions, and new
   shared component anatomy.
2. Record the board in
   [`design/board-index.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/board-index.md)
   and use
   [`design/handoff-checklist.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/handoff-checklist.md)
   to define what needs to move into code.
3. Promote only approved, repeated, or canonical patterns into `@fresh-ds/ui` or
   `@fresh-ds/ui-core`.
4. Keep product-specific patterns local until they are proven reusable.
5. Validate the coded result in Expo playground and, when useful, Storybook.

## How Engineers Should Use It

1. Check the approved board registry before adding a new shared pattern.
2. Prefer `@fresh-ds/recipes` for prototyping and screen-level composition.
3. Prefer `@fresh-ds/ui` for reusable shared components.
4. If a higher-level component does not exist, compose with `@fresh-ds/ui-core`.
5. Never hardcode visual values in product code. Pull intent from semantic tokens.
6. If a pattern repeats across products or is explicitly approved, add a shared
   component instead of copying inline layout.
7. Use `@fresh-ds/shadcn-reference` to validate parity decisions instead of guessing.
8. Validate meaningful UI changes in the Expo playground first, then on desktop web.

## How AI Agents Should Use It

1. Read [`AGENTS.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/AGENTS.md)
   before making UI changes.
2. Check
   [`design/board-index.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/board-index.md)
   before inventing a new shared component or changing major visual anatomy.
3. Use `@fresh-ds/shadcn-reference` to understand strict parity expectations before
   inventing visual or interaction changes.
4. Use manifest JSON files in `packages/ui/src/components/*/*.manifest.json` and
   `packages/recipes/src/components/*/*.manifest.json` to choose the right layer.
5. Prefer examples and stories as training signals for default composition patterns.
6. Propose a shared component when the current library cannot express a repeated
   product need, but do not promote product-specific UI into the shared system without
   approval.

## Running The Apps

```bash
cd /Users/zarnim/Documents/FCXD/fresh-design-system
npm install
```

Start the main Expo playground using a dev client:

```bash
npm run dev
```

Open the playground on desktop web:

```bash
npm run dev:playground:web
```

Start the team starter app:

```bash
npm run dev:starter
```

Open the starter app on desktop web:

```bash
npm run dev:starter:web
```

Open the lightweight Storybook scaffold:

```bash
npm run dev:storybook
```

Sync native projects when you need development builds:

```bash
npm run native:playground
npm run native:storybook
```

Repo-wide commands:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## For External Consumers

If you are consuming Fresh packages from a separate repository:

```bash
npm install @fresh-ds/tokens @fresh-ds/ui-core @fresh-ds/ui
# For recipe-level components:
npm install @fresh-ds/recipes
```

Peer dependencies: `react`, `react-native`, `react-native-svg` (for `@fresh-ds/ui-core`).

> **Note:** Confirm `@fresh` npm scope availability before first publish. If the scope is
> unavailable, packages may be published under an alternative scope.

## Contribution Expectations

- Keep code as the source of truth. Do not move authority into a design file.
- Use Pencil boards to align on major visual changes before hardening shared UI in
  code.
- Ship new components with typed props, variants, examples, stories, tests, and a
  manifest.
- Support dark mode, accessibility, mobile, and desktop web by default.
- Validate serious UI work in Expo dev builds first, then on desktop web.
- Update docs and codex rules when patterns or guidance change.

See [`CONTRIBUTING.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/CONTRIBUTING.md)
for the working agreement in more detail.
