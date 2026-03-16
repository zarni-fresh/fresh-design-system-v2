import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh/ui-core';
import { SelectionCard } from './SelectionCard';

describe('SelectionCard', () => {
  it('renders title and selected treatment', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <SelectionCard selected title="Batch A41" />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Batch A41' })).not.toThrow();
    expect(() => tree.root.findByProps({ accessibilityLabel: 'Selected' })).not.toThrow();
  });
});
