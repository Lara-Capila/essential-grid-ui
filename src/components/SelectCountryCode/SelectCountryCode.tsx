import { FlagIcon } from '@/icons/FlagIcon/FlagIcon';
import { Country, countries } from '@/utils/countries';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';

export type SelectCountryCodeProps = {
  selected: Country;
  setSelected: (country: Country) => void;
};

const CountryItem = ({ country }: { country: Country }) => {
  return (
    <>
      <FlagIcon countryCode={country.code} />
      <span className="w-36 truncate">{country.name}</span>
      <strong>+{country.phone}</strong>
    </>
  );
};

export const SelectCountryCode = ({ selected, setSelected }: SelectCountryCodeProps) => {
  return (
    <div className="flex flex-row items-center rounded-s-md border border-r-0">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className="relative flex w-max items-center gap-2 rounded-s-md p-2 text-sm text-neutral-0
          focus:shadow-primary-80 focus:ring-1 focus:ring-primary-80
          "
        >
          <FlagIcon countryCode={selected.code} />
          <span>+{selected.phone}</span>
        </ListboxButton>

        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            anchor="bottom start"
            className="h-60 w-fit rounded-xl border bg-white stroke-0 shadow-xl"
          >
            {countries.map((country) => (
              <ListboxOption
                key={country.code}
                value={country}
                className="group flex w-max items-center gap-4 p-2 hover:bg-blue-100"
              >
                <CountryItem country={country} />
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
      <div className="top-2 h-5 w-px bg-neutral-400"></div>
    </div>
  );
};
