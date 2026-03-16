import { forwardRef, type ElementRef, type ReactNode } from 'react';
import { Box, type BoxProps, Stack, Text, type TextProps, useFreshTheme } from '@fresh/ui-core';
import {
  cardLayout,
  getCardMetrics,
  cardPaddingOptions,
  cardVariantOptions,
  getCardPalette,
  type CardPadding,
  type CardVariant,
} from './Card.styles';

export type CardProps = BoxProps & {
  children?: ReactNode;
  padding?: CardPadding;
  variant?: CardVariant;
};

export const Card = forwardRef<ElementRef<typeof Box>, CardProps>(
  ({ children, padding = 'md', style, variant = 'outlined', ...props }, ref) => {
    const { theme } = useFreshTheme();
    const metrics = getCardMetrics(theme, padding);
    const palette = getCardPalette(theme, variant);

    return (
      <Box
        ref={ref}
        className={cardLayout()}
        style={[
          {
            backgroundColor: palette.backgroundColor,
            borderColor: palette.borderColor,
            borderRadius: metrics.borderRadius,
            borderWidth: 1,
            padding: metrics.padding,
          },
          palette.shadow,
          style,
        ]}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

Card.displayName = 'Card';

export type CardSectionProps = BoxProps & {
  children?: ReactNode;
};

export const CardHeader = ({ children, ...props }: CardSectionProps) => (
  <Stack gap={1} {...props}>
    {children}
  </Stack>
);

export const CardTitle = ({ children, ...props }: TextProps) => (
  <Text size="lg" weight="semibold" {...props}>
    {children}
  </Text>
);

export const CardDescription = ({ children, ...props }: TextProps) => (
  <Text size="sm" tone="muted" {...props}>
    {children}
  </Text>
);

export const CardContent = ({ children, style, ...props }: CardSectionProps) => {
  const { theme } = useFreshTheme();

  return (
    <Box
      style={[
        {
          marginTop: theme.spacing[3],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Box>
  );
};

export const CardFooter = ({ children, style, ...props }: CardSectionProps) => {
  const { theme } = useFreshTheme();

  return (
    <Stack
      direction="horizontal"
      gap={3}
      justify="space-between"
      style={[
        {
          marginTop: theme.spacing[4],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Stack>
  );
};

export { cardPaddingOptions, cardVariantOptions, type CardPadding, type CardVariant };
