# Component Promotion Roadmap

## Purpose

This roadmap turns the approved design workflow into an engineering-facing backlog.
It translates the current Pencil boards into concrete promotion decisions for
`@fresh-ds/ui-core`, `@fresh-ds/ui`, and product-level implementation work.

Use this document together with:

- [`design/board-index.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/board-index.md)
- [`design/handoff-checklist.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/handoff-checklist.md)
- [`docs/shadcn-taxonomy.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/shadcn-taxonomy.md)

## Current Inputs

The current backlog is grounded in four active review boards:

- `Fresh Design System Foundations`
- `Drugbook Extracted Components`
- `Form Builder Extracted Components`
- `Cross Product Component Strategy`

## Promotion Rules

1. Promote foundational visual decisions into `@fresh-ds/tokens`, `@fresh-ds/ui-core`,
   `@fresh-ds/ui`, or `@fresh-ds/recipes` only after the board is approved.
2. Promote a product-derived pattern into `@fresh-ds/recipes` first when it improves
   prototyping and cross-functional review but is not yet stable enough for `@fresh-ds/ui`.
3. Promote a product-derived pattern into `@fresh-ds/ui` only if it is repeated across
   products, clearly canonical, or required for the lower-level design-system contract.
4. Keep product-specific composites out of the shared package until they are proven
   reusable.
5. If a pattern is mainly layout scaffolding, consider `@fresh-ds/ui-core` or app-level
   composition before creating a new shared component.
6. Do not redesign the originating product flow while promoting a pattern. Extraction
   should preserve approved craft unless the board explicitly changes it.
7. If a third-party or platform-specific implementation is needed, hide it behind the
   shared layer instead of exposing it to product code.

## Immediate Shared Candidates

These are the highest-leverage candidates to move from the current boards into the
repo backlog.

### Tier 1: Shared Cross-Product Candidates

These should be the next shared components if the team approves the anatomy.

| Candidate                               | Source boards          | Recommended home                                                        | Why it matters                                                                    | Notes                                                    |
| --------------------------------------- | ---------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `PageHeader`                            | Drugbook, Form Builder | `@fresh-ds/recipes` first, later `@fresh-ds/ui` if hardened             | Repeats across product surfaces and will stabilize page framing for AI generation | Should support title, description, metadata, and actions |
| `SectionHeader`                         | Drugbook, Form Builder | `@fresh-ds/recipes` first, later `@fresh-ds/ui` if hardened             | Common section framing pattern for cards, forms, and grouped lists                | Keep compact and composable                              |
| `StickyActionFooter`                    | Drugbook               | `@fresh-ds/recipes` first, later `@fresh-ds/ui` after a second use case | Useful but needs another product example before becoming canonical                | Likely mobile-first with responsive desktop behavior     |
| `EmptyState`                            | Form Builder           | `@fresh-ds/recipes` first, later `@fresh-ds/ui`                         | Very common shared pattern and helpful for agent determinism                      | Should support icon, title, body, and actions            |
| `PreviewPanel` or `BrowserPreviewShell` | Form Builder           | app-level first, later `@fresh-ds/recipes` if reused                    | Helpful pattern, but probably too product-shaped today                            | Keep out of shared layer for now                         |

### Tier 2: Primitive Or Shared Building Blocks

These should usually land before larger composites.

| Candidate                        | Source boards          | Recommended home                                     | Why it matters                                                           | Notes                                                    |
| -------------------------------- | ---------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| `IconButton`                     | Drugbook, Form Builder | `@fresh-ds/recipes` first, later `@fresh-ds/ui`      | Repeated utility action pattern that should not be improvised in screens | Needs strict size, focus, and accessibility rules        |
| `FilterBar`                      | Form Builder           | app-level first, with reusable primitives underneath | Common shape, but product-specific layout needs more evidence            | Split into smaller shared parts before promoting         |
| `FieldChip`                      | Form Builder           | `@fresh-ds/ui` if repeated, otherwise app-level      | Useful for metadata and filter pills                                     | Must not overlap semantically with `Badge`               |
| `QuantityStepperRow`             | Drugbook               | app-level first                                      | Promising pattern, but domain-specific at the moment                     | Could later break into `Stepper` and `LabeledStepperRow` |
| `SummaryList` or `SummaryTotals` | Drugbook, Form Builder | app-level first                                      | Useful but varies a lot by domain                                        | Better as a recipe before a shared component             |

### Tier 3: Product-Specific Patterns

These should stay outside the shared layer for now.

| Candidate                | Source boards | Recommended home                   | Reason                                    |
| ------------------------ | ------------- | ---------------------------------- | ----------------------------------------- |
| `ProductSelectionCard`   | Drugbook      | product code                       | Too domain-specific                       |
| `BatchOptionCard`        | Drugbook      | product code                       | Too domain-specific                       |
| `QuestionComposerDrawer` | Form Builder  | product code                       | Workflow-specific                         |
| `GroupedTablePanel`      | Form Builder  | product code until `Table` matures | Depends on future shared table primitives |
| `AppSidebarShell`        | Form Builder  | app code or future shell package   | Too app-architecture-specific today       |

## Recommended Sequence

This is the best next implementation order for engineering:

1. Approve `PageHeader`, `SectionHeader`, `EmptyState`, and `IconButton` in Pencil.
2. Turn those four into anatomy specs with states, variants, and accessibility notes.
3. Implement them in `@fresh-ds/recipes` first because they unlock prototyping and app
   review with low architecture risk.
4. Promote the stable subset into `@fresh-ds/ui` only after repeated product use.
5. Keep `StickyActionFooter`, `FilterBar`, and `SummaryTotals` as recipe or app-level
   patterns until they prove reusable across more than one product.

## Definition Of Promotion Ready

A component is ready to move from board to code when:

- the board is listed and approved in `design/board-index.md`
- the pattern is classified as shared, product-specific, or primitive
- anatomy, variants, states, and accessibility are explicit
- the team agrees which package should own it
- the extraction preserves the approved visual and interaction intent of the source
  product surface
- the implementation can satisfy the shared output checklist:
  typed props, semantic tokens, examples, stories, tests, manifest JSON, and docs

## What Engineering Should Review Next

For the next cross-functional review, engineering should focus on:

- whether `PageHeader` and `SectionHeader` are truly canonical
- whether `EmptyState` needs multiple densities or only one v1 contract
- whether `IconButton` should be standalone or a `Button` size and chrome variant
- which product patterns should remain recipes instead of being promoted too early
