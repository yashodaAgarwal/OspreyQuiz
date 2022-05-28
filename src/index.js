import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryProvider, ThemeProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
