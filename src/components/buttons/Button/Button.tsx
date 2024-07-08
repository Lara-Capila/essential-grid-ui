import { twJoin } from 'tailwind-merge';
import { ButtonProps } from '../protocols';
import {
  buttonSizesVariantsStyles,
  colorVariantsStyles,
  defaultStyles,
  disabledStyles,
} from '../styles';

export const Button = ({
  children,
  disabled = false,
  variant = 'primary',
  size = 'large',
}: ButtonProps) => {
  const joinVariants = twJoin(
    defaultStyles,
    buttonSizesVariantsStyles[size],
    colorVariantsStyles[variant],
    disabledStyles
  );

  return (
    <button disabled={disabled} className={joinVariants}>
      {children}
    </button>
  );
};
