import { Button } from '@fresh/ui';
import { Box, type BoxProps, Stack, Text, useFreshTheme } from '@fresh/ui-core';
import type { RecipeAction } from '../../lib/types';

export type StickyActionFooterProps = Omit<BoxProps, 'children'> & {
  caption?: string;
  primaryAction: RecipeAction;
  secondaryAction?: RecipeAction;
  tertiaryAction?: RecipeAction;
};

export const StickyActionFooter = ({
  caption,
  primaryAction,
  secondaryAction,
  style,
  tertiaryAction,
  ...props
}: StickyActionFooterProps) => {
  const { theme } = useFreshTheme();

  return (
    <Box
      style={[
        {
          backgroundColor: theme.color.surface.elevated,
          borderColor: theme.color.border.default,
          borderRadius: theme.radius.xl,
          borderWidth: 1,
          padding: theme.spacing[4],
        },
        theme.elevation[1],
        style,
      ]}
      {...props}
    >
      <Stack gap={3}>
        {caption ? <Text tone="muted">{caption}</Text> : null}
        <Stack direction="horizontal" gap={2} wrap>
          {tertiaryAction ? (
            <Button
              accessibilityLabel={tertiaryAction.accessibilityLabel}
              disabled={tertiaryAction.disabled}
              label={tertiaryAction.label}
              onPress={tertiaryAction.onPress}
              size={tertiaryAction.size ?? 'md'}
              variant={tertiaryAction.variant ?? 'ghost'}
            />
          ) : null}
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
          <Button
            accessibilityLabel={primaryAction.accessibilityLabel}
            disabled={primaryAction.disabled}
            fullWidth={primaryAction.fullWidth ?? true}
            label={primaryAction.label}
            onPress={primaryAction.onPress}
            size={primaryAction.size ?? 'md'}
            trailingIcon={primaryAction.trailingIcon}
            variant={primaryAction.variant ?? 'primary'}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
