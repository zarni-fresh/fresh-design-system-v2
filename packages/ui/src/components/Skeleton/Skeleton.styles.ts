import type { SemanticTheme } from '@fresh-ds/tokens';

export const skeletonShapeOptions = ['line', 'block', 'circle'] as const;
export const skeletonSizeOptions = ['sm', 'md', 'lg'] as const;
export const skeletonToneOptions = ['default', 'subtle'] as const;

export type SkeletonShape = (typeof skeletonShapeOptions)[number];
export type SkeletonSize = (typeof skeletonSizeOptions)[number];
export type SkeletonTone = (typeof skeletonToneOptions)[number];

const skeletonDimensions = {
  block: {
    sm: {
      height: 72,
      width: '100%',
    },
    md: {
      height: 96,
      width: '100%',
    },
    lg: {
      height: 128,
      width: '100%',
    },
  },
  circle: {
    sm: {
      height: 32,
      width: 32,
    },
    md: {
      height: 40,
      width: 40,
    },
    lg: {
      height: 56,
      width: 56,
    },
  },
  line: {
    sm: {
      height: 8,
      width: '100%',
    },
    md: {
      height: 12,
      width: '100%',
    },
    lg: {
      height: 14,
      width: '100%',
    },
  },
} as const;

export const getSkeletonMetrics = (shape: SkeletonShape, size: SkeletonSize) => {
  const metric = skeletonDimensions[shape][size];
  const borderRadius = shape === 'circle' ? 999 : shape === 'line' ? 999 : 12;

  return {
    borderRadius,
    height: metric.height,
    width: metric.width,
  };
};

export const getSkeletonColor = (theme: SemanticTheme, tone: SkeletonTone) =>
  tone === 'subtle' ? theme.color.surface.subtle : theme.color.surface.disabled;
