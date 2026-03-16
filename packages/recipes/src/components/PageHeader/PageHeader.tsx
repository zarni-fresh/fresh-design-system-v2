import type { ReactNode } from 'react';
import { Box, type BoxProps, Stack, Text, useFreshTheme } from '@fresh/ui-core';
import { renderRecipeActions, renderRecipeBadges } from '../../lib/render';
import type { RecipeAction, RecipeBadge } from '../../lib/types';

export const pageHeaderDensityOptions = ['comfortable', 'compact'] as const;

export type PageHeaderDensity = (typeof pageHeaderDensityOptions)[number];

export type PageHeaderProps = Omit<BoxProps, 'children'> & {
  actions?: RecipeAction[];
  badges?: RecipeBadge[];
  density?: PageHeaderDensity;
  description?: string;
  eyebrow?: string;
  meta?: ReactNode;
  title: string;
};

export const PageHeader = ({
  actions,
  badges,
  density = 'comfortable',
  description,
  eyebrow,
  meta,
  style,
  title,
  ...props
}: PageHeaderProps) => {
  const { theme } = useFreshTheme();
  const titleSize = density === 'comfortable' ? '3xl' : '2xl';

  return (
    <Box
      style={[
        {
          borderBottomColor: theme.color.border.default,
          borderBottomWidth: 1,
          paddingBottom: density === 'comfortable' ? theme.spacing[5] : theme.spacing[4],
        },
        style,
      ]}
      {...props}
    >
      <Stack gap={3}>
        {renderRecipeBadges(badges)}
        <Stack gap={1.5}>
          {eyebrow ? (
            <Text size="sm" tone="muted" weight="medium">
              {eyebrow}
            </Text>
          ) : null}
          <Text size={titleSize} weight="bold">
            {title}
          </Text>
          {description ? <Text tone="muted">{description}</Text> : null}
        </Stack>
        {meta}
        {actions?.length ? renderRecipeActions(actions) : null}
      </Stack>
    </Box>
  );
};
