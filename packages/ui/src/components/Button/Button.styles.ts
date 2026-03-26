import type { SemanticTheme } from '@fresh-ds/tokens';
import { cva, getActionPalette } from '@fresh-ds/ui-core';
import type { TextProps } from '@fresh-ds/ui-core';

export const buttonVariantOptions = [
  'primary',
  'secondary',
  'outline',
  'ghost',
  'destructive',
] as const;

export const buttonSizeOptions = ['sm', 'md', 'lg'] as const;

export type ButtonVariant = (typeof buttonVariantOptions)[number];
export type ButtonSize = (typeof buttonSizeOptions)[number];

export const buttonLayout = cva('flex-row items-center justify-center border', {
  variants: {
    fullWidth: {
      false: '',
      true: 'w-full',
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

const buttonMetricMap = {
  sm: {
    borderRadius: 'md',
    gap: 1.5,
    iconSize: 15,
    minHeight: 36,
    paddingHorizontal: 12,
    paddingVertical: 8,
    textSize: 'sm',
  },
  md: {
    borderRadius: 'lg',
    gap: 2,
    iconSize: 16,
    minHeight: 40,
    paddingHorizontal: 16,
    paddingVertical: 10,
    textSize: 'md',
  },
  lg: {
    borderRadius: 'lg',
    gap: 2,
    iconSize: 18,
    minHeight: 44,
    paddingHorizontal: 18,
    paddingVertical: 12,
    textSize: 'lg',
  },
} as const satisfies Record<
  ButtonSize,
  {
    borderRadius: keyof SemanticTheme['radius'];
    gap: number;
    iconSize: number;
    minHeight: number;
    paddingHorizontal: number;
    paddingVertical: number;
    textSize: TextProps['size'];
  }
>;

export const getButtonMetrics = (theme: SemanticTheme, size: ButtonSize) => {
  const metrics = buttonMetricMap[size];

  return {
    ...metrics,
    borderRadius: theme.radius[metrics.borderRadius],
  };
};

export const getButtonPalette = (theme: SemanticTheme, variant: ButtonVariant) => {
  return getActionPalette(theme, variant);
};
