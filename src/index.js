import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryProvider, ThemeProvider } from "./context"
import { BrowserRouter as Router } from "react-router-dom";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ThemeProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
