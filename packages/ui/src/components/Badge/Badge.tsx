import { forwardRef, type ElementRef, type ReactNode } from 'react';
import { Box, type BoxProps, Text, useFreshTheme } from '@fresh/ui-core';
import {
  badgeEmphasisOptions,
  badgeLayout,
  getBadgeMetrics,
  badgeSizeOptions,
  badgeVariantOptions,
  getBadgePalette,
  type BadgeEmphasis,
  type BadgeSize,
  type BadgeVariant,
} from './Badge.styles';

export type BadgeProps = Omit<BoxProps, 'children'> & {
  children?: ReactNode;
  emphasis?: BadgeEmphasis;
  label?: string;
  size?: BadgeSize;
  variant?: BadgeVariant;
};

export const Badge = forwardRef<ElementRef<typeof Box>, BadgeProps>(
  (
    { children, emphasis = 'subtle', label, size = 'md', style, variant = 'neutral', ...props },
    ref
  ) => {
    const { theme } = useFreshTheme();
    const metrics = getBadgeMetrics(theme, size);
    const palette = getBadgePalette(theme, variant, emphasis);

    return (
      <Box
        ref={ref}
        accessibilityLabel={label}
        accessibilityRole="text"
        accessible
        className={badgeLayout()}
        style={[
          {
            backgroundColor: palette.background,
            borderColor: palette.border,
            borderRadius: metrics.borderRadius,
            borderWidth: 1,
            paddingHorizontal: metrics.paddingHorizontal,
            paddingVertical: metrics.paddingVertical,
          },
          style,
        ]}
        {...props}
      >
        <Text
          size={metrics.textSize}
          style={{
            color: palette.foreground,
          }}
          weight="semibold"
        >
          {children ?? label}
        </Text>
      </Box>
    );
  }
);

Badge.displayName = 'Badge';

export {
  badgeEmphasisOptions,
  badgeSizeOptions,
  badgeVariantOptions,
  type BadgeEmphasis,
  type BadgeSize,
  type BadgeVariant,
};
