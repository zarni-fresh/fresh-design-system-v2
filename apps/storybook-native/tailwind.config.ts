import nativewindPreset from 'nativewind/preset';
import {
  freshNativewindPreset,
  nativewindContentGlobs,
} from '../../packages/tokens/src/nativewind';

export default {
  content: [...nativewindContentGlobs, './App.tsx', './.storybook/**/*.{ts,tsx}'],
  presets: [nativewindPreset, freshNativewindPreset],
};
