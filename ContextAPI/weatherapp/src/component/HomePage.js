import React, { useState } from "react";
import { useWeather } from "./WeatherContext";

const HomePage = () => {
  const { weatherData, changeCity } = useWeather();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDay, setSelectedDay] = useState(0);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const cityName = weatherData.city.name;
  const cities = ["Istanbul", "Ankara", "Izmir", "Antalya", "Bursa", "Aydin"]; // Add city if you want....

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    changeCity(selectedCity);
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };


  const weeklyWeather = weatherData.list.slice(0, 7);

  const dayOptions = weeklyWeather.map((day, index) => (
    <option key={index} value={index}>
      {new Date(day.dt * 1000).toLocaleDateString("tr-TR", { weekday: "long" })}
    </option>
  ));

  const selectedDayWeather = weeklyWeather[selectedDay];

  return (
    <div>
      <h1>{cityName} Hava Durumu</h1>
      <div>
        <form onSubmit={handleCitySubmit}>
            <select value={selectedCity} onChange={handleCityChange}>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          <button type="submit">Değiştir</button>
        </form>
      </div>

      <div>
        <div className="weatherContainer"
        >
          {weeklyWeather.map((day, index) => (
            <div key={index} style={{ margin: "10px", textAlign: "center" }}>
              <h4>
                {new Date(day.dt * 1000).toLocaleDateString("tr-TR", {
                  weekday: "long",
                })}
              </h4>
              <img
                src={getWeatherIcon(day.weather[0].icon)}
                alt="Weather Icon"
              />
              <p>{day.main.temp_max}°C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
