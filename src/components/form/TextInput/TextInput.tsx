import { Label } from '@/components/Label/Label';
import { HeroIcon, HeroIconName } from '@/icons/HeroIcon/HeroIcon';
import HintText from '../HintText/HintText';

export type InputProps = {
  placeholder: string;
  error?: boolean;
  label?: string;
  hintText?: string;
  iconName?: HeroIconName;
};

export const TextInput = ({
  placeholder,
  error,
  label,
  hintText,
  iconName,
}: InputProps) => {
  const hasLabel = Boolean(label);
  const hasHintText = Boolean(hintText);
  const hasIcon = Boolean(iconName);

  return (
    <div>
      {hasLabel && <Label error={error}>{label}</Label>}
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          data-error={error}
          className="input-base-style input-error-style"
        />

        {hasIcon && (
          <div data-error={error} className="input-icon-container">
            <HeroIcon iconName={iconName!} solid={false} />
          </div>
        )}
      </div>

      {hasHintText && <HintText error={error}>{hintText}</HintText>}
    </div>
  );
};
