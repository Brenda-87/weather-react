import React from "react";

export default function WeatherInfo(props) {
  let imageUrl = `http://openweathermap.org/img/wn/${props.weather.image}@2x.png`;

  if (props.weather.image === undefined) {
    return <p></p>;
  } else {
    return (
      <ul>
        <li>Temperature: {Math.round(props.weather.temperature)}°C</li>
        <li>Description: {props.weather.description}</li>
        <li>Humidity: {props.weather.humidity}%</li>
        <li>Wind: {props.weather.wind} km/h</li>
        <li>
          <img src={imageUrl} alt="none" />
        </li>
      </ul>
    );
  }
}
