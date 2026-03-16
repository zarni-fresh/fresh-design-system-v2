import { forwardRef, type ElementRef, type ReactNode } from 'react';
import { View as RNView, type ViewProps } from 'react-native';
import { cn } from '../lib/cn';

export type BoxProps = ViewProps & {
  children?: ReactNode;
  className?: string;
};

export const Box = forwardRef<ElementRef<typeof RNView>, BoxProps>(
  ({ className, ...props }, ref) => {
    return <RNView ref={ref} className={cn(className)} {...props} />;
  }
);

Box.displayName = 'Box';
