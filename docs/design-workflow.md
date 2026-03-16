# Design Workflow

## Purpose

Fresh Design System now uses a cross-functional workflow:

- Pencil is the visual alignment and review surface.
- Code is the implementation and distribution contract.

This keeps design discussion flexible without letting visual files become the only
place where a component definition lives.

## Board Types

Use Pencil boards intentionally:

1. Foundations boards
   Token direction, surface language, spacing rhythm, and visual recipe.
2. Product extraction boards
   Real UI patterns pulled from product surfaces such as Drugbook and Form Builder.
3. Component anatomy boards
   Shared component structure, variants, states, and accessibility notes.
4. Cross-product strategy boards
   Classification into shared, product-specific, and primitive candidates.

## Default Workflow

1. Review or create the relevant Pencil board.
2. Record it in `design/board-index.md`.
3. Decide whether the pattern is:
   shared cross-product, product-specific, or primitive.
4. If shared or foundational, use `design/handoff-checklist.md` to translate it into:
   tokens, component APIs, manifests, stories, examples, tests, and docs.
5. Implement in code.
6. Validate in Expo playground and, when helpful, Storybook.

## Promotion Rules

- Shared components belong in `@fresh/ui`.
- Primitive building blocks and theme plumbing belong in `@fresh/ui-core`.
- Product-specific patterns should stay outside the shared component layer until they
  are repeated enough to justify promotion.

## Source Of Truth Policy

- Pencil is for review, alignment, and exploration.
- Code is for authority, reuse, and machine-readable contracts.
- No approved token, shared component, or interaction rule is finished until it is
  represented in code and documentation.
