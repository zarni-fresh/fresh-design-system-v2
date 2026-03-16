import { Stack, Text } from '@fresh/ui-core';
import { Avatar } from './Avatar';

export const AvatarExamples = () => {
  return (
    <Stack gap={4}>
      <Stack gap={2}>
        <Text size="sm" tone="muted" weight="medium">
          Size system
        </Text>
        <Stack align="center" direction="horizontal" gap={3} wrap>
          <Avatar fallbackLabel="Fresh Design" size="sm" />
          <Avatar fallbackLabel="Fresh Design" size="md" />
          <Avatar fallbackLabel="Fresh Design" size="lg" />
          <Avatar fallbackLabel="Fresh Design" size="xl" />
        </Stack>
      </Stack>

      <Stack gap={2}>
        <Text size="sm" tone="muted" weight="medium">
          Tone and shape
        </Text>
        <Stack align="center" direction="horizontal" gap={3} wrap>
          <Avatar fallbackLabel="Alex Johnson" tone="neutral" />
          <Avatar fallbackLabel="Priya Shah" tone="accent" />
          <Avatar fallbackLabel="System Bot" shape="rounded" size="lg" tone="accent" />
        </Stack>
      </Stack>
    </Stack>
  );
};
