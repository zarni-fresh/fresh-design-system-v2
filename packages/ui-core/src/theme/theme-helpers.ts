import type { RawTokens, SemanticTheme } from '@fresh-ds/tokens';

export type TextTone =
  | 'default'
  | 'muted'
  | 'inverse'
  | 'accent'
  | 'danger'
  | 'success'
  | 'warning';

export type SurfaceTone =
  | 'default'
  | 'subtle'
  | 'elevated'
  | 'accent'
  | 'disabled'
  | 'danger'
  | 'success'
  | 'warning';

export type BorderTone =
  | 'default'
  | 'strong'
  | 'input'
  | 'focus'
  | 'disabled'
  | 'accent'
  | 'danger'
  | 'success'
  | 'warning';

export type ElevationLevel = 0 | 1 | 2 | 3;
export type FeedbackTone = 'neutral' | 'accent' | 'danger' | 'success' | 'warning';
export type ActionTone = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type SpaceToken = keyof RawTokens['spacing'];

export const resolveSpace = (theme: SemanticTheme, value: SpaceToken | number) => {
  return typeof value === 'number' ? value : theme.spacing[value];
};

export const getTextColor = (theme: SemanticTheme, tone: TextTone = 'default') => {
  const toneMap: Record<TextTone, string> = {
    default: theme.color.content.primary,
    muted: theme.color.content.secondary,
    inverse: theme.color.content.inverse,
    accent: theme.color.content.accent,
    danger: theme.color.content.danger,
    success: theme.color.content.success,
    warning: theme.color.content.warning,
  };

  return toneMap[tone];
};

export const getSurfaceColor = (theme: SemanticTheme, tone: SurfaceTone = 'default') => {
  const toneMap: Record<SurfaceTone, string> = {
    default: theme.color.surface.default,
    subtle: theme.color.surface.subtle,
    elevated: theme.color.surface.elevated,
    accent: theme.color.surface.accent,
    disabled: theme.color.surface.disabled,
    danger: theme.color.feedback.danger.background,
    success: theme.color.feedback.success.background,
    warning: theme.color.feedback.warning.background,
  };

  return toneMap[tone];
};

export const getBorderColor = (theme: SemanticTheme, tone: BorderTone = 'default') => {
  const toneMap: Record<BorderTone, string> = {
    default: theme.color.border.default,
    strong: theme.color.border.strong,
    input: theme.color.border.input,
    focus: theme.color.border.focus,
    disabled: theme.color.border.disabled,
    accent: theme.color.border.accent,
    danger: theme.color.feedback.danger.border,
    success: theme.color.feedback.success.border,
    warning: theme.color.feedback.warning.border,
  };

  return toneMap[tone];
};

export const getFeedbackPalette = (theme: SemanticTheme, tone: FeedbackTone = 'neutral') =>
  theme.color.feedback[tone];

export const getActionPalette = (theme: SemanticTheme, tone: ActionTone = 'primary') =>
  theme.color.action[tone];

export const getInputPalette = (
  theme: SemanticTheme,
  options?: {
    disabled?: boolean;
    invalid?: boolean;
    focused?: boolean;
  }
) => {
  const disabled = options?.disabled ?? false;
  const invalid = options?.invalid ?? false;
  const focused = options?.focused ?? false;

  return {
    background: disabled ? theme.color.input.backgroundDisabled : theme.color.input.background,
    border: invalid
      ? theme.color.input.borderInvalid
      : focused
        ? theme.color.input.borderFocus
        : theme.color.input.border,
    placeholder: theme.color.input.placeholder,
    text: disabled ? theme.color.content.disabled : theme.color.input.text,
  };
};

export const getElevationStyle = (theme: SemanticTheme, level: ElevationLevel = 0) =>
  theme.elevation[level];

export const getFocusRingStyle = (
  theme: SemanticTheme,
  options?: {
    active?: boolean;
    color?: string;
  }
) => {
  const active = options?.active ?? false;

  return {
    shadowColor: options?.color ?? theme.color.border.focus,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: active ? (theme.mode === 'dark' ? 0.34 : 0.16) : 0,
    shadowRadius: active ? theme.radius.xl : 0,
  };
};
