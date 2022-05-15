import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "./css/bootstrap.min.css";
import "./css/fontAwesome.css";
import "./css/templatemo-style.css";

import { setAuthorizationHeader } from "./api/client";
import storage from "./utils/storage";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App isInitiallyLogged={!!accessToken} />
    </Router>
  </React.StrictMode>
);
