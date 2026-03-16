import TestRenderer from 'react-test-renderer';
import { getSemanticTheme } from '@fresh/tokens';
import { FreshThemeProvider } from '@fresh/ui-core';
import { TextField } from './TextField';

describe('TextField', () => {
  it('renders a visible label and helper text', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <TextField helperText="We will not share this." label="Email" />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Email' })).not.toThrow();
    expect(() => tree.root.findByProps({ children: 'We will not share this.' })).not.toThrow();
  });

  it('announces an explicit accessibility label', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <TextField label="Workspace name" />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ accessibilityLabel: 'Workspace name' })).not.toThrow();
  });

  it('includes required in the generated accessibility label', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <TextField label="Email" required testID="email-input" />
        </FreshThemeProvider>
      );
    });

    const input = tree.root.findAll(
      (node) =>
        node.props.testID === 'email-input' && typeof node.props.accessibilityLabel === 'string'
    )[0];

    expect(input).toBeDefined();
    if (!input) {
      throw new Error('Expected TextField input host node to exist.');
    }
    expect(input.props.accessibilityLabel).toBe('Email, required');
  });

  it('uses semantic input colors for invalid state', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="dark">
          <TextField
            errorMessage="This field is required."
            label="Project key"
            testID="project-key"
          />
        </FreshThemeProvider>
      );
    });

    const theme = getSemanticTheme('dark');
    const input = tree.root.findAll(
      (node) =>
        node.props.testID === 'project-key' &&
        node.props.placeholderTextColor === theme.color.input.placeholder
    )[0];
    const wrapper = tree.root.findAll(
      (node) =>
        typeof node.props.className === 'string' &&
        node.props.className.includes('w-full flex-row items-center border') &&
        Array.isArray(node.props.style) &&
        node.props.style[0]?.borderWidth === 1
    )[0];

    expect(input).toBeDefined();
    if (!input) {
      throw new Error('Expected invalid TextField input host node to exist.');
    }
    expect(wrapper).not.toBeNull();
    if (!wrapper) {
      throw new Error('Expected TextField input wrapper to exist.');
    }
    expect(wrapper.props.style[0].borderColor).toBe(theme.color.input.borderInvalid);
    expect(input.props.placeholderTextColor).toBe(theme.color.input.placeholder);
  });
});
