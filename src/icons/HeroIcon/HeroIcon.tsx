import * as solidIcons from '@heroicons/react/20/solid';
import * as outlineIcons from '@heroicons/react/24/outline';
import { twJoin } from 'tailwind-merge';

export type HeroIconName = keyof typeof solidIcons | keyof typeof outlineIcons;

export type HeroIconProps = {
  iconName: HeroIconName;
  classes?: string;
  solid?: boolean;
  size?: 'small' | 'large';
};

const heroIconStyle = '';

export const HeroIcon = ({
  iconName,
  classes,
  solid = true,
  size = 'large',
}: HeroIconProps) => {
  const Icon = solid ? solidIcons[iconName] : outlineIcons[iconName];
  const dimensions = size === 'small' ? 16 : 24;

  const joinClasses = twJoin(heroIconStyle, size === 'small' && 'w-4 h-4', classes);

  return <Icon width={dimensions} height={dimensions} className={joinClasses} />;
};
