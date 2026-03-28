import { useEffect, useRef } from 'react';
import { Animated, Pressable, type StyleProp, type ViewStyle } from 'react-native';
import { useControllableState, useFreshTheme } from '@fresh-ds/ui-core';
import {
  getSwitchDimensions,
  getSwitchPalette,
  switchSizeOptions,
  switchToneOptions,
  type SwitchSize,
  type SwitchTone,
} from './Switch.styles';

export type SwitchProps = {
  accessibilityLabel?: string;
  accessibilityState?: object;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onValueChange?: (checked: boolean) => void;
  size?: SwitchSize;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  tone?: SwitchTone;
};

export const Switch = ({
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
  tone = 'neutral',
}: SwitchProps) => {
  const { theme } = useFreshTheme();
  const [resolvedChecked, setResolvedChecked] = useControllableState({
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
    value: checked,
  });

  const palette = getSwitchPalette(theme, tone);
  const dims = getSwitchDimensions(size);

  const translateX = useRef(new Animated.Value(resolvedChecked ? dims.travel : 0)).current;
  const trackColor = useRef(new Animated.Value(resolvedChecked ? 1 : 0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(translateX, {
        toValue: resolvedChecked ? dims.travel : 0,
        useNativeDriver: true,
        bounciness: 0,
        speed: 20,
      }),
      Animated.timing(trackColor, {
        toValue: resolvedChecked ? 1 : 0,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start();
  }, [resolvedChecked, dims.travel, translateX, trackColor]);

  const animatedTrackColor = trackColor.interpolate({
    inputRange: [0, 1],
    outputRange: [palette.trackOff, disabled ? palette.trackOff : palette.trackOn],
  });

  const handlePress = () => {
    if (disabled) return;
    const next = !resolvedChecked;
    setResolvedChecked(next);
    onValueChange?.(next);
  };

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel ?? 'Toggle setting'}
      accessibilityRole="switch"
      accessibilityState={{
        checked: resolvedChecked,
        disabled,
        ...(accessibilityState as object),
      }}
      disabled={disabled}
      onPress={handlePress}
      style={[{ opacity: disabled ? 0.5 : 1 }, style]}
      testID={testID}
    >
      <Animated.View
        style={{
          width: dims.trackWidth,
          height: dims.trackHeight,
          borderRadius: dims.trackHeight / 2,
          backgroundColor: animatedTrackColor,
          padding: dims.padding,
          justifyContent: 'center',
        }}
      >
        <Animated.View
          style={{
            width: dims.thumbSize,
            height: dims.thumbSize,
            borderRadius: dims.thumbSize / 2,
            backgroundColor: disabled ? palette.thumbDisabled : palette.thumb,
            transform: [{ translateX }],
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.15,
            shadowRadius: 2,
          }}
        />
      </Animated.View>
    </Pressable>
  );
};

Switch.displayName = 'Switch';

export { switchSizeOptions, switchToneOptions, type SwitchSize, type SwitchTone };
