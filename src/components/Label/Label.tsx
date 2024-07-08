import { Asterisk } from '@/icons/Asterisk';
import { fontWeights } from '@/utils/fontWeights';
import { ReactElement, ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

export type LabelProps = {
  size?: 'small' | 'large';
  weight?: 'regular' | 'medium' | 'semibold';
  children: ReactNode | ReactElement;
  error?: boolean;
  isRequired?: boolean;
} & React.LabelHTMLAttributes<HTMLLabelElement>;

const labelClasses = 'leading-normal flex gap-1 mb-1 text-neutral-30';

const sizes = {
  small: 'text-sm',
  large: 'text-base',
};

export const Label = ({
  size = 'small',
  weight = 'semibold',
  error = false,
  isRequired = false,
  children,
}: LabelProps) => {
  const joinClasses = twJoin(
    labelClasses,
    sizes[size],
    fontWeights[weight],
    error ? 'text-red-60' : ''
  );

  return (
    <label className={joinClasses}>
      {children}
      {isRequired && <Asterisk />}
    </label>
  );
};
