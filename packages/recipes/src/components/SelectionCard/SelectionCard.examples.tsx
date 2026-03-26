import { Box, Icon, useFreshTheme } from '@fresh/ui-core';
import { SelectionCard } from './SelectionCard';

const SelectionCardExampleContent = () => {
  const { theme } = useFreshTheme();

  return (
    <SelectionCard
      badges={[{ label: 'Selected product', variant: 'accent' }]}
      density="compact"
      description="2 areas • 20 units total"
      leadingAccessory={
        <Box
          style={{
            alignItems: 'center',
            borderColor: theme.color.border.default,
            borderRadius: theme.radius.lg,
            borderWidth: 1,
            height: 32,
            justifyContent: 'center',
            width: 32,
          }}
        >
          <Icon color={theme.color.content.secondary} icon="check" size={14} />
        </Box>
      }
      selected
      title="Botox"
      trailingAccessory={
        <Icon color={theme.color.content.secondary} icon="chevron-right" size={16} />
      }
      tone="accent"
    />
  );
};

export const SelectionCardExamples = () => <SelectionCardExampleContent />;
