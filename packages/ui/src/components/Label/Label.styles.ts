import type { SemanticTheme } from '@fresh/tokens';
import { cva } from '@fresh/ui-core';
import type { TextProps } from '@fresh/ui-core';

export const labelSizeOptions = ['sm', 'md', 'lg'] as const;
export const labelToneOptions = ['default', 'muted', 'danger'] as const;

export type LabelSize = (typeof labelSizeOptions)[number];
export type LabelTone = (typeof labelToneOptions)[number];

export const labelLayout = cva('flex-row items-center', {
  variants: {
    size: {
      sm: 'gap-1',
      md: 'gap-1',
      lg: 'gap-1.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const labelTextSizeMap: Record<LabelSize, TextProps['size']> = {
  sm: 'sm',
  md: 'sm',
  lg: 'md',
};

const labelTextWeightMap: Record<LabelSize, TextProps['weight']> = {
  sm: 'medium',
  md: 'medium',
  lg: 'medium',
};

export const getLabelTypography = (size: LabelSize) => {
  return {
    textSize: labelTextSizeMap[size],
    textWeight: labelTextWeightMap[size],
  };
};

export const getLabelColor = (theme: SemanticTheme, tone: LabelTone) => {
  switch (tone) {
    case 'danger':
      return theme.color.content.danger;
    case 'muted':
      return theme.color.content.secondary;
    case 'default':
    default:
      return theme.color.content.primary;
  }
};
