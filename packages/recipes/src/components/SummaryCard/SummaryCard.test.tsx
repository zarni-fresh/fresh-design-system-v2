import TestRenderer from 'react-test-renderer';
import { FreshThemeProvider } from '@fresh/ui-core';
import { SummaryCard } from './SummaryCard';

describe('SummaryCard', () => {
  it('renders rows and title', () => {
    let tree!: TestRenderer.ReactTestRenderer;

    TestRenderer.act(() => {
      tree = TestRenderer.create(
        <FreshThemeProvider mode="light">
          <SummaryCard
            rows={[{ label: 'Estimated total', value: '$274' }]}
            title="Review before continuing"
          />
        </FreshThemeProvider>
      );
    });

    expect(() => tree.root.findByProps({ children: 'Review before continuing' })).not.toThrow();
    expect(() => tree.root.findByProps({ children: 'Estimated total' })).not.toThrow();
  });
});
