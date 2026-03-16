import { forwardRef } from 'react';

const createIcon = (displayName: string) => {
  const Component = forwardRef<unknown, Record<string, unknown>>((props, ref) => {
    return <icon-component ref={ref} data-name={displayName} {...props} />;
  });

  Component.displayName = displayName;
  return Component;
};

export const AlertCircle = createIcon('AlertCircle');
export const Check = createIcon('Check');
export const ChevronRight = createIcon('ChevronRight');
export const LoaderCircle = createIcon('LoaderCircle');
export const MoonStar = createIcon('MoonStar');
export const Search = createIcon('Search');
export const Sun = createIcon('Sun');
export const X = createIcon('X');

export type LucideIcon = typeof AlertCircle;
