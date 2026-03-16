import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle } from '@fresh/ui';
import { Box, Stack, Text, useFreshTheme } from '@fresh/ui-core';
import { renderRecipeBadges } from '../../lib/render';
import type { RecipeAction, RecipeBadge, RecipeMetadataItem, RecipeSlot } from '../../lib/types';

export const selectionCardToneOptions = ['default', 'accent'] as const;

export type SelectionCardTone = (typeof selectionCardToneOptions)[number];

export type SelectionCardProps = {
  action?: RecipeAction;
  badges?: RecipeBadge[];
  description?: string;
  helperText?: string;
  media?: RecipeSlot;
  metadata?: RecipeMetadataItem[];
  recommended?: boolean;
  selected?: boolean;
  title: string;
  tone?: SelectionCardTone;
};

export const SelectionCard = ({
  action,
  badges,
  description,
  helperText,
  media,
  metadata,
  recommended = false,
  selected = false,
  title,
  tone = 'default',
}: SelectionCardProps) => {
  const { theme } = useFreshTheme();
  const computedBadges: RecipeBadge[] = [
    ...(badges ?? []),
    ...(recommended ? [{ label: 'Recommended', size: 'sm' as const, variant: 'accent' as const }] : []),
    ...(selected ? [{ label: 'Selected', size: 'sm' as const, variant: 'success' as const }] : []),
  ];

  return (
    <Card
      style={
        selected
          ? {
              borderColor: theme.color.border.accent,
            }
          : undefined
      }
      variant={selected ? 'elevated' : 'outlined'}
    >
      <CardHeader>
        <Stack direction="horizontal" gap={3}>
          {media ? (
            <Box
              style={{
                alignItems: 'center',
                backgroundColor:
                  tone === 'accent' ? theme.color.surface.accent : theme.color.surface.subtle,
                borderColor:
                  tone === 'accent' ? theme.color.border.accent : theme.color.border.default,
                borderRadius: theme.radius.lg,
                borderWidth: 1,
                height: 56,
                justifyContent: 'center',
                width: 56,
              }}
            >
              {media}
            </Box>
          ) : null}

          <Stack gap={1.5} style={{ flex: 1 }}>
            {renderRecipeBadges(computedBadges)}
            <CardTitle>{title}</CardTitle>
            {description ? <CardDescription>{description}</CardDescription> : null}
          </Stack>
        </Stack>
      </CardHeader>

      <CardContent>
        <Stack gap={3}>
          {metadata?.length ? (
            <Stack direction="horizontal" gap={2} wrap>
              {metadata.map((item) => (
                <Text key={item.label} size="sm" tone={item.tone ?? 'muted'}>
                  {item.label}
                </Text>
              ))}
            </Stack>
          ) : null}

          {helperText ? <Text tone="muted">{helperText}</Text> : null}

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
      </CardContent>
    </Card>
  );
};
