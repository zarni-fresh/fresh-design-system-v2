import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh-ds/ui-core';
import { Label } from './Label';

describe('Label', () => {
  it('renders the label copy', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Label>Workspace name</Label>
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Workspace name' })).not.toThrow();
  });

  it('shows the required indicator when required is true', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Label required>Notification email</Label>
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: '*' })).not.toThrow();
  });
});
