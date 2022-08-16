import "./App.css";
// import component
import Search from "./components/search/search";
import CurrentWeather from "./components/currentWeather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";
import axios from "axios";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setforecastWeather] = useState(null);
  const handleOnSearchChagne = (searchData) => {
    console.log(`searchData=${searchData.value}`);

    const [lat, lon] = searchData.value.split(" ");
    console.log([lat, lon]);
    // const currentWeatherFetch = fetch(
    //   `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    // );
    // axios
    const currentWeatherFetch = () =>
      axios
        .get(
          `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
        )
        .then((response) => response.data)
        .catch((error) => console.log(error));
    console.log(currentWeatherFetch);
    //

    // const forecastWeatherFetch = fetch(
    //   `/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    // );
    const forecastWeatherFetch = () =>
      axios
        .get(
          `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
        )
        .then((response) => response.data)
        .catch((error) => console.log(error));
    Promise.all([currentWeatherFetch(), forecastWeatherFetch()]).then(
      async (response) => {
        const weatherResponse = await response[0];
        console.log(`weatherResponse= ${weatherResponse}`);
        const forecastWeatherResponse = await response[1];
        console.log(`= ${forecastWeatherResponse}`);
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setforecastWeather({
          city: searchData.label,
          ...forecastWeatherResponse,
        });

        // console.log(forecastWeather);
      }
    ); // promise
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChagne} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
