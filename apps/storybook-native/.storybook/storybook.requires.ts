/* eslint-disable @typescript-eslint/no-require-imports */
/* do not change this file, it is storybook bootstrapping for local development. */

import { start, updateView } from '@storybook/react-native';

import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-actions/register';

const normalizedStories = [
  {
    titlePrefix: '',
    directory: '../../../packages/ui/src/components',
    files: '**/*.stories.@(ts|tsx)',
    importPathMatcher: /\.stories\.(ts|tsx)$/,
    // @ts-expect-error Metro provides require.context in Storybook's expected environment.
    req: require.context('../../../packages/ui/src/components', true, /\.stories\.(ts|tsx)$/),
  },
];

declare global {
  var view: ReturnType<typeof start> | undefined;
}

const annotations = [require('./preview'), require('@storybook/react-native/preview')];

if (!global.view) {
  global.view = start({
    annotations,
    storyEntries: normalizedStories,
  });
} else {
  updateView(global.view, annotations, normalizedStories);
}

export const view = global.view;
