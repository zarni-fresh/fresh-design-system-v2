import { getSemanticTheme, type SemanticTheme, type ThemeMode } from '@fresh-ds/tokens';
import { createContext, type PropsWithChildren, useContext } from 'react';
import { useColorScheme } from 'react-native';

type FreshThemePreference = ThemeMode | 'system';

type FreshThemeContextValue = {
  mode: ThemeMode;
  preference: FreshThemePreference;
  theme: SemanticTheme;
};

type FreshThemeProviderProps = PropsWithChildren<{
  mode?: FreshThemePreference;
}>;

const FreshThemeContext = createContext<FreshThemeContextValue | null>(null);

const resolveMode = (
  preference: FreshThemePreference,
  systemMode: ReturnType<typeof useColorScheme>
): ThemeMode => {
  if (preference === 'light' || preference === 'dark') {
    return preference;
  }

  return systemMode === 'dark' ? 'dark' : 'light';
};

export const FreshThemeProvider = ({ children, mode = 'system' }: FreshThemeProviderProps) => {
  const systemMode = useColorScheme();
  const resolvedMode = resolveMode(mode, systemMode);

  return (
    <FreshThemeContext.Provider
      value={{
        mode: resolvedMode,
        preference: mode,
        theme: getSemanticTheme(resolvedMode),
      }}
    >
      {children}
    </FreshThemeContext.Provider>
  );
};

export const useFreshTheme = (): FreshThemeContextValue => {
  const context = useContext(FreshThemeContext);
  const systemMode = useColorScheme();
  const resolvedMode = resolveMode('system', systemMode);

  return (
    context ?? {
      mode: resolvedMode,
      preference: 'system',
      theme: getSemanticTheme(resolvedMode),
    }
  );
};
