import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function displaySearch(response) {
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      image: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ce86e6981d691b922a146baa93501d42";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displaySearch);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form>
        <input type="search" placeholder="Enter city.." onChange={updateCity} />
        <input type="submit" value="Search" onClick={handleSubmit} />
      </form>

      <WeatherInfo weather={weather} />
    </div>
  );
}
