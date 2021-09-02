import React from "react";
import { connect } from "react-redux";

function WeatherDetails({ city }) {
  const { clouds, main, wind } = city;
  return (
    <section className="window__side-panel__weather-details">
      <p className="window__side-panel__weather-details__title">
        Weather Details
      </p>
      <div className="window__side-panel__weather-details__single-detail">
        <p>Cloudy</p>
        <p>{clouds?.all ?? 0}%</p>
      </div>
      <div className="window__side-panel__weather-details__single-detail">
        <p>Humidity</p>
        <p>{main?.humidity ?? 0}%</p>
      </div>
      <div className="window__side-panel__weather-details__single-detail">
        <p>Wind</p>
        <p>{wind?.speed ?? 0} km/h</p>
      </div>
      <div className="window__side-panel__weather-details__single-detail">
        <p>Pressure</p>
        <p>{main?.pressure ?? 0} Pa</p>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  city: state.city,
});

export default connect(mapStateToProps)(WeatherDetails);
