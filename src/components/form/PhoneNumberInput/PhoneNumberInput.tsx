import { SelectCountryCode } from '@/components/SelectCountryCode/SelectCountryCode';
import { Country, defaultCountry } from '@/utils/countries';
import { InputMask } from '@react-input/mask';
import {
  Dispatch,
  ForwardedRef,
  SetStateAction,
  forwardRef,
  useEffect,
  useState,
} from 'react';

export type NumberInputProps = {
  max?: number;
  min?: number;
};

type InputProps = {
  selected: Country;
  setSelected: Dispatch<SetStateAction<Country>>;
};

const ONLY_NUMBERS_REGEX = /\d/;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ selected, setSelected }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <div className="flex items-center">
          <SelectCountryCode selected={selected} setSelected={setSelected} />

          <input
            ref={ref}
            id="number-input"
            maxLength={selected.mask.length}
            minLength={selected.mask.length}
            placeholder={selected.mask}
            className="w-full rounded-e-md border border-l-0
              stroke-0 p-2 text-sm text-neutral-0
              outline-none focus:shadow-sm
              focus:shadow-primary-80 focus:ring-1 focus:ring-primary-80
            "
          />
        </div>
      </>
    );
  }
);

Input.displayName = 'Input';

export const PhoneNumberInput = () => {
  const [selected, setSelected] = useState<Country>(defaultCountry);

  useEffect(() => {
    const input = document.getElementById('number-input') as HTMLInputElement;

    if (input) {
      input.value = '';
    }
  }, [selected]);

  return (
    <InputMask
      component={Input}
      mask={selected.mask}
      replacement={{ X: ONLY_NUMBERS_REGEX }}
      selected={selected}
      setSelected={setSelected}
    />
  );
};
