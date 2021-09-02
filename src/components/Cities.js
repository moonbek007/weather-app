import React from "react";
import { connect, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import axios, { API_KEY } from "../utils/axios";

function Cities({ cities }) {
  const dispatch = useDispatch();
  const handleClick = (city) => {
    axios
      .get(`weather?q=${city}&appid=${API_KEY}`)
      .then((resp) => {
        console.log(resp.data);
        dispatch({ type: "SET_CITY", payload: resp.data });
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="window__side-panel__cities">
      {cities.map((city, index) => {
        return (
          <div key={index} className="window__side-panel__cities__city">
            <Button onClick={(e) => handleClick(city)}>
              <p>{city}</p>
            </Button>
          </div>
        );
      })}
    </section>
  );
}

const mapStateToProps = (state) => ({
  cities: state.cities,
});

export default connect(mapStateToProps)(Cities);
