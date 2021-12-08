import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  const description = props.weather.description;

  return (
    <div className="weather-details col mt-4 pt-2">
      <ul>
        <li>
          Conditions:{" "}
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </li>
        <li>Humidity: {props.weather.humidity}%</li>
        <li>Wind: {Math.round(props.weather.wind)} km/h</li>
      </ul>
    </div>
  );
}
