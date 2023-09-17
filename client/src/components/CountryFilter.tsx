import React, { useEffect, useState } from "react";
import { CountryEntry } from "../types";
import { getAllRegions } from "../services/countryService";

interface Props {
  setCountries: React.Dispatch<
    React.SetStateAction<CountryEntry[] | undefined>
  >;

  allCountries: CountryEntry[] | undefined;
  viewMode: string;
  bgColor: string;
  textColor: string;
  selectedRegion: string | undefined;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string | undefined>>;
  searchInput: string | undefined;
}

const CountryFilter = ({
  setCountries,
  allCountries,
  selectedRegion,
  setSelectedRegion,
  searchInput,
  viewMode,
  bgColor,
  textColor,
}: Props) => {
  const [allRegions, setRegions] = useState<Array<String>>();
  const [showRegions, setShowRegions] = useState(false);

  const filterArrowId = document.getElementById(
    "filter-arrow"
  ) as HTMLAnchorElement;
  const modal = document.getElementById("region-modal");

  useEffect(() => {
    getAllRegions()?.then((response) => {
      setRegions(response);
    });
  }, []);

  useEffect(() => {
    const filterArrow = document.getElementById(
      "filter-arrow"
    ) as HTMLAnchorElement;

    if (viewMode === "Dark Mode") {
      filterArrow.style.filter =
        "invert(0%) sepia(0%) saturate(17%) hue-rotate(298deg) brightness(102%) contrast(104%)";
    } else {
      filterArrow.style.filter =
        "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)";
    }
  }, [viewMode]);

  const handleRegions = () => {
    if (showRegions && filterArrowId && modal) {
      filterArrowId.style.transform = "rotate(0deg)";
      modal.style.display = "none";
      setShowRegions(false);
    } else if (!showRegions && filterArrowId && modal) {
      filterArrowId.style.transform = "rotate(180deg)";
      modal.style.display = "block";
      setShowRegions(true);
    }
  };

  const handleRegion = (e: React.FormEvent<HTMLButtonElement>) => {
    const region: string = e.currentTarget.value;
    setSelectedRegion(region);

    let filteredCountries: CountryEntry[] | undefined = allCountries?.filter(
      (c) => c.region === region
    );

    if (searchInput && searchInput.length > 0) {
      filteredCountries = filteredCountries?.filter((c) =>
        c.name.toLowerCase().includes(searchInput)
      );
    }

    setCountries(filteredCountries);

    if (showRegions && filterArrowId && modal) {
      filterArrowId.style.transform = "rotate(0deg)";
      modal.style.display = "none";
      setShowRegions(false);
    }
  };

  const handleAllRegions = () => {
    if (searchInput && searchInput.length > 0) {
      allCountries = allCountries?.filter((c) =>
        c.name.toLowerCase().includes(searchInput)
      );
    }

    setCountries(allCountries);
    setSelectedRegion("Filter by Region");

    if (showRegions && filterArrowId && modal) {
      filterArrowId.style.transform = "rotate(0deg)";
      modal.style.display = "none";
      setShowRegions(false);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="country-filter-layout-style">
        <button
          id="rotate-btn"
          className="country-filter-btn"
          onClick={handleRegions}
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {selectedRegion ? selectedRegion : "Filter by Region"}

          <div id="filter-arrow" className="filter-up-img"></div>
        </button>
      </div>
      <div id="region-modal" className="modal" style={{ background: bgColor }}>
        {showRegions ? (
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button
              className="region-btn"
              style={{ backgroundColor: bgColor, color: textColor }}
              value="all regions"
              onClick={handleAllRegions}
            >
              all regions
            </button>
            {allRegions?.map((r, index) => (
              <button
                key={index}
                className="region-btn"
                style={{ backgroundColor: bgColor, color: textColor }}
                value={r as string}
                onClick={handleRegion}
              >
                {r}
              </button>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CountryFilter;
