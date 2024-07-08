import { ReactNode, useContext, useLayoutEffect } from 'react';
import { FieldError } from 'react-hook-form';
import { InputRootContext } from './Root';

export type InputContainerProps = {
  children: ReactNode;
  error?: FieldError;
};

export const InputContainer = ({ children, error }: InputContainerProps) => {
  const { error: errorContext, setError } = useContext(InputRootContext);

  useLayoutEffect(() => {
    setError(error);
  }, [error, setError]);

  return <div data-error={errorContext}>{children}</div>;
};
