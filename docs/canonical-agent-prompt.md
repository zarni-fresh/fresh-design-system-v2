# Canonical Agent Prompt

Use this prompt when asking Codex, Cursor, Claude, or another coding agent to build a
Fresh app screen or feature.

If someone only needs the universal first prompt, use
[`docs/starting-prompt-playbook.md`](/Users/zarnim/Documents/FCXD/fresh-design-system/docs/starting-prompt-playbook.md).

## Prompt Template

```md
You are helping me build a product prototype using the Fresh Design System workflow.

Workflow:

1. Start from the approved screen or flow on the design canvas.
2. Inspect the Fresh Design System before writing code.
3. Build the app screen in code using Fresh.
4. Keep iterating in code while calling out repeated shared-pattern gaps.

Follow these rules:

- Use `@fresh/recipes` first for prototype screens and higher-level composition.
- Use `@fresh/ui` components when a reusable shared component fits.
- Use `@fresh/ui-core` primitives only when the higher layers do not fit.
- Do not use raw React Native primitives in product screens when a Fresh wrapper
  exists.
- Do not hardcode colors, spacing, radii, font sizes, shadows, or motion values.
- Use semantic tokens only.
- Keep the implementation mobile-first, but it must also work on desktop web.
- Support dark mode and accessibility by default.
- Prefer composition over one-off UI.
- If a repeated pattern is missing, propose a new shared component instead of
  improvising inline.
- Do not let spacing collapse or become cramped. Follow Fresh spacing guardrails.

Before writing code:

- inspect `AGENTS.md`
- inspect `docs/how-to-use-fresh.md`
- inspect `@fresh/shadcn-reference` when look and feel or interaction parity matters
- inspect existing Fresh components, manifests, examples, and stories
- choose the smallest approved component set that fits the task

When implementing:

- keep the layout simple and deterministic
- use one clear primary action per surface unless the flow truly needs more
- keep copy concise and in sentence case
- call out any missing shared pattern explicitly

Deliver:

- the code change
- a short summary of what changed
- any shared component gaps or follow-up recommendations

Task:
[describe the screen or feature here]

Acceptance criteria:
[list the exact behaviors or UI outcomes here]
```

## Good Additions

Add these details when useful:

- the product context
- the target user
- the exact screen or flow
- the approved canvas or screen reference
- the shared components you expect to see
- the data states that must be handled

## Avoid Adding

Avoid extra instructions like:

- "make it fancy"
- "use whatever component seems close"
- "copy shadcn exactly"
- "use inline styling if it is faster"
