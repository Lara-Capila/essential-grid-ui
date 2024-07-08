import { InputHTMLAttributes, ReactNode, useContext } from 'react';
import { twJoin } from 'tailwind-merge';
import { InputRootContext } from './Root';

type InputTextProps = {
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputText = ({
  placeholder = 'Digite',
  children,
  ...rest
}: InputTextProps) => {
  const { error } = useContext(InputRootContext);

  const joinClasses = twJoin('input-base-style', children && 'pr-9');

  return (
    <div className="relative">
      <input
        {...rest}
        id="text-input"
        type="text"
        placeholder={placeholder}
        data-error={!!error}
        className={joinClasses}
      />

      {children}
    </div>
  );
};
