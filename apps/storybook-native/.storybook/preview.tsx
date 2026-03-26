import type { ReactNode } from 'react';
import type { Preview } from '@storybook/react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { Box, FreshThemeProvider, Stack, Text, useFreshTheme } from '@fresh-ds/ui-core';

const StoryCanvas = ({ children }: { children: ReactNode }) => {
  const { theme } = useFreshTheme();

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.color.canvas.subtle,
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: theme.spacing[8],
        }}
      >
        <Stack
          gap={5}
          style={{
            alignSelf: 'center',
            maxWidth: 1040,
            width: '100%',
          }}
        >
          <Stack gap={1.5}>
            <Text size="sm" tone="muted" weight="medium">
              Fresh UI
            </Text>
            <Text size="2xl" weight="bold">
              New York showcase
            </Text>
            <Text tone="muted">
              Light-first review surface for the neutral, shadcn-inspired component baseline.
            </Text>
          </Stack>

          <Box
            style={[
              {
                backgroundColor: theme.color.surface.elevated,
                borderColor: theme.color.border.default,
                borderRadius: theme.radius['2xl'],
                borderWidth: 1,
                padding: theme.spacing[8],
              },
              theme.elevation[2],
            ]}
          >
            {children}
          </Box>
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <FreshThemeProvider mode="light">
        <StoryCanvas>
          <Story />
        </StoryCanvas>
      </FreshThemeProvider>
    ),
  ],
};

export default preview;
