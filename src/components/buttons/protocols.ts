import { HeroIconName } from '@/icons/HeroIcon/HeroIcon';
import Link from 'next/link';
import { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';

type DefaultButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
};

type HTMLAttributesProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Children = { children: ReactNode };

type LinkProps = ComponentProps<typeof Link>;

export type ButtonProps = DefaultButtonProps & HTMLAttributesProps & Children;

export type IconButtonProps = DefaultButtonProps & {
  disabled?: HTMLAttributesProps['disabled'];
  iconName: HeroIconName;
  solid?: boolean;
};

export type LinkButtonProps = DefaultButtonProps &
  LinkProps &
  Children & {
    disabled?: HTMLAttributesProps['disabled'];
  };
