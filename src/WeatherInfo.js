import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  let imageUrl = `http://openweathermap.org/img/wn/${props.weather.image}@2x.png`;

  if (props.weather.image === undefined) {
    return <p></p>;
  } else {
    const description = props.weather.description;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            {" "}
            <img src={imageUrl} alt="none" />
          </div>
          <div className="weather-details col-7 pt-3">
            <ul>
              <li>
                {description.charAt(0).toUpperCase() + description.slice(1)}
              </li>
              <li>Humidity: {props.weather.humidity}%</li>
              <li>Wind: {Math.round(props.weather.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
