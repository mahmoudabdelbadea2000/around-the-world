export interface IMenuOptions {
  value: string;
  label: string;
}

export interface ICountries {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    svg: string;
    alt?: string;
  };
  subregion?: string;
  tld?: string[];
  languages?: {
    [key: string]: string;
  };
  currencies?: {
    [key: string]: {
      name: string;
    };
  };
}

export interface IFilter {
  countries: ICountries[];
  filterCountry: (country: ICountries[]) => void;
}
