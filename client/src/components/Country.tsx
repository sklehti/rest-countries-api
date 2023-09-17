import { useEffect, useState } from "react";
import { CountryEntry } from "../types";
import { Link } from "react-router-dom";
import Header from "./Header";
import { findBorderCountry, findCountry } from "../services/countryService";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Spinner from "./Spinner";

interface Props {
  setCountryInfo: React.Dispatch<
    React.SetStateAction<CountryEntry | undefined>
  >;
  countryInfo: CountryEntry | undefined;
  bgColor: string;
  textColor: string;
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
}

const Country = ({
  setCountryInfo,
  viewMode,
  setViewMode,
  countryInfo,
  bgColor,
  textColor,
  setBgColor,
  setTextColor,
}: Props) => {
  const showMainView = document.getElementById(
    "main-view-id"
  ) as HTMLAnchorElement;

  const [borderCountries, setBorderCountries] = useState<Array<string>>();

  useEffect(() => {
    if (showMainView) {
      showMainView.style.display = "none";
    }
  }, []);

  useEffect(() => {
    const backBtn = document.getElementById("back-btn-id") as HTMLAnchorElement;
    const backBtnImg = document.getElementById(
      "back-btn-img-id"
    ) as HTMLAnchorElement;

    if (backBtn) {
      if (viewMode === "Dark Mode") {
        backBtn.style.backgroundColor = "#fff";
        backBtnImg.style.filter =
          "invert(0%) sepia(0%) saturate(17%) hue-rotate(298deg) brightness(102%) contrast(104%)";
      } else {
        backBtn.style.backgroundColor = "hsl(207, 26%, 17%)";
        backBtnImg.style.filter =
          "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)";
      }
    }
  }, [viewMode]);

  useEffect(() => {
    if (countryInfo && countryInfo.alpha3Code && countryInfo.borders) {
      const promises = countryInfo.borders.map((b) =>
        findBorderCountry(b).then((result) => result.data.name)
      );

      Promise.all(promises).then((borderCountries) => {
        setBorderCountries(borderCountries);
      });
    }
  }, [countryInfo]);

  const handleBackButton = () => {
    setCountryInfo(undefined);

    if (showMainView) {
      showMainView.style.display = "initial";
    }
  };

  const handleCountry = (e: React.MouseEvent<HTMLButtonElement>) => {
    const countryName = e.currentTarget.value;

    if (countryName) {
      findCountry(countryName).then((result) => {
        const country: CountryEntry = result.data;
        setCountryInfo(country);
      });
    }
  };

  return (
    <div>
      <Header
        setBgColor={setBgColor}
        setTextColor={setTextColor}
        viewMode={viewMode}
        setViewMode={setViewMode}
        bgColor={bgColor}
        textColor={textColor}
      />
      <hr id="hr-id" style={{ backgroundColor: bgColor }} />

      <div style={{ position: "relative" }}>
        <Link to="/" className="link-style">
          <button
            id="back-btn-id"
            className="back-btn-style"
            style={{ background: bgColor, color: textColor }}
            onClick={handleBackButton}
          >
            <div id="back-btn-img-id" className="back-btn-img"></div>
            Back
          </button>
        </Link>
      </div>

      <div className="country-box-style">
        <div
          style={{
            flex: "1",
            padding: "0 2vw",
            position: "relative",
          }}
        >
          <div className="image-container">
            <LazyLoadImage
              className="country-img-style"
              src={countryInfo?.flags.svg}
              alt={countryInfo?.name}
              placeholder={<Spinner />}
            />
          </div>
        </div>

        <div className="country-text-style">
          <h2 style={{ paddingLeft: "2vw", color: textColor }}>
            {countryInfo?.name}
          </h2>

          <div className="country-text-direction" style={{ color: textColor }}>
            <div style={{ paddingLeft: "2vw" }}>
              <div>
                <p>
                  <b>Native Name: </b>
                  {countryInfo?.nativeName}
                </p>
              </div>

              <div>
                <p>
                  <b>Population: </b>
                  {countryInfo?.population}
                </p>
              </div>

              <div>
                <p>
                  <b>Region: </b>
                  {countryInfo?.region}
                </p>
              </div>

              <div>
                <p>
                  <b>Sub Region: </b>
                  {countryInfo?.subregion}
                </p>
              </div>

              <div>
                <p>
                  <b>Capital: </b>
                  {countryInfo?.capital}
                </p>
              </div>
            </div>

            <div style={{ paddingLeft: "2vw" }}>
              <div>
                <p>
                  <b>Top Level Domain: </b>
                  {countryInfo?.topLevelDomain}
                </p>
              </div>

              <div>
                <p>
                  <b>Currencies: </b>
                  {countryInfo?.currencies?.map((c) => c.name)}
                </p>
              </div>

              <div>
                <p>
                  <b>Languages: </b>
                  {countryInfo?.languages?.map((c, index) =>
                    countryInfo.languages.length - 1 > index
                      ? `${c.name}, `
                      : c.name
                  )}
                </p>
              </div>
            </div>
          </div>

          <div style={{ paddingLeft: "2vw" }}>
            <p style={{ color: textColor }}>
              <b>Border Countries: </b>
              {borderCountries ? (
                <span style={{ maxWidth: "550px" }}>
                  <br />
                  {borderCountries?.map((c) => (
                    <button
                      key={c}
                      className="border-btn-style"
                      style={{ background: bgColor, color: textColor }}
                      value={c}
                      onClick={handleCountry}
                    >
                      {c}
                    </button>
                  ))}
                </span>
              ) : (
                <>No border countries</>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
