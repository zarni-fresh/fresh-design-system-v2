import { type ComponentPropsWithoutRef } from 'react';
import { Stack, Text, useFreshTheme } from '@fresh-ds/ui-core';
import {
  getLabelColor,
  getLabelTypography,
  labelLayout,
  labelSizeOptions,
  labelToneOptions,
  type LabelSize,
  type LabelTone,
} from './Label.styles';

export type LabelProps = Omit<ComponentPropsWithoutRef<typeof Text>, 'size' | 'tone' | 'weight'> & {
  optionalLabel?: string;
  required?: boolean;
  size?: LabelSize;
  tone?: LabelTone;
};

export const Label = ({
  accessibilityLabel,
  children,
  optionalLabel,
  required = false,
  size = 'md',
  style,
  tone = 'default',
  ...props
}: LabelProps) => {
  const { theme } = useFreshTheme();
  const typography = getLabelTypography(size);
  const labelColor = getLabelColor(theme, tone);

  return (
    <Stack className={labelLayout({ size })} direction="horizontal">
      <Text
        accessibilityLabel={
          accessibilityLabel ??
          (typeof children === 'string' && required ? `${children}, required` : undefined)
        }
        size={typography.textSize}
        style={[
          {
            color: labelColor,
          },
          style,
        ]}
        weight={typography.textWeight}
        {...props}
      >
        {children}
      </Text>
      {required ? (
        <Text size={typography.textSize} tone="danger" weight="semibold">
          *
        </Text>
      ) : optionalLabel ? (
        <Text size="sm" tone="muted">
          {optionalLabel}
        </Text>
      ) : null}
    </Stack>
  );
};

export { labelSizeOptions, labelToneOptions, type LabelSize, type LabelTone };
