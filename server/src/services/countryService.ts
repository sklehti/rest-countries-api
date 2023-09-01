import countryData from "../../data/data";
import { CountryEntry } from "../types";

const getEntries = (): CountryEntry[] => {
  return countryData;
};

const findByName = (name: string): CountryEntry | undefined => {
  const country = countryData.find((n) => n.name === name);

  return country;
};

export default {
  getEntries,
  findByName,
};
