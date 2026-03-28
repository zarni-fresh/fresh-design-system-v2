import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh-ds/ui-core';
import { Switch } from './Switch';

describe('Switch', () => {
  it('respects the default checked state', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Switch accessibilityLabel="Notifications" defaultChecked testID="switch-root" />
        </FreshThemeProvider>
      );
    });

    const control = tree.root.findAll(
      (node) => node.props.testID === 'switch-root' && node.props.accessibilityRole === 'switch'
    )[0];

    expect(control).toBeDefined();
    expect(control!.props.accessibilityState.checked).toBe(true);
  });

  it('notifies callers when the checked state changes', () => {
    const onCheckedChange = vi.fn();
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <Switch
            accessibilityLabel="Notifications"
            onCheckedChange={onCheckedChange}
            testID="switch-root"
          />
        </FreshThemeProvider>
      );
    });

    const control = tree.root.findAll(
      (node) => node.props.testID === 'switch-root' && node.props.accessibilityRole === 'switch'
    )[0];

    expect(control).toBeDefined();
    TestRenderer.act(() => {
      control!.props.onPress();
    });

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });
});
