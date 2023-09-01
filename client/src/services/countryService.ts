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
