import { forwardRef, type ElementRef, type ReactNode } from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import { cn } from '../lib/cn';
import { getTextColor, type TextTone } from '../theme/theme-helpers';
import { useFreshTheme } from '../theme/useFreshTheme';

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export type TextProps = RNTextProps & {
  children?: ReactNode;
  className?: string;
  tone?: TextTone;
  size?: TextSize;
  weight?: TextWeight;
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
};

export const Text = forwardRef<ElementRef<typeof RNText>, TextProps>(
  (
    {
      align = 'left',
      className,
      size = 'md',
      style,
      tone = 'default',
      truncate = false,
      weight = 'regular',
      ...props
    },
    ref
  ) => {
    const { theme } = useFreshTheme();

    return (
      <RNText
        ref={ref}
        className={cn(className)}
        numberOfLines={truncate ? 1 : props.numberOfLines}
        style={[
          {
            color: getTextColor(theme, tone),
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize[size],
            fontWeight: theme.typography.fontWeight[weight],
            lineHeight: theme.typography.lineHeight[size],
            textAlign: align,
          },
          style,
        ]}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';
