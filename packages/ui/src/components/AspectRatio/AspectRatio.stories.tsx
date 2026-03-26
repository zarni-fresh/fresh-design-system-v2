import type { ComponentProps } from 'react';
import { Box, Text, useFreshTheme } from '@fresh-ds/ui-core';
import { AspectRatioExamples } from './AspectRatio.examples';
import { AspectRatio } from './AspectRatio';

const StoryFill = () => {
  const { theme } = useFreshTheme();

  return (
    <Box
      style={{
        alignItems: 'center',
        backgroundColor: theme.color.surface.accent,
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text tone="accent" weight="semibold">
        Media frame
      </Text>
    </Box>
  );
};

export default {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  args: {
    ratio: 16 / 9,
    radius: 'xl',
  },
};

export const Default = {
  render: (args: ComponentProps<typeof AspectRatio>) => (
    <AspectRatio {...args}>
      <StoryFill />
    </AspectRatio>
  ),
};

export const Square = {
  args: {
    ratio: 1,
    radius: '2xl',
  },
  render: (args: ComponentProps<typeof AspectRatio>) => (
    <AspectRatio {...args}>
      <StoryFill />
    </AspectRatio>
  ),
};

export const Gallery = {
  render: () => <AspectRatioExamples />,
};
