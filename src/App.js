import React, { useState } from "react";
import "./App.css";

const api = {
  key: "3f97764e1a9c2faa3fee2a07bf31e98d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(weather);
        });
    }
  };
  // This is the code for date
  const dateBuilder = (d) => {
    // This is the array of Month's list
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    //This is the array of days of the week.
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} , ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp < 27
            ? weather.main.temp < 15
              ? "temp10"
              : "temp20 "
            : "temp30"
          : "welcomePage"
      }
    >
      <main>
        <div className="search-box">
          <div>
            <input
              className="search-bar"
              placeholder="Search Here..."
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="location-box">
                <div className="location">
                  {weather.name},{weather.sys.country}{" "}
                </div>
                <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.main.temp)}°c</div>
                <div className="row">
                  <div className="text-white col">
                    Long : {weather.coord.lon}
                  </div>
                  <div className="text-white col">
                    Min : {Math.round(weather.main.temp_min)}°c
                  </div>
                </div>
                <div className="row">
                  <div className="text-white col">
                    Lat : {weather.coord.lat}
                  </div>
                  <div className="text-white col">
                    Max : {Math.round(weather.main.temp_max)}°c
                  </div>
                </div>

                <div className="weather justify-left">{weather.weather[0].main}</div>
                <div className="text-white">
                  Wind : {weather.wind.speed} KMPH{" "}
                </div>
                <div className="text-white">
                  Humidity : {weather.main.humidity}%{" "}
                </div>
              </div>
            </div>
          ) : (
            <div
              className="text-center 
            "
            >
              <h3>Search for District or State...</h3>
              <h5>For better Experience watch in bigger screen</h5>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
