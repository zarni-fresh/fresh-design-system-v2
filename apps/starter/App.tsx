import { Platform, SafeAreaView, ScrollView, useColorScheme, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Card, TextField } from '@fresh-ds/ui';
import { FreshThemeProvider, Stack, Text } from '@fresh-ds/ui-core';
import { PageHeader } from '@fresh-ds/recipes';

function ScreenContainer({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fafafa',
      }}
    >
      <View
        style={{
          width: '100%',
          maxWidth: Platform.OS === 'web' ? 480 : undefined,
        }}
      >
        {children}
      </View>
    </View>
  );
}

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 48 }}>
      <Stack gap={4}>
        <PageHeader description="Start building your app with Fresh components" title="Fresh App" />
        <Card>
          <Stack gap={4} style={{ padding: 16 }}>
            <Text size="lg" weight="semibold">
              Getting Started
            </Text>
            <Text size="sm" tone="muted">
              Edit App.tsx to start building. This template includes all Fresh design system
              packages ready to use.
            </Text>
            <TextField label="Example Input" placeholder="Type something..." />
            <Button label="Get Started" onPress={() => {}} variant="primary" />
          </Stack>
        </Card>
      </Stack>
    </ScrollView>
  );
}

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <FreshThemeProvider mode={colorScheme === 'dark' ? 'dark' : 'light'}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <ScreenContainer>
          <HomeScreen />
        </ScreenContainer>
      </SafeAreaView>
    </FreshThemeProvider>
  );
}
