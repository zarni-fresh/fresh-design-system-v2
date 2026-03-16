# Drugbook Simulation

## Purpose

This document simulates how a Fresh product manager and engineer should use this repo
together when vibe coding a real product surface through the new recipe lane.

The example product is Drugbook. The goal is not to fully implement Drugbook here.
The goal is to show how the team should:

- start from an approved process
- use Fresh components first
- keep product-specific UI out of the shared library unless it is truly reusable
- identify the right follow-up shared work

A runnable version of this simulation now lives in
[`apps/expo-starter/App.tsx`](/Users/zarnim/Documents/FCXD/fresh-design-system/apps/expo-starter/App.tsx).

## Example Scenario

Drugbook needs a mobile-first screen for selecting a product, choosing quantity and
batch details, reviewing a summary, and continuing to the next step.

The team already reviewed Drugbook reference frames in Pencil and extracted likely
reusable patterns into the `Drugbook Extracted Components` board.

## Simulation: Product Manager

### PM Goal

The PM wants a screen that lets a clinician:

1. review the selected product
2. adjust quantity
3. choose a batch option
4. review totals
5. continue or go back

### PM Brief

This is the kind of brief the PM should hand to engineering or an agent:

```md
Build the Drugbook product selection screen using the Fresh design system.

Users need to:
- confirm the selected product
- adjust quantity
- choose from available batch options
- review a summary card
- move to the next step

Constraints:
- React Native + Expo + TypeScript
- mobile-first but also usable on desktop web
- use Fresh shared components first
- do not invent new shared UI inline
- if a repeated pattern is missing, call it out explicitly

Acceptance criteria:
- there is one clear primary action
- the quantity control is easy to tap on mobile
- batch options are visually distinct and selectable
- summary information is grouped clearly
- the screen works in light and dark mode
- disabled and loading states are considered
```

### PM Prompt To A Coding Agent

The PM or engineer can take the canonical prompt and adapt it like this:

```md
You are building inside a React Native + Expo + TypeScript app that uses the Fresh
design system.

Follow these rules:
- Use `@fresh/ui` components first.
- Use `@fresh/ui-core` primitives only when a shared component does not fit.
- Do not use raw React Native primitives in product screens when a Fresh wrapper
  exists.
- Do not hardcode colors, spacing, radii, font sizes, shadows, or motion values.
- Use semantic tokens only.
- Keep the implementation mobile-first, but it must also work on desktop web.
- Support dark mode and accessibility by default.
- Prefer composition over one-off UI.
- If a repeated pattern is missing, propose a new shared component instead of
  improvising inline.

Before writing code:
- inspect existing Fresh components, manifests, examples, stories, and the Drugbook
  design extraction boards
- choose the smallest approved component set that fits the task

Task:
Build a Drugbook product selection screen.

The screen should let the user:
- review a selected product card
- change quantity
- choose a batch option
- review a summary totals card
- continue to the next step or go back

Acceptance criteria:
- use Fresh shared components first
- keep product-specific patterns local if they are not yet approved shared components
- identify which parts should become future shared components
- summarize any gaps after implementation
```

## Simulation: Engineer

### Step 1: Inspect Fresh First

The engineer should first inspect:

- [`AGENTS.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/AGENTS.md)
- [`design/board-index.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/board-index.md)
- [`docs/component-promotion-roadmap.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/component-promotion-roadmap.md)
- [`docs/vibe-coding-playbook.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/vibe-coding-playbook.md)

Then the engineer should check what already exists in `@fresh/ui`:

- `Button`
- `Card`
- `Badge`
- `TextField`
- `Label`
- `Separator`
- `Switch`
- `Avatar`

### Step 2: Classify The Drugbook UI

The engineer should not treat the whole Drugbook screen as one new shared component.
It should be broken down into shared vs product-specific parts.

#### Good Classification

| Drugbook need | Fresh decision | Why |
| --- | --- | --- |
| screen title and supporting actions | future shared `PageHeader` | likely cross-product |
| section labels | future shared `SectionHeader` | likely cross-product |
| primary and secondary actions | use `Button` now | already shared |
| grouped surfaces | use `Card` now | already shared |
| compact status or metadata | use `Badge` now | already shared |
| quantity stepper row | keep product-local for now | promising, but not yet canonical |
| product selection card | keep product-local for now | domain-specific |
| batch option card | keep product-local for now | domain-specific |
| summary totals card | keep product-local for now | too domain-shaped today |
| sticky footer nav | keep as app-level recipe until repeated | useful, but not proven enough |

### Step 3: Build With Shared Components First

A good first implementation would compose the screen like this:

```tsx
<Stack gap={4}>
  <Card>
    <CardHeader>
      <Badge label="Drugbook" variant="accent" />
      <CardTitle>Select product</CardTitle>
      <CardDescription>
        Review the selected product, choose quantity, and continue.
      </CardDescription>
    </CardHeader>
  </Card>

  <ProductSelectionCard />

  <Card>
    <CardHeader>
      <CardTitle>Quantity</CardTitle>
    </CardHeader>
    <CardContent>
      <QuantityStepperRow />
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Batch options</CardTitle>
    </CardHeader>
    <CardContent>
      <Stack gap={3}>
        <BatchOptionCard />
        <BatchOptionCard />
      </Stack>
    </CardContent>
  </Card>

  <SummaryTotalsCard />

  <Stack direction="horizontal" gap={2}>
    <Button label="Back" variant="ghost" />
    <Button fullWidth label="Continue" />
  </Stack>
</Stack>
```

### Step 4: Keep Product-Specific UI Local

The engineer should create temporary Drugbook-local components such as:

- `ProductSelectionCard`
- `QuantityStepperRow`
- `BatchOptionCard`
- `SummaryTotalsCard`

Those local components should still use:

- `@fresh/ui` for actions, cards, badges, labels, separators
- `@fresh/ui-core` for layout and low-level composition
- `@fresh/tokens` indirectly through semantic theme usage

They should not introduce:

- raw hex values
- ad hoc spacing scales
- screen-specific button variants
- custom text styles that bypass the token system

## Simulated Engineering Output

At the end of the first implementation pass, a good engineer summary would look like
this:

```md
Implemented the Drugbook product selection screen using existing Fresh primitives and
shared components where possible.

Used existing shared components:
- Button
- Card
- Badge
- Label
- Separator

Kept these patterns product-local for now:
- ProductSelectionCard
- QuantityStepperRow
- BatchOptionCard
- SummaryTotalsCard

Shared component follow-up recommendations:
- PageHeader should likely be promoted into @fresh/ui
- SectionHeader should likely be promoted into @fresh/ui
- IconButton should likely be promoted into @fresh/ui
- StickyActionFooter should remain a recipe until it is repeated elsewhere
```

## What The Team Learns From This Example

This example shows the correct Fresh behavior:

- do not try to “shared-component-ize” the whole screen
- use the existing shared library first
- keep product-specific anatomy local until it is proven reusable
- record follow-up shared candidates instead of improvising them in place

## Recommended Real Next Step For Drugbook

If the team is happy with the Drugbook direction, the next shared work should be:

1. approve `PageHeader` anatomy in Pencil
2. approve `SectionHeader` anatomy in Pencil
3. decide whether `IconButton` should be standalone or part of `Button`
4. keep `QuantityStepperRow` and `SummaryTotalsCard` as product-level recipes for now

## How To Use This Simulation

Use this document when onboarding engineers or product managers who are new to the
Fresh workflow.

If someone asks “what does good look like when using this repo on a real app?”, this
is the reference answer.
