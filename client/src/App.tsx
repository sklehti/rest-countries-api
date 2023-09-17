import React, { useEffect, useState } from "react";
import { CountryEntry } from "./types";
import Country from "./components/Country";
import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  const [countryInfo, setCountryInfo] = useState<CountryEntry | undefined>();
  const [bgColor, setBgColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#000");
  const [viewMode, setViewMode] = useState("Dark Mode");
  const [hasNavigated, setHasNavigated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!hasNavigated) {
      navigate("/");
      setHasNavigated(true);
    }
  }, []);

  return (
    <Routes>
      <Route
        index
        element={
          <MainPage
            countryInfo={countryInfo}
            setCountryInfo={setCountryInfo}
            bgColor={bgColor}
            setBgColor={setBgColor}
            textColor={textColor}
            setTextColor={setTextColor}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        }
      />
      <Route
        path="country/:name"
        element={
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
        }
      />
    </Routes>
  );
}

export default App;
