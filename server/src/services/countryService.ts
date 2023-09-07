import countryData from "../../data/data";
import { CountryEntry } from "../types";

const getEntries = (): CountryEntry[] => {
  return countryData;
};

const findByName = (name: string): CountryEntry | undefined => {
  const country = countryData.find((n) => n.name === name);

  return country;
};

const getAllRegion = (): string[] => {
  const regions = countryData.map(({ region }) => region);

  const filtered = regions.filter(
    (region, index) => regions.indexOf(region) === index
  );

  const sortedRegions = filtered.sort();

  return sortedRegions;
};

export default {
  getEntries,
  getAllRegion,
  findByName,
};
