import React, { useState } from "react";

function SearchEngine() {
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Procurando por ${city}`);
  }

  function updateCity(event) {
    console.log(event.target.value)
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchEngine;
