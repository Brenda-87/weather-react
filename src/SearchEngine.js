import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Temperature from "./Temperature";

import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("Groningen");
  const [weather, setWeather] = useState({});

  function displaySearch(response) {
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      image: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ce86e6981d691b922a146baa93501d42";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displaySearch);
  }

  function updateCity(event) {
    setCity(
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)
    );
  }

  return (
    <div className="SearchEngine">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>{city}</h2>
          </div>
          <div className="col mt-3">
            <form className="row g-1">
              <div className="col-7">
                <input
                  type="search"
                  className="form-control form-control-sm"
                  placeholder="Enter city.."
                  onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <button
                  className="btn btn-outline-success btn-sm"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Search
                </button>
              </div>
              <div className="col">
                <button type="button" class="btn btn-success btn-sm">
                  <i class="fas fa-map-pin"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {weather.temperature === undefined ? (
        <p>loading...</p>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col">
              <Temperature weather={weather} />
            </div>
            <WeatherInfo weather={weather} />
          </div>
        </div>
      )}
    </div>
  );
}
