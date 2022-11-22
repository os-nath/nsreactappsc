import React, { useState } from "react";
import axios from "axios";

function Climate(props) {
  const [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  if (temperature) {
    return (
      <p>
        The current temperature in {props.city} is {Math.round(temperature)}°C.
      </p>
    );
  } else {
    const apiKey = "d122489789ce9e01ba81bb0f4a64028b";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);

    <p>Loading temperature for {props.city}...</p>;
  }
}

export default Climate;
