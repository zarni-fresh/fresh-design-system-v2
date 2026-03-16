export const aspectRatioRadiusOptions = ['none', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export type AspectRatioRadius = (typeof aspectRatioRadiusOptions)[number];
