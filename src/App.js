import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchEngine />
      </header>
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
