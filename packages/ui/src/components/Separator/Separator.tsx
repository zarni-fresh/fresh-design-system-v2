import { type ComponentPropsWithoutRef } from 'react';
import { Box, useFreshTheme } from '@fresh/ui-core';
import {
  getSeparatorColor,
  separatorEmphasisOptions,
  separatorOrientationOptions,
  type SeparatorEmphasis,
  type SeparatorOrientation,
} from './Separator.styles';

export type SeparatorProps = Omit<ComponentPropsWithoutRef<typeof Box>, 'children'> & {
  decorative?: boolean;
  emphasis?: SeparatorEmphasis;
  orientation?: SeparatorOrientation;
};

export const Separator = ({
  accessibilityLabel,
  decorative = true,
  emphasis = 'default',
  orientation = 'horizontal',
  style,
  ...props
}: SeparatorProps) => {
  const { theme } = useFreshTheme();

  return (
    <Box
      accessibilityElementsHidden={decorative}
      accessibilityLabel={decorative ? undefined : (accessibilityLabel ?? 'Separator')}
      accessible={!decorative}
      importantForAccessibility={decorative ? 'no-hide-descendants' : 'auto'}
      style={[
        {
          alignSelf: orientation === 'vertical' ? 'stretch' : undefined,
          backgroundColor: getSeparatorColor(theme, emphasis),
          height: orientation === 'horizontal' ? 1 : undefined,
          opacity: emphasis === 'subtle' ? 0.72 : 1,
          width: orientation === 'vertical' ? 1 : '100%',
        },
        style,
      ]}
      {...props}
    />
  );
};

export {
  separatorEmphasisOptions,
  separatorOrientationOptions,
  type SeparatorEmphasis,
  type SeparatorOrientation,
};
