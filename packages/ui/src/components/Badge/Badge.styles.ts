import type { SemanticTheme } from '@fresh/tokens';
import { cva, getFeedbackPalette } from '@fresh/ui-core';
import type { TextProps } from '@fresh/ui-core';

export const badgeVariantOptions = ['neutral', 'accent', 'success', 'warning', 'danger'] as const;

export const badgeEmphasisOptions = ['solid', 'subtle', 'outline'] as const;
export const badgeSizeOptions = ['sm', 'md'] as const;

export type BadgeVariant = (typeof badgeVariantOptions)[number];
export type BadgeEmphasis = (typeof badgeEmphasisOptions)[number];
export type BadgeSize = (typeof badgeSizeOptions)[number];

export const badgeLayout = cva('self-start border');

const badgeMetricMap = {
  sm: {
    borderRadius: 'md',
    paddingHorizontal: 8,
    paddingVertical: 3,
    textSize: 'xs',
  },
  md: {
    borderRadius: 'md',
    paddingHorizontal: 10,
    paddingVertical: 4,
    textSize: 'xs',
  },
} as const satisfies Record<
  BadgeSize,
  {
    borderRadius: keyof SemanticTheme['radius'];
    paddingHorizontal: number;
    paddingVertical: number;
    textSize: TextProps['size'];
  }
>;

export const getBadgeMetrics = (theme: SemanticTheme, size: BadgeSize) => {
  const metrics = badgeMetricMap[size];

  return {
    ...metrics,
    borderRadius: theme.radius[metrics.borderRadius],
  };
};

export const getBadgePalette = (
  theme: SemanticTheme,
  variant: BadgeVariant,
  emphasis: BadgeEmphasis
) => {
  const palette = getFeedbackPalette(theme, variant);

  if (emphasis === 'solid') {
    return {
      background: palette.backgroundStrong,
      border: palette.backgroundStrong,
      foreground: palette.foregroundStrong,
    };
  }

  if (emphasis === 'outline') {
    return {
      background: 'transparent',
      border: palette.border,
      foreground: palette.foreground,
    };
  }

  return {
    background: palette.background,
    border: palette.border,
    foreground: palette.foreground,
  };
};
