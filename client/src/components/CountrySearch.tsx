import React, { useEffect } from "react";
import { CountryEntry } from "../types";

interface Props {
  setCountries: React.Dispatch<
    React.SetStateAction<CountryEntry[] | undefined>
  >;
  allCountries: CountryEntry[] | undefined;
  bgColor: string;
  textColor: string;
  viewMode: string;
  selectedRegion: string | undefined;
  setSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const CountrySearch = ({
  setCountries,
  allCountries,
  selectedRegion,
  setSearchInput,
  viewMode,
  bgColor,
  textColor,
}: Props) => {
  useEffect(() => {
    const searchInputId = document.getElementById(
      "search-input-style"
    ) as HTMLAnchorElement;

    if (viewMode === "Dark Mode") {
      searchInputId.classList.remove("search-input-style");
    } else {
      searchInputId.classList.add("search-input-style");
    }
  }, [viewMode]);

  const handleCountry = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    setSearchInput(event.currentTarget.value.toLowerCase());

    let selectedValues = allCountries?.filter((c) =>
      c.name.toLowerCase().includes(event.currentTarget.value.toLowerCase())
    );

    if (
      selectedRegion &&
      selectedRegion.length > 0 &&
      selectedRegion !== "Filter by Region"
    ) {
      selectedValues = selectedValues?.filter(
        (c) => c.region === selectedRegion
      );
    }

    setCountries(selectedValues);
  };

  return (
    <div className="search-layout-style">
      <input
        id="search-input-style"
        contentEditable="true"
        placeholder="Search for a country..."
        className="country-search-style"
        onChange={handleCountry}
        style={{ backgroundColor: bgColor, color: textColor }}
      />
      <div className="search-img"></div>
    </div>
  );
};

export default CountrySearch;
