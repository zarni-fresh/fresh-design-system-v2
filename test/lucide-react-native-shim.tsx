import { forwardRef } from 'react';

const createIcon = (displayName: string) => {
  const Component = forwardRef<unknown, Record<string, unknown>>((props, ref) => {
    return <icon-component ref={ref} data-name={displayName} {...props} />;
  });

  Component.displayName = displayName;
  return Component;
};

export const AlertCircle = createIcon('AlertCircle');
export const ArrowLeft = createIcon('ArrowLeft');
export const ArrowRight = createIcon('ArrowRight');
export const Check = createIcon('Check');
export const ChevronDown = createIcon('ChevronDown');
export const ChevronLeft = createIcon('ChevronLeft');
export const ChevronRight = createIcon('ChevronRight');
export const ChevronUp = createIcon('ChevronUp');
export const Copy = createIcon('Copy');
export const Download = createIcon('Download');
export const Edit = createIcon('Edit');
export const ExternalLink = createIcon('ExternalLink');
export const Eye = createIcon('Eye');
export const EyeOff = createIcon('EyeOff');
export const Filter = createIcon('Filter');
export const Heart = createIcon('Heart');
export const Home = createIcon('Home');
export const Info = createIcon('Info');
export const LoaderCircle = createIcon('LoaderCircle');
export const LogOut = createIcon('LogOut');
export const Mail = createIcon('Mail');
export const Menu = createIcon('Menu');
export const Minus = createIcon('Minus');
export const MoonStar = createIcon('MoonStar');
export const MoreHorizontal = createIcon('MoreHorizontal');
export const MoreVertical = createIcon('MoreVertical');
export const Phone = createIcon('Phone');
export const Plus = createIcon('Plus');
export const Search = createIcon('Search');
export const Settings = createIcon('Settings');
export const Share = createIcon('Share');
export const Star = createIcon('Star');
export const Sun = createIcon('Sun');
export const Trash = createIcon('Trash');
export const Upload = createIcon('Upload');
export const User = createIcon('User');
export const X = createIcon('X');

export type LucideIcon = typeof AlertCircle;
