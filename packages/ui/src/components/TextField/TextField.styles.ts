import type { SemanticTheme } from '@fresh-ds/tokens';
import { cva } from '@fresh-ds/ui-core';
import type { TextProps } from '@fresh-ds/ui-core';

export const textFieldSizeOptions = ['sm', 'md', 'lg'] as const;
export type TextFieldSize = (typeof textFieldSizeOptions)[number];

export const textFieldShell = cva('w-full flex-row items-center border');

const textFieldMetricMap = {
  sm: {
    borderRadius: 'md',
    iconSize: 16,
    inputSize: 'md',
    labelSize: 'sm',
    minHeight: 40,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  md: {
    borderRadius: 'lg',
    iconSize: 16,
    inputSize: 'md',
    labelSize: 'sm',
    minHeight: 44,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  lg: {
    borderRadius: 'xl',
    iconSize: 18,
    inputSize: 'lg',
    labelSize: 'md',
    minHeight: 48,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
} as const satisfies Record<
  TextFieldSize,
  {
    borderRadius: keyof SemanticTheme['radius'];
    iconSize: number;
    inputSize: TextProps['size'];
    labelSize: 'sm' | 'md';
    minHeight: number;
    paddingHorizontal: number;
    paddingVertical: number;
  }
>;

export const getTextFieldMetrics = (theme: SemanticTheme, size: TextFieldSize) => {
  const metrics = textFieldMetricMap[size];

  return {
    ...metrics,
    borderRadius: theme.radius[metrics.borderRadius],
    lineHeight: theme.typography.lineHeight[metrics.inputSize],
    fontSize: theme.typography.fontSize[metrics.inputSize],
  };
};
