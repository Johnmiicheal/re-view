import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "./App";
import Login from "./signup";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" />
        <Route path="/signup" element={<Login />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)