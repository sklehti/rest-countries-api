import { getAllCountries } from "../services/countryService";
import { CountryEntry } from "../types";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import CountrySearch from "./CountrySearch";
import CountryFilter from "./CountryFilter";
import Countries from "./Countries";
import Country from "./Country";

interface Props {
  setCountryInfo: React.Dispatch<
    React.SetStateAction<CountryEntry | undefined>
  >;
  countryInfo: CountryEntry | undefined;
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  textColor: string;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
}

const MainPage = ({
  setCountryInfo,
  viewMode,
  setViewMode,
  countryInfo,
  bgColor,
  setBgColor,
  textColor,
  setTextColor,
}: Props) => {
  const [countries, setCountries] = useState<Array<CountryEntry>>();
  const [allCountries, setAllCountries] = useState<Array<CountryEntry>>();
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>();
  const [searchInput, setSearchInput] = useState<string | undefined>();

  useEffect(() => {
    getAllCountries()?.then((d) => {
      setAllCountries(d);
      setCountries(d);
    });
  }, []);

  return (
    <div id="app">
      <Header
        bgColor={bgColor}
        textColor={textColor}
        setBgColor={setBgColor}
        setTextColor={setTextColor}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <hr id="hr-id" style={{ backgroundColor: bgColor }} />

      <div id="main-view-id" className="desktop-view-style">
        <CountrySearch
          setCountries={setCountries}
          allCountries={allCountries}
          selectedRegion={selectedRegion}
          setSearchInput={setSearchInput}
          bgColor={bgColor}
          textColor={textColor}
          viewMode={viewMode}
        />
        <CountryFilter
          setCountries={setCountries}
          allCountries={allCountries}
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          searchInput={searchInput}
          bgColor={bgColor}
          textColor={textColor}
          viewMode={viewMode}
        />
      </div>

      {!countryInfo ? (
        <Countries
          countries={countries}
          setCountryInfo={setCountryInfo}
          bgColor={bgColor}
          textColor={textColor}
        />
      ) : (
        <Country
          countryInfo={countryInfo}
          setCountryInfo={setCountryInfo}
          bgColor={bgColor}
          textColor={textColor}
          viewMode={viewMode}
          setViewMode={setViewMode}
          setBgColor={setBgColor}
          setTextColor={setTextColor}
        />
      )}
    </div>
  );
};

export default MainPage;
