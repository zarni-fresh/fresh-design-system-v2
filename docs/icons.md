# Icon Catalog

Fresh uses [Lucide](https://lucide.dev/) as its icon library, wrapped by the `Icon`
primitive in `@fresh-ds/ui-core`.

## Approved Icons

| Name              | Lucide Source  | Typical Use                   |
| ----------------- | -------------- | ----------------------------- |
| `alert-circle`    | AlertCircle    | Validation errors, warnings   |
| `arrow-left`      | ArrowLeft      | Back navigation               |
| `arrow-right`     | ArrowRight     | Forward navigation            |
| `check`           | Check          | Selection indicators, success |
| `chevron-down`    | ChevronDown    | Dropdown triggers, expand     |
| `chevron-left`    | ChevronLeft    | Back, previous                |
| `chevron-right`   | ChevronRight   | Navigation, disclosure        |
| `chevron-up`      | ChevronUp      | Collapse, scroll to top       |
| `copy`            | Copy           | Copy to clipboard             |
| `download`        | Download       | Download action               |
| `edit`            | Edit           | Edit, modify                  |
| `external-link`   | ExternalLink   | Open in new window            |
| `eye`             | Eye            | Show, visible                 |
| `eye-off`         | EyeOff         | Hide, password toggle         |
| `filter`          | Filter         | Filter lists                  |
| `heart`           | Heart          | Favourite, like               |
| `home`            | Home           | Home screen                   |
| `info`            | Info           | Information, help             |
| `loader-circle`   | LoaderCircle   | Loading spinners              |
| `log-out`         | LogOut         | Sign out                      |
| `mail`            | Mail           | Email, messages               |
| `menu`            | Menu           | Hamburger menu                |
| `minus`           | Minus          | Remove, decrease              |
| `moon`            | MoonStar       | Dark mode toggle              |
| `more-horizontal` | MoreHorizontal | Overflow menu (horizontal)    |
| `more-vertical`   | MoreVertical   | Overflow menu (vertical)      |
| `phone`           | Phone          | Phone, call                   |
| `plus`            | Plus           | Add, create                   |
| `search`          | Search         | Search fields                 |
| `settings`        | Settings       | Settings, preferences         |
| `share`           | Share          | Share action                  |
| `star`            | Star           | Rating, bookmark              |
| `sun`             | Sun            | Light mode toggle             |
| `trash`           | Trash          | Delete, remove                |
| `upload`          | Upload         | Upload action                 |
| `user`            | User           | Profile, account              |
| `x`               | X              | Close, dismiss, clear         |

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
import { Icon } from '@fresh-ds/ui-core';

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
