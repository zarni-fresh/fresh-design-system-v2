import { forwardRef, type ElementRef } from 'react';
import {
  Platform,
  Pressable as RNPressable,
  type PressableStateCallbackType,
  type PressableProps as RNPressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { cn } from '../lib/cn';
import { flattenStyle } from '../lib/flatten-style';
import { resolveSpace, type SpaceToken } from '../theme/theme-helpers';
import { useFreshTheme } from '../theme/useFreshTheme';

type HitSlopSize = SpaceToken | number;

export type PressableProps = RNPressableProps & {
  className?: string;
  hitSlopSize?: HitSlopSize;
};

export const Pressable = forwardRef<ElementRef<typeof RNPressable>, PressableProps>(
  (
    {
      accessibilityRole = 'button',
      accessibilityState,
      className,
      disabled,
      hitSlopSize = 2,
      style,
      ...props
    },
    ref
  ) => {
    const { theme } = useFreshTheme();
    const isDisabled = disabled ?? undefined;
    const hitSlop = resolveSpace(theme, hitSlopSize);
    const normalizedAccessibilityState = {
      busy: accessibilityState?.busy ?? undefined,
      checked: accessibilityState?.checked ?? undefined,
      disabled: accessibilityState?.disabled ?? isDisabled,
      expanded: accessibilityState?.expanded ?? undefined,
      selected: accessibilityState?.selected ?? undefined,
    };
    const webInteractionStyle: StyleProp<ViewStyle> =
      Platform.OS === 'web'
        ? {
            cursor: isDisabled ? 'auto' : 'pointer',
          }
        : null;
    const composeStyle = (nextStyle: StyleProp<ViewStyle>) =>
      flattenStyle([webInteractionStyle, nextStyle]);
    const resolvedStyle =
      typeof style === 'function'
        ? (state: PressableStateCallbackType) => composeStyle(style(state))
        : composeStyle(style);

    return (
      <RNPressable
        ref={ref}
        accessibilityRole={accessibilityRole}
        accessibilityState={normalizedAccessibilityState}
        className={cn(className)}
        disabled={isDisabled}
        focusable={!isDisabled}
        hitSlop={hitSlop}
        style={resolvedStyle}
        {...props}
      />
    );
  }
);

Pressable.displayName = 'Pressable';
