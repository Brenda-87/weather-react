import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="row">
        {" "}
        <h1>{Math.round(props.weather.temperature)}°C</h1>
      </div>

      {/* <img src={imageUrl} alt="none" /> */}
    </div>
  );
}
