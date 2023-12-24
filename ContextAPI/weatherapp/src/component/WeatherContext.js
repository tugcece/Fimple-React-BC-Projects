import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCity, setSelectedCity] = useState("Istanbul"); //Default city is .....

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&appid=885e19655a788dda7d91823cea8ebc94`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Hava durumu verileri alınamadı:", error);
      }
    };

    fetchWeatherData();
  }, [selectedCity]);

  const changeCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, changeCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("hook failed");
  }
  return context;
};

export { WeatherProvider, useWeather };
