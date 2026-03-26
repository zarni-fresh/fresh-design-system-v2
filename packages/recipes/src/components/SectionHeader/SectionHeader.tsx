import type { ReactNode } from 'react';
import {
  Box,
  type BoxProps,
  Icon,
  type IconName,
  Stack,
  Text,
  useFreshTheme,
} from '@fresh/ui-core';
import { renderRecipeBadges } from '../../lib/render';
import type { RecipeBadge } from '../../lib/types';

export const sectionHeaderDensityOptions = ['md', 'sm'] as const;

export type SectionHeaderDensity = (typeof sectionHeaderDensityOptions)[number];

export type SectionHeaderProps = Omit<BoxProps, 'children'> & {
  badges?: RecipeBadge[];
  density?: SectionHeaderDensity;
  description?: string;
  eyebrow?: string;
  leadingIcon?: IconName;
  title: string;
  trailingContent?: ReactNode;
};

export const SectionHeader = ({
  badges,
  density = 'md',
  description,
  eyebrow,
  leadingIcon,
  style,
  title,
  trailingContent,
  ...props
}: SectionHeaderProps) => {
  const { theme } = useFreshTheme();
  const titleSize = density === 'md' ? 'md' : 'sm';

  return (
    <Box style={style} {...props}>
      <Stack direction="horizontal" gap={3} justify="space-between">
        <Stack gap={1} style={{ flex: 1 }}>
          {renderRecipeBadges(badges)}
          {eyebrow ? (
            <Text size="xs" tone="muted" weight="medium">
              {eyebrow}
            </Text>
          ) : null}
          <Stack align="center" direction="horizontal" gap={1.5}>
            {leadingIcon ? (
              <Icon color={theme.color.content.secondary} icon={leadingIcon} size={14} />
            ) : null}
            <Text size={titleSize} weight="semibold">
              {title}
            </Text>
          </Stack>
          {description ? (
            <Text size="sm" tone="muted">
              {description}
            </Text>
          ) : null}
        </Stack>
        {trailingContent}
      </Stack>
    </Box>
  );
};
