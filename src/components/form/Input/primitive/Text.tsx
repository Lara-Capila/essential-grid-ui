import {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
  useContext,
} from 'react';
import { twJoin } from 'tailwind-merge';
import { InputRootContext } from './Root';

type BaseInputProps = {
  children?: ReactNode;
  multiline?: boolean;
};

type ConditionalInputProps<T> = T extends { multiline: true }
  ? TextareaHTMLAttributes<HTMLTextAreaElement>
  : InputHTMLAttributes<HTMLInputElement>;

type InputProps<T> = BaseInputProps & ConditionalInputProps<T>;

export const InputText = ({
  children,
  multiline,
  placeholder = 'Digite',
  ...rest
}: InputProps<{ multiline?: boolean }>) => {
  const { error } = useContext(InputRootContext);

  const joinClasses = twJoin('input-base-style', children && 'pr-9');

  if (multiline) {
    return (
      <div className="relative">
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          id="textarea-input"
          placeholder={placeholder}
          data-error={!!error}
          className={joinClasses}
          aria-multiline={true}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        {...(rest as InputHTMLAttributes<HTMLInputElement>)}
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
