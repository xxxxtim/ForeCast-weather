import "./App.css";
// import component
import Search from "./components/search/search";
import CurrentWeather from "./components/currentWeather/current-weather";

function App() {
  const handleOnSearchChagne = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChagne} />
      <CurrentWeather />
    </div>
  );
}

export default App;
