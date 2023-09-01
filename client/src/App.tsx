import React from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";

function App() {
  return (
    <div id="app">
      {/* <a href="https://restcountries.com/" target="_blank">
        Käytä tätä linkkiä
      </a> */}
      <Header />
      <hr id="hr-id" />
      <Countries />
    </div>
  );
}

export default App;
