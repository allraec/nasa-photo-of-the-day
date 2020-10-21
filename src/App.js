import React, {useState, useEffect} from "react";
import axios from 'axios';
import Header from './components/Header.js';
import Body from './components/Body.js';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
