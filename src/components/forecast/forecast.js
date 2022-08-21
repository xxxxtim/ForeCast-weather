import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";
const WEEK_DAYS = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];
const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );
  console.log(forecastDays);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowMultipleExpanded>
        {data.list.splice(0, 7).map((val, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icon/${val.weather[0].icon}.png`}
                  ></img>
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {val.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(val.main.temp_min)}°C
                    {Math.round(val.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-container">
                <div className="daily-details-item">
                  <label>Pressure</label>
                  <label>{val.main.pressure} hPa</label>
                </div>
                <div className="daily-details-item">
                  <label>Humidity</label>
                  <label>{val.main.humidity} %</label>
                </div>
                <div className="daily-details-item">
                  <label>Clouds</label>
                  <label>{val.clouds.all} %</label>
                </div>
                <div className="daily-details-item">
                  <label>Wind Speed : </label>
                  <label>{val.wind.speed} m/s</label>
                </div>
                <div className="daily-details-item">
                  <label>Sea Level : </label>
                  <label>{val.main.sea_level}m</label>
                </div>
                <div className="daily-details-item">
                  <label>Feels like : </label>
                  <label>{Math.round(val.main.feels_like)} °C </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
