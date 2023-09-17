import axios, { AxiosError } from "axios";
import { CountryEntry } from "../types";

// const baseUrl = "http://localhost:3001/api";
const baseUrl = "/api";

export const getAllCountries = () => {
  try {
    return axios
      .get<CountryEntry[]>(`${baseUrl}/countries`)
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
      .get<string[]>(`${baseUrl}/countries/regions`)
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
  return axios.get<CountryEntry>(`${baseUrl}/countries/${name}`);
};

export const findBorderCountry = (alpha3Code: string) => {
  return axios.get<CountryEntry>(`${baseUrl}/countries/border/${alpha3Code}`);
};
