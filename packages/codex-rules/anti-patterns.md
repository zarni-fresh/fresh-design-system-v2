# Anti-Patterns

1. Do not import raw React Native primitives into product screens when an approved
   wrapper already exists.
2. Do not hardcode hex values, spacing numbers, radii, typography sizes, or shadow
   values outside `@fresh/tokens`.
3. Do not fork component variants inline for one screen. Add a shared variant or a new
   shared component instead.
4. Do not communicate validation or destructive intent through color alone.
5. Do not treat Storybook examples as throwaway code. They are part of the contract
   agents learn from.
6. Do not use `Badge` as a button, pill tab, or segmented control.
7. Do not use `Card` as the default wrapper for every section when `Stack` or `Box` is
   enough.
8. Do not put multiple competing primary buttons inside one form or card unless the
   flow truly has multiple primary outcomes.
9. Do not style product screens with raw `className` color utilities or ad hoc inline
   colors.
10. Do not add brand-specific naming before official Fresh branding lands. Stay
    neutral and semantic.
11. Do not treat hover-only desktop patterns as the default for shared components.
12. Do not create a second input abstraction when `TextField` already covers the
    current `Input` role.
13. Do not build boolean setting rows from raw `Pressable`; use `Switch` plus `Label`.
