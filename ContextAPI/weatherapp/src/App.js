import React from "react";
import { WeatherProvider } from "./component/WeatherContext";
import HomePage from "./component/HomePage";
import './App.css';

const App = () => {
  return (
    <WeatherProvider>
      <HomePage />
    </WeatherProvider>
  );
};

export default App;
