import type { ReactNode } from 'react';
import { Box, type BoxProps, Stack, Text } from '@fresh/ui-core';
import { renderRecipeBadges } from '../../lib/render';
import type { RecipeBadge } from '../../lib/types';

export const sectionHeaderDensityOptions = ['md', 'sm'] as const;

export type SectionHeaderDensity = (typeof sectionHeaderDensityOptions)[number];

export type SectionHeaderProps = Omit<BoxProps, 'children'> & {
  badges?: RecipeBadge[];
  density?: SectionHeaderDensity;
  description?: string;
  eyebrow?: string;
  title: string;
  trailingContent?: ReactNode;
};

export const SectionHeader = ({
  badges,
  density = 'md',
  description,
  eyebrow,
  style,
  title,
  trailingContent,
  ...props
}: SectionHeaderProps) => {
  const titleSize = density === 'md' ? 'xl' : 'lg';

  return (
    <Box style={style} {...props}>
      <Stack direction="horizontal" gap={3} justify="space-between">
        <Stack gap={1.5} style={{ flex: 1 }}>
          {renderRecipeBadges(badges)}
          {eyebrow ? (
            <Text size="sm" tone="muted" weight="medium">
              {eyebrow}
            </Text>
          ) : null}
          <Text size={titleSize} weight="semibold">
            {title}
          </Text>
          {description ? <Text tone="muted">{description}</Text> : null}
        </Stack>
        {trailingContent}
      </Stack>
    </Box>
  );
};
