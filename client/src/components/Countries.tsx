import React from "react";
import { findCountry } from "../services/countryService";
import { CountryEntry } from "../types";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Spinner from "./Spinner";

interface Props {
  countries: CountryEntry[] | undefined;
  setCountryInfo: React.Dispatch<
    React.SetStateAction<CountryEntry | undefined>
  >;
  bgColor: string;
  textColor: string;
}

const Countries = ({
  countries,
  setCountryInfo,
  bgColor,
  textColor,
}: Props) => {
  const handleCountry = (e: React.MouseEvent<HTMLDivElement>) => {
    const countryName = e.currentTarget.getAttribute("data-default-value");

    if (countryName) {
      findCountry(countryName).then((result) => {
        const country: CountryEntry = result.data;
        setCountryInfo(country);
      });
    }
  };

  return (
    <div className="grid-container">
      {countries?.map((c) => (
        <div
          key={c.name}
          data-default-value={c.name}
          className="countries-box-style"
          defaultValue={c.name}
          onClick={handleCountry}
          style={{ backgroundColor: bgColor }}
        >
          <div className="image-container">
            <Link to={`/country/${c.name}`} className="link-style">
              <LazyLoadImage
                src={c.flags.svg}
                alt={c.name}
                placeholder={<Spinner />}
              />

              <div className="country-info-style">
                <h2 style={{ color: textColor }}>{c.name}</h2>
                <div style={{ color: textColor }}>
                  <p>
                    <b>Population: </b>
                    {c.population}
                  </p>
                </div>

                <div style={{ color: textColor }}>
                  <p>
                    <b>Region: </b>
                    {c.region}
                  </p>
                </div>

                <div style={{ color: textColor }}>
                  <p>
                    <b>Capital: </b>
                    {c.capital}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
