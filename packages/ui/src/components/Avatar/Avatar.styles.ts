import type { SemanticTheme } from '@fresh-ds/tokens';
import type { TextProps } from '@fresh-ds/ui-core';

export const avatarShapeOptions = ['circle', 'rounded'] as const;
export const avatarSizeOptions = ['sm', 'md', 'lg', 'xl'] as const;
export const avatarToneOptions = ['neutral', 'accent', 'success', 'warning', 'danger'] as const;

export type AvatarShape = (typeof avatarShapeOptions)[number];
export type AvatarSize = (typeof avatarSizeOptions)[number];
export type AvatarTone = (typeof avatarToneOptions)[number];

const avatarDimensionMap = {
  sm: 32,
  md: 36,
  lg: 44,
  xl: 56,
} as const;

const avatarTextSizeMap: Record<AvatarSize, TextProps['size']> = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
  xl: 'lg',
};

export const getAvatarMetrics = (
  theme: SemanticTheme,
  options: { shape: AvatarShape; size: AvatarSize }
) => {
  const dimension = avatarDimensionMap[options.size];

  return {
    borderRadius: options.shape === 'circle' ? theme.radius.pill : theme.radius.lg,
    dimension,
    textSize: avatarTextSizeMap[options.size],
  };
};

export const getAvatarPalette = (theme: SemanticTheme, tone: AvatarTone) => {
  if (tone === 'neutral') {
    return {
      background: theme.color.surface.subtle,
      border: theme.color.border.default,
      foreground: theme.color.content.primary,
    };
  }

  const feedbackTone = tone === 'accent' ? 'accent' : tone;
  const feedback = theme.color.feedback[feedbackTone];
  const contentKey = tone === 'accent' ? 'accent' : tone;

  return {
    background: feedback.background,
    border: feedback.border,
    foreground: theme.color.content[contentKey],
  };
};
