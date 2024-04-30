import { useEffect, useState } from "react";
import { ICountries } from "../interfaces";
import { retrieveCountriesFromLocalStorage } from "../utils";

export function FetchCountries() {
  const [countryData, setCountryData] = useState<ICountries[]>([]);
  const [filterCounries, setFilterCounries] = useState<ICountries[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchCountryData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountryData(data);
      setFilterCounries(data);
      localStorage.setItem("countries", JSON.stringify(data));
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedCountries = retrieveCountriesFromLocalStorage();
    if (storedCountries && storedCountries.length > 0) {
      setCountryData(storedCountries);
      setFilterCounries(storedCountries);
      setIsLoading(false);
    } else {
      fetchCountryData();
    }
  }, []);

  return { countryData, filterCounries, setFilterCounries, isLoading, isError };
}
