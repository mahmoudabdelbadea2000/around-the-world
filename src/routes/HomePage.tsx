import { FetchCountries } from "../hooks";
import { CountryList, RegionMenu, SearchInput } from "../components";

export function HomePage() {
  const { countryData, filterCounries, setFilterCounries } = FetchCountries();
  return (
    <>
      <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-0">
        <SearchInput
          countries={countryData}
          filterCountry={setFilterCounries}
        />
        <RegionMenu countries={countryData} filterCountry={setFilterCounries} />
      </div>
      <CountryList countryData={filterCounries} />
    </>
  );
}
