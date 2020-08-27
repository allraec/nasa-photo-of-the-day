import React from "react";
import "./App.css";
import Header from "./components/Header.js"
import NasaData from "./components/NasaData.js"
function App() {
  return (
    <div className="App">
      <Header/>
      <NasaData/>
    </div>
  );
}

export default App;
