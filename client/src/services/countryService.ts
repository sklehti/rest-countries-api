import axios, { AxiosError } from "axios";
import { CountryEntry } from "../types";

const baseUrl = "http://localhost:3001";

export const getAllCountries = () => {
  try {
    return axios
      .get<CountryEntry[]>(`${baseUrl}/api/countries`)
      .then((response) => response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      //TODO:
      console.log(error.status);
      console.log(error.response);
    } else {
      // TODO:
      console.log(error);
    }
  }
};

export const getAllRegions = () => {
  try {
    return axios
      .get<string[]>(`${baseUrl}/api/countries/regions`)
      .then((response) => response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      //TODO:
      console.log(error.status);
      console.log(error.response);
    } else {
      // TODO:
      console.log(error);
    }
  }
};

export const findCountry = (name: string) => {
  console.log(name);

  return axios.get<CountryEntry>(`${baseUrl}/api/countries/${name}`);
};
