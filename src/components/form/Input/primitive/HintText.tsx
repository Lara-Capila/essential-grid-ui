import { ReactNode, useContext } from 'react';
import HintText from '../../HintText/HintText';
import { InputRootContext } from './Root';
export type InputHintTextProps = {
  children?: ReactNode;
};
export const InputHintText = ({ children }: InputHintTextProps) => {
  const { error } = useContext(InputRootContext);

  return <HintText error={!!error}>{error ? error.message : children}</HintText>;
};
