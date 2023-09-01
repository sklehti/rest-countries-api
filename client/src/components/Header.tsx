import React, { useState } from "react";
import "../styles.css";

const Header = () => {
  const [viewMode, setViewMode] = useState("Dark Mode");

  const handleViewMode = () => {
    setViewMode(viewMode === "Dark Mode" ? "Light Mode" : "Dark Mode");

    const mainView = document.getElementsByTagName("body")[0];
    const headerId = document.getElementById("header-id") as HTMLAnchorElement;
    const modeTitleId = document.getElementById(
      "mode-title-id"
    ) as HTMLAnchorElement;
    const modeIcon1Id = document.getElementById(
      "mode-icon1"
    ) as HTMLAnchorElement;
    const modeIcon2Id = document.getElementById(
      "mode-icon2"
    ) as HTMLAnchorElement;
    const viewModeBtnId = document.getElementById(
      "view-mode-id"
    ) as HTMLAnchorElement;
    const headerHr = document.getElementById("hr-id") as HTMLAnchorElement;
    let h2Tag = document.getElementsByTagName("h2");
    let pTag = document.getElementsByTagName("p");

    if (viewMode === "Dark Mode") {
      mainView.style.backgroundColor = "#000";
      headerId.style.backgroundColor = "hsl(207, 26%, 17%)";
      modeTitleId.style.backgroundColor = "hsl(207, 26%, 17%)";
      modeIcon2Id.style.backgroundColor = "hsl(207, 26%, 17%)";
      viewModeBtnId.style.backgroundColor = "hsl(207, 26%, 17%)";
      viewModeBtnId.style.color = "#fff";
      modeIcon1Id.style.backgroundColor = "#fff";
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
    } else {
      mainView.style.backgroundColor = "hsl(0, 0%, 98%)";
      headerId.style.backgroundColor = "#fff";
      modeTitleId.style.backgroundColor = "#fff";
      modeIcon2Id.style.backgroundColor = "#fff";
      viewModeBtnId.style.backgroundColor = "#fff";
      viewModeBtnId.style.color = "hsl(207, 26%, 17%)";
      modeIcon1Id.style.backgroundColor = "hsl(207, 26%, 17%)";
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
    }
  };

  return (
    <div id="header-id" className="header-style">
      <div>
        <h2 id="main-title-id">Where in the word?</h2>
      </div>

      <div id="mode-title-id" className="mode-title-style">
        <div id="mode-icon1" className="mode-icon1">
          <div id="mode-icon2" className="mode-icon2"></div>
        </div>

        <button id="view-mode-id" onClick={handleViewMode}>
          {viewMode}
        </button>
      </div>
    </div>
  );
};

export default Header;
