import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        {Math.round(props.weather.temperature)}
      </span>
      <span className="unit">°C |°F</span>
    </div>
  );
}
