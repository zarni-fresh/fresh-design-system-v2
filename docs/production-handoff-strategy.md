# Production Handoff Strategy

How the Fresh Design System repo serves as the UI source of truth for prototyping,
and how prototypes translate into the production Phoenix/LiveView codebase.

## The Model

```
Fresh Design System (source of truth)     Core Platform (production)
─────────────────────────────────────     ─────────────────────────
Tokens, components, recipes, brand    →   CSS variables, fc-* components, LiveView templates
PMs and designers prototype here      →   Engineers build production UI here
React Native / Expo / TypeScript          Elixir / Phoenix / LiveView / Tailwind
```

The Fresh Design System repo (`fresh-design-system-v2`) owns the canonical definition
of how the product should look and feel: tokens, component behaviour, spacing rhythm,
brand character, screen composition patterns, and accessibility requirements.

The production codebase (`core-platform`) consumes that definition and implements it
in Phoenix/LiveView. The two systems share visual DNA but not runtime code.

## Why This Works

PMs and designers need to prototype and iterate quickly without touching production
infrastructure, backend logic, or deployment pipelines. Engineers need stable,
well-defined specifications to build against.

The Fresh repo gives both sides what they need:

- **For PMs/designers:** a fast, visual environment (Expo) where they can compose
  real components into real screens, test on mobile and web, and commit their work
  to a branch — no backend required.
- **For engineers:** a precise, inspectable specification — not a screenshot or a
  Figma annotation, but actual component usage with real props, real tokens, and
  real screen structure that can be read, diffed, and translated.

## What Aligns Between the Two Systems

| Layer      | Fresh Design System                                  | Core Platform                                         |
| ---------- | ---------------------------------------------------- | ----------------------------------------------------- |
| Tokens     | `@fresh-ds/tokens` (spacing, color, radius, type)    | `vendor/design-system/variables.css` + `theme.css`    |
| Styling    | Tailwind via NativeWind                              | Tailwind CSS v4                                       |
| Components | `Button`, `Card`, `TextField`, `Badge`, etc.         | `fc-*` components in `design_system.ex`               |
| Recipes    | `PageHeader`, `StickyActionFooter`, `SelectionCard`  | LiveView templates composed from `core_components.ex` |
| Manifests  | JSON per component (variants, states, accessibility) | Can map directly to HEEx component APIs               |
| Brand      | `docs/brand.md`, `docs/visual-recipe.md`             | Applied through shared tokens and component styles    |

The spacing rhythm (`4/6/8/12/16/20/24`), radius language, typography scale, and
colour palette should be identical between the two — one expressed as JS/TS tokens,
the other as CSS variables.

## The Translation Layer

Translation happens at three levels, from simplest to most powerful.

### Level 1: Shared Tokens

The Fresh token definitions (colours, spacing, radius, typography, elevation) are
exported as CSS-compatible values. The production app already vendors CSS variables.
If those variables match the Fresh token names, any prototype built with Fresh tokens
translates visually 1:1 into production.

This is approximately 80% of the visual fidelity win.

**Action:** Generate a `variables.css` export from `@fresh-ds/tokens` that the
production repo can vendor directly, replacing or augmenting the current
`vendor/design-system/` files.

### Level 2: Component Mapping

A maintained table that maps Fresh components and props to production HEEx components
and attributes. For example:

```
Fresh:      <Button variant="primary" size="lg" label="Save" />
Production: <.fc_button variant="primary" size="lg">Save</.fc_button>

Fresh:      <TextField label="Email" placeholder="you@example.com" errorMessage="Required" />
Production: <.fc_input label="Email" placeholder="you@example.com" error="Required" />

Fresh:      <Card><CardContent>...</CardContent></Card>
Production: <.fc_card>...</.fc_card>
```

The component manifests (JSON files shipping with every Fresh component) already
describe variants, states, and accessibility requirements. These serve as the
specification for what the production equivalent must support.

**Action:** Create a `docs/component-mapping.md` that maps each Fresh component to
its production counterpart, noting any prop name differences or gaps.

### Level 3: Agent-Assisted Translation

An AI coding agent reads a Fresh prototype screen and generates the equivalent
Phoenix LiveView template. It uses:

- The component manifests (what each component does and accepts)
- The token mapping (same visual values, different format)
- The production component library (`design_system.ex`, `core_components.ex`)
- The screen pattern (layout hierarchy, data flow, interaction model)

This is practical today. The agent prompt would reference both component libraries
and produce HEEx output that uses the correct production components with the correct
attributes.

**Action:** Write an agent prompt template that takes a Fresh prototype file path
and generates equivalent LiveView template code.

## The Handoff Workflow

1. **PM/designer prototypes** in the Fresh Design System repo. They compose screens
   using approved components, tokens, and recipes. They work in a branch.

2. **Prototype is committed and shared.** The engineer receives a branch (or PR)
   containing real component usage — not a screenshot. They can run the prototype
   locally (`npm run dev:blank:web`) and inspect every component, prop, and layout
   decision.

3. **Engineer translates to production.** Using the component mapping and shared
   tokens, they rebuild the screen in Phoenix LiveView. The manifest files provide
   the specification for what each component should do. Where a production component
   doesn't exist yet, the manifest defines what needs to be built.

4. **Parity is maintained.** When new components are added to Fresh, a corresponding
   `fc-*` component should be added to the production design system. When tokens
   change in Fresh, the production CSS variables are regenerated.

## The Key Risk: Drift

If the two component libraries evolve independently, prototypes stop being accurate
representations and engineers stop trusting them. The mitigation is:

- **Tokens flow one direction:** Fresh Design System → production CSS variables.
  The Fresh repo is the source of truth. The production repo consumes, not defines.
- **Component mapping is maintained:** When a Fresh component ships or changes, the
  mapping doc is updated and the production equivalent is flagged for update.
- **New components are added to both systems** when they graduate from prototype to
  production need. Not every recipe needs a production counterpart, but every
  shipped component should have one.

## What Is Ready Today

- 4 packages published to npm (`@fresh-ds/tokens`, `@fresh-ds/ui-core`,
  `@fresh-ds/ui`, `@fresh-ds/recipes`)
- 11 shipped components + 5 recipe blocks + 5 primitives
- 37 registered icons
- Full token system (light/dark mode, semantic colours, spacing, radius, typography)
- Component manifests with variants, states, and accessibility requirements
- Brand reference, visual recipe, screen patterns documentation
- Blank starter template for new prototypes

## What Needs to Be Built

1. **CSS variable export** from `@fresh-ds/tokens` for production consumption
2. **Component mapping doc** (Fresh → production `fc-*` equivalents)
3. **Agent translation prompt** for automated prototype-to-LiveView conversion
4. **Wave 2 components** (Checkbox, Select, RadioGroup, Dialog, Toast) — needed
   for form-heavy production screens
