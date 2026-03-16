import type { SemanticTheme } from '@fresh/tokens';
import { getFeedbackPalette } from '@fresh/ui-core';

export const progressSizeOptions = ['sm', 'md', 'lg'] as const;
export const progressVariantOptions = ['neutral', 'accent', 'success', 'warning', 'danger'] as const;

export type ProgressSize = (typeof progressSizeOptions)[number];
export type ProgressVariant = (typeof progressVariantOptions)[number];

const progressHeightMap = {
  sm: 4,
  md: 6,
  lg: 8,
} as const;

export const getProgressMetrics = (size: ProgressSize) => {
  return {
    borderRadius: progressHeightMap[size] / 2,
    height: progressHeightMap[size],
  };
};

export const getProgressPalette = (theme: SemanticTheme, variant: ProgressVariant) => {
  if (variant === 'neutral') {
    return {
      fill: theme.color.action.secondary.backgroundPressed,
      label: theme.color.content.secondary,
      track: theme.color.surface.disabled,
    };
  }

  if (variant === 'accent') {
    return {
      fill: theme.color.action.primary.background,
      label: theme.color.content.primary,
      track: theme.color.surface.subtle,
    };
  }

  const feedback = getFeedbackPalette(theme, variant);

  return {
    fill: feedback.backgroundStrong,
    label: feedback.foreground,
    track: feedback.background,
  };
};
