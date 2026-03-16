import type { SemanticTheme } from '@fresh/tokens';
import { cva, getBorderColor, getElevationStyle, getSurfaceColor } from '@fresh/ui-core';

export const cardVariantOptions = ['outlined', 'elevated', 'subtle'] as const;
export const cardPaddingOptions = ['sm', 'md', 'lg'] as const;

export type CardVariant = (typeof cardVariantOptions)[number];
export type CardPadding = (typeof cardPaddingOptions)[number];

export const cardLayout = cva('border');

const cardMetricMap = {
  sm: {
    padding: 16,
    radius: 'xl',
  },
  md: {
    padding: 20,
    radius: '2xl',
  },
  lg: {
    padding: 24,
    radius: '2xl',
  },
} as const satisfies Record<
  CardPadding,
  {
    padding: number;
    radius: keyof SemanticTheme['radius'];
  }
>;

export const getCardMetrics = (theme: SemanticTheme, padding: CardPadding) => {
  const metrics = cardMetricMap[padding];

  return {
    borderRadius: theme.radius[metrics.radius],
    padding: metrics.padding,
  };
};

export const getCardPalette = (theme: SemanticTheme, variant: CardVariant) => {
  switch (variant) {
    case 'elevated':
      return {
        backgroundColor: getSurfaceColor(theme, 'elevated'),
        borderColor: getBorderColor(theme, 'default'),
        shadow: getElevationStyle(theme, 2),
      };
    case 'subtle':
      return {
        backgroundColor: getSurfaceColor(theme, 'subtle'),
        borderColor: getBorderColor(theme, 'default'),
        shadow: getElevationStyle(theme, 0),
      };
    case 'outlined':
    default:
      return {
        backgroundColor: getSurfaceColor(theme, 'default'),
        borderColor: getBorderColor(theme, 'default'),
        shadow: getElevationStyle(theme, 1),
      };
  }
};
