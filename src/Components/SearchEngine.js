import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import Temperature from "./Temperature.js";
import FormattedDate from "./FormattedDate.js";
import WeatherForecast from "./WeatherForecast.js";

import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("Groningen");
  const [weather, setWeather] = useState({ ready: false });
  const apiKey = "ce86e6981d691b922a146baa93501d42";

  function displaySearch(response) {
    setWeather({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
    console.log(weather);
  }

  function handleSubmit(event) {
    event?.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displaySearch);
  }

  function updateCity(event) {
    setCity(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    );
  }

  function searchByLocation(position) {
    //hier gebleven
    console.log(position);
  }

  function handleCurrentLocation() {
    navigator.geolocation.getCurrentPosition(searchByLocation);
  }

  if (weather.ready === false) {
    handleSubmit();
    return <p>Loading...</p>;
  }

  return (
    <div className="SearchEngine">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>{city}</h1>
            <span id="updated-date">Last updated:</span>{" "}
            <FormattedDate date={weather.date} />
          </div>
          <div className="col mt-3">
            <form className="row g-2">
              <div className="col-7">
                <input
                  type="search"
                  className="form-control form-control-lg"
                  placeholder="Enter city.."
                  onChange={updateCity}
                />
              </div>
              <div className="col">
                <button
                  className="btn btn-outline-success btn-lg"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  onClick={handleCurrentLocation}
                >
                  <i className="fas fa-map-pin"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Temperature weather={weather} />
          </div>
          <div className="col">
            <WeatherInfo weather={weather} />
          </div>
        </div>
      </div>
      <WeatherForecast coordinates={weather.coordinates} />
    </div>
  );
}
