import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./App.css";
// import Cities from "./Cities.js";
import Climate from "./Climate.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Climate />
  </React.StrictMode>
);
