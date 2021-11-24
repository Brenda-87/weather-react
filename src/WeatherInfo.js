import React from "react";

export default function WeatherInfo(props) {
  let imageUrl = `http://openweathermap.org/img/wn/${props.weather.image}@2x.png`;

  if (props.weather.image === undefined) {
    return <p></p>;
  } else {
    const description = props.weather.description;

    return (
      <ul>
        <li>Temperature: {Math.round(props.weather.temperature)}°C</li>
        <li>{description.charAt(0).toUpperCase() + description.slice(1)}</li>
        <li>Humidity: {props.weather.humidity}%</li>
        <li>Wind: {props.weather.wind} km/h</li>
        <li>
          <img src={imageUrl} alt="none" />
        </li>
      </ul>
    );
  }
}
