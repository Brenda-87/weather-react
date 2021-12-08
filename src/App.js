import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="box container-md border border-secondary border-2 rounded">
        <SearchEngine />
      </div>
      <div className="App-footer">
        <small>
          Coded by Brenda Sariowan |
          <a
            href="https://github.com/Brenda-87/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-sourced
          </a>{" "}
          on GitHub and hosted on{" "}
          <a
            href="https://suspicious-hamilton-4a1093.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </small>
      </div>
    </div>
  );
}
