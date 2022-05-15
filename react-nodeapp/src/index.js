import React from "react";
import ReactDOM from "react-dom/client";
import { setAuthorizationHeader } from "./api/client";
import App from "./App";
import "./css/bootstrap.min.css";
import "./css/fontAwesome.css";
import "./css/templatemo-style.css";
import storage from "./utils/storage";

const accessToken = storage.get("auth");
setAuthorizationHeader(accessToken);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App isInitiallyLogged={!!accessToken} />
  </React.StrictMode>
);
