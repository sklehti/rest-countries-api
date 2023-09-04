import React from "react";
import { CountryEntry } from "../types";
import SearchIcon from "../images/search-icon.svg";

interface Props {
  setCountries: React.Dispatch<
    React.SetStateAction<CountryEntry[] | undefined>
  >;
  allCountries: CountryEntry[] | undefined;
}

const CountrySearch = ({ setCountries, allCountries }: Props) => {
  const handleCountry = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const selectedValues = allCountries?.filter((c) =>
      c.name.toLowerCase().includes(event.currentTarget.value.toLowerCase())
    );
    setCountries(selectedValues);
  };

  return (
    <div className="search-layout-style">
      <input
        //   TODO: fix this!
        contentEditable="true"
        placeholder="Search for a country..."
        className="country-search-style"
        onChange={handleCountry}
      />
    </div>
  );
};

export default CountrySearch;
