import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh/ui-core';
import { SelectionCard } from './SelectionCard';

describe('SelectionCard', () => {
  it('renders the title when selected', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <SelectionCard selected title="Batch A41" />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Batch A41' })).not.toThrow();
  });
});
