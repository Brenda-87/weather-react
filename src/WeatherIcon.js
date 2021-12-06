import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  if (props.code === "01d" || props.code === "01n") {
    return (
      <ReactAnimatedWeather
        icon={"CLEAR_DAY"}
        color={"gray"}
        size={50}
        animate={true}
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon={"CLEAR_NIGHT"}
        color={"gray"}
        size={50}
        animate={true}
      />
    );
  }
}
