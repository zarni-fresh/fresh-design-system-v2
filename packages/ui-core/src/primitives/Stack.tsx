import { forwardRef, type ElementRef } from 'react';
import { type ViewStyle } from 'react-native';
import { Box, type BoxProps } from './Box';
import { resolveSpace, type SpaceToken } from '../theme/theme-helpers';
import { useFreshTheme } from '../theme/useFreshTheme';

type StackDirection = 'vertical' | 'horizontal';
type StackAlign = NonNullable<ViewStyle['alignItems']>;
type StackJustify = NonNullable<ViewStyle['justifyContent']>;
type StackGap = SpaceToken;

export type StackProps = BoxProps & {
  align?: StackAlign;
  direction?: StackDirection;
  gap?: StackGap | number;
  justify?: StackJustify;
  wrap?: boolean;
};

export const Stack = forwardRef<ElementRef<typeof Box>, StackProps>(
  ({ align, direction = 'vertical', gap = 4, justify, style, wrap = false, ...props }, ref) => {
    const { theme } = useFreshTheme();
    const resolvedGap = resolveSpace(theme, gap);

    return (
      <Box
        ref={ref}
        style={[
          {
            alignItems: align,
            flexDirection: direction === 'horizontal' ? 'row' : 'column',
            gap: resolvedGap,
            justifyContent: justify,
            flexWrap: wrap ? 'wrap' : 'nowrap',
          },
          style,
        ]}
        {...props}
      />
    );
  }
);

Stack.displayName = 'Stack';
