# Design Workflow

## Purpose

Fresh Design System now uses a cross-functional workflow:

- A design canvas is the visual alignment and review surface.
- Code is the implementation and distribution contract.

This keeps design discussion flexible without letting visual files become the only
place where a component definition lives.

Pencil is the current preferred canvas, but another canvas can be used when the team
explicitly names it and reviews from the same source.

## Board Types

Use design boards intentionally:

1. Foundations boards
   Token direction, surface language, spacing rhythm, and visual recipe.
2. Product extraction boards
   Real UI patterns pulled from product surfaces such as Drugbook and Form Builder.
3. Component anatomy boards
   Shared component structure, variants, states, and accessibility notes.
4. Cross-product strategy boards
   Classification into shared, product-specific, and primitive candidates.

## Default Workflow

1. Choose the canvas and target screens for the work.
2. Review or create the relevant board.
3. Record it in `design/board-index.md`.
4. Decide whether the pattern is:
   shared cross-product, product-specific, or primitive.
5. If shared or foundational, use `design/handoff-checklist.md` to translate it into:
   recipes, tokens, component APIs, manifests, stories, examples, tests, and docs.
6. Build the actual app surface in code from those approved screens.
7. Validate in Expo playground and, when helpful, Storybook.
8. Continue iterating in code while keeping the canvas and implementation aligned.
9. Preserve the approved screen craft while extracting. Do not redesign and promote in
   the same move unless the board explicitly calls for a new direction.

## Promotion Rules

- Prototype-grade screen blocks belong in `@fresh-ds/recipes`.
- Shared components belong in `@fresh-ds/ui`.
- Primitive building blocks and theme plumbing belong in `@fresh-ds/ui-core`.
- Product-specific patterns should stay outside the shared component layer until they
  are repeated enough to justify promotion.
- Third-party UI packages should only appear behind those shared layers, never in
  product screens by default.

## Source Of Truth Policy

- The chosen design canvas is for review, alignment, and exploration.
- Code is for authority, reuse, and machine-readable contracts.
- No approved token, shared component, or interaction rule is finished until it is
  represented in code and documentation.
