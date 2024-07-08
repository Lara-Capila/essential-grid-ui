import { ReactElement, ReactNode, createElement } from 'react';
import { twJoin } from 'tailwind-merge';

type HeadlineProps = {
  size?: 'h1' | 'h2' | 'h3' | 'h4';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?:
    | 'extralight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'semibold'
    | 'extrabold'
    | 'black';
  children: ReactNode | ReactElement;
};

const headinClasses = 'leading-normal';

const sizes = {
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  h4: 'text-h4',
};

const fontWeights = {
  extralight: 'font-extralight',
  light: 'font-light',
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  extrabold: 'font-extrabold',
  black: 'font-black',
};

const Headline = ({
  size = 'h3',
  tag = 'h3',
  weight = 'regular',
  children,
}: HeadlineProps) => {
  const joinClasses = twJoin(headinClasses, sizes[size], fontWeights[weight]);

  return createElement(tag, { className: joinClasses }, children);
};

export default Headline;
