import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Image, type ImageSourcePropType, type ImageStyle, type StyleProp } from 'react-native';
import { Box, Text, type TextProps, useFreshTheme } from '@fresh/ui-core';
import {
  getAvatarMetrics,
  getAvatarPalette,
  avatarShapeOptions,
  avatarSizeOptions,
  avatarToneOptions,
  type AvatarShape,
  type AvatarSize,
  type AvatarTone,
} from './Avatar.styles';

const getAvatarInitials = (value?: string) => {
  if (!value) {
    return '?';
  }

  const tokens = value
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  if (tokens.length === 0) {
    return '?';
  }

  return tokens.map((token) => token[0]?.toUpperCase() ?? '').join('');
};

export type AvatarProps = Omit<ComponentPropsWithoutRef<typeof Box>, 'children'> & {
  accessibilityLabel?: string;
  alt?: string;
  decorative?: boolean;
  fallbackLabel?: string;
  imageStyle?: StyleProp<ImageStyle>;
  shape?: AvatarShape;
  size?: AvatarSize;
  source?: ImageSourcePropType;
  tone?: AvatarTone;
};

export const Avatar = forwardRef<ElementRef<typeof Box>, AvatarProps>(
  (
    {
      accessibilityLabel,
      alt,
      decorative = false,
      fallbackLabel,
      imageStyle,
      shape = 'circle',
      size = 'md',
      source,
      style,
      tone = 'neutral',
      ...props
    },
    ref
  ) => {
    const { theme } = useFreshTheme();
    const [imageFailed, setImageFailed] = useState(false);
    const metrics = getAvatarMetrics(theme, {
      shape,
      size,
    });
    const palette = getAvatarPalette(theme, tone);
    const initials = useMemo(() => getAvatarInitials(fallbackLabel ?? alt), [alt, fallbackLabel]);
    const resolvedAccessibilityLabel = accessibilityLabel ?? alt ?? fallbackLabel ?? 'Avatar';
    const textWeight: TextProps['weight'] = size === 'xl' ? 'semibold' : 'medium';

    useEffect(() => {
      setImageFailed(false);
    }, [source]);

    return (
      <Box
        ref={ref}
        accessibilityElementsHidden={decorative}
        accessibilityLabel={decorative ? undefined : resolvedAccessibilityLabel}
        accessibilityRole={decorative ? undefined : 'image'}
        accessible={!decorative}
        importantForAccessibility={decorative ? 'no-hide-descendants' : 'auto'}
        style={[
          {
            alignItems: 'center',
            backgroundColor: palette.background,
            borderColor: palette.border,
            borderRadius: metrics.borderRadius,
            borderWidth: 1,
            height: metrics.dimension,
            justifyContent: 'center',
            overflow: 'hidden',
            width: metrics.dimension,
          },
          style,
        ]}
        {...props}
      >
        {source && !imageFailed ? (
          <Image
            onError={() => setImageFailed(true)}
            source={source}
            style={[
              {
                height: '100%',
                width: '100%',
              },
              imageStyle,
            ]}
          />
        ) : (
          <Text
            size={metrics.textSize}
            style={{
              color: palette.foreground,
            }}
            weight={textWeight}
          >
            {initials}
          </Text>
        )}
      </Box>
    );
  }
);

Avatar.displayName = 'Avatar';

export {
  avatarShapeOptions,
  avatarSizeOptions,
  avatarToneOptions,
  type AvatarShape,
  type AvatarSize,
  type AvatarTone,
};
