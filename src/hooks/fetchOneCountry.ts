import { useEffect, useState } from "react";
import { ICountries } from "../interfaces";

interface IProps {
  countryName?: string;
}

export function FetchOneCountry({ countryName }: IProps) {
  const [countryData, setCountryData] = useState<ICountries>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchOneCountryData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`,
      );
      const data = await response.json();

      setCountryData(data[0]);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOneCountryData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    countryData,
    isLoading,
    isError,
  };
}
