import "./current-weather.css";
const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">tokyo</p>
          <p className="weather-dscrb">sunny</p>
        </div>
        <img src="icon/01d.png" alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature"> 34°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="paremeter-label">details</span>
          </div>
          <div className="parameter-row">
            <span className="paremeter-label">feels like</span>
            <span className="paremeter-value">18°C</span>
          </div>
          <div className="parameter-row">
            <span className="paremeter-label">wind</span>
            <span className="paremeter-value">30 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="paremeter-label">Humidity</span>
            <span className="paremeter-value">20 %</span>
          </div>
          <div className="parameter-row">
            <span className="paremeter-label">Pressure</span>
            <span className="paremeter-value">15 hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
