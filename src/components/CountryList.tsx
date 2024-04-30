import { ICountries } from "../interfaces";
import { CountryCard } from "./CountryCard";
import { EmptySearch } from "./EmptySearch";

export function CountryList({ countryData }: { countryData: ICountries[] }) {
  return (
    <section className="mt-8 grid justify-center gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] md:justify-between lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {countryData && countryData.length > 0 ? (
        countryData.map((country) => (
          <CountryCard key={country.name.common} {...country} />
        ))
      ) : (
        <EmptySearch />
      )}
    </section>
  );
}
