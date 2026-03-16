# Prototype Architecture

## Purpose

Fresh now has two distinct but connected lanes:

- a strict reference lane for parity with shadcn
- a runtime recipe lane for polished prototype generation

This gives PMs, designers, and engineers a better path than prompting directly from
low-level shared components alone.

## Layer Model

Use the system in this order:

1. `@fresh/shadcn-reference`
   Reference only. Defines taxonomy, visual parity targets, interaction expectations,
   platform adaptations, and intentional deviations.
2. `@fresh/recipes`
   Runtime prototype blocks for higher-fidelity composition such as `PageHeader`,
   `SelectionCard`, and `SummaryCard`.
3. `@fresh/ui`
   Shared reusable components such as `Button`, `Card`, `Badge`, `TextField`, and
   `Switch`.
4. `@fresh/ui-core`
   Primitive building blocks such as `Stack`, `Box`, `Text`, and `Pressable`.
5. `@fresh/tokens`
   Visual authority for color, spacing, radius, typography, elevation, and motion.

## Core Rule

Fresh should be strict to shadcn as a reference system, not as imported implementation.

That means:

- use shadcn for taxonomy, visual direction, and interaction intent
- never copy DOM internals into shared React Native code
- document all allowed platform adaptations explicitly

## Why Recipes Exist

Low-level design-system components alone are not enough for strong prompt-driven
prototyping.

`@fresh/recipes` exists to provide:

- stronger visual defaults
- better screen-level composition
- more deterministic agent output
- easier handoff from prototype to engineering

## How PMs And Designers Should Use It

1. Align in Pencil first.
2. Prefer approved recipe blocks for prototypes.
3. Keep the prototype inside the recipe lane unless a product-specific pattern is
   truly unique.
4. Hand off using the canonical prompt plus the approved board context.

## How Engineers Should Use It

1. Check `@fresh/recipes` first for prototype-oriented screen blocks.
2. Drop to `@fresh/ui` for shared component work.
3. Drop to `@fresh/ui-core` only when the higher layers do not fit.
4. Use `@fresh/shadcn-reference` to validate visual and interaction parity when making
   changes to shared components or recipes.

## First Recipe Set

The initial recipe set is based on Drugbook needs:

- `PageHeader`
- `SectionHeader`
- `SelectionCard`
- `SummaryCard`
- `StickyActionFooter`

These should be treated as the prototype lane for early product work, not as
automatically permanent shared production components.
