import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container border border-4 rounded">
        <h1>Weather App</h1>
        <div className="row">
          <div className="col-5"> </div>

          <div className="col-6">
            <SearchEngine />
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/Brenda-87/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        | Brenda Sariowan
      </small>
    </div>
  );
}
