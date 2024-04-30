import { SingleValue } from "react-select";
import { IFilter, IMenuOptions } from "../interfaces";

export function Filter({ countries, filterCountry }: IFilter) {
  const filterCountries = (e: SingleValue<IMenuOptions>) => {
    const region = e?.label;

    const newCountries =
      region === "All regions"
        ? countries
        : countries.filter((country) => country.region === region);

    filterCountry(newCountries);
  };

  return { filterCountries };
}
