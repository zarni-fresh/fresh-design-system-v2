import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react';
import {
  ActivityIndicator,
  Platform,
  type PressableStateCallbackType,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import {
  Box,
  flattenStyle,
  getFocusRingStyle,
  Icon,
  type IconName,
  Pressable,
  Stack,
  Text,
  type VariantProps,
  useFreshTheme,
} from '@fresh-ds/ui-core';
import {
  buttonLayout,
  getButtonMetrics,
  buttonSizeOptions,
  buttonVariantOptions,
  getButtonPalette,
  type ButtonSize,
  type ButtonVariant,
} from './Button.styles';

type ButtonVariants = VariantProps<typeof buttonLayout>;

export type ButtonProps = Omit<ComponentPropsWithoutRef<typeof Pressable>, 'children' | 'style'> &
  ButtonVariants & {
    label: string;
    leadingIcon?: IconName;
    loading?: boolean;
    shadow?: boolean;
    size?: ButtonSize;
    style?: StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
    trailingIcon?: IconName;
    variant?: ButtonVariant;
  };

export const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
  (
    {
      accessibilityHint,
      accessibilityLabel,
      accessibilityState,
      disabled = false,
      fullWidth = false,
      label,
      leadingIcon,
      loading = false,
      shadow = false,
      size = 'md',
      style,
      trailingIcon,
      variant = 'primary',
      ...props
    },
    ref
  ) => {
    const { theme } = useFreshTheme();
    const isDisabled = disabled || loading;
    const metrics = getButtonMetrics(theme, size);
    const palette = getButtonPalette(theme, variant);

    const resolveStyle = (state: PressableStateCallbackType) => {
      const userStyle = typeof style === 'function' ? style(state) : style;
      const interactionState = state as PressableStateCallbackType & {
        focused?: boolean;
        hovered?: boolean;
      };
      const isHovered = interactionState.hovered && !isDisabled;
      const isPressed = state.pressed && !isDisabled;
      const isFocused = interactionState.focused && !isDisabled;
      const backgroundColor = isPressed
        ? palette.backgroundPressed
        : isHovered
          ? palette.backgroundHover
          : palette.background;
      const isChrome = variant === 'ghost' || variant === 'link';
      const wantsShadow = shadow || (!isChrome && variant !== 'outline');
      const baseShadow = wantsShadow
        ? Platform.OS === 'web'
          ? ({ boxShadow: '0 2px 4px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.04)' } as ViewStyle)
          : theme.elevation[1]
        : theme.elevation[0];
      const baseStyle: ViewStyle = {
        alignItems: 'center',
        backgroundColor,
        borderColor: palette.border,
        borderRadius: variant === 'link' ? 0 : metrics.borderRadius,
        borderWidth: isChrome ? 0 : 1,
        justifyContent: 'center',
        minHeight: variant === 'link' ? undefined : metrics.minHeight,
        opacity: isDisabled ? 0.56 : 1,
        paddingHorizontal: variant === 'link' ? 0 : metrics.paddingHorizontal,
        paddingVertical: variant === 'link' ? 0 : metrics.paddingVertical,
        width: fullWidth ? '100%' : undefined,
      };

      return flattenStyle([
        baseStyle,
        baseShadow,
        getFocusRingStyle(theme, {
          active: isFocused,
        }),
        userStyle,
      ]);
    };

    return (
      <Pressable
        ref={ref}
        accessibilityHint={
          accessibilityHint ??
          (isDisabled ? `${label}. Unavailable.` : `${label}. Double tap to activate.`)
        }
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityState={{
          busy: loading,
          disabled: isDisabled,
          ...accessibilityState,
        }}
        className={buttonLayout({
          fullWidth,
        })}
        disabled={isDisabled}
        style={{ outline: 'none' } as ViewStyle}
        {...props}
      >
        {(state) => (
          <Box style={resolveStyle(state)}>
            <Stack align="center" direction="horizontal" gap={metrics.gap} justify="center">
              {loading ? (
                <ActivityIndicator color={palette.foreground} size="small" />
              ) : leadingIcon ? (
                <Icon color={palette.foreground} icon={leadingIcon} size={metrics.iconSize} />
              ) : null}
              <Text
                size={metrics.textSize}
                style={{
                  color: palette.foreground,
                  textDecorationLine: variant === 'link' ? 'underline' : 'none',
                }}
                weight={variant === 'link' ? 'medium' : 'semibold'}
              >
                {label}
              </Text>
              {!loading && trailingIcon ? (
                <Icon color={palette.foreground} icon={trailingIcon} size={metrics.iconSize} />
              ) : null}
            </Stack>
          </Box>
        )}
      </Pressable>
    );
  }
);

Button.displayName = 'Button';

export { buttonSizeOptions, buttonVariantOptions, type ButtonSize, type ButtonVariant };
