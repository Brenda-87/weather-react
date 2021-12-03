import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="box container-md border border-secondary border-2 rounded">
        <SearchEngine />
      </div>
      <small>
        <a
          href="https://github.com/Brenda-87/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          OPEN-SOURCE CODE
        </a>{" "}
        | BRENDA SARIOWAN
      </small>
    </div>
  );
}
