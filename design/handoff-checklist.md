# Design Handoff Checklist

Use this checklist when moving an approved Pencil board into the codebase.

## Before Implementation

- The board has a clear name and is listed in `design/board-index.md`.
- The team agrees on whether the pattern is shared, product-specific, or primitive.
- Variants, states, and accessibility requirements are visible on the board.
- The board is specific enough to avoid screenshot-guessing during implementation.

## Code Translation

- Tokens are updated only if the board changes the visual system itself.
- Prototype-grade screen blocks can go into `@fresh-ds/recipes`.
- Shared primitives go into `@fresh-ds/ui-core`.
- Shared components go into `@fresh-ds/ui`.
- Product-specific patterns stay out of the shared library unless explicitly promoted.

## Required Shared Component Outputs

- typed props
- variants
- semantic token usage
- stories
- examples
- tests
- manifest JSON
- docs updates where needed

## Validation

- Validate the implementation in Expo playground.
- Confirm mobile-first behavior still works on desktop web.
- Confirm dark mode and accessibility states are represented.
- Update `packages/codex-rules` if the new pattern changes agent behavior.
