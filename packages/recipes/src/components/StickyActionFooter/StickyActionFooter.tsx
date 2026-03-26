import { Button } from '@fresh/ui';
import { Box, type BoxProps, Stack, Text, useFreshTheme } from '@fresh/ui-core';
import type { RecipeAction } from '../../lib/types';

export type StickyActionFooterProps = Omit<BoxProps, 'children'> & {
  caption?: string;
  primaryAction: RecipeAction;
  secondaryAction?: RecipeAction;
  surface?: 'card' | 'sheet';
  tertiaryAction?: RecipeAction;
};

export const StickyActionFooter = ({
  caption,
  primaryAction,
  secondaryAction,
  style,
  surface = 'sheet',
  tertiaryAction,
  ...props
}: StickyActionFooterProps) => {
  const { theme } = useFreshTheme();
  const isSheet = surface === 'sheet';

  return (
    <Box
      style={[
        {
          backgroundColor: theme.color.surface.default,
          borderColor: theme.color.border.default,
          borderRadius: isSheet ? 0 : theme.radius.xl,
          borderTopLeftRadius: isSheet ? theme.radius['2xl'] : theme.radius.xl,
          borderTopRightRadius: isSheet ? theme.radius['2xl'] : theme.radius.xl,
          borderTopWidth: 1,
          borderWidth: isSheet ? 0 : 1,
          padding: theme.spacing[4],
        },
        isSheet ? theme.elevation[0] : theme.elevation[1],
        style,
      ]}
      {...props}
    >
      <Stack gap={3}>
        {caption ? (
          <Text size="sm" tone="muted">
            {caption}
          </Text>
        ) : null}
        <Button
          accessibilityLabel={primaryAction.accessibilityLabel}
          disabled={primaryAction.disabled}
          fullWidth={primaryAction.fullWidth ?? true}
          label={primaryAction.label}
          onPress={primaryAction.onPress}
          size={primaryAction.size ?? 'lg'}
          trailingIcon={primaryAction.trailingIcon}
          variant={primaryAction.variant ?? 'primary'}
        />
        {secondaryAction || tertiaryAction ? (
          <Stack direction="horizontal" gap={2} justify="space-between" wrap>
            {tertiaryAction ? (
              <Button
                accessibilityLabel={tertiaryAction.accessibilityLabel}
                disabled={tertiaryAction.disabled}
                label={tertiaryAction.label}
                onPress={tertiaryAction.onPress}
                size={tertiaryAction.size ?? 'md'}
                variant={tertiaryAction.variant ?? 'ghost'}
              />
            ) : (
              <Box />
            )}
            {secondaryAction ? (
              <Button
                accessibilityLabel={secondaryAction.accessibilityLabel}
                disabled={secondaryAction.disabled}
                label={secondaryAction.label}
                onPress={secondaryAction.onPress}
                size={secondaryAction.size ?? 'md'}
                variant={secondaryAction.variant ?? 'secondary'}
              />
            ) : null}
          </Stack>
        ) : null}
      </Stack>
    </Box>
  );
};
