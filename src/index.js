import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.querySelector(".page__content"));
root.render(<App />);

reportWebVitals(root.render(<App />));
