import React, { useEffect, useState } from "react";
import { CountryEntry } from "../types";
import { getAllRegions } from "../services/countryService";

interface Props {
  setCountries: React.Dispatch<
    React.SetStateAction<CountryEntry[] | undefined>
  >;
  allCountries: CountryEntry[] | undefined;
}

const CountryFilter = ({ setCountries, allCountries }: Props) => {
  const [allRegions, setRegions] = useState<Array<String>>();
  const [showRegions, setShowRegions] = useState(false);

  const modalId = document.getElementById("regions-modal");

  useEffect(() => {
    getAllRegions()?.then((response) => {
      console.log(response);
      setRegions(response);
    });
  }, []);

  const handleRegions = () => {
    const filterArrowId = document.getElementById("filter-arrow");

    if (showRegions && filterArrowId) {
      filterArrowId.style.transform = "rotate(0deg)";
      // filterArrowId?.classList.remove("filter-down-img");
      // filterArrowId?.classList.add("filter-up-img");
      setShowRegions(false);
    } else if (!showRegions && filterArrowId) {
      filterArrowId.style.transform = "rotate(180deg)";
      // filterArrowId?.classList.remove("filter-up-img");
      // filterArrowId?.classList.add("filter-down-img");
      setShowRegions(true);
    }
  };

  return (
    <div>
      <div className="country-filter-layout-style">
        <button
          id="rotate-btn"
          className="country-filter-btn"
          onClick={handleRegions}
        >
          Filter by Region
          {/* {showRegions ? (
            <div className="filter-down-img"></div>
          ) : ( */}
          <div id="filter-arrow" className="filter-up-img"></div>
          {/* )} */}
        </button>
      </div>
      {showRegions ? (
        allRegions?.map((r, index) => (
          <ul key={index}>
            <button>
              <li>{r}</li>
            </button>
          </ul>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default CountryFilter;
