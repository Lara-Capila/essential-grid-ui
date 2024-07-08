import { HeroIcon, HeroIconProps } from '@/icons/HeroIcon/HeroIcon';
import { MouseEventHandler, useContext } from 'react';
import { twJoin } from 'tailwind-merge';
import { InputRootContext } from './Root';

type HeroIcons = Pick<HeroIconProps, 'iconName' | 'size'>;

export interface InputIconProps extends HeroIcons {
  color?: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}

export const InputIcon = ({ iconName, color, size, onClick }: InputIconProps) => {
  const { error } = useContext(InputRootContext);

  const joinClasses = twJoin(
    'input-icon-container',
    color && `${color}`,
    onClick && 'hover:cursor-pointer'
  );

  return (
    <div data-error={!!error} className={joinClasses} onClick={onClick}>
      <HeroIcon iconName={iconName} solid={false} size={size} />
    </div>
  );
};
