import { forwardRef, type ReactNode } from 'react';
import { type ElementRef } from 'react';
import { Box, type BoxProps, useFreshTheme } from '@fresh/ui-core';
import {
  aspectRatioRadiusOptions,
  type AspectRatioRadius,
} from './AspectRatio.styles';

export type AspectRatioProps = Omit<BoxProps, 'children'> & {
  children?: ReactNode;
  radius?: AspectRatioRadius;
  ratio?: number;
};

export const AspectRatio = forwardRef<ElementRef<typeof Box>, AspectRatioProps>(
  ({ children, radius = 'xl', ratio = 16 / 9, style, ...props }, ref) => {
    const { theme } = useFreshTheme();

    return (
      <Box
        ref={ref}
        style={[
          {
            aspectRatio: ratio,
            borderRadius: theme.radius[radius],
            overflow: 'hidden',
            width: '100%',
          },
          style,
        ]}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';

export { aspectRatioRadiusOptions, type AspectRatioRadius };
