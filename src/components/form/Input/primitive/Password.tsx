import { InputHTMLAttributes, ReactNode, useContext, useState } from 'react';
import { InputIcon } from './Icon';
import { InputRootContext } from './Root';

type InputTextProps = {
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputPassword = ({
  placeholder = 'Digite',
  children,
  ...rest
}: InputTextProps) => {
  const { error } = useContext(InputRootContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const type = showPassword ? 'text' : 'password';
  const iconName = showPassword ? 'EyeIcon' : 'EyeSlashIcon';

  return (
    <div className="relative">
      <input
        {...rest}
        id="text-input"
        type={type}
        placeholder={placeholder}
        data-error={!!error}
        className="input-base-style pr-8"
      />

      <InputIcon iconName={iconName} size="small" onClick={handleTogglePasswordClick} />
    </div>
  );
};
