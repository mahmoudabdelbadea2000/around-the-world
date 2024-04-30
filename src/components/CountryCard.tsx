import { Link } from "react-router-dom";
import { ICountries } from "../interfaces";

export function CountryCard({ ...country }: ICountries) {
  return (
    <Link
      to={country.name.common}
      className="h-full rounded bg-gray-50 p-3 pb-9 shadow-md dark:bg-gray-800 lg:w-[264px]"
    >
      <img
        className="mb-4 h-40 w-full rounded-md"
        src={country.flags.svg}
        alt="placeholder"
        loading="lazy"
      />
      <h2 className="mb-4 ml-3 text-lg font-extrabold">
        {country.name.common}
      </h2>
      <div className="ml-3 flex flex-col gap-2">
        <p>
          <span className="font-semibold">Population: </span>
          <span className="font-light">{country.population}</span>
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          <span className="font-light">{country.region}</span>
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          <span className="font-light">{country.capital}</span>
        </p>
      </div>
    </Link>
  );
}
