import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react';
import { Switch as RNSwitch } from 'react-native';
import { useControllableState, useFreshTheme } from '@fresh/ui-core';
import {
  getSwitchPalette,
  getSwitchScale,
  switchSizeOptions,
  switchToneOptions,
  type SwitchSize,
  type SwitchTone,
} from './Switch.styles';

export type SwitchProps = Omit<
  ComponentPropsWithoutRef<typeof RNSwitch>,
  'onValueChange' | 'value'
> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onValueChange?: (checked: boolean) => void;
  size?: SwitchSize;
  tone?: SwitchTone;
};

export const Switch = forwardRef<ElementRef<typeof RNSwitch>, SwitchProps>(
  (
    {
      accessibilityLabel,
      accessibilityState,
      checked,
      defaultChecked = false,
      disabled = false,
      onCheckedChange,
      onValueChange,
      size = 'md',
      style,
      testID,
      tone = 'accent',
      ...props
    },
    ref
  ) => {
    const { theme } = useFreshTheme();
    const [resolvedChecked, setResolvedChecked] = useControllableState({
      defaultValue: defaultChecked,
      onChange: onCheckedChange,
      value: checked,
    });
    const palette = getSwitchPalette(theme, tone);
    const scale = getSwitchScale(size);

    return (
      <RNSwitch
        ref={ref}
        accessibilityLabel={accessibilityLabel ?? 'Toggle setting'}
        accessibilityRole="switch"
        accessibilityState={{
          checked: resolvedChecked,
          disabled,
          ...accessibilityState,
        }}
        disabled={disabled}
        ios_backgroundColor={palette.trackOff}
        onValueChange={(nextChecked) => {
          setResolvedChecked(nextChecked);
          onValueChange?.(nextChecked);
        }}
        style={[
          {
            transform: [
              {
                scale,
              },
            ],
          },
          style,
        ]}
        testID={testID}
        thumbColor={disabled ? palette.thumbDisabled : palette.thumb}
        trackColor={{
          false: palette.trackOff,
          true: palette.trackOn,
        }}
        value={resolvedChecked}
        {...props}
      />
    );
  }
);

Switch.displayName = 'Switch';

export { switchSizeOptions, switchToneOptions, type SwitchSize, type SwitchTone };
