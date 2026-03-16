# Migration And Adoption

## Suggested Rollout

1. Audit existing product screens for repeated patterns and hardcoded values.
2. Map visual values into `@fresh/tokens`.
3. Replace repeated inline patterns with `@fresh/ui` components.
4. Move remaining custom layouts onto `@fresh/ui-core` primitives.
5. Validate the migrated flows in Expo dev builds and desktop web.
6. Update agent prompts and local rules to point at this repo as the canonical source.
7. Use [`shadcn-taxonomy.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/shadcn-taxonomy.md)
   to decide whether a requested pattern is ready, adapted, or intentionally deferred.

## Adoption Checklist

- Product screens import from `@fresh/ui` by default.
- Hardcoded visual values are removed from screen code.
- Stories and examples cover the adopted patterns.
- Expo playground demonstrates the adopted patterns on mobile and desktop web.
- CI runs lint, typecheck, test, and build for the workspace.

## Design Review Companion

Use `/design` as the visual review and alignment layer for shared patterns. Track
boards in [`board-index.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/board-index.md),
move approved anatomy through the
[`handoff-checklist.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/design/handoff-checklist.md),
and land the final contract in code with tokens, component APIs, manifests, stories,
tests, and docs.
