# Component Rules

Use `@fresh/recipes` first for prototype and screen-level composition. Reach for
`@fresh/ui` for shared reusable components, then `@fresh/ui-core` only when the higher
layers do not fit.

Visual baseline:

- Preserve the neutral, crisp, `new-york`-inspired recipe in
  `docs/visual-recipe.md`.

## Rules

1. Prefer approved recipe blocks first for polished prototypes, then approved shared
   components such as `Button`, `TextField`, `Card`, `Badge`, `Label`, `Switch`,
   `Progress`, `Avatar`, `Separator`, `Skeleton`, and `AspectRatio`.
2. If a screen needs a pattern more than once, propose a new shared component instead
   of duplicating layout locally.
3. Use semantic token intent, not raw color names, to decide tone and hierarchy.
4. Keep components composable: pass children and slot content instead of cloning APIs
   from existing product screens.
5. Every new component must ship with typed props, variants, examples, stories, tests,
   and a manifest JSON file.
6. In product screens, use `Stack` for layout, `Box` for simple containers, and `Text`
   for copy before reaching for raw React Native equivalents.
7. Use `Pressable` directly only inside shared components. Product screens should
   prefer approved components from `@fresh/ui`.
8. Do not import third-party UI packages directly into product screens when the same
   need should live behind the shared layer.
9. Preserve approved visual output while extracting or refactoring shared components.
   Do not redesign a product flow in the same change unless the board says to.

## Approval Gate

- Before implementing a new shared component, check `design/board-index.md` for an
  approved or active board covering the pattern.
- If the pattern is still only product-specific, do not automatically promote it into
  `@fresh/ui`.
- When extracting a pattern from a product surface, classify it first:
  cross-product, product-specific, or primitive.
- Shared component implementation should follow:
  approved board -> code -> manifest -> stories/examples -> tests -> Expo validation.
- When changing look and feel or interaction details, check `@fresh/shadcn-reference`
  first and document any allowed adaptation or deviation.
- If the work is boundary cleanup rather than a new design direction, keep screen-level
  craft stable and move the change inward.

## Existing Component Defaults

- `Button`
  Choose one primary action per surface when possible. Use `secondary` for supporting
  actions, `outline` or `ghost` for tertiary actions, and `destructive` only for
  irreversible intent.
- `TextField`
  Use for single-line text entry. Prefer visible labels, inline helper text, and inline
  error messaging.
- `Label`
  Use for visible field labels, switch labels, and short control descriptors.
- `Card`
  Use for grouped information or actions, not as a generic padding wrapper.
- `Badge`
  Use for compact status or metadata. Never use it as a tap target.
- `Switch`
  Use for immediate boolean settings. Pair it with `Label`.
- `Progress`
  Use for measurable completion, not generic loading.
- `Skeleton`
  Use when the layout is known but content is still loading.
- `Separator`
  Use to create quiet hierarchy inside dense surfaces.
- `Avatar`
  Use for identity markers with fallback initials.
- `AspectRatio`
  Use when media or preview frames need stable dimensions.

## Taxonomy Alias Rules

- If a request asks for shadcn `Input`, use `TextField`.
- If a request asks for shadcn `Typography`, use `@fresh/ui-core/Text` recipes.
- If a request asks for `Sonner`, plan against the shared `Toast` roadmap rather than
  creating a second notification system.

## Variant Discipline

- Add new variants only when the pattern repeats across screens.
- Name variants by intent, not by implementation details.
- When a new variant is added, update the component manifest and exported option arrays
  in the same change.
