import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function getTemperature() {
    if (unit === "celsius") {
      return props.celsius;
    } else {
      return (props.celsius * 9) / 5 + 32;
    }
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round(getTemperature(props.celsius))}
        </span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round(getTemperature(props.celsius))}
        </span>
        <span className="unit">
          °C |
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
