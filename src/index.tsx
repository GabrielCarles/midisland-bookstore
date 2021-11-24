import React from "react";
import ReactDOM from "react-dom";
import Application from "./Application";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "context/ThemeContext";
import FavoritesProvider from "context/FavoritesContext";
import UserProvider from "context/UserContext";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <ThemeProvider>
          <FavoritesProvider>
            <Application />
          </FavoritesProvider>
        </ThemeProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
