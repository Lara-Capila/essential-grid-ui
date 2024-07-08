import { FlagIcon } from '@/icons/FlagIcon/FlagIcon';
import { countries } from '@/utils/countries';

const CountryItem = ({ country }: { country: (typeof countries)[number] }) => {
  return (
    <li>
      <strong>+{country.phone}</strong>
      <FlagIcon countryCode={country.code} />
    </li>
  );
};

let countrieOptions = [];

for (let country of countries) {
  const option = <CountryItem country={country} />;

  countrieOptions.push(option);
}

export default countrieOptions;
