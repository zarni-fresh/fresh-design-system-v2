import { Stack } from '@fresh/ui-core';
import { Label } from './Label';

export const LabelExamples = () => {
  return (
    <Stack gap={3}>
      <Label>Workspace name</Label>
      <Label required>Notification email</Label>
      <Label optionalLabel="Optional" tone="muted">
        Slack channel
      </Label>
      <Label tone="danger">Fix before launch</Label>
    </Stack>
  );
};
