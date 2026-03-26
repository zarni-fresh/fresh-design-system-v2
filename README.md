# Fresh Design System

The canonical source of truth for how Fresh products should look, feel, and behave.

This monorepo contains design tokens, UI components, screen recipes, brand guidelines,
and agent rules — all in code. It serves two audiences: **PMs and designers** who
prototype here, and **engineers** who translate those prototypes into production.

## Quick Start

```bash
git clone git@github.com:zarni-fresh/fresh-design-system-v2.git
cd fresh-design-system
npm install
npm run dev:starter:web      # Start prototyping (desktop web)
```

## Who Is This For?

| Role                                     | Start here                                                         |
| ---------------------------------------- | ------------------------------------------------------------------ |
| PM or designer prototyping a new feature | [PM Prototyping Guide](docs/pm-prototyping-guide.md)               |
| Engineer building production UI          | [Production Handoff Strategy](docs/production-handoff-strategy.md) |
| Engineer working inside this repo        | [How to Use Fresh](docs/how-to-use-fresh.md)                       |
| AI coding agent                          | [AGENTS.md](AGENTS.md)                                             |

## Monorepo Structure

```text
apps/
  starter/       Prototyping canvas — start here
  drugbook/      Reference example app (Drugbook workflow)
packages/
  tokens/              Raw and semantic tokens, NativeWind preset
  ui-core/             Primitives (Box, Text, Stack, Icon, Pressable), theming
  ui/                  Branded components (Button, Card, TextField, Badge, etc.)
  recipes/             Screen-level blocks (PageHeader, StickyActionFooter, etc.)
  shadcn-reference/    Typed shadcn parity specs and adaptation rules
  codex-rules/         Agent-readable rules, recipes, and anti-patterns
docs/                  Guidelines, brand, patterns, onboarding, handoff
design/                Board index, handoff checklist
```

## Published Packages

All packages are published to npm under the `@fresh-ds` scope:

```bash
npm install @fresh-ds/tokens @fresh-ds/ui-core @fresh-ds/ui @fresh-ds/recipes
```

Peer dependencies: `react`, `react-native`, `react-native-svg`.

| Package             | What it provides                                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `@fresh-ds/tokens`  | Colours, spacing, radius, typography, elevation, motion. Light and dark themes.                                                               |
| `@fresh-ds/ui-core` | Primitives (`Box`, `Text`, `Stack`, `Pressable`, `Icon`), theme provider, utilities.                                                          |
| `@fresh-ds/ui`      | Branded components (`Button`, `TextField`, `Card`, `Badge`, `Avatar`, `Switch`, `Progress`, `Separator`, `Skeleton`, `Label`, `AspectRatio`). |
| `@fresh-ds/recipes` | Screen blocks (`PageHeader`, `SectionHeader`, `SelectionCard`, `SummaryCard`, `StickyActionFooter`).                                          |

See [Component Status](docs/component-status.md) for the full inventory and roadmap.

## How It Fits Into Production

The Fresh Design System is the **UI source of truth**. Production code (Phoenix/LiveView)
consumes the same visual contract through shared tokens and a component mapping layer.

```
Fresh Design System (source of truth)     Core Platform (production)
─────────────────────────────────────     ─────────────────────────
Tokens, components, brand, patterns   →   CSS variables, fc-* components, LiveView
PMs prototype here                    →   Engineers build production UI here
```

See [Production Handoff Strategy](docs/production-handoff-strategy.md) for the full
workflow including the three-level translation layer.

## Running The Apps

```bash
npm install

# Prototyping canvas
npm run dev:starter              # Mobile
npm run dev:starter:web          # Desktop web

# Drugbook reference example
npm run dev:drugbook             # Mobile
npm run dev:drugbook:web         # Desktop web

# Quality checks
npm run build
npm run lint
npm run typecheck
npm run test
```

## Documentation

### For everyone

| Doc                                          | Purpose                                       |
| -------------------------------------------- | --------------------------------------------- |
| [Brand Reference](docs/brand.md)             | What Fresh looks and feels like in one page   |
| [Visual Recipe](docs/visual-recipe.md)       | Spacing, radius, typography, and colour rules |
| [Component Status](docs/component-status.md) | What components exist and what is planned     |
| [Icon Catalog](docs/icons.md)                | All 37 registered icons with usage            |
| [Screen Patterns](docs/screen-patterns.md)   | 4 ready-made screen templates with code       |

### For PMs and designers

| Doc                                                                | Purpose                               |
| ------------------------------------------------------------------ | ------------------------------------- |
| [PM Prototyping Guide](docs/pm-prototyping-guide.md)               | 5-step quickstart for prototyping     |
| [Production Handoff Strategy](docs/production-handoff-strategy.md) | How prototypes become production code |

### For engineers

| Doc                                                                | Purpose                                   |
| ------------------------------------------------------------------ | ----------------------------------------- |
| [How to Use Fresh](docs/how-to-use-fresh.md)                       | Golden path and usage modes               |
| [Usage Guidelines](docs/usage-guidelines.md)                       | Layer selection and composition rules     |
| [Design Principles](docs/design-principles.md)                     | Core principles behind the system         |
| [Design Workflow](docs/design-workflow.md)                         | Board-to-code workflow                    |
| [Shadcn Taxonomy](docs/shadcn-taxonomy.md)                         | Component wave roadmap and native mapping |
| [Component Promotion Roadmap](docs/component-promotion-roadmap.md) | Tier system for promoting components      |
| [Primitive Boundary Strategy](docs/primitive-boundary-strategy.md) | Package boundaries and migration rules    |

### For AI agents

| Doc                                                          | Purpose                                    |
| ------------------------------------------------------------ | ------------------------------------------ |
| [AGENTS.md](AGENTS.md)                                       | Non-negotiable rules and working pattern   |
| [Canonical Agent Prompt](docs/canonical-agent-prompt.md)     | Full template prompt for coding agents     |
| [Starting Prompt Playbook](docs/starting-prompt-playbook.md) | Universal first prompt                     |
| [Vibe Coding Playbook](docs/vibe-coding-playbook.md)         | Golden path for agent-assisted development |

## Contribution Expectations

- This repo is the source of truth for UI. Do not move authority into a design file.
- Ship new components with typed props, variants, examples, stories, tests, and a manifest.
- Support dark mode, accessibility, mobile, and desktop web by default.
- Validate UI work in Expo dev builds first, then on desktop web.
- Update docs and codex rules when patterns or guidance change.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full working agreement.
