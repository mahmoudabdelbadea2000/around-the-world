import Select from "react-select";
import { IFilter, IMenuOptions } from "../interfaces";
import { Filter } from "../hooks";

const options: IMenuOptions[] = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

export function RegionMenu({ countries, filterCountry }: IFilter) {
  const { filterCountries } = Filter({ countries, filterCountry });

  return (
    <Select
      defaultValue={options[0]}
      options={options}
      onChange={(e) => filterCountries(e)}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100 md:h-14",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
}
