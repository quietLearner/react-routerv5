import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
