import { createStore } from "redux";
import { reducer } from "./reducer";
import sunny from "../assets/sunny.jpg";
import cloudy from "../assets/cloudy.png";
import rainy from "../assets/rainy.jpg";

const state = {
  city: {
    coord: {
      lon: -0.1257,
      lat: 51.5085,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 288.75,
      feels_like: 288.48,
      temp_min: 287.42,
      temp_max: 290.03,
      pressure: 1029,
      humidity: 81,
    },
    visibility: 10000,
    wind: {
      speed: 4.63,
      deg: 50,
    },
    clouds: {
      all: 90,
    },
    dt: 1630573657,
    sys: {
      type: 2,
      id: 2006068,
      country: "GB",
      sunrise: 1630559700,
      sunset: 1630608346,
    },
    timezone: 3600,
    id: 2643743,
    name: "London",
    cod: 200,
  },
  cities: [
    "Fergana",
    "Namangan",
    "Andijan",
    "Tashkent",
    "Samarkand",
    "Bukhara",
    "Termiz",
    "Navoi",
    "Khiva",
    "Nukus",
  ],
  pictures: {
    sunny,
    rainy,
    cloudy,
  },
};

export const store = createStore(reducer, state);
