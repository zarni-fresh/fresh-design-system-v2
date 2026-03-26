import { type ComponentPropsWithoutRef } from 'react';
import { Box, Stack, Text, useFreshTheme } from '@fresh-ds/ui-core';
import {
  getProgressMetrics,
  getProgressPalette,
  progressSizeOptions,
  progressVariantOptions,
  type ProgressSize,
  type ProgressVariant,
} from './Progress.styles';

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export type ProgressProps = Omit<ComponentPropsWithoutRef<typeof Box>, 'children'> & {
  label?: string;
  max?: number;
  showValueLabel?: boolean;
  size?: ProgressSize;
  value?: number;
  variant?: ProgressVariant;
};

export const Progress = ({
  accessibilityLabel,
  label,
  max = 100,
  showValueLabel = false,
  size = 'md',
  style,
  value = 0,
  variant = 'accent',
  ...props
}: ProgressProps) => {
  const { theme } = useFreshTheme();
  const safeMax = max <= 0 ? 100 : max;
  const normalizedValue = clamp(value, 0, safeMax);
  const percent = Math.round((normalizedValue / safeMax) * 100);
  const metrics = getProgressMetrics(size);
  const palette = getProgressPalette(theme, variant);

  return (
    <Stack gap={2}>
      {label || showValueLabel ? (
        <Stack align="center" direction="horizontal" justify="space-between">
          {label ? (
            <Text size="sm" weight="medium">
              {label}
            </Text>
          ) : (
            <Box />
          )}
          {showValueLabel ? (
            <Text
              size="sm"
              style={{
                color: palette.label,
              }}
              weight="medium"
            >
              {percent}%
            </Text>
          ) : null}
        </Stack>
      ) : null}

      <Box
        accessibilityLabel={accessibilityLabel ?? label ?? 'Progress'}
        accessibilityRole="progressbar"
        accessibilityValue={{
          max: safeMax,
          min: 0,
          now: normalizedValue,
        }}
        style={[
          {
            backgroundColor: palette.track,
            borderRadius: metrics.borderRadius,
            height: metrics.height,
            overflow: 'hidden',
            width: '100%',
          },
          style,
        ]}
        {...props}
      >
        <Box
          style={{
            backgroundColor: palette.fill,
            borderRadius: metrics.borderRadius,
            height: '100%',
            width: `${percent}%`,
          }}
        />
      </Box>
    </Stack>
  );
};

export { progressSizeOptions, progressVariantOptions, type ProgressSize, type ProgressVariant };
