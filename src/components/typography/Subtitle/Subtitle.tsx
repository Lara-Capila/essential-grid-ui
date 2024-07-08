import { fontWeights } from '@/utils/fontWeights';
import { ReactElement, ReactNode, createElement } from 'react';
import { twJoin } from 'tailwind-merge';

export type SubtitleProps = {
  size?: 'small' | 'large';
  weight?: 'regular' | 'medium' | 'semibold';
  children: ReactNode | ReactElement;
};

const subtitleClasses = 'leading-normal';

const sizes = {
  small: 'text-subtitle2',
  large: 'text-subtitle1',
};

export const Subtitle = ({
  size = 'small',
  weight = 'regular',
  children,
}: SubtitleProps) => {
  const joinClasses = twJoin(subtitleClasses, sizes[size], fontWeights[weight]);

  return createElement('p', { className: joinClasses }, children);
};
