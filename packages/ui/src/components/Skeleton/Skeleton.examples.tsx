import { Card, CardContent, CardHeader, CardTitle } from '../Card/Card';
import { Separator } from '../Separator/Separator';
import { Skeleton } from './Skeleton';
import { Stack } from '@fresh/ui-core';

export const SkeletonExamples = () => {
  return (
    <Stack gap={4}>
      <Card>
        <CardHeader>
          <CardTitle>Loading card</CardTitle>
        </CardHeader>
        <CardContent>
          <Stack gap={3}>
            <Stack align="center" direction="horizontal" gap={3}>
              <Skeleton shape="circle" />
              <Stack style={{ flex: 1 }} gap={2}>
                <Skeleton width="55%" />
                <Skeleton size="sm" tone="subtle" width="35%" />
              </Stack>
            </Stack>
            <Separator />
            <Skeleton shape="block" />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
