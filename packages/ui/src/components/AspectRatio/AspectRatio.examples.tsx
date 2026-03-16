import { Box, Stack, Text, useFreshTheme } from '@fresh/ui-core';
import { AspectRatio } from './AspectRatio';

export const AspectRatioExamples = () => {
  const { theme } = useFreshTheme();

  return (
    <Stack gap={4}>
      <Stack gap={2}>
        <Text size="sm" tone="muted" weight="medium">
          Media containers
        </Text>
        <AspectRatio ratio={16 / 9}>
          <Box
            style={{
              alignItems: 'center',
              backgroundColor: theme.color.surface.accent,
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Text tone="accent" weight="semibold">
              16:9 preview
            </Text>
          </Box>
        </AspectRatio>
      </Stack>

      <Stack gap={2}>
        <Text size="sm" tone="muted" weight="medium">
          Dense square content
        </Text>
        <AspectRatio ratio={1} radius="2xl">
          <Box
            style={{
              alignItems: 'center',
              backgroundColor: theme.color.surface.subtle,
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Text weight="medium">1:1 tile</Text>
          </Box>
        </AspectRatio>
      </Stack>
    </Stack>
  );
};
