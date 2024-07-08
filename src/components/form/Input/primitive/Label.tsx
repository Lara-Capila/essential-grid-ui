import { Label } from '@/components/Label/Label';
import { LabelHTMLAttributes, ReactNode, useContext } from 'react';
import { InputRootContext } from './Root';

type InputLabelProps = {
  children: ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

export const InputLabel = ({ children }: InputLabelProps) => {
  const { error } = useContext(InputRootContext);

  return (
    <Label htmlFor="text-input" error={!!error}>
      {children}
    </Label>
  );
};
