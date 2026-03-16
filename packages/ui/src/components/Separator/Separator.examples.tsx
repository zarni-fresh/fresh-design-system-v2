import { Stack, Text } from '@fresh/ui-core';
import { Separator } from './Separator';

export const SeparatorExamples = () => {
  return (
    <Stack gap={4}>
      <Stack gap={2}>
        <Text size="sm" tone="muted" weight="medium">
          Horizontal hierarchy
        </Text>
        <Separator />
        <Separator emphasis="strong" />
      </Stack>

      <Stack gap={2}>
        <Text size="sm" tone="muted" weight="medium">
          Vertical division
        </Text>
        <Stack align="center" direction="horizontal" gap={3}>
          <Text>Left panel</Text>
          <Separator orientation="vertical" style={{ minHeight: 32 }} />
          <Text>Right panel</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};
