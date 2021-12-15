import React from "react";

export default function WeatherInfo(props) {
  const description = props.weather.description;

  return (
    <div className="weather-details col mt-5 pt-4">
      <ul>
        <li>
          Conditions:{" "}
          {description.charAt(0).toUpperCase() + description.slice(1)}
        </li>
        <li>Wind: {Math.round(props.weather.wind)} km/h</li>
        <li>Humidity: {props.weather.humidity}%</li>
      </ul>
    </div>
  );
}
