# Shadcn Taxonomy Migration Plan

Audit basis:

- Source: [shadcn/ui component catalog](https://ui.shadcn.com/docs/components)
- Audit date: March 14, 2026
- Goal: mirror the shadcn catalog as a Fresh taxonomy while keeping implementation
  React Native native-first, Expo-friendly, and manifest-driven.

## Classification Rules

- `native-ready`: the pattern maps cleanly to React Native and Expo without relying on
  DOM-only interaction models.
- `native-adapted`: the pattern is worth supporting, but it needs a React Native
  reinterpretation for input, focus, gesture, or overlay behavior.
- `web-specific/defer`: the pattern is heavily desktop or DOM shaped and should not
  enter shared packages until the native reinterpretation is intentional.

## Rollout Recommendation

Recommended next wave: `Wave 1: foundational`

Why:

- It expands the high-frequency building blocks that later waves will compose.
- It stays mostly `native-ready`, which keeps parity risk low.
- It improves AI/codegen determinism because common screen scaffolding can rely on
  explicit shared parts instead of ad hoc composition.

Wave 1 current coverage after this implementation:

- Existing: `Button`, `Badge`, `Card`, `Input -> TextField`
- Added here: `AspectRatio`, `Avatar`, `Label`, `Progress`, `Separator`,
  `Skeleton`, `Switch`

## Wave 1: Foundational

| Shadcn component | Fresh mapping | Classification | Recommended package path | Dependency assumptions | Implementation strategy | Platform-specific files | RN/web parity risks | Composition relationships |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Aspect Ratio | `AspectRatio` | native-ready | `packages/ui/src/components/AspectRatio/AspectRatio.tsx` | none | Wrap `Box` with `aspectRatio` style and tokenized radii | No | Child media may need its own web sizing rules | `Box`, `Card`, future media components |
| Avatar | `Avatar` | native-ready | `packages/ui/src/components/Avatar/Avatar.tsx` | none | Tokenized wrapper with image fallback and initials | No | Remote image loading parity and fallback timing | `Text`, `Badge`, `Card`, future list rows |
| Badge | `Badge` | native-ready | `packages/ui/src/components/Badge/Badge.tsx` | none | Keep current feedback-driven badge contract | No | Minimal | `Card`, `Button`, future alert and table rows |
| Button | `Button` | native-ready | `packages/ui/src/components/Button/Button.tsx` | none | Keep current action hierarchy and loading states | No | Hover and focus treatment differ by platform | `CardFooter`, `Dialog`, `Form`, `Sheet` |
| Card | `Card` | native-ready | `packages/ui/src/components/Card/Card.tsx` | none | Keep current structured surface with header/content/footer slots | No | Elevation perception differs across web and native | All grouped surfaces |
| Input | `TextField` for v1, later optional `Input` alias | native-ready | `packages/ui/src/components/TextField/TextField.tsx` | none | Preserve current field contract with label, helper, and validation | No | Caret and browser autofill behavior on web | `Label`, future `Form`, `Select`, `Textarea` |
| Label | `Label` | native-ready | `packages/ui/src/components/Label/Label.tsx` | none | Small typed wrapper around `Text` for field labels | No | Explicit field-to-label linking varies by platform | `TextField`, `Switch`, future `Checkbox` and `RadioGroup` |
| Progress | `Progress` | native-ready | `packages/ui/src/components/Progress/Progress.tsx` | none | Tokenized track plus fill with accessibility values | No | Animated progress can diverge later if added | `Card`, future `Toast`, upload flows |
| Separator | `Separator` | native-ready | `packages/ui/src/components/Separator/Separator.tsx` | none | Lightweight divider with orientation and emphasis | No | Vertical stretch can vary in flex layouts | `Card`, `DropdownMenu`, `Sidebar`, `Table` |
| Skeleton | `Skeleton` | native-ready | `packages/ui/src/components/Skeleton/Skeleton.tsx` | none | Static loading blocks first; pulse can be layered later | No | Animation strategy can diverge later if added | `Card`, `Avatar`, future list and table loading states |
| Switch | `Switch` | native-ready | `packages/ui/src/components/Switch/Switch.tsx` | none | Wrap RN `Switch` with controlled-state helper and tokens | No | Native switch chrome differs slightly across platforms | `Label`, future `Form`, settings screens |
| Typography | `Text` recipes, not a single wrapper yet | native-adapted | `packages/ui-core/src/primitives/Text.tsx` plus docs | none | Keep semantic text primitive plus documented content recipes | No | No DOM heading tags in shared RN primitives | Every content surface |

## Wave 2: Forms

| Shadcn component | Fresh mapping | Classification | Recommended package path | Dependency assumptions | Implementation strategy | Platform-specific files | RN/web parity risks | Composition relationships |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Checkbox | `Checkbox` | native-ready | `packages/ui/src/components/Checkbox/Checkbox.tsx` | none | Custom `Pressable` box with icon and controlled-state helper | No | Focus visuals and indeterminate state | `Label`, `Form`, `Card` |
| Form | `Form` | native-adapted | `packages/ui/src/components/Form/index.ts` | `react-hook-form` | Ship wrappers and field recipes, not a browser form clone | No | Validation timing and submit semantics across platforms | `Label`, `TextField`, `Checkbox`, `RadioGroup`, `Switch` |
| Input OTP | `InputOTP` | native-adapted | `packages/ui/src/components/InputOTP/InputOTP.tsx` | none | Compose multiple tokenized cells over controlled input state | Maybe `web` for keyboard edge cases | Keyboard, paste, and autofill parity | `Text`, `Label`, `Form` |
| Radio Group | `RadioGroup` | native-ready | `packages/ui/src/components/RadioGroup/RadioGroup.tsx` | none | Pressable indicators with group state and roving focus rules | No | Keyboard group navigation on web | `Label`, `Form`, `Card` |
| Select | `Select` | native-adapted | `packages/ui/src/components/Select/Select.tsx` | overlay primitives from Wave 3 | Use trigger plus bottom sheet or popover list, not DOM select | Maybe `web` trigger/menu refinements | Searchability, focus trap, and large lists | `Button`, `Label`, `Popover`, `Sheet` |
| Slider | `Slider` | native-adapted | `packages/ui/src/components/Slider/Slider.tsx` | `@react-native-community/slider` or custom track | Wrap proven native control with tokens and labels | Maybe `web` if custom thumb handling is needed | Pointer, keyboard, and step parity | `Label`, `Form`, `Progress` |
| Toggle | `Toggle` | native-ready | `packages/ui/src/components/Toggle/Toggle.tsx` | none | Pressable on or off button with selected state and future group support | No | Focus ring and pressed affordance need alignment | `Button`, future `ToggleGroup`, `Tabs` |
| Textarea | `Textarea` | native-ready | `packages/ui/src/components/Textarea/Textarea.tsx` | none | Multiline `TextField` specialization with stable field contract | No | Auto-grow behavior on web | `Label`, `Form`, `Card` |

## Wave 3: Overlays And Feedback

| Shadcn component | Fresh mapping | Classification | Recommended package path | Dependency assumptions | Implementation strategy | Platform-specific files | RN/web parity risks | Composition relationships |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Accordion | `Accordion` | native-adapted | `packages/ui/src/components/Accordion/Accordion.tsx` | none, optional `react-native-reanimated` later | Compose disclosure rows over `Collapsible` behavior | No | Animation smoothness and keyboard interaction | `Card`, `Separator`, `Text` |
| Alert | `Alert` | native-ready | `packages/ui/src/components/Alert/Alert.tsx` | none | Feedback surface built from tokens and icon slots | No | Minimal | `Badge`, `Button`, `Card`, `Separator` |
| Alert Dialog | `AlertDialog` | native-adapted | `packages/ui/src/components/AlertDialog/AlertDialog.tsx` | overlay primitives, optional gesture libs | Modal confirm flow, not browser alert semantics | Maybe `web` for focus trap tuning | Focus restore, escape handling, back button | `Dialog`, `Button`, `Card` |
| Collapsible | `Collapsible` | native-adapted | `packages/ui/src/components/Collapsible/Collapsible.tsx` | none, optional reanimated later | Controlled disclosure container with height transitions | No | Height measurement and animated content | `Accordion`, `Card`, `Separator` |
| Dialog | `Dialog` | native-adapted | `packages/ui/src/components/Dialog/Dialog.tsx` | overlay primitives, optional `react-native-portalize` | Shared modal surface with structured slots | Maybe `web` for focus trap tuning | Focus management and scroll locking | `Button`, `Card`, `Separator` |
| Drawer | `Drawer` | native-adapted | `packages/ui/src/components/Drawer/Drawer.tsx` | `react-native-gesture-handler`, optional `reanimated` | Bottom drawer for touch-first flows | Maybe `web` for side placement and escape handling | Gesture feel and viewport sizing | `Sheet`, `Dialog`, `Button` |
| Popover | `Popover` | native-adapted | `packages/ui/src/components/Popover/Popover.tsx` | overlay primitives | Anchored floating surface with fallback to sheet on small screens | Maybe `web` | Anchor positioning and keyboard dismissal | `Button`, `Select`, `Tooltip` |
| Sheet | `Sheet` | native-adapted | `packages/ui/src/components/Sheet/Sheet.tsx` | overlay primitives, gestures | Side or bottom panel abstraction over drawer/dialog primitives | Maybe `web` | Placement parity and navigation dismissal | `Button`, `Card`, `Sidebar` |
| Sonner | `Toast` with sonner-style API | native-adapted | `packages/ui/src/components/Toast/index.ts` | optional `react-native-toast-message` or custom portal | One toast system, not two overlapping abstractions | Maybe `web` | Queue timing, swipe dismiss, stacking | `Alert`, `Button`, `Progress` |
| Toast | `Toast` | native-adapted | `packages/ui/src/components/Toast/index.ts` | optional toast portal helper | Shared toast primitives and provider | Maybe `web` | Placement and dismissal behavior | `Alert`, `Button`, `Progress` |
| Tooltip | `Tooltip` | native-adapted | `packages/ui/src/components/Tooltip/Tooltip.tsx` | overlay primitives | Focus and long-press helper, not hover-only chrome | Maybe `web` | Hover absent on touch, delayed show behavior | `Button`, `Avatar`, `IconButton` |

## Wave 4: Navigation And Collections

| Shadcn component | Fresh mapping | Classification | Recommended package path | Dependency assumptions | Implementation strategy | Platform-specific files | RN/web parity risks | Composition relationships |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Breadcrumb | `Breadcrumb` | native-adapted | `packages/ui/src/components/Breadcrumb/Breadcrumb.tsx` | none | Compact path display with truncation and optional back affordance | Maybe `web` for hover tooltips | Small screens need truncation and alternative back UX | `Button`, `Text`, `Separator` |
| Pagination | `Pagination` | native-adapted | `packages/ui/src/components/Pagination/Pagination.tsx` | none | Page-stepper abstraction for desktop web and data-heavy screens | Maybe `web` | Mobile pagination often becomes load more or infinite scroll | `Button`, `Text`, `Table` |
| Scroll Area | `ScrollArea` | native-ready | `packages/ui/src/components/ScrollArea/ScrollArea.tsx` | none | Thin wrapper around `ScrollView` with consistent indicators | No | Scrollbar visuals vary by platform | `Table`, `Sidebar`, `Popover` |
| Sidebar | `Sidebar` | native-adapted | `packages/ui/src/components/Sidebar/Sidebar.tsx` | maybe `expo-router` adapters in apps only | Responsive rail or drawer container, not app-router-specific core | Maybe `web` and `native` layout adapters | Desktop persistent rail vs mobile drawer | `Button`, `Separator`, `Avatar`, `Badge` |
| Table | `Table` | native-adapted | `packages/ui/src/components/Table/index.ts` | none, optional `@shopify/flash-list` later | Scrollable row and cell primitives, not HTML table semantics | Maybe `web` for sticky headers | Dense grids and selection parity | `Badge`, `Button`, `Separator`, `ScrollArea` |
| Tabs | `Tabs` | native-ready | `packages/ui/src/components/Tabs/Tabs.tsx` | none | Controlled segmented navigation with accessible state | No | Scrollable tab lists on small screens | `Button`, `Card`, `Separator`, `Toggle` |

## Wave 5: Advanced Or Custom Reinterpretation

| Shadcn component | Fresh mapping | Classification | Recommended package path | Dependency assumptions | Implementation strategy | Platform-specific files | RN/web parity risks | Composition relationships |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Calendar | `Calendar` | native-adapted | `packages/ui/src/components/Calendar/Calendar.tsx` | likely `react-native-calendars` or custom grid | Tokenized calendar grid tuned for touch and keyboard | Maybe `web` | Date math, locale, keyboard, and selection density | `Popover`, `Sheet`, `Button` |
| Carousel | `Carousel` | native-adapted | `packages/ui/src/components/Carousel/Carousel.tsx` | `react-native-reanimated`, `react-native-gesture-handler` | Native snap list, not CSS scroll-snap clone | No | Gesture feel and desktop wheel parity | `Card`, `AspectRatio`, `Button` |
| Chart | `Chart` | native-adapted | `packages/ui/src/components/Chart/index.ts` | `react-native-svg`, optional `victory-native` | Build opinionated chart wrappers over one chart engine | Maybe `web` for tooltip behavior | Accessibility and performance for dense data | `Card`, `Badge`, `Tooltip` |
| Combobox | `Combobox` | native-adapted | `packages/ui/src/components/Combobox/Combobox.tsx` | overlay primitives, optional list virtualization | Searchable select using sheet or popover plus command-style list | Maybe `web` | Search, keyboard navigation, large datasets | `Select`, `Command`, `TextField` |
| Command | `Command` | native-adapted | `packages/ui/src/components/Command/Command.tsx` | overlay primitives, optional virtualization | Command palette and filtered list, not DOM listbox clone | Maybe `web` | Keyboard shortcuts and focus restore | `Dialog`, `Combobox`, `Input` |
| Context Menu | `ContextMenu` | web-specific/defer | `packages/ui/src/components/ContextMenu/ContextMenu.tsx` | overlay primitives, platform event adapters | Only ship after right-click and long-press behavior are unified | Yes, likely `web` and `native` | Right-click is web-specific; long-press needs native rethink | `DropdownMenu`, `Popover` |
| Data Table | `DataTable` | web-specific/defer | `packages/ui/src/components/DataTable/index.ts` | `@tanstack/table-core`, virtualization | Dense data table built after base `Table` is proven | Yes, likely `web` enhancements | Sorting, column resize, selection, and density | `Table`, `Pagination`, `Checkbox`, `Badge` |
| Date Picker | `DatePicker` | native-adapted | `packages/ui/src/components/DatePicker/DatePicker.tsx` | `Calendar`, maybe community datetime picker | Trigger plus calendar or native picker depending platform | Yes, likely `ios` or `android` escape hatches | Native pickers differ strongly from desktop web | `Input`, `Popover`, `Sheet`, `Button` |
| Dropdown Menu | `DropdownMenu` | native-adapted | `packages/ui/src/components/DropdownMenu/DropdownMenu.tsx` | overlay primitives | Anchored action menu that can fall back to sheet on touch | Maybe `web` | Pointer vs touch invocation | `Button`, `Separator`, `Popover` |
| Hover Card | `HoverCard` | web-specific/defer | `packages/ui/src/components/HoverCard/HoverCard.tsx` | overlay primitives | Defer until desktop web UX justifies a hover-only affordance | Yes, likely `web` | Hover does not exist on touch-first devices | `Avatar`, `Card`, `Popover` |
| Menubar | `Menubar` | web-specific/defer | `packages/ui/src/components/Menubar/Menubar.tsx` | overlay primitives | Defer until desktop app patterns are a real requirement | Yes, likely `web` | Desktop semantics and keyboard handling | `DropdownMenu`, `NavigationMenu` |
| Navigation Menu | `NavigationMenu` | web-specific/defer | `packages/ui/src/components/NavigationMenu/NavigationMenu.tsx` | overlay primitives | Defer until desktop information architecture needs it | Yes, likely `web` | Hover and complex flyouts are poor mobile defaults | `Button`, `Popover`, `Sidebar` |
| Resizable | `Resizable` | web-specific/defer | `packages/ui/src/components/Resizable/Resizable.tsx` | pointer event helpers, maybe gesture libs | Defer until desktop split-pane needs are explicit | Yes, likely `web` | Drag handles and cursor semantics are desktop-heavy | `Sidebar`, `Table`, `Sheet` |

## Naming Guidance For Agents

- Treat the shadcn catalog as the target taxonomy, not as a copy-paste source.
- Use Fresh component names when they are intentionally different:
  - `Input` maps to `TextField` in v1.
  - `Typography` maps to `@fresh/ui-core/Text` plus content recipes.
  - `Sonner` and `Toast` converge into one Fresh toast system.
- When a requested shadcn pattern is listed as `web-specific/defer`, do not improvise a
  shared cross-platform version inline. Propose the component as a planned addition
  instead.
