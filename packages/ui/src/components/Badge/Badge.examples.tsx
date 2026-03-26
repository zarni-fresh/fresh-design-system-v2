import { Stack } from '@fresh-ds/ui-core';
import { Badge } from './Badge';

export const BadgeExamples = () => {
  return (
    <Stack gap={3}>
      <Stack direction="horizontal" gap={2} wrap>
        <Badge label="Draft" variant="neutral" />
        <Badge label="Accent" variant="accent" />
        <Badge label="Success" variant="success" />
        <Badge label="Warning" variant="warning" />
        <Badge emphasis="solid" label="Danger" variant="danger" />
      </Stack>

      <Stack direction="horizontal" gap={2} wrap>
        <Badge emphasis="outline" label="Outline" variant="neutral" />
        <Badge emphasis="outline" label="Accent" variant="accent" />
        <Badge emphasis="outline" label="Success" variant="success" />
      </Stack>
    </Stack>
  );
};
