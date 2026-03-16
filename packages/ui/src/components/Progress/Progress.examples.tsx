import { Stack } from '@fresh/ui-core';
import { Progress } from './Progress';

export const ProgressExamples = () => {
  return (
    <Stack gap={4}>
      <Progress label="Design tokens" showValueLabel value={82} variant="accent" />
      <Progress label="Accessibility coverage" showValueLabel value={64} variant="success" />
      <Progress label="Migration risk" showValueLabel value={28} variant="warning" />
      <Progress label="Blocked work" showValueLabel value={12} variant="danger" />
    </Stack>
  );
};
