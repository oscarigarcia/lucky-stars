import React from "react";
import logo from "./logo.svg";
import "./App.css";

import StarMarch from "./StarMatch.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <StarMarch />
      </header>
    </div>
  );
}

export default App;
