import { Icon } from '@iconify/react';

export type FlagIconProps = {
  countryCode: string;
};

export const FlagIcon = ({ countryCode }: FlagIconProps) => {
  return <Icon icon={`flag-${countryCode.toLowerCase()}-4x3`} />;
};
