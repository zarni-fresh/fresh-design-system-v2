# Accessibility

## Baseline Expectations

- Support light and dark mode with readable contrast.
- Provide visible labels for inputs and clear action text for buttons.
- Surface disabled, loading, and validation states through accessibility APIs where
  available.
- Do not rely on color alone for priority, status, or error communication.
- Ensure shared components remain usable on desktop web, including visible focus and
  keyboard-friendly interaction where relevant.

## Component Expectations

- `Button`: expose disabled and busy state, and use clear verbs.
- `TextField`: provide label or accessibility label, helper text, and readable errors.
- `Card`: keep content grouping logical and avoid placing unlabeled controls inside.
- `Badge`: keep text concise and meaningful when read aloud.

## Touch And Readability

- Keep interactive targets comfortably tappable.
- Prefer sentence-case copy and short supporting text.
- Use semantic tokens so contrast changes can be made centrally.
