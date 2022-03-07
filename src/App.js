import logo from './logo.svg';
import './App.css';
import weather from "./weather.json";
import {Weather} from "./components/Weather.jsx";
import React, {useState} from "react";


function App() {

  const [selected, setSelected] = useState("Monday");

  return (
    <div className="App">
      { weather.map((day, index) => (
        <Weather key={index} day={day.day} min={day.min} max={day.max} selected={selected} setSelected={setSelected} humidity={day.humidity} img={day.img} percipitation={day.percipitation} wind={day.wind}  />
      ))

      }
    </div>
  );
}

export default App;
