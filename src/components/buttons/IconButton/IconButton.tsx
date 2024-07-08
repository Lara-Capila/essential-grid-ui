import { HeroIcon } from '@/icons/HeroIcon/HeroIcon';
import { twJoin } from 'tailwind-merge';
import { IconButtonProps } from '../protocols';
import {
  colorVariantsStyles,
  defaultStyles,
  disabledStyles,
  iconButtonSizesVariantsStyles,
} from '../styles';

export const IconButton = ({
  disabled = false,
  variant = 'primary',
  size = 'large',
  iconName,
  solid = false,
}: IconButtonProps) => {
  const joinVariants = twJoin(
    defaultStyles,
    iconButtonSizesVariantsStyles[size],
    colorVariantsStyles[variant],
    disabledStyles
  );

  return (
    <button data-variant={disabled} disabled={disabled} className={joinVariants}>
      <HeroIcon iconName={iconName} solid={solid} />
    </button>
  );
};
