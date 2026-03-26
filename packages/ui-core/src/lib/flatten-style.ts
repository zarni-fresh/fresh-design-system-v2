import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

const fallbackFlatten = (style: StyleProp<ViewStyle>): ViewStyle => {
  if (!style) {
    return {};
  }

  if (Array.isArray(style)) {
    return style.reduce<ViewStyle>((accumulator, entry) => {
      return {
        ...accumulator,
        ...fallbackFlatten(entry as StyleProp<ViewStyle>),
      };
    }, {});
  }

  if (typeof style === 'number') {
    return {};
  }

  return style;
};

export const flattenStyle = (style: StyleProp<ViewStyle>) => {
  return typeof StyleSheet.flatten === 'function'
    ? StyleSheet.flatten(style)
    : fallbackFlatten(style);
};
