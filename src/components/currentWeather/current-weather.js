import "./current-weather.css";
const CurrentWeather = ({ data }) => {
  // console.log(data.weather[0].descripiton);
  console.log(data.main);

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-dscrb">{data.weather[0].description}</p>
        </div>
        <img
          src={`icon/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature"> {Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="paremeter-label">details</span>
          </div>
          <div className="parameter-row">
            <span className="paremeter-label">feels like</span>
            <span className="paremeter-value">
              {Math.round(data.main.feels_like)} °C
            </span>
          </div>
          <div className="parameter-row">
            <span className="paremeter-label">wind</span>
            <span className="paremeter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="paremeter-label">Humidity</span>
            <span className="paremeter-value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="paremeter-label">Pressure</span>
            <span className="paremeter-value">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
