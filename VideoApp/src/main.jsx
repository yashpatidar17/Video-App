import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { VideoContextProvider } from "./Context/VideoContextProvider.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoContextProvider>
        <App />
      </VideoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
