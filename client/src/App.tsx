import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";
import { CountryEntry } from "./types";
import CountrySearch from "./components/CountrySearch";
import { getAllCountries } from "./services/countryService";
import CountryFilter from "./components/CountryFilter";

function App() {
  const [allCountries, setAllCountries] = useState<Array<CountryEntry>>();

  const [countries, setCountries] = useState<Array<CountryEntry>>();

  useEffect(() => {
    getAllCountries()?.then((data) => {
      //   console.log(data);
      data.map((c) => {
        setAllCountries(data);
        setCountries(data);
      });
    });
  }, []);

  return (
    <div id="app">
      {/* <a href="https://restcountries.com/" target="_blank">
       use this link if you like
      </a> */}
      <Header />
      <hr id="hr-id" />
      <CountrySearch setCountries={setCountries} allCountries={allCountries} />
      <CountryFilter setCountries={setCountries} allCountries={allCountries} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
