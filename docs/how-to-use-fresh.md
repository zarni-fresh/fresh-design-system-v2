# How To Use Fresh

## What This Repo Is

Fresh is not just a folder of CSS files or static components.

It is a React Native + Expo monorepo that contains:

- design tokens
- primitive building blocks
- shared components
- higher-level prototype recipes
- examples, tests, stories, and manifests
- agent rules for AI-assisted UI generation

Fresh is meant to help a team do two things:

1. prototype product UI quickly without drifting off-system
2. hand those prototypes to engineering in a way that is easy to implement

The intended workflow is:

1. design the screen on a canvas using Fresh foundations and component rules
2. approve the screen direction there
3. build the actual app surface in code using Fresh
4. keep iterating the app in code while promoting repeated patterns back into Fresh

## Important Clarification

Fresh is built for React Native and Expo, not traditional web CSS architecture.

So instead of a structure like:

- `components/`
- `styles/`
- `globals.css`

the main structure is:

- `packages/tokens`
- `packages/ui-core`
- `packages/ui`
- `packages/recipes`

That means the source of truth lives in TypeScript components and token files, not in
CSS classes alone.

NativeWind is used for ergonomics where helpful, but the system authority is still in:

- token files
- component code
- manifests
- docs and rules

## Where Things Live

### `packages/tokens`

Use this for:

- colors
- spacing
- radius
- typography
- elevation
- motion

Do not hardcode those values elsewhere.

### `packages/ui-core`

This is the primitive layer.

Use this for:

- `Box`
- `Stack`
- `Text`
- `Pressable`
- `Icon`

Product screens should not usually start here.

### `packages/ui`

This is the shared component layer.

Use this for:

- `Button`
- `TextField`
- `Card`
- `Badge`
- `Avatar`
- `Label`
- `Switch`
- `Separator`
- and other reusable shared components

This is the default shared building block layer for product apps.

### `packages/recipes`

This is the prototype lane.

Use this for:

- polished screen blocks
- promptable product scaffolding
- higher-level composition that is closer to a real app screen

Examples:

- `PageHeader`
- `SectionHeader`
- `SelectionCard`
- `SummaryCard`
- `StickyActionFooter`

If someone is vibe coding a screen, this is usually the best place to start.

### `packages/shadcn-reference`

This is not runtime UI.

Use it as the strict reference contract for:

- taxonomy
- look and feel
- interaction intent
- allowed React Native adaptations

## How The Team Should Use Fresh Right Now

There are 3 practical ways to use this repo today.

### 1. Use it as a reference repo

Use this mode when someone wants to inspect what is already approved.

They should:

1. open the repo
2. read [`AGENTS.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/AGENTS.md)
3. read [`docs/how-to-use-fresh.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/how-to-use-fresh.md)
4. inspect:
   - `packages/recipes/src/components`
   - `packages/ui/src/components`
   - manifests, examples, stories, and tests

This is best for:

- designers
- PMs
- engineers reviewing the current system

### 2. Use it as a local prototype workspace

Use this mode when someone wants to prototype a screen or flow locally.

They should:

1. clone the repo
2. install dependencies
3. run the starter or playground
4. prompt into the existing recipe/component layers

Commands:

```bash
cd /Users/zarnim/Documents/FCXD/fresh-design-system
npm install
```

Start the starter app:

```bash
npm run dev:starter
```

Start the starter app on web:

```bash
npm run dev:starter:web
```

Start the playground:

```bash
npm run dev
```

Use this mode when:

- someone wants to explore a new screen
- someone wants to test prompts against the design system
- someone wants to review cross-platform behavior

This is usually the step that comes after the canvas work is approved.

Use the starting prompt playbook here:

- [`docs/starting-prompt-playbook.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/starting-prompt-playbook.md)

### 3. Use it as the starting point for a new app

This is the current recommended team adoption path.

Right now, Fresh is easiest to use by starting from this repo or from the Expo starter
inside this repo.

That means:

- copy from `apps/expo-starter`
- or fork/clone the repo and build from there
- or use the repo as the source workspace while the design system is still evolving

Important:

Fresh is not yet set up as a polished published package distribution workflow for
other repos.

So if a teammate asks, “Can I just `npm install` this from another app repo?” the
honest answer today is:

- not as the main recommended workflow yet

The recommended workflow today is:

- start from the Fresh starter
- build the prototype there
- then either continue there or extract what the product repo needs

## Golden Path For A Teammate

If someone on the team wants to build a new screen, tell them to do this:

1. Start from an approved canvas screen in Pencil or another explicitly chosen design
   canvas.
2. Clone the repo.
3. Run `npm install`.
4. Start `apps/expo-starter`.
5. Read [`docs/canonical-agent-prompt.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/canonical-agent-prompt.md).
6. Start with [`docs/starting-prompt-playbook.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/starting-prompt-playbook.md).
7. Ask the coding agent to inspect `@fresh-ds/recipes` first.
8. Build the screen using:
   - `@fresh-ds/recipes` first
   - then `@fresh-ds/ui`
   - then `@fresh-ds/ui-core` only if needed
9. Validate on mobile and desktop web.
10. If they needed to invent a repeated new pattern, log it for promotion into the
    shared system.

## Spacing Expectations

One of the easiest ways for generated UI to feel wrong is for spacing to collapse.

Tell teammates and agents to check this first:

- mobile screen edge padding should usually be `16px` or `20px`
- section-to-section gaps should usually be `16px` to `24px`
- card internal padding should usually be `16px` to `20px`
- stacked rows inside a card should usually use `12px` to `16px`
- compressed layouts should be fixed by spacing and grouping before adding decoration

If a screen feels squished, it is not done yet.

## How To Find A Component

If someone asks, “Where is the button?” or “Where do I find a screen block?”:

- shared components:
  [`packages/ui/src/components`](/Users/zarnim/Documents/FCXD/fresh-design-system/packages/ui/src/components)
- recipe blocks:
  [`packages/recipes/src/components`](/Users/zarnim/Documents/FCXD/fresh-design-system/packages/recipes/src/components)
- primitives:
  [`packages/ui-core/src/primitives`](/Users/zarnim/Documents/FCXD/fresh-design-system/packages/ui-core/src/primitives)
- tokens:
  [`packages/tokens/src`](/Users/zarnim/Documents/FCXD/fresh-design-system/packages/tokens/src)

Each component should have:

- implementation
- examples
- stories
- tests
- manifest JSON

## How To Prompt Against Fresh

Tell teammates not to prompt vaguely.

Bad:

- “Make a modern screen”
- “Use shadcn but in React Native”
- “Style this however you want”

Good:

- “Use `@fresh-ds/recipes` first, then `@fresh-ds/ui`, then `@fresh-ds/ui-core`”
- “Do not hardcode visual values”
- “Keep it mobile-first and desktop-web safe”
- “Use approved Fresh patterns only”

Use:

- [`docs/canonical-agent-prompt.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/canonical-agent-prompt.md)
- [`docs/vibe-coding-playbook.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/vibe-coding-playbook.md)

## How To Share It With Engineering

When sharing this repo with engineering, point them to this exact order:

1. [`README.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/README.md)
2. [`docs/how-to-use-fresh.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/how-to-use-fresh.md)
3. [`AGENTS.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/AGENTS.md)
4. [`docs/vibe-coding-playbook.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/vibe-coding-playbook.md)
5. [`docs/canonical-agent-prompt.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/canonical-agent-prompt.md)
6. [`apps/expo-starter`](/Users/zarnim/Documents/FCXD/fresh-design-system/apps/expo-starter)

## Short Version

If someone only remembers one thing, it should be this:

- use `@fresh-ds/recipes` first for screens
- use `@fresh-ds/ui` for shared components
- use `@fresh-ds/ui-core` only when needed
- do not hardcode visual styling
- start from the starter app, not from a blank file
