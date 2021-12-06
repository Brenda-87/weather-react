import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  let imageUrl = `http://openweathermap.org/img/wn/${props.weather.image}@2x.png`;

  return (
    <div className="Temperature">
      <div className="row g-0">
        <div className="col-3">{<img src={imageUrl} alt="none" />}</div>
        <div className="col-3 mt-3">
          <h1 className="d-inline">{Math.round(props.weather.temperature)}</h1>
          <p className="d-inline">°C |°F</p>
        </div>
      </div>
    </div>
  );
}
