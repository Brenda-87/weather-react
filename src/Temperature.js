import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="row">
        <div className="col-2 mb-1 pt-4 weather-icon">
          <WeatherIcon code={props.weather.icon} size={41} />
        </div>
        <div className="col-7 mt-3">
          <WeatherTemperature celsius={props.weather.temperature} />
        </div>
      </div>
    </div>
  );
}
