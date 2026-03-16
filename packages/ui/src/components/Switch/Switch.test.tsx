import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh/ui-core';
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
      (node) => node.props.testID === 'switch-root' && node.props['data-name'] === 'Switch'
    )[0];

    expect(control).toBeDefined();
    if (!control) {
      throw new Error('Expected Switch host node to exist.');
    }
    expect(control.props.value).toBe(true);
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
      (node) => node.props.testID === 'switch-root' && node.props['data-name'] === 'Switch'
    )[0];

    expect(control).toBeDefined();
    if (!control) {
      throw new Error('Expected Switch host node to exist.');
    }
    TestRenderer.act(() => {
      control.props.onValueChange(true);
    });

    expect(onCheckedChange).toHaveBeenCalledWith(true);
    expect(
      tree.root.findAll(
        (node) => node.props.testID === 'switch-root' && node.props['data-name'] === 'Switch'
      )[0]?.props.value
    ).toBe(true);
  });
});
