import React, { useEffect } from "react";
import "../styles.css";

interface Props {
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setTextColor: React.Dispatch<React.SetStateAction<string>>;
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
  bgColor: string;
  textColor: string;
}

const Header = ({
  setBgColor,
  setTextColor,
  viewMode,
  setViewMode,
  bgColor,
  textColor,
}: Props) => {
  useEffect(() => {
    const modeIcon1Id = document.getElementById(
      "mode-icon1"
    ) as HTMLAnchorElement;

    if (viewMode === "Dark Mode") {
      modeIcon1Id.style.backgroundColor = "hsl(207, 26%, 17%)";
    } else {
      modeIcon1Id.style.backgroundColor = "#fff";
    }
  }, [viewMode]);

  const handleViewMode = () => {
    setViewMode(viewMode === "Dark Mode" ? "Light Mode" : "Dark Mode");

    const mainView = document.getElementsByTagName("body")[0];
    const headerHr = document.getElementById("hr-id") as HTMLAnchorElement;
    let h2Tag = document.getElementsByTagName("h2");
    let pTag = document.getElementsByTagName("p");

    if (viewMode === "Dark Mode") {
      mainView.style.backgroundColor = "#000";
      headerHr.style.backgroundColor = "hsl(207, 26%, 17%)";

      for (let i = 0; i < h2Tag.length; i++) {
        h2Tag[i].style.color = "#fff";
      }

      document
        .querySelectorAll(".countries-box-style")
        .forEach((e) =>
          e.classList.replace("countries-box-style", "countries-box-dark-style")
        );

      for (let i = 0; i < pTag.length; i++) {
        pTag[i].style.color = "#fff";
      }

      document.getElementsByTagName("h2")[1].style.color = "#DDD";

      setBgColor("hsl(207, 26%, 17%)");
      setTextColor("#fff");
    } else {
      mainView.style.backgroundColor = "hsl(0, 0%, 98%)";
      headerHr.style.backgroundColor = "#dfdede;";
      for (let i = 0; i < h2Tag.length; i++) {
        h2Tag[i].style.color = "hsl(207, 26%, 17%)";
      }

      for (let i = 0; i < pTag.length; i++) {
        pTag[i].style.color = "hsl(207, 26%, 17%)";
      }

      document
        .querySelectorAll(".countries-box-dark-style")
        .forEach((e) =>
          e.classList.replace("countries-box-dark-style", "countries-box-style")
        );

      setBgColor("#fff");
      setTextColor("#000");
    }
  };

  return (
    <div
      id="header-id"
      className="header-style"
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <h2 id="main-title-id" style={{ color: textColor }}>
          Where in the world?
        </h2>
      </div>

      <div
        id="mode-title-id"
        className="mode-title-style"
        style={{ backgroundColor: bgColor }}
      >
        <div id="mode-icon1" className="mode-icon1">
          <div
            id="mode-icon2"
            className="mode-icon2"
            style={{ backgroundColor: bgColor, color: textColor }}
          ></div>
        </div>

        <button
          id="view-mode-id"
          style={{ backgroundColor: bgColor, color: textColor }}
          onClick={handleViewMode}
        >
          {viewMode}
        </button>
      </div>
    </div>
  );
};

export default Header;
