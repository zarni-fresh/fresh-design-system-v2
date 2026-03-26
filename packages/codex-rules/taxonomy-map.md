# Taxonomy Map

Use the shadcn catalog as the target naming taxonomy, but map requests into Fresh's
React Native component system instead of attempting a literal web port.

## Current Approved Mappings

- `Input` -> `TextField`
- `Typography` -> `@fresh-ds/ui-core/Text` plus documented content recipes
- `Sonner` -> future `Toast` system, not a separate duplicate abstraction

## Current Approved Foundational Set

- `AspectRatio`
- `Avatar`
- `Badge`
- `Button`
- `Card`
- `Label`
- `Progress`
- `Separator`
- `Skeleton`
- `Switch`
- `TextField`

## Deterministic Selection Rules

1. If a requested pattern maps to an approved component above, use the Fresh component
   name in generated code.
2. If the request uses shadcn terminology, preserve that term in comments, docs, or
   planning only when it helps orientation; do not force it into public APIs unless the
   Fresh API intentionally adopts it.
3. If a requested component is marked `native-adapted`, prefer the documented Fresh
   rollout plan over inventing a quick web-shaped approximation.
4. If a requested component is marked `web-specific/defer`, do not create a cross-
   platform shared component inline. Flag it for the roadmap instead.

## High-Risk Areas

- Hover-only interactions should not be the default behavior for shared components.
- Desktop menu bars, context menus, and resizable panes require explicit justification.
- Form controls must keep visible labels and accessibility state in sync.
