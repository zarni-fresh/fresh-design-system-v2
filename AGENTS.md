# Agent Instructions

This repository is the canonical source of truth for Fresh React Native UI.

Primary environment:

- `apps/starter` is the default working environment.
- Expo development builds are the serious device baseline.
- Desktop web support is required, but implementation remains mobile-first.
- Preserve the visual recipe in `docs/visual-recipe.md`.
- Major shared UI decisions should start from approved Pencil boards tracked in
  `design/board-index.md`.
- Treat the design canvas as the starting point for new app work. Pencil is preferred,
  but another canvas can be used if the user explicitly names it.

## Non-Negotiable Rules

1. For prototyping and screen composition, use approved blocks from `@fresh-ds/recipes`
   first. For shared reusable component work, use `@fresh-ds/ui`, then `@fresh-ds/ui-core`.
2. Do not use raw React Native primitives in product screens when a wrapper exists.
3. Do not hardcode hex colors, spacing values, radii, font sizes, motion timings, or
   shadow values outside `@fresh-ds/tokens`.
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
12. Do not promote a product-specific extracted pattern into `@fresh-ds/ui` until it is
    approved as canonical or proven reusable across multiple product surfaces.
13. Do not import third-party UI packages directly into product screens when the same
    need belongs behind `@fresh-ds/ui-core`, `@fresh-ds/ui`, or `@fresh-ds/recipes`.
14. Preserve approved visual and interaction craft during extraction or migration work.
    Do not redesign a source flow while moving it inward unless the board explicitly
    changes the direction.
15. Do not ship compressed or squashed layouts. If the screen feels cramped, fix
    spacing, grouping, and outer padding before adding more UI.

## Working Pattern

1. Check `design/board-index.md` for approved anatomy before changing a shared pattern.
2. Start from the approved canvas screen or board, then move into code.
3. For prototypes, start in `@fresh-ds/recipes`.
4. For shared reusable components, start in `@fresh-ds/ui`.
5. Drop to `@fresh-ds/ui-core` only when a shared primitive composition is still needed.
6. Use `@fresh-ds/shadcn-reference` to validate parity targets and allowed platform
   adaptations before changing look and feel.
7. If neither layer fits a repeated product need, propose a new shared component before
   shipping the screen.
8. When component or recipe APIs change, update stories, examples, tests, docs, and
   manifests in the same change.
9. Validate user-facing changes in the Expo playground before treating them as done.
10. After shared-boundary changes, validate the closest starter or product example in
    addition to isolated component stories.

## Default Component Choices

- Use `Stack` for layout, `Box` for simple containers, and `Text` for all readable copy.
- Use `Pressable` only inside new shared components, not directly in product screens.
- Use `Button` for actions, `TextField` for short text entry, `Card` for grouped
  surfaces, `Badge` for compact status or metadata, `Label` for field labels,
  `Switch` for boolean settings, `Progress` for measurable completion, `Skeleton` for
  loading structure, `Avatar` for identity markers, `Separator` for section division,
  and `AspectRatio` for fixed media frames.
- Shadcn taxonomy aliases:
  `Input` maps to `TextField`, `Typography` maps to `@fresh-ds/ui-core/Text` recipes, and
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
- If a requested change is really an internal boundary cleanup, keep feature-level UI
  output stable while making the change.
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
- Before calling a layout done, check that outer padding, section gaps, and card
  padding are not compressed below the visual recipe guardrails.

## Package Map

- `packages/tokens`: raw and semantic token authority
- `packages/shadcn-reference`: strict shadcn parity specs and adaptation rules
- `packages/recipes`: prototype lane and polished screen blocks
- `packages/ui-core`: native primitives, theming, and utilities
- `packages/ui`: branded component layer and manifest registry
- `packages/codex-rules`: agent guidance and anti-patterns

## Guardrails For Generated UI

- Default to `@fresh-ds/recipes` when building prototype screens. Drop to `Button`,
  `TextField`, `Card`, and `Badge` when composing lower-level shared UI.
- Prefer the approved foundational set before planning a new shared abstraction:
  `AspectRatio`, `Avatar`, `Badge`, `Button`, `Card`, `Label`, `Progress`,
  `Separator`, `Skeleton`, `Switch`, `TextField`.
- Keep copy concise and use sentence case unless a product term requires otherwise.
- Preserve minimum tap target intent and visible validation feedback.
- Default mobile screen edge padding should usually be `16px` to `20px`, not smaller.
- Default section-to-section spacing should usually be `16px` to `24px`.
- Default card padding should usually be `16px` to `20px`.
- Never treat `/design` as the source of truth. It is companion review material, not
  the implementation contract.
- Treat `/design` as the review and approval layer. It informs implementation but does
  not replace the code contract.
- Keep visual tone crisp, modern, and brand-neutral until official brand tokens land.
- Use exported variant option arrays and manifests as the preferred source for allowed
  states and variants when generating code.
- Treat `@fresh-ds/shadcn-reference` as strict parity guidance, not a runtime dependency.
- When a requested shadcn pattern is not approved yet, check
  `docs/shadcn-taxonomy.md` before improvising a new cross-platform component.
