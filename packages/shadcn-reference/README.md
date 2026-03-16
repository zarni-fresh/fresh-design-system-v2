# Shadcn Reference

This package is the strict reference layer for Fresh. It is not a runtime UI library.

Use it for:

- shadcn taxonomy alignment
- parity rules
- visual and interaction expectations
- approved platform adaptations
- explicit deviations from shadcn defaults

Do not use it for:

- importing runtime DOM code
- generating React Native components directly from shadcn internals
- bypassing the Fresh review and implementation workflow

## Parity Spec Format

Each reference spec should define:

- `referenceName`
- `freshMapping`
- `status`
- `visualParityTarget`
- `interactionParityTarget`
- `allowedPlatformAdaptations`
- `intentionalDeviations`
- `notes`

The default rule is:

match shadcn visually and behaviorally unless a documented platform adaptation or
deviation says otherwise.
