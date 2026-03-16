import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: __dirname,
  test: {
    environment: 'node',
    globals: true,
    include: ['packages/**/*.test.ts', 'packages/**/*.test.tsx'],
    passWithNoTests: true,
    setupFiles: ['./test/setup.ts'],
  },
  resolve: {
    alias: {
      '@fresh/tokens': path.resolve(__dirname, 'packages/tokens/src/index.ts'),
      '@fresh/tokens/nativewind': path.resolve(__dirname, 'packages/tokens/src/nativewind.ts'),
      '@fresh/ui-core': path.resolve(__dirname, 'packages/ui-core/src/index.ts'),
      '@fresh/ui': path.resolve(__dirname, 'packages/ui/src/index.ts'),
      '@fresh/ui/manifests': path.resolve(__dirname, 'packages/ui/src/manifests/index.ts'),
      'lucide-react-native': path.resolve(__dirname, 'test/lucide-react-native-shim.tsx'),
      'react-native': path.resolve(__dirname, 'test/react-native-shim.tsx'),
      '@fresh/codex-rules': path.resolve(__dirname, 'packages/codex-rules/src/index.ts'),
    },
  },
});
