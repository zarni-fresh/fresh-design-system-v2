# Usage Guidelines

## Choose The Right Layer

- Use `@fresh-ds/ui` for branded product UI.
- Use `@fresh-ds/ui-core` when composing a new shared pattern or primitive layout.
- Use `@fresh-ds/tokens` only when defining or evolving system values, not in product
  screens.

## Screen Composition

- Build screen structure with `Stack`, `Card`, and `Text`.
- Use `Button` for actions, `TextField` for single-line input, `Badge` for compact
  state, `Switch` for boolean settings, and `Progress` for measurable completion.
- Use `Label` with field-like controls, `Skeleton` for loading structure, and
  `Separator` for low-noise hierarchy.
- Keep spacing consistent through primitives and component APIs rather than inline style.
- Start from mobile layouts, then confirm the same screen works on desktop web in the
  Expo playground.

## Runtime Baseline

- Treat Expo development builds as the main device workflow.
- Use `apps/expo-playground` as the canonical validation surface.
- Keep Storybook light and focused on component browsing, not as the primary source of
  truth.

## Variants

- Reach for existing variants before creating a new component branch.
- Add a new variant only when the behavior or hierarchy is stable across multiple
  surfaces.
- Update examples, stories, tests, and manifests whenever a variant changes.

## Taxonomy Alignment

- Treat the shadcn catalog as a reference taxonomy, not a copy target.
- Use [`shadcn-taxonomy.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/shadcn-taxonomy.md)
  when a request names a shadcn component directly.
- Prefer Fresh component names in code even when the originating request uses shadcn
  terminology.
