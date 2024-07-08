import { ReactNode } from 'react';
import { twJoin } from 'tailwind-merge';

type HintTextProps = {
  children: ReactNode;
  error?: boolean;
};

const hintTextClasses = 'text-xs text-neutral-60';

const HintText = ({ children, error }: HintTextProps) => {
  return (
    <span className={twJoin(hintTextClasses, error ? 'text-red-60' : '')}>
      {children}
    </span>
  );
};

export default HintText;
