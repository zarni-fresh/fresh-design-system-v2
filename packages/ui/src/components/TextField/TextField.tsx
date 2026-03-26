import { forwardRef, type ElementRef, type ReactNode, useState } from 'react';
import { TextInput, type StyleProp, type TextInputProps, type TextStyle } from 'react-native';
import {
  Box,
  getFocusRingStyle,
  Icon,
  type IconName,
  Stack,
  Text,
  getInputPalette,
  resolveSpace,
  useFreshTheme,
} from '@fresh-ds/ui-core';
import { Label } from '../Label/Label';
import {
  getTextFieldMetrics,
  textFieldShell,
  textFieldSizeOptions,
  type TextFieldSize,
} from './TextField.styles';

export type TextFieldProps = Omit<TextInputProps, 'style'> & {
  containerClassName?: string;
  description?: string;
  errorMessage?: string;
  helperText?: string;
  inputStyle?: StyleProp<TextStyle>;
  label?: string;
  leadingIcon?: IconName;
  required?: boolean;
  rightAdornment?: ReactNode;
  size?: TextFieldSize;
};

export const TextField = forwardRef<ElementRef<typeof TextInput>, TextFieldProps>(
  (
    {
      accessibilityHint,
      accessibilityLabel,
      containerClassName,
      description,
      editable = true,
      errorMessage,
      helperText,
      inputStyle,
      label,
      leadingIcon,
      onBlur,
      onFocus,
      placeholder,
      required = false,
      rightAdornment,
      selectionColor,
      size = 'md',
      ...props
    },
    ref
  ) => {
    const { theme } = useFreshTheme();
    const [isFocused, setIsFocused] = useState(false);
    const disabled = editable === false;
    const isInvalid = Boolean(errorMessage);
    const metrics = getTextFieldMetrics(theme, size);
    const inputPalette = getInputPalette(theme, {
      disabled,
      focused: isFocused,
      invalid: isInvalid,
    });
    const resolvedAccessibilityLabel =
      accessibilityLabel ??
      (label ? `${label}${required ? ', required' : ''}` : (placeholder ?? 'Input field'));

    return (
      <Stack className={containerClassName} gap={1.5}>
        {label ? (
          <Label required={required} size={metrics.labelSize}>
            {label}
          </Label>
        ) : null}

        {description ? (
          <Text size="sm" tone="muted">
            {description}
          </Text>
        ) : null}

        <Box
          className={textFieldShell()}
          style={[
            {
              backgroundColor: inputPalette.background,
              borderColor: inputPalette.border,
              borderRadius: metrics.borderRadius,
              borderWidth: 1,
              minHeight: metrics.minHeight,
              opacity: disabled ? 0.72 : 1,
              paddingHorizontal: metrics.paddingHorizontal,
              paddingVertical: metrics.paddingVertical,
            },
            getFocusRingStyle(theme, {
              active: isFocused,
              color: inputPalette.border,
            }),
          ]}
        >
          {leadingIcon ? (
            <Box
              style={{
                marginRight: resolveSpace(theme, 2),
              }}
            >
              <Icon
                color={theme.color.content.secondary}
                icon={leadingIcon}
                size={metrics.iconSize}
              />
            </Box>
          ) : null}

          <TextInput
            ref={ref}
            accessibilityHint={accessibilityHint ?? errorMessage ?? helperText ?? description}
            accessibilityLabel={resolvedAccessibilityLabel}
            accessibilityState={{
              disabled,
            }}
            editable={!disabled}
            onBlur={(event) => {
              setIsFocused(false);
              onBlur?.(event);
            }}
            onFocus={(event) => {
              setIsFocused(true);
              onFocus?.(event);
            }}
            placeholder={placeholder}
            placeholderTextColor={inputPalette.placeholder}
            selectionColor={selectionColor ?? theme.color.action.primary.background}
            style={[
              {
                color: inputPalette.text,
                flex: 1,
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: metrics.fontSize,
                lineHeight: metrics.lineHeight,
                minHeight: 0,
                paddingVertical: 0,
              },
              inputStyle,
            ]}
            underlineColorAndroid="transparent"
            {...props}
          />

          {rightAdornment ? (
            <Box
              style={{
                marginLeft: resolveSpace(theme, 2),
              }}
            >
              {rightAdornment}
            </Box>
          ) : null}
        </Box>

        {errorMessage ? (
          <Text accessibilityLiveRegion="polite" size="sm" tone="danger">
            {errorMessage}
          </Text>
        ) : helperText ? (
          <Text size="sm" tone="muted">
            {helperText}
          </Text>
        ) : null}
      </Stack>
    );
  }
);

TextField.displayName = 'TextField';

export { textFieldSizeOptions, type TextFieldSize };
