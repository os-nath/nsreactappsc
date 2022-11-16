import React, { useState } from "react";

function Weather(props) {
  let [temperature, setTemperature] = useState(props.temperature);

  function showFarehrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <p>
      Weather in {props.city} is {temperature}
      <a href="/" onClick={showCelsius}>
        °C
      </a>{" "}
      |{" "}
      <a href="/" onClick={showFarehrenheit}>
        °F
      </a>
    </p>
  );
}

export default Weather;
