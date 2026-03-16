import { view } from './storybook.requires';

const memoryStorage = new Map<string, string>();
type BrowserStorage = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
};

const getWebStorage = (): BrowserStorage | null => {
  const scope = globalThis as { localStorage?: BrowserStorage };
  return scope.localStorage ?? null;
};

const storybookStorage = {
  getItem: async (key: string) => {
    const webStorage = getWebStorage();

    if (webStorage) {
      try {
        return webStorage.getItem(key);
      } catch {
        // Fall back to in-memory storage when localStorage is unavailable.
      }
    }

    return memoryStorage.get(key) ?? null;
  },
  setItem: async (key: string, value: string) => {
    const webStorage = getWebStorage();

    if (webStorage) {
      try {
        webStorage.setItem(key, value);
      } catch {
        // Fall back to in-memory storage when localStorage is unavailable.
      }
    }

    memoryStorage.set(key, value);
  },
};

const StorybookUIRoot = view.getStorybookUI({
  initialSelection: 'showcase-new-york-kit--gallery',
  shouldPersistSelection: false,
  storage: storybookStorage,
  theme: {
    base: 'light',
  },
});

export default StorybookUIRoot;
