import { Box, Stack, Text } from '@fresh/ui-core';
import { Button } from './Button';

export const ButtonExamples = () => {
  return (
    <Stack gap={4}>
      <Stack gap={2}>
        <Text size="sm" tone="muted" weight="medium">
          Action hierarchy
        </Text>
        <Stack direction="horizontal" gap={2} wrap>
          <Button label="Save changes" variant="primary" />
          <Button label="Review draft" variant="secondary" />
          <Button label="More options" variant="outline" />
          <Button label="Dismiss" variant="ghost" />
        </Stack>
      </Stack>

      <Stack gap={2}>
        <Text size="sm" tone="muted" weight="medium">
          State handling
        </Text>
        <Stack direction="horizontal" gap={2} wrap>
          <Button label="Submitting" loading variant="primary" />
          <Button disabled label="Disabled" variant="outline" />
          <Button label="Delete" variant="destructive" />
        </Stack>
      </Stack>

      <Stack gap={2}>
        <Text size="sm" tone="muted" weight="medium">
          Size system
        </Text>
        <Stack direction="horizontal" gap={2} wrap>
          <Button label="Small" size="sm" variant="secondary" />
          <Button label="Medium" size="md" variant="secondary" />
          <Button label="Large" size="lg" variant="secondary" />
        </Stack>
      </Stack>

      <Box>
        <Button fullWidth label="Continue to next step" trailingIcon="chevron-right" />
      </Box>
    </Stack>
  );
};
