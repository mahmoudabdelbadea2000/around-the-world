import { ICountries } from "../interfaces";

export const retrieveCountriesFromLocalStorage = (): ICountries[] => {
  const storedCountries = localStorage.getItem("countries");
  return storedCountries ? JSON.parse(storedCountries) : [];
};
