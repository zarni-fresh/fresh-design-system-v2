import type { SemanticTheme } from '@fresh/tokens';
import type { TextProps } from '@fresh/ui-core';

export const avatarShapeOptions = ['circle', 'rounded'] as const;
export const avatarSizeOptions = ['sm', 'md', 'lg', 'xl'] as const;
export const avatarToneOptions = ['neutral', 'accent'] as const;

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

export const getAvatarMetrics = (theme: SemanticTheme, options: { shape: AvatarShape; size: AvatarSize }) => {
  const dimension = avatarDimensionMap[options.size];

  return {
    borderRadius: options.shape === 'circle' ? theme.radius.pill : theme.radius.lg,
    dimension,
    textSize: avatarTextSizeMap[options.size],
  };
};

export const getAvatarPalette = (theme: SemanticTheme, tone: AvatarTone) => {
  if (tone === 'accent') {
    return {
      background: theme.color.feedback.accent.background,
      border: theme.color.feedback.accent.border,
      foreground: theme.color.content.accent,
    };
  }

  return {
    background: theme.color.surface.subtle,
    border: theme.color.border.default,
    foreground: theme.color.content.primary,
  };
};
