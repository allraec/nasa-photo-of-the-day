import React from "react";
import Header from './components/Header.js';
import Body from './components/Body.js';
import "./App.css";
import StarsEffect from "./components/StarsEffect.js";

function App() {
  return (
    <div className="App">
      <StarsEffect />
      <Header />
      <Body />
    </div>
  );
}

export default App;
