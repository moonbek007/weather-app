import React from "react";
import { connect } from "react-redux";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import GrainIcon from "@material-ui/icons/Grain";
function MainWindow({ city, pictures }) {
  const { main, weather, name } = city;
  return (
    <div
      className="window__main-window"
      style={{
        backgroundImage: `url("${
          weather[0]?.main === "Clouds"
            ? pictures.cloudy
            : weather[0]?.main === "Clear"
            ? pictures.sunny
            : pictures.rainy
        }")`,
      }}
    >
      <p className="window__main-window__title">the.weather</p>
      <div className="window__main-window__info">
        <div>
          <p className="window__main-window__info__temperature">
            {Math.floor(main?.temp - 273)}
            <sup>o</sup>
          </p>
        </div>
        <div className="window__main-window__info__city-and-date">
          <p className="window__main-window__info__city-and-date__city-name">
            {name}
          </p>
          <p className="window__main-window__info__city-and-date__date">
            {new Date().toDateString()}
          </p>
        </div>
        <div className="window__main-window__info__weather">
          {weather[0]?.main === "Clouds" ? (
            <CloudQueueIcon style={{ fontSize: "3rem" }} />
          ) : weather[0]?.main === "Clear" ? (
            <WbSunnyIcon style={{ fontSize: "3rem" }} />
          ) : (
            <GrainIcon style={{ fontSize: "3rem" }} />
          )}
          <p>{weather[0]?.description}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  city: state.city,
  pictures: state.pictures,
});

export default connect(mapStateToProps)(MainWindow);
