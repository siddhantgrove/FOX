import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./store";
import { ThemeProvider } from "./ThemeContext";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<Provider store={store}>
    <BrowserRouter>
    <ThemeProvider>
      <App />
      
      </ThemeProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
