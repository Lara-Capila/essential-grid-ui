import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import { LinkButtonProps } from '../protocols';
import {
  buttonSizesVariantsStyles,
  colorVariantsStyles,
  defaultStyles,
  disabledStyles,
} from '../styles';

export const LinkButton = ({
  href,
  children,
  variant = 'primary',
  size = 'large',
  disabled = false,
  ...props
}: LinkButtonProps) => {
  const joinVariants = twJoin(
    'w-max',
    defaultStyles,
    buttonSizesVariantsStyles[size],
    colorVariantsStyles[variant],
    disabledStyles
  );

  return (
    <Link
      href={href}
      data-disabled={disabled}
      target="_blank"
      {...props}
      className={joinVariants}
    >
      {children}
    </Link>
  );
};
