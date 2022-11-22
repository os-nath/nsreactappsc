import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./App.css";

import Climate from "./Climate.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>React AJAX</h1>
    <Climate city="Perth" />
    <Climate city="Itabira" />
    <Climate city="Antarctica" />
  </React.StrictMode>
);
