import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';

type InputContextValue = {
  error?: FieldError | undefined;
  setError: Dispatch<SetStateAction<FieldError | undefined>>;
};

const defaultValues: InputContextValue = {
  error: undefined,
  setError: () => {},
};

export type InputRootProps = {
  children: ReactNode;
  error?: FieldError;
};

export const InputRootContext = createContext<InputContextValue>(defaultValues);

export const InputRoot = ({ children }: InputRootProps) => {
  const [error, setError] = useState<InputContextValue['error']>(undefined);

  const value = useMemo(
    () => ({
      error,
      setError,
    }),
    [error]
  );

  return <InputRootContext.Provider value={value}>{children}</InputRootContext.Provider>;
};
