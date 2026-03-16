# Agent Instructions

This repository is the canonical source of truth for Fresh React Native UI.

Primary environment:

- `apps/expo-playground` is the default working environment.
- Expo development builds are the serious device baseline.
- Desktop web support is required, but implementation remains mobile-first.
- Preserve the visual recipe in `docs/visual-recipe.md`.
- Major shared UI decisions should start from approved Pencil boards tracked in
  `design/board-index.md`.

## Non-Negotiable Rules

1. Use only approved components from `@fresh/ui` or primitives from `@fresh/ui-core`.
2. Do not use raw React Native primitives in product screens when a wrapper exists.
3. Do not hardcode hex colors, spacing values, radii, font sizes, motion timings, or
   shadow values outside `@fresh/tokens`.
4. Use semantic tokens only. Product code should express intent, not raw palette
   choices.
5. Prefer composition over one-off custom UI. If a pattern is missing, propose or add a
   shared component instead of improvising inline.
6. Every new component must include typed props, variants, a manifest JSON file,
   examples, stories, and tests.
7. Dark mode support is required by default.
8. Accessibility is required by default. Include labels, hints, state exposure, and
   non-color cues where applicable.
9. Support both mobile and desktop web when building shared UI. Do not ship
   mobile-only assumptions into reusable components.
10. Inline styles in product screens are layout glue only. Visual styling belongs in
    shared components and must resolve through semantic tokens.
11. For a new shared component or major visual refactor, do not improvise final
    anatomy directly in code. Start from an approved board or create one first.
12. Do not promote a product-specific extracted pattern into `@fresh/ui` until it is
    approved as canonical or proven reusable across multiple product surfaces.

## Working Pattern

1. Start in `@fresh/ui` and use existing component manifests to decide fit.
2. Check `design/board-index.md` for approved anatomy before changing a shared pattern.
3. Drop to `@fresh/ui-core` only when a shared primitive composition is still needed.
4. If neither layer fits a repeated product need, propose a new shared component before
   shipping the screen.
5. When component APIs change, update stories, examples, tests, docs, and manifests in
   the same change.
6. Validate user-facing changes in the Expo playground before treating them as done.

## Default Component Choices

- Use `Stack` for layout, `Box` for simple containers, and `Text` for all readable copy.
- Use `Pressable` only inside new shared components, not directly in product screens.
- Use `Button` for actions, `TextField` for short text entry, `Card` for grouped
  surfaces, `Badge` for compact status or metadata, `Label` for field labels,
  `Switch` for boolean settings, `Progress` for measurable completion, `Skeleton` for
  loading structure, `Avatar` for identity markers, `Separator` for section division,
  and `AspectRatio` for fixed media frames.
- Shadcn taxonomy aliases:
  `Input` maps to `TextField`, `Typography` maps to `@fresh/ui-core/Text` recipes, and
  `Sonner` should resolve into the shared `Toast` system once it lands.
- `Button` hierarchy:
  Use `primary` for the main action on a surface, `secondary` for supporting actions,
  `outline` or `ghost` for tertiary actions, and `destructive` only for irreversible
  intent.
- `Badge` is informational only. If something should be tapped, it should not be a
  Badge.
- `Card` should use `CardHeader`, `CardContent`, and `CardFooter` when structure is
  repeated enough to matter.
- `TextField` should have a visible label in product forms unless there is a strong
  accessibility reason to do otherwise.

## Deterministic Generation Rules

- Prefer the smallest approved primitive or component that already expresses the
  pattern. Do not compose three primitives when one shared component already exists.
- Shared component work should follow this order: approved board -> component spec ->
  code -> manifest/stories/tests -> Expo validation.
- Choose semantics first, then variants. Never pick a variant because it "looks close"
  to a random mock.
- Keep one primary action per card or form section unless the flow clearly requires
  more.
- Use semantic status language such as `success`, `warning`, and `danger`; do not
  invent tone names in product code.
- When a new shared variant is needed, add it centrally with tokens, tests, stories,
  examples, and manifest updates in one change.
- When a pattern is extracted from a product surface, classify it as cross-product,
  product-specific, or primitive before deciding where it belongs in the repo.

## Package Map

- `packages/tokens`: raw and semantic token authority
- `packages/ui-core`: native primitives, theming, and utilities
- `packages/ui`: branded component layer and manifest registry
- `packages/codex-rules`: agent guidance and anti-patterns

## Guardrails For Generated UI

- Default to `Button`, `TextField`, `Card`, and `Badge` before inventing a new pattern.
- Prefer the approved foundational set before planning a new shared abstraction:
  `AspectRatio`, `Avatar`, `Badge`, `Button`, `Card`, `Label`, `Progress`,
  `Separator`, `Skeleton`, `Switch`, `TextField`.
- Keep copy concise and use sentence case unless a product term requires otherwise.
- Preserve minimum tap target intent and visible validation feedback.
- Never treat `/design` as the source of truth. It is companion review material, not
  the implementation contract.
- Treat `/design` as the review and approval layer. It informs implementation but does
  not replace the code contract.
- Keep visual tone crisp, modern, and brand-neutral until official brand tokens land.
- Use exported variant option arrays and manifests as the preferred source for allowed
  states and variants when generating code.
- When a requested shadcn pattern is not approved yet, check
  `docs/shadcn-taxonomy.md` before improvising a new cross-platform component.
