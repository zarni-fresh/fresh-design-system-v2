# Prototyping with Fresh: A Guide for PMs and Designers

This guide gets you from zero to a working prototype using the Fresh Design System.
No backend knowledge required.

## Before You Start

You will need:

- **Node.js** (v22 or later) — download from https://nodejs.org
- **Git** — likely already installed on your Mac (`git --version` to check)
- **A code editor** — VS Code or Cursor recommended
- **A terminal** — the one built into your editor works fine

If any of these are unfamiliar, ask an engineer to help with the initial setup. It
takes 5 minutes.

## Quick Start (5 Steps)

### 1. Clone the repo

```bash
git clone git@github.com:zarni-fresh/fresh-design-system-v2.git
cd fresh-design-system
npm install
```

### 2. Create a branch for your prototype

```bash
git checkout -b prototype/your-feature-name
```

Name it something descriptive, like `prototype/patient-intake-flow` or
`prototype/dashboard-redesign`.

### 3. Open the blank starter

Open `apps/blank-starter/App.tsx` in your editor. This is your canvas. It comes
pre-wired with a PageHeader, Card, TextField, and Button to show you the pattern.

### 4. Run it

```bash
npm run dev:blank:web
```

This opens a browser preview. Changes you save in `App.tsx` appear immediately.

To preview on mobile instead:

```bash
npm run dev:blank
```

### 5. Build your screens

Edit `App.tsx` to compose your prototype. Use the components listed below. When
you are done, commit and push your branch:

```bash
git add -A
git commit -m "Prototype: patient intake flow"
git push origin prototype/your-feature-name
```

Share the branch name with the engineering team. They can pull it, run it, inspect
every component and layout decision, and translate it into production code.

## What Components Can I Use?

### Primitives (`@fresh-ds/ui-core`)

Basic building blocks for layout and text.

- `Stack` — arrange things vertically or horizontally with consistent gaps
- `Text` — all text on screen (supports size, weight, tone)
- `Box` — generic container when Stack doesn't fit
- `Icon` — 37 registered icons (see `docs/icons.md` for the full list)

### Components (`@fresh-ds/ui`)

The main UI elements.

- `Button` — actions (primary, secondary, outline, ghost, destructive)
- `TextField` — text inputs with labels and validation
- `Card` — grouped content surfaces
- `Badge` — status labels and tags
- `Avatar` — profile pictures with initials fallback
- `Label` — form field labels
- `Switch` — on/off toggles
- `Progress` — completion bars
- `Separator` — dividers between sections
- `Skeleton` — loading placeholders

### Recipes (`@fresh-ds/recipes`)

Higher-level screen blocks that combine multiple components.

- `PageHeader` — screen title with back button, badges, and actions
- `SectionHeader` — section title with optional action
- `SelectionCard` — tappable option card for selection screens
- `SummaryCard` — read-only summary with key-value rows
- `StickyActionFooter` — fixed bottom bar with primary/secondary actions

### Common Patterns

See `docs/screen-patterns.md` for 4 ready-made screen templates you can copy and
modify:

1. **Form Screen** — data entry with labeled inputs
2. **Selection Screen** — pick from a list of options
3. **Detail Screen** — read-only view of structured data
4. **Dashboard Screen** — KPIs and grouped content sections

## Where Do I Find the Available Icons?

See `docs/icons.md` for the full catalog of 37 icons. Common ones:

`plus`, `edit`, `trash`, `search`, `check`, `x`, `chevron-right`, `arrow-left`,
`user`, `settings`, `home`, `mail`, `phone`, `filter`, `eye`, `eye-off`, `menu`,
`more-vertical`, `info`, `heart`, `star`

Usage in your code:

```tsx
import { Icon } from '@fresh-ds/ui-core';

<Icon icon="plus" size={16} />
<Icon icon="search" size={16} tone="muted" />
```

## Two Ways to Prototype

We evaluated two approaches and recommend Option A for most prototyping work.

### Option A: Work in this repo (recommended)

Clone the Fresh Design System repo and build your prototype in `apps/blank-starter`.

**Pros:**

- Zero config — tokens, components, recipes, dark mode, and NativeWind are all
  pre-wired and ready to go
- Engineers review your branch in the same repo — no cross-repo setup
- All documentation, manifests, and component rules are right at hand
- Multiple prototypes are just multiple branches

**Cons:**

- You are working inside a shared repo, so keep your changes in your branch
- The blank starter is a single `App.tsx` — for very large prototypes you may want
  to split into multiple files (ask an engineer if unsure)

**Best for:** Most prototyping work. Quick explorations, screen designs, workflow
simulations, and handoff to engineering.

### Option B: Your own repo with npm install

Create a standalone Expo project and install the Fresh packages:

```bash
npx create-expo-app my-prototype
cd my-prototype
npm install @fresh-ds/tokens @fresh-ds/ui-core @fresh-ds/ui @fresh-ds/recipes
```

You will need to configure the theme provider, NativeWind, and metro config
yourself. See the blank starter files for reference.

**Pros:**

- Fully independent — your own repo, your own pace
- Good foundation if the prototype will eventually become a real product app
- No risk of accidentally affecting the shared design system

**Cons:**

- More setup required (theme provider, NativeWind config, metro config)
- Engineers need access to a separate repo to review your work
- You are responsible for keeping packages updated (`npm update @fresh-ds/ui`)

**Best for:** Standalone apps that will live beyond the prototype phase, or teams
that need full independence from the design system repo.

## Tips

- **Start from screen patterns.** Copy a pattern from `docs/screen-patterns.md` and
  modify it rather than building from scratch.
- **Use recipes first.** `PageHeader` and `StickyActionFooter` handle the most
  common screen structure. Reach for individual components only when recipes don't
  cover your need.
- **Don't worry about pixel perfection.** The components enforce the right spacing,
  radius, and typography automatically. Focus on the flow and content.
- **Dark mode works automatically.** Toggle your system theme to see it.
- **Commit often.** Small commits with descriptive messages make it easier for
  engineers to follow your intent.
- **Ask for help.** If you are stuck on layout or can't find a component, ask in
  the team channel. The component status table (`docs/component-status.md`) shows
  what exists today.

## Reference

| Doc                        | What it covers                                |
| -------------------------- | --------------------------------------------- |
| `docs/screen-patterns.md`  | 4 ready-made screen templates with code       |
| `docs/icons.md`            | Full icon catalog with usage examples         |
| `docs/component-status.md` | What components exist and their status        |
| `docs/brand.md`            | The Fresh visual identity in one page         |
| `docs/visual-recipe.md`    | Spacing, radius, typography, and colour rules |
