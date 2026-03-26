import type { ReactNode } from 'react';
import { Box, type BoxProps, Icon, Pressable, Stack, Text, useFreshTheme } from '@fresh-ds/ui-core';
import { renderRecipeActions, renderRecipeBadges } from '../../lib/render';
import type { RecipeAction, RecipeBadge } from '../../lib/types';

export const pageHeaderDensityOptions = ['comfortable', 'compact'] as const;

export type PageHeaderDensity = (typeof pageHeaderDensityOptions)[number];

export type PageHeaderProps = Omit<BoxProps, 'children'> & {
  actions?: RecipeAction[];
  badges?: RecipeBadge[];
  backLabel?: string;
  density?: PageHeaderDensity;
  description?: string;
  divider?: boolean;
  eyebrow?: string;
  meta?: ReactNode;
  onBackPress?: () => void;
  title: string;
};

export const PageHeader = ({
  actions,
  badges,
  backLabel,
  density = 'comfortable',
  description,
  divider = false,
  eyebrow,
  meta,
  onBackPress,
  style,
  title,
  ...props
}: PageHeaderProps) => {
  const { theme } = useFreshTheme();
  const titleSize = density === 'comfortable' ? '2xl' : 'xl';
  const descriptionSize = density === 'comfortable' ? 'sm' : 'xs';

  return (
    <Box
      style={[
        {
          borderBottomColor: theme.color.border.default,
          borderBottomWidth: divider ? 1 : 0,
          paddingBottom: density === 'comfortable' ? theme.spacing[4] : theme.spacing[3],
        },
        style,
      ]}
      {...props}
    >
      <Stack gap={density === 'comfortable' ? 3 : 2.5}>
        {backLabel ? (
          <Pressable
            accessibilityLabel={backLabel}
            onPress={onBackPress}
            style={{
              alignSelf: 'flex-start',
            }}
          >
            <Stack align="center" direction="horizontal" gap={1.5}>
              <Box
                style={{
                  transform: [{ rotate: '180deg' }],
                }}
              >
                <Icon color={theme.color.content.secondary} icon="chevron-right" size={14} />
              </Box>
              <Text size="sm" tone="muted" weight="medium">
                {backLabel}
              </Text>
            </Stack>
          </Pressable>
        ) : null}
        {renderRecipeBadges(badges)}
        <Stack gap={1}>
          {eyebrow ? (
            <Text size="xs" tone="muted" weight="medium">
              {eyebrow}
            </Text>
          ) : null}
          <Text size={titleSize} weight="bold">
            {title}
          </Text>
          {description ? (
            <Text size={descriptionSize} style={{ maxWidth: 320 }} tone="muted">
              {description}
            </Text>
          ) : null}
        </Stack>
        {meta}
        {actions?.length ? renderRecipeActions(actions) : null}
      </Stack>
    </Box>
  );
};
