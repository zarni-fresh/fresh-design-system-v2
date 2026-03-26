# Primitive Boundary Strategy

## Purpose

This document translates the learnings from early prototype work into the Fresh Design
System architecture.

The goal is not primitive purity for its own sake. The goal is to keep product craft,
shared-system discipline, and AI-assisted implementation aligned as the system grows.

## Core Translation

The strongest lesson from the prototype phase is simple:

- preserve the product craft
- tighten the system boundary
- move decisions inward instead of letting feature code drift

In Fresh, that means:

- use strict reference guidance without importing web internals
- keep runtime primitives behind shared package boundaries
- promote patterns gradually instead of redesigning screens during extraction

## Current Risk In Fresh

Fresh does not currently mix Radix, Base UI, and Vaul the way the web prototype does,
but the same class of risk still exists if the repo grows without discipline:

- product screens may bypass the shared layers and drop to raw React Native too early
- recipe blocks may become ad hoc screen fragments instead of governed prototype
  surfaces
- shared components may drift away from approved shadcn parity targets
- teams may restyle screens while extracting patterns, which makes reuse and review
  harder
- agents may make inconsistent choices if the allowed boundaries are not explicit

## Core Recommendation

Standardize the runtime boundaries without freezing useful product iteration.

The key move is:

- keep `@fresh-ds/ui-core` as the only primitive runtime boundary
- keep `@fresh-ds/ui` as the only shared component boundary
- keep `@fresh-ds/recipes` as the prototype and screen-block boundary
- use `@fresh-ds/shadcn-reference` as the strict reference system for look, feel, and
  interaction intent
- treat direct raw React Native or third-party UI usage in product screens as
  migration debt unless explicitly approved

## Decisions

### Default reference foundation

Use `@fresh-ds/shadcn-reference` as the default reference contract for taxonomy, visual
parity targets, and interaction expectations.

This is not a runtime dependency.

### Default runtime foundation

Use `@fresh-ds/ui-core` plus `@fresh-ds/ui` as the default runtime foundation for all shared
UI.

### Prototype boundary

Use `@fresh-ds/recipes` for higher-fidelity prototype blocks and screen-level composition.

### Approved exceptions

Allow a small number of explicit exceptions only when they are clearly justified:

- platform-specific files for React Native and web parity
- carefully chosen third-party packages hidden behind the shared layer
- product-local wrappers while a pattern is still being proven

### Migration debt

Treat any direct primitive usage in product code as migration debt when a shared
wrapper already exists.

That includes:

- importing raw React Native primitives for reusable visual patterns
- importing third-party UI packages directly in app or product screens
- hardcoding interaction models that belong in shared components or recipes

## What Must Stay Stable

The following should remain stable while primitives, recipes, or shared components
evolve:

- semantic token intent
- spacing rhythm
- radii
- typography hierarchy
- surface and border language
- shadows and elevation
- focus treatment
- motion timing
- page-level composition
- approved domain interaction patterns

These qualities should not depend on whether an internal implementation changed.

## Boundary Model

### Layer 1: Reference boundary

Location:

- `@fresh-ds/shadcn-reference`

Responsibilities:

- taxonomy parity
- visual and interaction targets
- platform adaptation rules
- documented intentional deviations

### Layer 2: Prototype boundary

Location:

- `@fresh-ds/recipes`

Responsibilities:

- higher-fidelity promptable blocks
- screen-level composition defaults
- product extraction before promotion
- fast cross-functional review in code

### Layer 3: Shared component boundary

Location:

- `@fresh-ds/ui`

Responsibilities:

- reusable shared components
- stable typed APIs
- accessibility defaults
- stories, tests, manifests, and examples

### Layer 4: Primitive boundary

Location:

- `@fresh-ds/ui-core`

Responsibilities:

- native primitives
- theme plumbing
- utility helpers
- low-level behavior

### Layer 5: Token authority

Location:

- `@fresh-ds/tokens`

Responsibilities:

- raw values
- semantic mappings
- cross-theme visual authority

## Promotion Policy

### Policy statement

Do not redesign a product surface while extracting it into the shared system.

Promotion should happen by moving the stable pattern inward, not by changing the
screen’s visual or interaction intent at the same time.

### Default rule

When a new pattern is needed:

1. check the approved board and shadcn reference target
2. decide whether the pattern is product-specific, recipe-level, shared, or primitive
3. implement it in the narrowest correct layer
4. preserve the approved visual and interaction craft unless the board explicitly
   changes it

### Exception handling

If a third-party or platform-specific exception is needed:

- document the reason
- keep it hidden behind `@fresh-ds/ui-core`, `@fresh-ds/ui`, or `@fresh-ds/recipes`
- avoid exposing implementation-specific APIs to product code

## Regression Protection

Before changing shared primitives, recipes, or core visual defaults, validate:

- `apps/starter`
- `apps/drugbook`
- relevant Storybook stories
- the targeted product extraction example if one exists

At minimum, protect:

- page header behavior
- grouped card/list surfaces
- primary action treatment
- form-field states
- selection and summary patterns
- dark-mode behavior
- desktop web rendering

## Rules For PMs, Designers, Engineers, And Agents

### PM

PM should define:

- workflow intent
- acceptance criteria
- core edge cases
- the representative product flows to preserve

PM should not define primitive or package boundaries directly.

### Design

Design should define:

- approved screen references
- states
- hierarchy
- motion intent
- extraction seams between product-specific and shared patterns

Design should work against the shared behavior model instead of inventing a new
interaction grammar per screen.

### Engineering

Engineering should define:

- the package boundary
- the primitive or recipe ownership layer
- regression protection
- implementation details hidden behind the shared system

Engineering should preserve product craft while moving patterns inward.

### Agents

Agents should:

1. treat `@fresh-ds/ui-core` as the only primitive runtime boundary
2. treat `@fresh-ds/ui` as the only shared component boundary
3. treat `@fresh-ds/recipes` as the default prototype extraction boundary
4. use `@fresh-ds/shadcn-reference` before changing look, feel, or interaction semantics
5. avoid direct third-party UI usage in product code
6. preserve approved visual output during internal migrations
7. validate the starter and playground after shared-boundary changes

## Definition Of Success

This strategy is successful when:

- product screens keep their intended craft while the shared system gets stricter
- product code mostly depends on `@fresh-ds/recipes` and `@fresh-ds/ui`, not raw primitives
- shared runtime decisions stay hidden behind package boundaries
- promotion work is incremental rather than disruptive
- engineering and agents make the same structural choices by default

## Short Version

Use `@fresh-ds/shadcn-reference` as the strict reference system, keep runtime UI behind
`@fresh-ds/ui-core`, `@fresh-ds/ui`, and `@fresh-ds/recipes`, treat direct product-level
primitive usage as debt, and preserve approved screen craft while moving shared
patterns inward one seam at a time.
