import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./App.css";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Weather city="Perth" temperature={19} />
  </React.StrictMode>
);
