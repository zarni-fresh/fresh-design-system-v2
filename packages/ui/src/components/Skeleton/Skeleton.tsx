import { type ComponentPropsWithoutRef } from 'react';
import { type DimensionValue } from 'react-native';
import { Box, useFreshTheme } from '@fresh-ds/ui-core';
import {
  getSkeletonColor,
  getSkeletonMetrics,
  skeletonShapeOptions,
  skeletonSizeOptions,
  skeletonToneOptions,
  type SkeletonShape,
  type SkeletonSize,
  type SkeletonTone,
} from './Skeleton.styles';

export type SkeletonProps = Omit<ComponentPropsWithoutRef<typeof Box>, 'children'> & {
  height?: number;
  shape?: SkeletonShape;
  size?: SkeletonSize;
  tone?: SkeletonTone;
  width?: DimensionValue;
};

export const Skeleton = ({
  accessible = false,
  height,
  shape = 'line',
  size = 'md',
  style,
  tone = 'default',
  width,
  ...props
}: SkeletonProps) => {
  const { theme } = useFreshTheme();
  const metrics = getSkeletonMetrics(shape, size);

  return (
    <Box
      accessibilityElementsHidden
      accessible={accessible}
      importantForAccessibility="no-hide-descendants"
      style={[
        {
          backgroundColor: getSkeletonColor(theme, tone),
          borderRadius: metrics.borderRadius,
          height: height ?? metrics.height,
          width: width ?? metrics.width,
        },
        style,
      ]}
      {...props}
    />
  );
};

export {
  skeletonShapeOptions,
  skeletonSizeOptions,
  skeletonToneOptions,
  type SkeletonShape,
  type SkeletonSize,
  type SkeletonTone,
};
