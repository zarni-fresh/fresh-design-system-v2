# Icon Catalog

Fresh uses [Lucide](https://lucide.dev/) as its icon library, wrapped by the `Icon`
primitive in `@fresh/ui-core`.

## Approved Icons

| Name            | Lucide Source | Typical Use                            |
| --------------- | ------------- | -------------------------------------- |
| `alert-circle`  | AlertCircle   | Validation errors, warnings            |
| `check`         | Check         | Selection indicators, success          |
| `chevron-right` | ChevronRight  | Navigation, disclosure, back (rotated) |
| `loader-circle` | LoaderCircle  | Loading spinners                       |
| `moon`          | MoonStar      | Dark mode toggle                       |
| `search`        | Search        | Search fields                          |
| `sun`           | Sun           | Light mode toggle                      |
| `x`             | X             | Close, dismiss, clear                  |

## Sizing Rules

| Context        | Size | Example                                          |
| -------------- | ---- | ------------------------------------------------ |
| Default        | 16px | Inline with body text, button icons at `md` size |
| Small controls | 15px | Button icons at `sm` size                        |
| Hero or status | 18px | Button icons at `lg` size, standalone indicators |

Icons should align to text rhythm and never visually outweigh labels.

## Usage

Prefer registered string names over raw Lucide imports. String names are deterministic
and keep the approved set explicit.

```tsx
import { Icon } from '@fresh/ui-core';

// Preferred: string name
<Icon icon="check" size={16} tone="success" />;

// Also valid: direct Lucide import (for icons not yet in the registry)
import { Heart } from 'lucide-react-native';
<Icon icon={Heart} size={16} tone="default" />;
```

## Props

| Prop                 | Type                     | Default     | Description                                                                |
| -------------------- | ------------------------ | ----------- | -------------------------------------------------------------------------- |
| `icon`               | `IconName \| LucideIcon` | required    | Registered name or Lucide component                                        |
| `size`               | `number`                 | `16`        | Icon dimensions in pixels                                                  |
| `tone`               | `TextTone`               | `'default'` | Semantic color (default, muted, inverse, accent, danger, success, warning) |
| `color`              | `string`                 | —           | Override color (bypasses tone)                                             |
| `strokeWidth`        | `number`                 | `2`         | Lucide stroke width                                                        |
| `decorative`         | `boolean`                | `true`      | If true, hidden from screen readers                                        |
| `accessibilityLabel` | `string`                 | —           | Required when `decorative` is false                                        |

## Accessibility

- Icons are **decorative by default** (`decorative={true}`), meaning they are hidden from
  screen readers. This is correct when the icon accompanies a visible label.
- Set `decorative={false}` and provide `accessibilityLabel` when the icon is the only way
  to convey meaning (e.g., a standalone close button without visible text).

## Adding New Icons

1. Import the Lucide icon in `packages/ui-core/src/primitives/Icon.tsx`
2. Add it to the `iconMap` object with a kebab-case key
3. The `IconName` type and `iconNames` array update automatically
4. Rebuild with `npm run build` in the `packages/ui-core` directory

Keep the registry intentionally small. Only add icons that are used across multiple
screens or components.
