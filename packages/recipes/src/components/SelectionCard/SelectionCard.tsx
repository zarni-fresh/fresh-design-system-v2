import { Button, Card } from '@fresh/ui';
import { Box, Stack, Text, useFreshTheme } from '@fresh/ui-core';
import { renderRecipeBadges } from '../../lib/render';
import type { RecipeAction, RecipeBadge, RecipeMetadataItem, RecipeSlot } from '../../lib/types';

export const selectionCardToneOptions = ['default', 'accent'] as const;
export const selectionCardDensityOptions = ['default', 'compact'] as const;

export type SelectionCardTone = (typeof selectionCardToneOptions)[number];
export type SelectionCardDensity = (typeof selectionCardDensityOptions)[number];

export type SelectionCardProps = {
  action?: RecipeAction;
  badges?: RecipeBadge[];
  density?: SelectionCardDensity;
  description?: string;
  helperText?: string;
  leadingAccessory?: RecipeSlot;
  media?: RecipeSlot;
  metadata?: RecipeMetadataItem[];
  recommended?: boolean;
  selected?: boolean;
  trailingAccessory?: RecipeSlot;
  title: string;
  tone?: SelectionCardTone;
};

export const SelectionCard = ({
  action,
  badges,
  density = 'default',
  description,
  helperText,
  leadingAccessory,
  media,
  metadata,
  recommended = false,
  selected = false,
  trailingAccessory,
  title,
  tone = 'default',
}: SelectionCardProps) => {
  const { theme } = useFreshTheme();
  const leadingSlot = leadingAccessory ?? media;
  const computedBadges: RecipeBadge[] = [
    ...(badges ?? []),
    ...(recommended && !(badges ?? []).some((badge) => badge.label === 'Recommended')
      ? [{ label: 'Recommended', size: 'sm' as const, variant: 'accent' as const }]
      : []),
  ];
  const isCompact = density === 'compact';
  const cardStyle = selected
    ? {
        backgroundColor:
          tone === 'accent' ? theme.color.feedback.accent.background : theme.color.surface.default,
        borderColor:
          tone === 'accent' ? theme.color.feedback.accent.border : theme.color.border.strong,
      }
    : {
        backgroundColor: theme.color.surface.default,
        borderColor: theme.color.border.default,
      };

  return (
    <Card padding={isCompact ? 'sm' : 'md'} style={cardStyle} variant="outlined">
      <Stack gap={isCompact ? 2 : 2.5}>
        <Stack align="center" direction="horizontal" gap={3}>
          {leadingSlot ? (
            <Box
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {leadingSlot}
            </Box>
          ) : null}
          <Stack gap={1} style={{ flex: 1 }}>
            {computedBadges.length ? renderRecipeBadges(computedBadges) : null}
            <Text size={isCompact ? 'md' : 'lg'} weight="semibold">
              {title}
            </Text>
            {description ? (
              <Text size="sm" tone="muted">
                {description}
              </Text>
            ) : null}
            {metadata?.length ? (
              <Stack direction="horizontal" gap={1.5} wrap>
                {metadata.map((item) => (
                  <Text key={item.label} size="xs" tone={item.tone ?? 'muted'} weight="medium">
                    {item.label}
                  </Text>
                ))}
              </Stack>
            ) : null}
          </Stack>
          {trailingAccessory ? <Box>{trailingAccessory}</Box> : null}
        </Stack>

        {helperText ? (
          <Text size="sm" tone="muted">
            {helperText}
          </Text>
        ) : null}

        {action ? (
          <Stack direction="horizontal" justify="flex-end">
            <Button
              accessibilityLabel={action.accessibilityLabel}
              disabled={action.disabled}
              label={action.label}
              leadingIcon={action.leadingIcon}
              loading={action.loading}
              onPress={action.onPress}
              size={action.size ?? 'sm'}
              trailingIcon={action.trailingIcon}
              variant={action.variant ?? 'outline'}
            />
          </Stack>
        ) : null}
      </Stack>
    </Card>
  );
};
